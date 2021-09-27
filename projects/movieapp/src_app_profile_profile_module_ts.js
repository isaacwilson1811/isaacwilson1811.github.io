(self["webpackChunkmovieApp"] = self["webpackChunkmovieApp"] || []).push([["src_app_profile_profile_module_ts"],{

/***/ 9854:
/*!***********************************************************************!*\
  !*** ./src/app/profile/login-form/login-form/login-form.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginFormComponent": () => (/* binding */ LoginFormComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_login_form_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login-form.component.html */ 8737);
/* harmony import */ var _login_form_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-form.component.scss */ 2347);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_app_global_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app-global-services/firebase.service */ 2169);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);







let LoginFormComponent = class LoginFormComponent {
    constructor(router, authService, formBuilder) {
        this.router = router;
        this.authService = authService;
        this.formBuilder = formBuilder;
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
    }
    signIn(value) {
        this.authService.signinUser(value)
            .then((response) => {
            this.errorMsg = "";
        }, error => {
            this.errorMsg = error.message;
            this.successMsg = "";
        });
    }
};
LoginFormComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_app_global_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__.FirebaseService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder }
];
LoginFormComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-login-form',
        template: _raw_loader_login_form_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_form_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginFormComponent);



/***/ }),

/***/ 9916:
/*!***************************************************!*\
  !*** ./src/app/profile/profile-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileRoutingModule": () => (/* binding */ ProfileRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 2919);
/* harmony import */ var _register_register_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register/register.page */ 2355);





const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
    },
    {
        path: 'register',
        component: _register_register_page__WEBPACK_IMPORTED_MODULE_1__.RegisterPage
    }
];
let ProfileRoutingModule = class ProfileRoutingModule {
};
ProfileRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], ProfileRoutingModule);



/***/ }),

/***/ 4523:
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileModule": () => (/* binding */ ProfileModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 9916);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 2919);
/* harmony import */ var _login_form_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-form/login-form/login-form.component */ 9854);
/* harmony import */ var _register_register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.page */ 2355);










let ProfileModule = class ProfileModule {
};
ProfileModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfileRoutingModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild([
                { path: '', component: _profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage },
                { path: 'register', component: _register_register_page__WEBPACK_IMPORTED_MODULE_3__.RegisterPage }
            ])
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage, _login_form_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_2__.LoginFormComponent, _register_register_page__WEBPACK_IMPORTED_MODULE_3__.RegisterPage]
    })
], ProfileModule);



/***/ }),

/***/ 2919:
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./profile.page.html */ 2907);
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss */ 231);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_global_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-global-services/firebase.service */ 2169);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _app_global_services_session_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app-global-services/session-storage.service */ 5982);







let ProfilePage = class ProfilePage {
    constructor(router, auth, storageService) {
        this.router = router;
        this.auth = auth;
        this.storageService = storageService;
        this.pageTitle = 'My Profile';
    }
    ngOnInit() {
        this.isLoggedInLogic();
        this.userDetails$ = this.auth.getUserDetails();
    }
    logout() {
        this.auth.signoutUser();
    }
    // TEST(){
    //   this.auth.TESTreadUserCollection().then(docArray=>{console.log('my data', docArray)});
    // }
    isLoggedInLogic() {
        this.isLoggedIn = this.storageService.read('isAuthed') ? true : false;
        this.storageService.getObservableStorageChanges().subscribe((changeAction) => {
            const { key, value } = changeAction;
            if (key === 'isAuthed') {
                this.isLoggedIn = value ? true : false;
            }
        });
    }
    goToRegister() {
        this.router.navigateByUrl('tabs/profile/register');
    }
};
ProfilePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _app_global_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__.FirebaseService },
    { type: _app_global_services_session_storage_service__WEBPACK_IMPORTED_MODULE_3__.SessionStorageService }
];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'profile-page',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProfilePage);



/***/ }),

/***/ 2355:
/*!***************************************************!*\
  !*** ./src/app/profile/register/register.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPage": () => (/* binding */ RegisterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./register.page.html */ 5633);
/* harmony import */ var _register_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page.scss */ 7497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_app_global_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app-global-services/firebase.service */ 2169);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);







let RegisterPage = class RegisterPage {
    constructor(router, authService, formBuilder) {
        this.router = router;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.pageTitle = 'Register New User';
        this.successMsg = '';
        this.errorMsg = '';
        this.error_msg = {
            'email': [
                { type: 'required', message: 'Provide email.' },
                { type: 'pattern', message: 'Email is not valid.' }
            ],
            'password': [
                { type: 'required', message: 'Password is required.'
                },
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
    }
    signUp(value) {
        this.authService.createUser(value)
            .then((response) => {
            this.errorMsg = "";
            this.successMsg = "New user created.";
            // call log in
            this.authService.signinNewUser(value)
                .then((response) => {
                this.errorMsg = "";
                this.router.navigateByUrl('tabs/profile');
            }, error => {
                this.errorMsg = error.message;
                this.successMsg = "";
            });
        }, error => {
            this.errorMsg = error.message;
            this.successMsg = "";
        });
    }
};
RegisterPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_app_global_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__.FirebaseService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder }
];
RegisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'register-page',
        template: _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RegisterPage);



/***/ }),

/***/ 2347:
/*!*************************************************************************!*\
  !*** ./src/app/profile/login-form/login-form/login-form.component.scss ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".form {\n  width: 310px;\n  height: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQUNKIiwiZmlsZSI6ImxvZ2luLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybSB7XG4gICAgd2lkdGg6IDMxMHB4O1xuICAgIGhlaWdodDogMzAwcHg7XG59Il19 */");

/***/ }),

/***/ 231:
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".flex-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n\nion-content {\n  --background:none;\n  background: url('background.jpg') no-repeat fixed center;\n  background-size: cover;\n}\n\n.darkYellowText {\n  color: #c46b06;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDRyxpQkFBQTtFQUNBLHdEQUFBO0VBQ0Esc0JBQUE7QUFDSDs7QUFDQTtFQUNJLGNBQUE7QUFFSiIsImZpbGUiOiJwcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV4LWNlbnRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAgLS1iYWNrZ3JvdW5kOm5vbmU7XG4gICBiYWNrZ3JvdW5kOnVybChcIi4uLy4uL2Fzc2V0cy9iYWNrZ3JvdW5kLmpwZ1wiKSBuby1yZXBlYXQgZml4ZWQgY2VudGVyO1xuICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgIFxufVxuLmRhcmtZZWxsb3dUZXh0e1xuICAgIGNvbG9yOiByZ2IoMTk2LCAxMDcsIDYpO1xufSJdfQ== */");

/***/ }),

/***/ 7497:
/*!*****************************************************!*\
  !*** ./src/app/profile/register/register.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 8737:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/login-form/login-form/login-form.component.html ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<form class=\"form\" [formGroup]=\"userForm\" (ngSubmit)=\"signIn(userForm.value)\">\n  \n    <ion-card-header>\n      <ion-card-title  style=\"text-align: center\">Log in</ion-card-title>\n    </ion-card-header>\n\n  <ion-card-content>\n  <ion-item>\n    <ion-label position=\"floating\">Email</ion-label>\n    <ion-input type=\"text\" formControlName=\"email\"></ion-input>\n  </ion-item>\n  \n  <ng-container *ngFor=\"let error of error_msg.email\">\n    <div *ngIf=\"userForm.get('email').hasError(error.type) && (userForm.get('email').dirty || userForm.get('email').touched)\">\n      {{ error.message }}\n    </div>\n  </ng-container>\n\n  <ion-item>\n    <ion-label position=\"floating\">Password</ion-label>\n    <ion-input type=\"password\" formControlName=\"password\" class=\"form-controll\" required></ion-input>\n  </ion-item>\n  \n  <ng-container *ngFor=\"let error of error_msg.password\">\n      <div *ngIf=\"userForm.get('password').hasError(error.type) && (userForm.get('password').dirty || userForm.get('password').touched)\">\n        {{ error.message }}\n      </div>\n  </ng-container>\n\n  <ion-button color=\"warning\" type=\"submit\" expand=\"block\" shape=\"round\" [disabled]=\"!userForm.valid\">Log In</ion-button>\n  \n</ion-card-content>\n  <label class=\"ion-text-center\" color=\"danger\">{{errorMsg}}</label>\n\n</form>\n");

/***/ }),

/***/ 2907:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- <ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>{{pageTitle}}</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content [fullscreen]=\"true\">\n  <div class=\"flex-center\">\n    <ion-card>\n      \n  <!-- <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">{{pageTitle}}</ion-title>\n    </ion-toolbar>\n  </ion-header> -->\n  <!-- Page Content Below -->\n  <div *ngIf=\"isLoggedIn === true; else loginForm\">\n    <ion-list *ngIf=\"userDetails$ | async as userDetails\">\n      <ion-item>\n        <ion-label>You are logged in as:</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>{{userDetails.email}}</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-button color=\"warning\" slot=\"end\" (click)=\"logout()\">Log Out</ion-button>  \n      </ion-item>\n      <!-- <ion-item><ion-label>UID:</ion-label>{{userDetails.uid}}</ion-item> -->\n    </ion-list>\n  </div>\n\n  <ng-template #loginForm>\n      <app-login-form></app-login-form>\n      <ion-button class=\"darkYellowText\" fill=\"clear\" expand=\"block\" shape=\"round\" (click)=\"goToRegister()\">Register</ion-button> \n  </ng-template>\n\n  </ion-card>\n  <!-- Page Content End -->\n  </div>\n</ion-content>");

/***/ }),

/***/ 5633:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/register/register.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\"><ion-back-button></ion-back-button></ion-buttons>\n    <ion-title>{{pageTitle}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\"><ion-back-button></ion-back-button></ion-buttons>\n      <ion-title size=\"large\">{{pageTitle}}</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <!-- Page Content Below -->\n\n  <div>\n    <ion-item>\n      <ion-label style=\"text-align: center\">Please Enter Your Information</ion-label>\n    </ion-item>\n\n    <form class=\"form\" [formGroup]=\"userForm\" (ngSubmit)=\"signUp(userForm.value)\">\n      <ion-item>\n        <ion-label position=\"floating\">Email</ion-label>\n        <ion-input type=\"text\" formControlName=\"email\"></ion-input>\n      </ion-item>\n      \n      <ng-container *ngFor=\"let error of error_msg.email\">\n        <div *ngIf=\"userForm.get('email').hasError(error.type) && (userForm.get('email').dirty || userForm.get('email').touched)\">\n          {{ error.message }}\n        </div>\n      </ng-container>\n  \n      <ion-item>\n        <ion-label position=\"floating\">Password</ion-label>\n        <ion-input type=\"password\" formControlName=\"password\" class=\"form-controll\" required></ion-input>\n      </ion-item>\n      \n      <ng-container *ngFor=\"let error of error_msg.password\">\n          <div *ngIf=\"userForm.get('password').hasError(error.type) && (userForm.get('password').dirty || userForm.get('password').touched)\">\n            {{ error.message }}\n          </div>\n      </ng-container>\n  \n      <ion-button type=\"submit\" expand=\"block\" shape=\"round\" color=\"warning\" [disabled]=\"!userForm.valid\">Create Profile</ion-button>\n      \n      <label class=\"ion-text-center\" color=\"danger\">{{errorMsg}}</label>\n      <label class=\"ion-text-center\" color=\"success\">{{successMsg}}</label>\n    </form>\n  </div>\n\n  <!-- End Page Content -->\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_profile_profile_module_ts.js.map