(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script src=\"/node_modules/material-design-lite/material.js\"></script>\r\n<link rel=\"stylesheet\" href=\"https://code.getmdl.io/1.3.0/material.indigo-pink.min.css\">\r\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/icon?family=Material+Icons\">\r\n<app-main></app-main>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'lab1';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: sans-serif;\r\n}\r\n\r\nh4 {\r\n  margin-top: 1rem;\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\nli {\r\n  list-style-type: none;\r\n}\r\n\r\n.part {\r\n  margin-bottom: 3rem;\r\n  margin-left: 50vw;\r\n  -webkit-transform: translateX(-50%);\r\n          transform: translateX(-50%);\r\n  border-bottom: 2px solid rgba(218, 218, 218, 0.55);\r\n  padding-bottom: 2rem;\r\n}\r\n\r\n#lab2 {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  width: 800px;\r\n}\r\n\r\n#lab1 {\r\n  width: 400px;\r\n  text-align: center;\r\n  margin-right: 20rem;\r\n  margin-left: 5rem;\r\n}\r\n\r\n#lab1 button {\r\n  margin-top: 2rem;\r\n}\r\n\r\n#lab1 > ul {\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n\r\n.li {\r\n  list-style-type: none;\r\n}\r\n\r\n#lab3 {\r\n}\r\n\r\n#lab3 #predictions li{\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG1DQUEyQjtVQUEzQiwyQkFBMkI7RUFDM0Isa0RBQWtEO0VBQ2xELG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtBQUMvQjs7QUFDQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtBQUNBOztBQUNBOztBQUVBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxufVxyXG5cclxuaDQge1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG59XHJcbmxpIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuXHJcbi5wYXJ0IHtcclxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiA1MHZ3O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgyMTgsIDIxOCwgMjE4LCAwLjU1KTtcclxuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcclxufVxyXG5cclxuI2xhYjIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHdpZHRoOiA4MDBweDtcclxufVxyXG5cclxuI2xhYjEge1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHJlbTtcclxuICBtYXJnaW4tbGVmdDogNXJlbTtcclxufVxyXG5cclxuI2xhYjEgYnV0dG9uIHtcclxuICBtYXJnaW4tdG9wOiAycmVtO1xyXG59XHJcblxyXG4jbGFiMSA+IHVsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcbi5saSB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcblxyXG4jbGFiMyB7XHJcbn1cclxuI2xhYjMgI3ByZWRpY3Rpb25zIGxpe1xyXG5cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"part\">\r\n  <div id=\"lab1\">\r\n    <h2>Lab1</h2>\r\n    <h4>Enter weights</h4>\r\n    <ul id=\"weights\">\r\n      <li *ngFor=\"let weight of weights\">\r\n        <input required=\"required\"\r\n               type=\"number\"\r\n               [(ngModel)]=\"weight\" class=\"mdl-textfield__input\">\r\n      </li>\r\n    </ul>\r\n\r\n    <h4>Enter values</h4>\r\n    <ul id=\"variants\">\r\n      <ul style=\"margin: 0 5px\" class=\"values\" *ngFor=\"let values of variants\">\r\n        <li *ngFor=\"let value of values\">\r\n          <input class=\"mdl-textfield__input\" type=\"text\" [(ngModel)]=\"value.value\" id=\"{{value.value}}\"\r\n                 pattern=\"-?[0-9]*(\\.[0-9]+)?\">\r\n        </li>\r\n      </ul>\r\n    </ul>\r\n\r\n    <button class=\"mdl-button mdl-js-button mdl-button--raised mdl-button--colored\" (click)=\"calcDecision()\">Predict\r\n    </button>\r\n\r\n    <div *ngIf=\"showResult\" id=\"result\">\r\n      <h4>Best choice is:</h4>\r\n      <p>{{result + 1}}</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div id=\"lab2\" class=\"part\">\r\n  <div id=\"new_value\">\r\n    <label for=\"val\">Enter value</label>\r\n    <input id=\"val\" style=\"width: 94px\" class=\"mdl-textfield__input\" type=\"number\" [(ngModel)]=\"lab3val\">\r\n    <button style=\"margin-top: 1rem\" class=\"mdl-button mdl-js-button mdl-button--raised mdl-button--colored\"\r\n            (click)=\"predictLab3($event)\">\r\n      Predict\r\n    </button>\r\n  </div>\r\n  <div>\r\n    <label for=\"val\">Enter &#593; value</label>\r\n    <input style=\"width: 94px\" type=\"number\" [(ngModel)]=\"a\" (change)=\"recalculate(1)\" class=\"mdl-textfield__input\">\r\n  </div>\r\n\r\n  <table class=\"mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp\">\r\n    <thead>\r\n    <tr>\r\n      <th>Index</th>\r\n      <th>Value</th>\r\n      <th style=\"text-align: center\">Formula</th>\r\n      <th>Prediction</th>\r\n      <th></th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let prediction of predictions; let i = index;\">\r\n      <td>{{i + 2}}</td>\r\n      <td class=\"mdl-data-table__cell--non-numeric\">\r\n        <input style=\"width: 50px\" [(ngModel)]=\"prediction.value\" (change)=\"recalculate(i)\" class=\"mdl-textfield__input\" type=\"number\"\r\n               id=\"sample1\">\r\n      </td>\r\n      <td class=\"mdl-data-table__cell--non-numeric\">{{prediction.formula}}</td>\r\n      <td class=\"mdl-data-table__cell--non-numeric\">{{prediction.dy}}</td>\r\n      <td style=\"color: red; cursor: pointer\" (click)=\"removePrediction(i)\">&#10008;</td>\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n\r\n\r\n<dialog class=\"mdl-dialog\" style=\"margin:auto\">\r\n  <h4 class=\"mdl-dialog__title\">Error</h4>\r\n  <div class=\"mdl-dialog__content\">\r\n    <p>\r\n      {{dialogText}}\r\n    </p>\r\n  </div>\r\n  <div class=\"mdl-dialog__actions\">\r\n    <button type=\"button\" (click)=\"closeDialog()\" class=\"mdl-button\">OK</button>\r\n  </div>\r\n</dialog>\r\n"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_method_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/method.service */ "./src/app/services/method.service.ts");
/* harmony import */ var _models_period__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/period */ "./src/app/models/period.ts");
/* harmony import */ var _services_square_method_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/square-method.service */ "./src/app/services/square-method.service.ts");
/* harmony import */ var _services_gaus_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/gaus-service.service */ "./src/app/services/gaus-service.service.ts");






var MainComponent = /** @class */ (function () {
    function MainComponent(method, squareService, gausService) {
        this.method = method;
        this.squareService = squareService;
        this.gausService = gausService;
        this.weights = [0.3, 0.4];
        this.variants = [[{ value: 2 }, { value: 4 }], [{ value: 3 }, { value: 5 }], [{ value: 4 }, { value: 1 }]];
        this.result = -1;
        this.showResult = false;
        this.dialogText = '';
        this.a = 0.1;
        this.lab3val = 0;
        this.predictions = [];
        // {values: 46}, {values: 56}
        this.lab3Values = [
            { values: 54 }, { values: 43 }, { values: 57 }, { values: 56 },
            { values: 67 }, { values: 62 }, { values: 50 }, { values: 56 }, { values: 47 }, { values: 56 },
            { values: 54 }, { values: 42 }, { values: 64 }, { values: 60 }, { values: 70 }, { values: 66 },
            { values: 57 }, { values: 55 }, { values: 52 }, { values: 62 }, { values: 70 }, { values: 72 }
        ];
        this.gausKs = [
            [1, 10, 14, 150],
            [1, 15, 13, 13 * 15],
            [1, 13, 19, 13 * 19],
            [1, 19, 14, 19 * 14],
            [1, 14, 18, 14 * 18],
            [1, 18, 17, 18 * 17]
        ];
        this.gausYs = [13, 19, 14, 18, 17, 11];
        this.gausService.normalize(this.gausYs, this.gausKs);
    }
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.squareService.initA(this.a);
        this.predictions.push(new _models_period__WEBPACK_IMPORTED_MODULE_3__["Period"](56, 46));
        this.lab3Values.forEach(function (value, index) {
            _this.addPrediction(value.values, index);
        });
    };
    MainComponent.prototype.calcDecision = function () {
        this.showResult = true;
        this.method.initWeights(this.weights);
        this.result = this.method.calculateDecision(this.variants.map(function (arr) { return arr.map(function (val) { return val.value; }); }));
    };
    MainComponent.prototype.predictLab3 = function () {
        this.addPrediction(this.lab3val, this.predictions.length - 1);
    };
    MainComponent.prototype.addPrediction = function (value, index) {
        this.predictions.push(this.squareService.calcNextPeriod(value, this.predictions[index]));
    };
    MainComponent.prototype.recalculate = function (index) {
        this.squareService.initA(this.a);
        for (var i = index; i < this.predictions.length; i++) {
            this.predictions[i] = this.squareService.calcNextPeriod(this.predictions[i].value, this.predictions[i - 1]);
        }
    };
    MainComponent.prototype.removePrediction = function (index) {
        if (this.predictions.length === 1) {
            this.alert('Sorry you cant delete all items');
            return;
        }
        this.predictions = this.predictions.filter(function (v, i) { return i !== index; });
        this.recalculate(index);
    };
    MainComponent.prototype.alert = function (text) {
        this.dialogText = text;
        var dialog = document.querySelector('dialog');
        var showDialogButton = document.querySelector('#show-dialog');
        dialog.showModal();
    };
    MainComponent.prototype.closeDialog = function () {
        var dialog = document.querySelector('dialog');
        dialog.close();
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_method_service__WEBPACK_IMPORTED_MODULE_2__["MethodService"], _services_square_method_service__WEBPACK_IMPORTED_MODULE_4__["SquareMethodService"], _services_gaus_service_service__WEBPACK_IMPORTED_MODULE_5__["GausServiceService"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/models/period.ts":
/*!**********************************!*\
  !*** ./src/app/models/period.ts ***!
  \**********************************/
/*! exports provided: Period */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Period", function() { return Period; });
var Period = /** @class */ (function () {
    function Period(value, dy) {
        this.value = value;
        this.dy = dy;
    }
    return Period;
}());



/***/ }),

/***/ "./src/app/services/gaus-service.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/gaus-service.service.ts ***!
  \**************************************************/
/*! exports provided: GausServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GausServiceService", function() { return GausServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GausServiceService = /** @class */ (function () {
    function GausServiceService() {
    }
    GausServiceService.prototype.normalize = function (ys, ks) {
        var _this = this;
        var stepsCount = ys.length;
        var subYs = ys;
        var subKs = ks;
        var r = [];
        var _loop_1 = function (j) {
            var subRes = [];
            subYs.forEach(function (y, index) {
                subRes.push({
                    y: _this.step([y], subKs[index][j])[0],
                    ks: _this.step(subKs[index], subKs[index][j])
                });
            });
            var rObj = { y: 0, k: [] };
            rObj.y = 0;
            subRes.forEach(function (a) { return rObj.y += a.y; });
            var _loop_2 = function (k) {
                var s = 0;
                subRes.forEach(function (a) { return s += a.ks[k]; });
                rObj.k.push(s);
            };
            for (var k = 0; k < subRes[0].ks.length; k++) {
                _loop_2(k);
            }
            r.push(rObj);
        };
        for (var j = 0; j < ks[0].length; j++) {
            _loop_1(j);
        }
        this.res = r;
    };
    GausServiceService.prototype.step = function (arr, k) {
        var res = [];
        arr.forEach(function (val) {
            res.push(val * k);
        });
        return res;
    };
    GausServiceService.prototype.solve = function (ys, ks) {
        this.normalize(ys, ks);
    };
    GausServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GausServiceService);
    return GausServiceService;
}());



/***/ }),

/***/ "./src/app/services/method.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/method.service.ts ***!
  \********************************************/
/*! exports provided: MethodService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MethodService", function() { return MethodService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MethodService = /** @class */ (function () {
    function MethodService() {
    }
    MethodService.prototype.initWeights = function (weights) {
        this.weights = weights;
    };
    MethodService.prototype.calculateDecision = function (arr) {
        var _this = this;
        var results = [];
        arr.forEach(function (variant) {
            var variantResult = 0;
            variant.forEach(function (val, index) {
                variantResult += val * _this.weights[index];
            });
            results.push(variantResult);
        });
        console.log(results);
        return results.indexOf(Math.max.apply(Math, results));
    };
    MethodService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MethodService);
    return MethodService;
}());



/***/ }),

/***/ "./src/app/services/square-method.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/square-method.service.ts ***!
  \***************************************************/
/*! exports provided: SquareMethodService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SquareMethodService", function() { return SquareMethodService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_period__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/period */ "./src/app/models/period.ts");



var SquareMethodService = /** @class */ (function () {
    function SquareMethodService() {
    }
    SquareMethodService.prototype.initA = function (a) {
        this.a = a;
    };
    SquareMethodService.prototype.calcNextPeriod = function (value, period) {
        var nextPeriod = new _models_period__WEBPACK_IMPORTED_MODULE_2__["Period"](value, +((this.a * period.value) + (1 - this.a) * period.dy).toFixed(2));
        nextPeriod.formula = this.a + " * " + period.value + " + " + (1 - this.a) + " * " + period.dy;
        return nextPeriod;
    };
    SquareMethodService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SquareMethodService);
    return SquareMethodService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\prjcts\sysAnalyse\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map