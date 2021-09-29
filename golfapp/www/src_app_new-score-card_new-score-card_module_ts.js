(self["webpackChunkgolf_score_card_app_ionic"] = self["webpackChunkgolf_score_card_app_ionic"] || []).push([["src_app_new-score-card_new-score-card_module_ts"],{

/***/ 9788:
/*!*****************************************************************!*\
  !*** ./src/app/new-score-card/new-score-card-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewScoreCardPageRoutingModule": () => (/* binding */ NewScoreCardPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _new_score_card_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-score-card.page */ 6039);




const routes = [
    {
        path: '',
        component: _new_score_card_page__WEBPACK_IMPORTED_MODULE_0__.NewScoreCardPage
    }
];
let NewScoreCardPageRoutingModule = class NewScoreCardPageRoutingModule {
};
NewScoreCardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NewScoreCardPageRoutingModule);



/***/ }),

/***/ 1925:
/*!*********************************************************!*\
  !*** ./src/app/new-score-card/new-score-card.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewScoreCardPageModule": () => (/* binding */ NewScoreCardPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _new_score_card_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-score-card-routing.module */ 9788);
/* harmony import */ var _new_score_card_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-score-card.page */ 6039);







let NewScoreCardPageModule = class NewScoreCardPageModule {
};
NewScoreCardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _new_score_card_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewScoreCardPageRoutingModule
        ],
        declarations: [_new_score_card_page__WEBPACK_IMPORTED_MODULE_1__.NewScoreCardPage]
    })
], NewScoreCardPageModule);



/***/ }),

/***/ 6039:
/*!*******************************************************!*\
  !*** ./src/app/new-score-card/new-score-card.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewScoreCardPage": () => (/* binding */ NewScoreCardPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_new_score_card_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./new-score-card.page.html */ 7686);
/* harmony import */ var _new_score_card_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-score-card.page.scss */ 7977);
/* harmony import */ var _services_shared_app_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/shared-app-state.service */ 2384);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);






let NewScoreCardPage = class NewScoreCardPage {
    constructor(appState, router) {
        this.appState = appState;
        this.router = router;
        this.isFormValid = false;
        this.submitButtonText = "Get Ready";
        this.templateData = {
            courseList: undefined,
            selectedCourseID: undefined
        };
        // if (this.router.getCurrentNavigation().extras.state) {
        //   const state = this.router.getCurrentNavigation().extras.state;
        //   this.routerStateData = state;
        //   console.log(this.routerStateData);
        //   this.selectedCourse = `${this.routerStateData.selectedCourseID}`
        // }
    }
    ngOnInit() {
        this.templateData.courseList = this.appState.get("courseList");
        this.templateData.selectedCourseID = `${this.appState.get("selectedCourseID")}`;
        if (!this.templateData.courseList) {
            this.router.navigate(['home']);
        }
    }
    validateFormData() {
        if (this.templateData.selectedCourseID && this.numberOfPlayers) {
            let validPlayerCount = 0;
            this.playerList.forEach(player => {
                if (player.first_name && player.last_name && player.hdcp) {
                    validPlayerCount++;
                }
            });
            if (validPlayerCount === this.playerList.length) {
                this.isFormValid = true;
                this.submitButtonText = "Start Golfing!";
            }
            else {
                this.isFormValid = false;
                this.submitButtonText = "Get Ready";
            }
        }
    }
    onChangeNumPlayers() {
        const pNum = Number(this.numberOfPlayers);
        if (!this.playerList) {
            this.playerList = [];
            for (let i = 0; i < pNum; i++) {
                this.playerList.push({ order: `${i + 1}`, first_name: '', last_name: '', hdcp: '' });
            }
            return;
        }
        const newList = [];
        for (let i = 0; i < pNum; i++) {
            if (this.playerList[i]) {
                newList.push(this.playerList[i]);
            }
            else {
                newList.push({ order: `${i + 1}`, first_name: '', last_name: '', hdcp: '' });
            }
        }
        this.playerList = newList.slice(0);
    }
    onStartGolfing() {
        const scoreCardData = {
            golfCourseID: this.templateData.selectedCourseID,
            playersList: [...this.playerList],
        };
        // scoreCardData.playersList.forEach(player=>{
        //   player.scores = [];
        //   for(let i = 1; i < 10; i++){
        //     player.scores.push({hole:i,strokes:0})
        //   }
        // })
        this.sendDataToGame(scoreCardData);
    }
    sendDataToGame(obj) {
        this.router.navigate(['current-game'], {
            state: obj
        });
    }
};
NewScoreCardPage.ctorParameters = () => [
    { type: _services_shared_app_state_service__WEBPACK_IMPORTED_MODULE_2__.SharedAppStateService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
NewScoreCardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-new-score-card',
        template: _raw_loader_new_score_card_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_new_score_card_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NewScoreCardPage);



/***/ }),

/***/ 7977:
/*!*********************************************************!*\
  !*** ./src/app/new-score-card/new-score-card.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1zY29yZS1jYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBRUEsU0FBQTtBQUZGOztBQUtBO0VBQ0UscUJBQUE7QUFGRiIsImZpbGUiOiJuZXctc2NvcmUtY2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcblxuICBjb2xvcjogIzhjOGM4YztcblxuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ 7686:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-score-card/new-score-card.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      New Score Card\n    </ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">New Score Card</ion-title>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-list>\n    <ion-item>\n      <ion-label>Golf Course</ion-label>\n      <ion-select placeholder=\"Select a Course\" [(ngModel)]=\"templateData.selectedCourseID\" required (ionChange)=\"validateFormData()\">\n        <div *ngFor=\"let course of templateData.courseList\">\n          <!-- <ion-select-option value=\"18300\">Fox Hollow</ion-select-option> -->\n          <ion-select-option value=\"{{course.id}}\">{{course.name}}</ion-select-option>\n          <!-- <ion-select-option value=\"11819\">Thanksgiving Point</ion-select-option> -->\n          <!-- <ion-select-option value=\"19002\">Spanish Oaks</ion-select-option> -->\n        </div>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n\n  <ion-list *ngIf=\"templateData.selectedCourseID !== null\">\n    <ion-item>\n      <ion-label>Number of Players</ion-label>\n      <ion-select placeholder=\"Select Number Of Players\" [(ngModel)]=\"numberOfPlayers\" (ionChange)=\"onChangeNumPlayers()\" required (ionChange)=\"validateFormData()\">\n        <ion-select-option value=\"1\">1</ion-select-option>\n        <ion-select-option value=\"2\">2</ion-select-option>\n        <ion-select-option value=\"3\">3</ion-select-option>\n        <ion-select-option value=\"4\">4</ion-select-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n\n  <!-- For Each Player -->\n  <ion-list *ngFor=\"let player of playerList\">\n    <ion-list-header>\n      <ion-label>\n        <ion-icon slot=\"start\" name=\"person\"></ion-icon> Player {{player.order}}\n      </ion-label>\n    </ion-list-header>\n    <ion-item>\n      <ion-label>\n        First Name:\n      </ion-label>\n      <ion-input placeholder=\"First Name\" [(ngModel)]=\"player.first_name\" required (ionChange)=\"validateFormData()\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        Last Name:\n      </ion-label>\n      <ion-input placeholder=\"Last Name\" [(ngModel)]=\"player.last_name\" required (ionChange)=\"validateFormData()\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        Handicap:\n      </ion-label>\n      <ion-select placeholder=\"Select Handicap\" [(ngModel)]=\"player.hdcp\" required (ionChange)=\"validateFormData()\">\n        <ion-select-option value=\"none\">No Handicap</ion-select-option>\n        <ion-select-option value=\"pro\">Pro</ion-select-option>\n        <ion-select-option value=\"what\">Whatever</ion-select-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n\n  <ion-button expand=\"block\" [disabled]=\"!isFormValid\" (click)=\"onStartGolfing()\">{{submitButtonText}}</ion-button>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_new-score-card_new-score-card_module_ts.js.map