import { Injectable } from '@angular/core';
import {Period} from '../models/period';

@Injectable({
  providedIn: 'root'
})
export class SquareMethodService {
  private a;

  constructor() { }

  initA(a) {
    this.a = a;
  }

  calcNextPeriod(value, period: Period): Period {
    const nextPeriod = new Period(value, +((this.a * period.value) + (1 - this.a) * period.dy).toFixed(2));
    nextPeriod.formula = `${this.a} * ${period.value} + ${1-this.a} * ${period.dy}`;
    return nextPeriod;
  }
}
