import {Component, OnInit} from '@angular/core';
import {MethodService} from '../services/method.service';
import {Period} from '../models/period';
import {SquareMethodService} from '../services/square-method.service';
import {forEach} from '@angular/router/src/utils/collection';
import {GausServiceService} from '../services/gaus-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public weights = [{value: 0.3}, {value: 0.4}];
  public variants = [[{value: 2}, {value: 4}], [{value: 3}, {value: 5}], [{value: 4}, {value: 1}]];
  public result = -1;
  public showResult = false;
  public dialogText = '';
  public a = 0.1;

  public lab3val = 0;

  public predictions = [];
  // {values: 46}, {values: 56}
  public firstPrediction = {v: 32.23, y: 32.23};
  private lab3Values = [
    {values: 32.55}, {values: 32.6}, {values: 32.99}, {values: 33.03},
    {values: 33.08}, {values: 33.11}, {values: 33.12}, {values: 33.15}, {values: 33.16}, {values: 33.04},
    {values: 33.02}, {values: 33}, {values: 33}
  ];

  public kgPlus = 0;
  public gResult = 0;
  public kg = [
    {v: 3484},
    {v: 3606},
    {v: 3867},
    {v: 3911},
    {v: 3964},
    {v: 4411},
    {v: 4604},
    {v: 4149},
    {v: 4299}
    ];

  constructor(private method: MethodService, private squareService: SquareMethodService, private gausService: GausServiceService) {
  }

  ngOnInit() {
    this.squareService.initA(this.a);

    this.predictions.push(new Period(this.firstPrediction.v, this.firstPrediction.y));
    this.lab3Values.forEach((value, index) => {
      this.addPrediction(value.values, index);
    });
    this.recalculateGauss();
  }

  calcDecision() {
    this.showResult = true;
    this.method.initWeights(this.weights);
    this.result = this.method.calculateDecision(this.variants.map((arr) => arr.map(val => val.value)));
  }

  predictLab3() {
    this.addPrediction(this.lab3val, this.predictions.length - 1);
  }
  predictKG() {
    this.kg.push({v: this.kgPlus});
    this.recalculateGauss();
  }

  addPrediction(value, index) {
    this.predictions.push(this.squareService.calcNextPeriod(value, this.predictions[index]));
  }

  removeG(index) {
    if (this.kg.length === 6) {
      this.alert('Sorry you cant delete this item');
      return;
    }

    this.kg = this.kg.filter((v, i) => i !== index);
    this.recalculateGauss();
  }

  recalculateGauss() {
    const r = [];
    for (let i = 1; i < this.kg.length; i++) {
      r.push({y: this.kg[i + 1] ? this.kg[i + 1].v : undefined, a: this.kg[i - 1].v, b: this.kg[i].v});
    }
    this.gResult = Math.round(this.gausService.solve(r));
  }
  recalculate(index) {
    this.squareService.initA(this.a);
    for (let i = index; i < this.predictions.length; i++) {
      this.predictions[i] = this.squareService.calcNextPeriod(this.predictions[i].value, this.predictions[i - 1]);
    }
  }

  removePrediction(index) {
    if (this.predictions.length === 1) {
      this.alert('Sorry you cant delete all items');
      return;
    }

    this.predictions = this.predictions.filter((v, i) => i !== index);
    this.recalculate(index);
  }

  alert(text) {
    this.dialogText = text;
    const dialog = document.querySelector('dialog');
    const showDialogButton = document.querySelector('#show-dialog');
    dialog.showModal();
  }

  closeDialog() {
    const dialog = document.querySelector('dialog');
    dialog.close();
  }
}
