import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MethodService {
  private weights: any[];

  constructor() { }

  initWeights(weights: any[]): void {
    this.weights = weights;
  }

  calculateDecision(arr: number[][]): any {
    const results = [];

    arr.forEach((variant) => {
      let variantResult = 0;
      variant.forEach((val, index) => {
        variantResult += val * this.weights[index].value;
      });
      results.push(variantResult);
    });
    return results.indexOf(Math.max(...results));
  }
}
