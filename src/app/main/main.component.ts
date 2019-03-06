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
  public weights = [0.3, 0.4];
  public variants = [[{value: 2}, {value: 4}], [{value: 3}, {value: 5}], [{value: 4}, {value: 1}]];
  public result = -1;
  public showResult = false;
  public dialogText = '';
  public a = 0.1;

  public lab3val = 0;

  public predictions = [];
  // {values: 46}, {values: 56}
  private lab3Values = [
    {values: 54}, {values: 43}, {values: 57}, {values: 56},
    {values: 67}, {values: 62}, {values: 50}, {values: 56}, {values: 47}, {values: 56},
    {values: 54}, {values: 42}, {values: 64}, {values: 60}, {values: 70}, {values: 66},
    {values: 57}, {values: 55}, {values: 52}, {values: 62}, {values: 70}, {values: 72}
  ];

  private gausKs = [
    [1, 10, 14, 150],
    [1, 15, 13, 13 * 15],
    [1, 13, 19, 13 * 19],
    [1, 19, 14, 19 * 14],
    [1, 14, 18, 14 * 18],
    [1, 18, 17, 18 * 17]
  ];
  private gausYs = [13, 19, 14, 18, 17, 11];

  constructor(private method: MethodService, private squareService: SquareMethodService, private gausService: GausServiceService) {
    this.gausService.normalize(this.gausYs, this.gausKs);
  }

  ngOnInit() {
    this.squareService.initA(this.a);
    this.predictions.push(new Period(56, 46));

    this.lab3Values.forEach((value, index) => {
      this.addPrediction(value.values, index);
    });
  }

  calcDecision() {
    this.showResult = true;
    this.method.initWeights(this.weights);
    this.result = this.method.calculateDecision(this.variants.map((arr) => arr.map(val => val.value)));
  }

  predictLab3() {
    this.addPrediction(this.lab3val, this.predictions.length - 1);
  }

  addPrediction(value, index) {
    this.predictions.push(this.squareService.calcNextPeriod(value, this.predictions[index]));
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
