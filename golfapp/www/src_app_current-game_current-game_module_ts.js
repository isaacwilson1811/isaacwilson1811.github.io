(self["webpackChunkgolf_score_card_app_ionic"] = self["webpackChunkgolf_score_card_app_ionic"] || []).push([["src_app_current-game_current-game_module_ts"],{

/***/ 6056:
/*!*************************************************************!*\
  !*** ./src/app/current-game/current-game-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrentGamePageRoutingModule": () => (/* binding */ CurrentGamePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _current_game_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./current-game.page */ 4961);




const routes = [
    {
        path: '',
        component: _current_game_page__WEBPACK_IMPORTED_MODULE_0__.CurrentGamePage
    }
];
let CurrentGamePageRoutingModule = class CurrentGamePageRoutingModule {
};
CurrentGamePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CurrentGamePageRoutingModule);



/***/ }),

/***/ 8405:
/*!*****************************************************!*\
  !*** ./src/app/current-game/current-game.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrentGamePageModule": () => (/* binding */ CurrentGamePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _current_game_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./current-game-routing.module */ 6056);
/* harmony import */ var _current_game_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./current-game.page */ 4961);
/* harmony import */ var _custom_pipes_random_middle_name_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../custom-pipes/random-middle-name.pipe */ 1743);








let CurrentGamePageModule = class CurrentGamePageModule {
};
CurrentGamePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _current_game_routing_module__WEBPACK_IMPORTED_MODULE_0__.CurrentGamePageRoutingModule
        ],
        declarations: [_current_game_page__WEBPACK_IMPORTED_MODULE_1__.CurrentGamePage, _custom_pipes_random_middle_name_pipe__WEBPACK_IMPORTED_MODULE_2__.RandomMiddleNamePipe]
    })
], CurrentGamePageModule);



/***/ }),

/***/ 4961:
/*!***************************************************!*\
  !*** ./src/app/current-game/current-game.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrentGamePage": () => (/* binding */ CurrentGamePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_current_game_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./current-game.page.html */ 5139);
/* harmony import */ var _current_game_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./current-game.page.scss */ 7113);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _services_shared_app_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/shared-app-state.service */ 2384);
/* harmony import */ var _services_firestore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/firestore.service */ 1343);







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
let CurrentGamePage = class CurrentGamePage {
    constructor(appState, dbService, router) {
        this.appState = appState;
        this.dbService = dbService;
        this.router = router;
        // save and load this data, but remake the object from the class with the totaling method
        this.holeCardList = [];
        this.totalsCard = [];
        if (this.router.getCurrentNavigation().extras.state) {
            const state = this.router.getCurrentNavigation().extras.state;
            this.formData = state;
        }
    }
    ngOnInit() {
        this.createHoleCards();
        this.createTotalsCard();
    }
    createHoleCards() {
        for (let i = 0; i < 9; i++) {
            const parArr = this.getParArr();
            const holeCard = {
                title: `Hole ${i + 1}`,
                subtitle: `Par ${parArr[i].par}`,
                subtitle2: `Yards ${parArr[i].yards}`,
                scoreList: []
            };
            this.formData.playersList.forEach((player) => {
                const playerScore = {
                    playerName: `${player.first_name} ${player.last_name}`,
                    strokes: 0
                };
                holeCard.scoreList.push(playerScore);
            });
            this.holeCardList.push(holeCard);
        }
    }
    getParArr() {
        const CourseID = JSON.parse(localStorage.getItem('GOLFDATA_selectedCourseID'));
        const CourseList = JSON.parse(localStorage.getItem('GOLFDATA_courseList'));
        const parArr = [];
        switch (CourseID) {
            case 18300: {
                CourseList[0].details.holes.forEach((hole) => {
                    const thing = { par: hole.teeBoxes[0].par, yards: hole.teeBoxes[0].yards };
                    parArr.push(thing);
                });
                break;
            }
            case 11819: {
                CourseList[1].details.holes.forEach((hole) => {
                    const thing = { par: hole.teeBoxes[0].par, yards: hole.teeBoxes[0].yards };
                    parArr.push(thing);
                });
                break;
            }
            case 19002: {
                CourseList[2].details.holes.forEach((hole) => {
                    const thing = { par: hole.teeBoxes[0].par, yards: hole.teeBoxes[0].yards };
                    parArr.push(thing);
                });
                break;
            }
        }
        return parArr;
    }
    createTotalsCard() {
        this.formData.playersList.forEach((player) => {
            const playerTotals = new PlayerTotals(`${player.first_name} ${player.last_name}`, [0, 0, 0, 0, 0, 0, 0, 0, 0]);
            this.totalsCard.push(playerTotals);
        });
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
CurrentGamePage.ctorParameters = () => [
    { type: _services_shared_app_state_service__WEBPACK_IMPORTED_MODULE_2__.SharedAppStateService },
    { type: _services_firestore_service__WEBPACK_IMPORTED_MODULE_3__.FireStoreService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
CurrentGamePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-current-game',
        template: _raw_loader_current_game_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_current_game_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CurrentGamePage);



/***/ }),

/***/ 7113:
/*!*****************************************************!*\
  !*** ./src/app/current-game/current-game.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXJyZW50LWdhbWUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 5139:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/current-game/current-game.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      GOLF\n    </ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"primary\" (click)=\"saveData()\">Save Current ScoreCard Data</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n  <!-- <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">GOLF</ion-title>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header> -->\n\n<!-- Dude, sick nested for loop reference for your two way data binding -->\n\n  <ion-card *ngFor=\"let card of holeCardList; let i = index\">\n    <ion-card-header>\n      <ion-card-title>{{card.title}}</ion-card-title>\n      <ion-card-subtitle>{{card.subtitle}}</ion-card-subtitle>\n      <ion-card-subtitle>{{card.subtitle2}}</ion-card-subtitle>\n    </ion-card-header>\n  \n    <ion-card-content>\n      <ion-list>\n        <ion-item *ngFor=\"let score of card.scoreList; let j = index\">\n          <ion-input type=\"text\" value=\"{{score.playerName}}\" disabled></ion-input>\n          <ion-label>Strokes:</ion-label>\n          <ion-input color=\"primary\" type=\"number\" value=\"{{score.strokes}}\" min=\"0\"\n            [(ngModel)]=\"holeCardList[i].scoreList[j].strokes\"\n            (ngModelChange)=\"calcTotals(holeCardList[i].scoreList[j].playerName, i, $event)\"\n            >\n          </ion-input>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n<!-- TOTALS -->\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>TOTALS</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list>\n        <ion-item *ngFor=\"let card of totalsCard\">\n          <ion-label>{{card.name | randomMiddleName}}</ion-label>\n          Total Strokes: {{card.totalStrokes}}\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n<!-- <p>totalsCard</p>\n<pre>{{totalsCard | json}}</pre>  \n<p>formData</p>\n<pre>{{formData | json}}</pre>\n<p>holeCardList</p>\n<pre>{{holeCardList | json}}</pre> -->\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_current-game_current-game_module_ts.js.map