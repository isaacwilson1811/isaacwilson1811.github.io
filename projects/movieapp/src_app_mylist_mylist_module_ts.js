(self["webpackChunkmovieApp"] = self["webpackChunkmovieApp"] || []).push([["src_app_mylist_mylist_module_ts"],{

/***/ 4565:
/*!***************************************************!*\
  !*** ./src/app/mylist/custom-pipe/custom.pipe.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomPipe": () => (/* binding */ CustomPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


let CustomPipe = class CustomPipe {
    transform(genreObjArray) {
        let outputArray = [];
        genreObjArray.forEach((genreObj) => { outputArray.push(genreObj.name); });
        return outputArray.toString().replace(/,/g, ", ");
    }
};
CustomPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({ name: 'customPipeGenreName' })
], CustomPipe);



/***/ }),

/***/ 7001:
/*!*************************************************!*\
  !*** ./src/app/mylist/mylist-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyListRoutingModule": () => (/* binding */ MyListRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _mylist_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mylist.page */ 1391);




const routes = [
    {
        path: '',
        component: _mylist_page__WEBPACK_IMPORTED_MODULE_0__.MyListPage,
    }
];
let MyListRoutingModule = class MyListRoutingModule {
};
MyListRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], MyListRoutingModule);



/***/ }),

/***/ 4386:
/*!*****************************************!*\
  !*** ./src/app/mylist/mylist.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyListModule": () => (/* binding */ MyListModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _mylist_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mylist-routing.module */ 7001);
/* harmony import */ var _mylist_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mylist.page */ 1391);
/* harmony import */ var _custom_pipe_custom_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom-pipe/custom.pipe */ 4565);








let MyListModule = class MyListModule {
};
MyListModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _mylist_routing_module__WEBPACK_IMPORTED_MODULE_0__.MyListRoutingModule
        ],
        declarations: [_mylist_page__WEBPACK_IMPORTED_MODULE_1__.MyListPage, _custom_pipe_custom_pipe__WEBPACK_IMPORTED_MODULE_2__.CustomPipe]
    })
], MyListModule);



/***/ }),

/***/ 1391:
/*!***************************************!*\
  !*** ./src/app/mylist/mylist.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyListPage": () => (/* binding */ MyListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_mylist_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./mylist.page.html */ 4150);
/* harmony import */ var _mylist_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mylist.page.scss */ 2817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_global_services_session_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-global-services/session-storage.service */ 5982);
/* harmony import */ var _app_global_services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app-global-services/firebase.service */ 2169);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);







let MyListPage = class MyListPage {
    constructor(storageService, firebaseService, router) {
        this.storageService = storageService;
        this.firebaseService = firebaseService;
        this.router = router;
        this.pageTitle = 'My List';
    }
    ngOnInit() {
        this.isLoggedInLogic();
        this.getUserMovies();
    }
    isLoggedInLogic() {
        this.isLoggedIn = this.storageService.read('isAuthed') ? true : false;
        this.storageService.getObservableStorageChanges().subscribe((changeAction) => {
            const { type, key, value } = changeAction;
            if (key === 'isAuthed' && value === true) {
                this.isLoggedIn = value ? true : false;
            }
            if (key === 'userCollection' && type === 'write') {
                // this.userMovieList = this.storageService.read('userCollection');
                this.getUserMovies();
            }
            ;
        });
    }
    sortBy(arr, prop) {
        if (!arr) {
            return;
        }
        arr.sort((a, b) => {
            if (a[prop] < b[prop]) {
                return -1;
            }
            else if (a[prop] > b[prop]) {
                return 1;
            }
            else {
                return 0;
            }
        });
    }
    getUserMovies() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const cachedUserCollection = yield this.storageService.read('userCollection');
            if (cachedUserCollection) {
                this.userMovieList = cachedUserCollection;
                this.sortBy(this.userMovieList, 'title');
                console.log('loaded collection from storage');
            }
            else {
                const freshUserCollection = yield this.firebaseService.readUserCollection();
                this.userMovieList = freshUserCollection;
                this.sortBy(this.userMovieList, 'title');
                console.log('loaded collection from firebase');
            }
        });
    }
    removeMovie(movieID) {
        this.firebaseService.getCurrentUser().then(user => {
            const uID = user.uid;
            this.storageService.remove('userCollection');
            this.firebaseService.removeFromCollection(uID, `${movieID}`);
            this.getUserMovies();
        });
    }
    saveCustomData(movieID, movieData, customData) {
        this.firebaseService.getCurrentUser().then(user => {
            const uID = user.uid;
            this.storageService.remove('userCollection');
            this.firebaseService.saveCustomData(uID, `${movieID}`, movieData, customData);
            this.getUserMovies();
        });
    }
    goToDetails(id) {
        let userCollection = this.storageService.read('userCollection');
        let found = userCollection.some(movie => movie.id === id);
        this.router.navigate(['tabs', 'movies', 'details', `${id}`], { state: { isFound: found } });
    }
    toggleHidden(id) {
        document.getElementById(id).classList.toggle('hidden');
    }
};
MyListPage.ctorParameters = () => [
    { type: _app_global_services_session_storage_service__WEBPACK_IMPORTED_MODULE_2__.SessionStorageService },
    { type: _app_global_services_firebase_service__WEBPACK_IMPORTED_MODULE_3__.FirebaseService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
MyListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'mylist-page',
        template: _raw_loader_mylist_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_mylist_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MyListPage);



/***/ }),

/***/ 2817:
/*!*****************************************!*\
  !*** ./src/app/mylist/mylist.page.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".moviePoster {\n  width: 240px;\n}\n\n.chipButton {\n  background: rgba(241, 181, 15, 0.952);\n}\n\n.center {\n  margin-left: auto;\n  margin-right: auto;\n  display: block !important;\n}\n\n.hidden {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15bGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0o7O0FBQ0E7RUFDSSxxQ0FBQTtBQUVKOztBQU9BO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBSko7O0FBTUE7RUFDSSxhQUFBO0FBSEoiLCJmaWxlIjoibXlsaXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb3ZpZVBvc3RlciB7XG4gICAgd2lkdGg6IDI0MHB4O1xufVxuLmNoaXBCdXR0b24ge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQxLCAxODEsIDE1LCAwLjk1Mik7XG4gICAgLy8gLS1pb24tY29sb3Itd2FybmluZzogI2ZmZDUzNDtcbiAgICAvLyAtLWlvbi1jb2xvci13YXJuaW5nLXJnYjogMjU1LDIxMyw1MjtcbiAgICAvLyAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAgIC8vIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QtcmdiOiAwLDAsMDtcbiAgICAvLyAtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlOiAjZTBiYjJlO1xuICAgIC8vIC0taW9uLWNvbG9yLXdhcm5pbmctdGludDogI2ZmZDk0ODtcbiAgICBcbn1cbi5jZW50ZXIge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuLmhpZGRlbntcbiAgICBkaXNwbGF5Om5vbmU7XG59Il19 */");

/***/ }),

/***/ 4150:
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mylist/mylist.page.html ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n\n    <ion-title style=\"text-align: center\">{{pageTitle}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding [fullscreen]=\"true\">\n\n  <!-- <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">{{pageTitle}}</ion-title>\n    </ion-toolbar>\n  </ion-header> -->\n\n  <div *ngIf=\"isLoggedIn === true; else notLoggedIn\" >\n    <ion-card *ngFor=\"let movie of userMovieList; let i = index\">\n      <ion-card-header>\n          <img class=\"moviePoster\" src=\"{{'https://image.tmdb.org/t/p//w185' + movie.poster_path }}\" alt=\"Movie Poster\">\n        <ion-card-title>{{movie.title}}</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-item lines=\"none\">\n          <ion-icon name=\"calendar-clear\" slot=\"start\"></ion-icon>\n          <ion-label text-wrap>{{movie.release_date | date: 'MMMM d, y' }}</ion-label>\n        </ion-item>\n\n        <ion-item lines=\"none\">\n          <ion-icon name=\"pricetags\" slot=\"start\"></ion-icon>\n          <ion-label text-wrap>{{movie.genres | customPipeGenreName }}</ion-label>\n        </ion-item>\n\n        <ion-list>\n          <ion-item lines=\"none\">\n            <ion-chip class=\"chipButton\" (click)=\"goToDetails(movie.id)\">\n              <ion-icon name=\"list-circle-outline\"></ion-icon>\n              <ion-label>Details</ion-label>\n            </ion-chip>\n          </ion-item>\n          <ion-item lines=\"none\" >\n            <ion-chip class=\"chipButton\" (click)=\"toggleHidden(i)\">\n              <ion-icon name=\"create-outline\"></ion-icon>\n              <ion-label>Custom Data</ion-label>\n              <ion-icon name=\"ellipsis-vertical-outline\" ></ion-icon>\n            </ion-chip>\n          </ion-item>\n\n          <ion-item lines=\"none\">\n            <ion-chip class=\"chipButton\" (click)=\"removeMovie(movie.id)\">\n\n              <ion-icon name=\"trash-outline\" ></ion-icon>\n              <ion-label>Remove</ion-label>\n            </ion-chip>\n          </ion-item>\n        </ion-list>\n\n        <!-- Custom Data -->\n\n        <ion-list id=\"{{i}}\" class=\"hidden\">\n          <ion-list-header lines=\"full\">\n            <ion-label><h1>My Custom Data</h1></ion-label>\n          </ion-list-header>\n          <ion-item>\n            <ion-label>Watched</ion-label>\n            <ion-checkbox #refWatched checked=\"{{movie.userWatched}}\" color=\"warning\" slot=\"end\"></ion-checkbox>\n          </ion-item>\n          <ion-item>\n            <ion-label>Rating</ion-label>\n            <ion-input #refRating type=\"number\" step=\"1\" min=\"0\" max=\"5\" value=\"{{movie.userRating}}\" slot=\"end\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>Comment</ion-label>\n            <ion-input #refComment type=\"text\" value=\"{{movie.userComment}}\" slot=\"end\"></ion-input>\n          </ion-item>\n          <ion-item> \n            <ion-button class=\"center\" color=\"warning\" shape=\"round\" (click)=\"saveCustomData(movie.id, movie, { userWatched: refWatched.checked, userRating: refRating.value, userComment: refComment.value})\">Save Custom Data</ion-button>\n          </ion-item>\n        </ion-list>\n        <!-- <pre>{{ movie | json }}</pre> -->\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n  <ng-template #notLoggedIn>\n    You must be logged in to use this feature\n  </ng-template>\n  \n</ion-content>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_mylist_mylist_module_ts.js.map