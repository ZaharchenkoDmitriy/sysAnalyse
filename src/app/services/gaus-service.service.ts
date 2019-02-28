import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GausServiceService {

  constructor() { }

  calc(ys: number[], ks: number[]) {
    const stepsCount = ys.length;
    let subYs = ys;
    let subKs = ks;
    for (let i = 0; i < stepsCount; i++) {
      subKs.forEach()
      subYs = this.step()
    }
  }

  step(arr, k) {
    const res = [];
    arr.forEach((val) => {
      res.push(val * k);
    });

    return res;
  }
}
