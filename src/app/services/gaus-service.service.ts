import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GausServiceService {

  private res: any;

  constructor() { }

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

  solve(ys: number[], ks: number[][]) {
    this.normalize(ys, ks);
  }
}
