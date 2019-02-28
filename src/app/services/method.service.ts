import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MethodService {
  private weights: number[];

  constructor() { }

  initWeights(weights: number[]): void {
    this.weights = weights;
  }

  calculateDecision(arr: number[][]): any {
    const results = [];

    arr.forEach((variant) => {
      let variantResult = 0;
      variant.forEach((val, index) => {
        variantResult += val * this.weights[index];
      });
      results.push(variantResult);
    });
    console.log(results);
    return results.indexOf(Math.max(...results));
  }
}
