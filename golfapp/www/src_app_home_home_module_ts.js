(self["webpackChunkgolf_score_card_app_ionic"] = self["webpackChunkgolf_score_card_app_ionic"] || []).push([["src_app_home_home_module_ts"],{

/***/ 3133:
/*!***************************************************************!*\
  !*** ./src/app/components/login-form/login-form.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginFormComponent": () => (/* binding */ LoginFormComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_login_form_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login-form.component.html */ 1886);
/* harmony import */ var _login_form_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-form.component.scss */ 8380);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);






let LoginFormComponent = class LoginFormComponent {
    constructor(formBuilder, auth) {
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.successMsg = '';
        this.errorMsg = '';
        this.error_msg = {
            'email': [
                { type: 'required', message: 'Provide email.' },
                { type: 'pattern', message: 'Email is not valid.' }
            ],
            'password': [
                { type: 'required', message: 'Password is required.' },
                { type: 'minlength', message: 'Password length should be 6 characters long.' }
            ]
        };
        this.successMsg2 = '';
        this.errorMsg2 = '';
        this.error_msg2 = {
            'email': [
                { type: 'required', message: 'Provide email.' },
                { type: 'pattern', message: 'Email is not valid.' }
            ],
            'password': [
                { type: 'required', message: 'Password is required.' },
                { type: 'minlength', message: 'Password length should be 6 characters long.' }
            ]
        };
    }
    ngOnInit() {
        this.userForm = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(6),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required
            ])),
        });
        this.newUserForm = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(6),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required
            ])),
        });
    }
    signIn(values) {
        this.auth.signinUser(values).then(() => this.errorMsg = "", err => { this.errorMsg = err.message; this.successMsg = ""; });
    }
    toggleNewForm() {
        document.getElementById('registerFormDiv').classList.toggle('hidden');
        document.getElementById('signInFormDiv').classList.toggle('hidden');
        document.getElementById('dontHave').classList.toggle('hidden');
    }
    signUp(values) {
        this.auth.createUser(values)
            .then((response) => {
            this.errorMsg2 = "";
            this.successMsg2 = "New user created.";
            // call log in
            this.auth.signinUser(values)
                .then((response) => {
                this.errorMsg2 = "";
            }, error => {
                this.errorMsg2 = error.message;
                this.successMsg2 = "";
            });
        }, error => {
            this.errorMsg2 = error.message;
            this.successMsg2 = "";
        });
    }
    oopsGoBack() {
        document.getElementById('registerFormDiv').classList.toggle('hidden');
        document.getElementById('signInFormDiv').classList.toggle('hidden');
        document.getElementById('dontHave').classList.toggle('hidden');
    }
};
LoginFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
LoginFormComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-login-form',
        template: _raw_loader_login_form_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_form_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginFormComponent);



/***/ }),

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 2003);
/* harmony import */ var _components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/login-form/login-form.component */ 3133);








let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage, _components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_2__.LoginFormComponent]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 9764);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 2610);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _services_firestore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/firestore.service */ 1343);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _services_shared_app_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/shared-app-state.service */ 2384);








let HomePage = class HomePage {
    constructor(auth, dbService, appState, router) {
        this.auth = auth;
        this.dbService = dbService;
        this.appState = appState;
        this.router = router;
    }
    ngOnInit() {
        this.subscribeToCurrentUser();
        this.courseList$ = this.appState.preloadCourseList();
    }
    subscribeToCurrentUser() {
        this.currentUser$ = this.auth.getUser();
        this.currentUserSub = this.currentUser$.subscribe((user) => {
            console.log('subscription: ', user);
            if (user === null) {
                this.isAuthed = false;
                this.currentUserEmail = undefined;
            }
            else {
                this.isAuthed = true;
                this.currentUserEmail = user.email;
            }
            ;
        });
    }
    navigateToSetupPage(courseID) {
        this.appState.set('selectedCourseID', courseID);
        this.router.navigate(['new'], { state: { selectedCourseID: courseID } });
    }
    signOut() {
        this.auth.signoutUser();
    }
    loadScoreCard() {
        this.dbService.loadData();
    }
};
HomePage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _services_firestore_service__WEBPACK_IMPORTED_MODULE_3__.FireStoreService },
    { type: _services_shared_app_state_service__WEBPACK_IMPORTED_MODULE_4__.SharedAppStateService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 8380:
/*!*****************************************************************!*\
  !*** ./src/app/components/login-form/login-form.component.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".hidden {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FBQ0YiLCJmaWxlIjoibG9naW4tZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oaWRkZW57XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */");

/***/ }),

/***/ 2610:
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */");

/***/ }),

/***/ 1886:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login-form/login-form.component.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div id=\"signInFormDiv\">\n  <form class=\"form\" [formGroup]=\"userForm\" (ngSubmit)=\"signIn(userForm.value)\">\n    <ion-card-header>\n      <ion-card-title>Please Sign In</ion-card-title>\n      <ion-card-subtitle>...So you can be a Golf Player</ion-card-subtitle>\n    </ion-card-header>\n\n  <ion-card-content>\n  <ion-item>\n    <ion-label position=\"floating\">Email</ion-label>\n    <ion-input type=\"text\" formControlName=\"email\"></ion-input>\n  </ion-item>\n\n  <ng-container *ngFor=\"let error of error_msg.email\">\n    <div *ngIf=\"userForm.get('email').hasError(error.type) && (userForm.get('email').dirty || userForm.get('email').touched)\">\n      {{ error.message }}\n    </div>\n  </ng-container>\n\n  <ion-item>\n    <ion-label position=\"floating\">Password</ion-label>\n    <ion-input type=\"password\" formControlName=\"password\" class=\"form-controll\" required></ion-input>\n  </ion-item>\n\n  <ng-container *ngFor=\"let error of error_msg.password\">\n      <div *ngIf=\"userForm.get('password').hasError(error.type) && (userForm.get('password').dirty || userForm.get('password').touched)\">\n        {{ error.message }}\n      </div>\n  </ng-container>\n\n  <ion-button color=\"primary\" type=\"submit\" expand=\"block\" [disabled]=\"!userForm.valid\">Sign In</ion-button>\n\n  </ion-card-content>\n  <label class=\"ion-text-center\" color=\"danger\">{{errorMsg}}</label>\n  </form>\n</div>\n\n<ion-item id=\"dontHave\">\n  <ion-label>Don't Have An Account?</ion-label>\n  <ion-button (click)=\"toggleNewForm()\">Make A New Account!</ion-button>\n</ion-item>\n\n\n<div id=\"registerFormDiv\" class=\"hidden\">\n  <ion-item>\n    <ion-label style=\"text-align: center\">Please Enter Your Personal Information</ion-label>\n    <ion-button (click)=\"oopsGoBack()\">Nevermind. Go Back. I have an account already</ion-button>\n  </ion-item>\n\n  <form id=\"registerForm\" class=\"form\" [formGroup]=\"newUserForm\" (ngSubmit)=\"signUp(newUserForm.value)\">\n    <ion-item>\n      <ion-label position=\"floating\">Email</ion-label>\n      <ion-input type=\"text\" formControlName=\"email\"></ion-input>\n    </ion-item>\n    \n    <ng-container *ngFor=\"let error of error_msg2.email\">\n      <div *ngIf=\"newUserForm.get('email').hasError(error.type) && (newUserForm.get('email').dirty || newUserForm.get('email').touched)\">\n        {{ error.message }}\n      </div>\n    </ng-container>\n\n    <ion-item>\n      <ion-label position=\"floating\">Password</ion-label>\n      <ion-input type=\"password\" formControlName=\"password\" class=\"form-controll\" required></ion-input>\n    </ion-item>\n    \n    <ng-container *ngFor=\"let error of error_msg2.password\">\n        <div *ngIf=\"newUserForm.get('password').hasError(error.type) && (newUserForm.get('password').dirty || newUserForm.get('password').touched)\">\n          {{ error.message }}\n        </div>\n    </ng-container>\n\n    <ion-button color=\"primary\" type=\"submit\" expand=\"block\" [disabled]=\"!newUserForm.valid\">Create My New Pro Golfer Account</ion-button>\n    \n    <label class=\"ion-text-center\" color=\"danger\">{{errorMsg2}}</label>\n    <label class=\"ion-text-center\" color=\"success\">{{successMsg2}}</label>\n  </form>\n</div>");

/***/ }),

/***/ 9764:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <span *ngIf=\"isAuthed\">Hello {{currentUserEmail}}</span>\n      <span *ngIf=\"!isAuthed\">Not Signed In &nbsp;</span>\n      <ion-button *ngIf=\"isAuthed\" color=\"primary\" (click)=\"signOut()\">Sign Out</ion-button>\n    </ion-buttons>\n    <ion-title>\n      Golf Score Card App\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <!-- <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Golf Score Card App</ion-title>\n    </ion-toolbar>\n  </ion-header> -->\n  <div *ngIf=\"isAuthed; else pleaseSignIn\">\n    <div *ngIf=\"courseList$ | async as courseList; else loading\">\n      <ion-item>\n        <ion-label>Choose a Golf Course to start a new ScoreCard</ion-label>\n        <ion-button (click)=\"loadScoreCard()\">Or Load Your Saved ScoreCard</ion-button>\n      </ion-item>\n      <ion-card *ngFor=\"let course of courseList\">\n        <ion-card-header>\n          <ion-card-title style=\"text-align: center;\">\n            <h1>{{course.name}}</h1>\n          </ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-item>\n            <div style=\"margin: 0 auto;\">\n              <img style=\"border-radius: 16px;\" src=\"{{course.image}}\">\n            </div>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"stacked\">Phone Number: </ion-label>\n            {{course.details.phone}}\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"stacked\">Website: </ion-label>\n            <a href=\"{{course.details.website}}\" target=\"_blank\">{{course.details.website}}</a>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"stacked\">Location:</ion-label>\n            {{course.details.addr1}}. {{course.details.city}}. {{course.details.country}}. {{course.details.zipCode}}\n          </ion-item><ion-item> </ion-item>\n          <ion-button expand=\"block\" shape=\"round\" (click)=\"navigateToSetupPage(course.id)\">New ScoreCard &amp; Play Your Golf Here</ion-button>\n        </ion-card-content>\n      </ion-card>\n    </div>\n    <ng-template #loading>\n      <div>\n        <h2>Loading Golf Courses...</h2>\n      </div>\n    </ng-template>\n  </div>\n  <ng-template #pleaseSignIn>\n    <app-login-form></app-login-form>\n  </ng-template>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map