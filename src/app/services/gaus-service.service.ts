import {Injectable} from '@angular/core';
import {log} from 'util';

@Injectable({
  providedIn: 'root'
})
export class GausServiceService {

  private res: any;

  constructor() {
  }

  func(a, b) {
    return [1, a, b, a * b];
  }

  solve(vals) {
    const last = vals.pop();
    const ys = vals.map((el) => el.y);
    const ks = vals.map( el => this.func(el.a, el.b));

    if (ks[0].length <= ys.length) {
      this.normalize(ys, ks);
    } else {
      this.res = [];
      for (let i = 0; i < ys.length; i++) {
        this.res.push({y: ys[i], k: ks[i]});
      }
    }
    const rs = this.getRatios(this.res.map(e => e.k), this.res.map(e => e.y));
    return rs[0] + rs[1] * last.a + rs[2] * last.b + rs[3] * last.a * last.b;
  }

  normalize(ys: number[], ks: number[][]) {
    const stepsCount = ys.length;
    let subYs = ys;
    let subKs = ks;
    const r = [];

    for (let j = 0; j < ks[0].length; j++) {
      const subRes = [];
      subYs.forEach((y, index) => {
        subRes.push({
          y: this.step([y], subKs[index][j])[0],
          ks: this.step(subKs[index], subKs[index][j])
        });
      });
      const rObj = {y: 0, k: []};
      rObj.y = 0;
      subRes.forEach((a) => rObj.y += a.y);

      for (let k = 0; k < subRes[0].ks.length; k++) {
        let s = 0;
        subRes.forEach((a) => s += a.ks[k]);
        rObj.k.push(s);
      }
      r.push(rObj);
    }

    this.res = r;
  }

  step(arr, k) {
    const res = [];
    arr.forEach((val) => {
      res.push(val * k);
    });

    return res;
  }

  getRatios(aArr, bArr) {
    const matrix = this.matrixToStepType(aArr, bArr);
    const res = [];

    for (let i = matrix.ys.length - 1; i >= 0; i-- ) {
      let temp = 0;
      for (let j = matrix.ks[i].length - 1; j > i; j--) {
        temp += matrix.ks[i][j] * res[matrix.ks[i].length - 1 - j];
      }
      res.push((matrix.ys[i] - temp) / matrix.ks[i][i]);
    }
    return res.reverse();
  }

  matrixToStepType(aArr, bArr) {
    let a = 0;
    let b = 0;
    let temp = 0;

    for (let i = 0; i < bArr.length; i++) {
      bArr[i] = bArr[i] / Math.pow(2, i * 6 + 1);
      for (let j = 0; j < aArr[i].length; j++) {
        aArr[i][j] = aArr[i][j] / Math.pow(2, i * 6 + 1);
      }
    }

    for (let i = 0; i < aArr[0].length - 1; i++) {
      for (let j = i + 1; j < aArr.length; j++) {
        if (aArr[j][i] !== 0) {
          if (aArr[j][i] % aArr[i][i] === 0) {
            temp = aArr[j][i] / aArr[i][i];
            aArr[i].forEach((el, index) => {
              aArr[j][index] = aArr[j][index] - temp * el;
            });
            bArr[j] = bArr[j] - bArr[i] * temp;
          } else {
            a = aArr[j][i];
            b = aArr[i][i];
            aArr[i].forEach((el, index) => {
              aArr[j][index] = aArr[j][index] * b - a * el;
            });
            bArr[j] = bArr[j] * b - a * bArr[i];
          }
        }
      }
    }
    return {
      ks: aArr,
      ys: bArr
    };
  }
}
