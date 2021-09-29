(self["webpackChunkgolf_score_card_app_ionic"] = self["webpackChunkgolf_score_card_app_ionic"] || []).push([["src_app_continue-game_continue-game_module_ts"],{

/***/ 1690:
/*!***************************************************************!*\
  !*** ./src/app/continue-game/continue-game-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContinueGamePageRoutingModule": () => (/* binding */ ContinueGamePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _continue_game_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./continue-game.page */ 9093);




const routes = [
    {
        path: '',
        component: _continue_game_page__WEBPACK_IMPORTED_MODULE_0__.ContinueGamePage
    }
];
let ContinueGamePageRoutingModule = class ContinueGamePageRoutingModule {
};
ContinueGamePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ContinueGamePageRoutingModule);



/***/ }),

/***/ 2519:
/*!*******************************************************!*\
  !*** ./src/app/continue-game/continue-game.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContinueGamePageModule": () => (/* binding */ ContinueGamePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _continue_game_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./continue-game-routing.module */ 1690);
/* harmony import */ var _continue_game_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./continue-game.page */ 9093);
/* harmony import */ var _custom_pipes_random_middle_name_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../custom-pipes/random-middle-name.pipe */ 1743);








let ContinueGamePageModule = class ContinueGamePageModule {
};
ContinueGamePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _continue_game_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContinueGamePageRoutingModule
        ],
        declarations: [_continue_game_page__WEBPACK_IMPORTED_MODULE_1__.ContinueGamePage, _custom_pipes_random_middle_name_pipe__WEBPACK_IMPORTED_MODULE_2__.RandomMiddleNamePipe]
    })
], ContinueGamePageModule);



/***/ }),

/***/ 9093:
/*!*****************************************************!*\
  !*** ./src/app/continue-game/continue-game.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContinueGamePage": () => (/* binding */ ContinueGamePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_continue_game_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./continue-game.page.html */ 4373);
/* harmony import */ var _continue_game_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./continue-game.page.scss */ 372);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_firestore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/firestore.service */ 1343);





class PlayerTotals {
    constructor(name, strokesList) {
        this.name = name;
        this.strokesList = strokesList;
        this.totalStrokes = 0;
    }
    calcTotalStrokes() {
        this.totalStrokes = this.strokesList.reduce((acc, cur) => {
            return acc + cur;
        }, 0);
    }
}
let ContinueGamePage = class ContinueGamePage {
    constructor(dbService) {
        this.dbService = dbService;
        this.totalsCard = [];
    }
    ngOnInit() {
        this.grabThatData();
    }
    grabThatData() {
        this.holeCardList = JSON.parse(sessionStorage.getItem('holeCardList'));
        const playerTotalsArrayDumb = JSON.parse(sessionStorage.getItem('totalsCard'));
        playerTotalsArrayDumb.forEach((thing) => {
            const newThing = new PlayerTotals(thing.name, [...thing.strokesList]);
            this.totalsCard.push(newThing); // now it's smart again and has calculation methods
        });
        this.totalsCard.forEach((whocaresaboutgolf) => {
            whocaresaboutgolf.calcTotalStrokes();
        });
        sessionStorage.removeItem('holeCardList');
        sessionStorage.removeItem('totalsCard');
    }
    calcTotals(playerName, hole, value) {
        this.totalsCard.forEach((player) => {
            if (player.name === playerName) {
                player.strokesList[hole] = value;
                player.calcTotalStrokes();
            }
        });
    }
    saveData() {
        const normalObject = JSON.parse(JSON.stringify(this.totalsCard));
        const DTO = { holeCardList: this.holeCardList, totalsCard: normalObject };
        this.dbService.saveData(DTO);
    }
};
ContinueGamePage.ctorParameters = () => [
    { type: _services_firestore_service__WEBPACK_IMPORTED_MODULE_2__.FireStoreService }
];
ContinueGamePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-continue-game',
        template: _raw_loader_continue_game_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_continue_game_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ContinueGamePage);



/***/ }),

/***/ 372:
/*!*******************************************************!*\
  !*** ./src/app/continue-game/continue-game.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250aW51ZS1nYW1lLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 4373:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/continue-game/continue-game.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      GOLF\n    </ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"primary\" (click)=\"saveData()\">Save Current ScoreCard Data</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n  <ion-card *ngFor=\"let card of holeCardList; let i = index\">\n    <ion-card-header>\n      <ion-card-title>{{card.title}}</ion-card-title>\n      <ion-card-subtitle>{{card.subtitle}}</ion-card-subtitle>\n      <ion-card-subtitle>{{card.subtitle2}}</ion-card-subtitle>\n    </ion-card-header>\n  \n    <ion-card-content>\n      <ion-list>\n        <ion-item *ngFor=\"let score of card.scoreList; let j = index\">\n          <ion-input type=\"text\" value=\"{{score.playerName}}\" disabled></ion-input>\n          <ion-label>Strokes:</ion-label>\n          <ion-input color=\"primary\" type=\"number\" value=\"{{score.strokes}}\" min=\"0\"\n            [(ngModel)]=\"holeCardList[i].scoreList[j].strokes\"\n            (ngModelChange)=\"calcTotals(holeCardList[i].scoreList[j].playerName, i, $event)\"\n            >\n          </ion-input>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n  <!-- TOTALS -->\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>TOTALS</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list>\n        <ion-item *ngFor=\"let card of totalsCard\">\n          <ion-label>{{card.name | randomMiddleName}}</ion-label>\n          Total Strokes: {{card.totalStrokes}}\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n<!-- <p>totalsCard</p>\n<pre>{{totalsCard | json}}</pre>  \n\n<p>holeCardList</p>\n<pre>{{holeCardList | json}}</pre> -->\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_continue-game_continue-game_module_ts.js.map