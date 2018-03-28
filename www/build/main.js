webpackJsonp([0],{

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mess_detail_mess_detail__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__view_location_view_location__ = __webpack_require__(279);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl, afs) {
        this.navCtrl = navCtrl;
        this.afs = afs;
        var collRef = this.afs.collection("mess");
        this.items = collRef.valueChanges();
    }
    HomePage.prototype.viewMess = function (messId, messName) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__mess_detail_mess_detail__["a" /* MessDetailPage */], { mid: messId, mName: messName });
    };
    HomePage.prototype.viewLocation = function (messName) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__view_location_view_location__["a" /* ViewLocationPage */], { messName: messName });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/home/advait/Projects/PWA/myMessUser/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      myMess (Beta)\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngFor="let item of items | async">\n    <ion-card-content>\n      <ion-card-title (click)="viewMess(item.messId, item.messName)">\n        {{item.messName}}\n      </ion-card-title>\n      <p>\n        {{item.address.address}}<br/>\n        {{item.address.city}}<br/>\n        {{item.ownerName}} ({{item.contact}})<br/>\n        {{item.email}}\n      </p>\n    </ion-card-content>\n    <ion-row>\n      <ion-col col-10>\n        <button ion-button icon-only clear small>\n          <div style="width:20px; height:20px;">\n            <img *ngIf="item.menuType==\'false\'" src="assets/imgs/veg.png">\n            <img *ngIf="item.menuType==\'true\'" src="assets/imgs/non-veg.png">\n          </div>\n        </button>\n      </ion-col>        \n      <ion-col col-1>\n        <button ion-button icon-only clear small (click)="viewLocation(item.messName)">\n          <ion-icon name="map"></ion-icon>\n        </button>\n      </ion-col>        \n    </ion-row>\n  </ion-card>  \n</ion-content>\n'/*ion-inline-end:"/home/advait/Projects/PWA/myMessUser/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailValidator; });
var EmailValidator = (function () {
    function EmailValidator() {
    }
    EmailValidator.isValid = function (control) {
        var re = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}))$/.test(control.value);
        if (!re) {
            return { "email": true };
        }
    };
    return EmailValidator;
}());

//# sourceMappingURL=email.js.map

/***/ }),

/***/ 166:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 166;

/***/ }),

/***/ 210:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 210;

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(282);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { CreatePage } from '../create/create';

// import { ArchievePage } from '../archieve/archieve';
var TabsPage = (function () {
    // tab4Root = ArchievePage;
    function TabsPage(menu) {
        this.menu = menu;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        // tab2Root = CreatePage;
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* ProfilePage */];
        this.menu = menu;
        this.menu.enable(true, 'myMenu');
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/advait/Projects/PWA/myMessUser/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <!-- <ion-tab [root]="tab2Root" tabTitle="Create" tabIcon="md-create"></ion-tab> -->\n  <!-- <ion-tab [root]="tab4Root" tabTitle="Archieve" tabIcon="calendar"></ion-tab> -->\n  <ion-tab [root]="tab3Root" tabTitle="Profile" tabIcon="person"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/advait/Projects/PWA/myMessUser/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reviews_reviews__ = __webpack_require__(275);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MessDetailPage = (function () {
    function MessDetailPage(navCtrl, navParams, afs) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afs = afs;
        var d1 = new Date();
        d1.setHours(0, 0, 0, 0);
        //var ref=this.afs.firestore.doc('');
        var collRef = this.afs.collection("mess/" + this.navParams.get('mid') + "/menu", function (ref) { return ref.where('timeFrom', '>=', d1).orderBy('timeFrom'); });
        this.items = collRef.valueChanges();
    }
    MessDetailPage.prototype.ionViewDidLoad = function () {
    };
    MessDetailPage.prototype.viewReviews = function (menuId, menuName) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__reviews_reviews__["a" /* ReviewsPage */], { messId: this.navParams.get('mid'), mid: menuId, mName: menuName });
    };
    MessDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-mess-detail',template:/*ion-inline-start:"/home/advait/Projects/PWA/myMessUser/src/pages/mess-detail/mess-detail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{navParams.get(\'mName\')}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-card *ngFor="let item of items | async">\n      <ion-card-content>\n        <ion-card-title>\n          {{item.menuName}}\n        </ion-card-title>\n        <p>\n          {{item.timeFrom | date: \'dd-MMMM ( hh:mm\'}} - {{item.timeTo | date: \'hh:mm a )\'}}<br/>\n          Rate {{item.rate}} Rupees<br/>\n          {{item.description}}\n        </p>\n      </ion-card-content>\n      <ion-row>\n        <ion-col col-10>\n          <button ion-button icon-only clear small>\n            <div style="width:20px; height:20px;">\n              <img *ngIf="item.menuType==\'false\'" src="assets/imgs/veg.png">\n              <img *ngIf="item.menuType==\'true\'" src="assets/imgs/non-veg.png">\n            </div>\n          </button>\n        </ion-col>        \n        <!-- <ion-col col-9 text-center>\n          <button ion-button clear small>\n            <div *ngIf="item.menuCategory==0">Breakfast</div>\n            <div *ngIf="item.menuCategory==1">Lunch</div>\n            <div *ngIf="item.menuCategory==2">Dinner</div>\n          </button>\n        </ion-col> -->\n        <ion-col col-1>\n          <button ion-button icon-only clear small (click)="viewReviews(item.menuId, item.menuName)">\n            <ion-icon name="stats"></ion-icon>\n          </button>\n        </ion-col>        \n      </ion-row>\n    </ion-card>  \n  </ion-content>\n'/*ion-inline-end:"/home/advait/Projects/PWA/myMessUser/src/pages/mess-detail/mess-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], MessDetailPage);
    return MessDetailPage;
}());

//# sourceMappingURL=mess-detail.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_review_add_review__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReviewsPage = (function () {
    function ReviewsPage(navCtrl, navParams, afs, modalCtrl, authProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afs = afs;
        this.modalCtrl = modalCtrl;
        this.authProvider = authProvider;
        this.flag = false;
        var d1 = new Date();
        d1.setHours(0, 0, 0, 0);
        //var ref=this.afs.firestore.doc('');
        var collRef = this.afs.collection("mess/" + this.navParams.get('messId') + "/menu/" + this.navParams.get('mid') + "/reviews");
        this.items = collRef.valueChanges();
        var userRef = this.afs.doc("mess/" + this.navParams.get('messId') + "/menu/" + this.navParams.get('mid') + "/reviews/" + this.authProvider.getUser().uid);
        userRef.ref.onSnapshot(function (doc) {
            if (doc.exists) {
                _this.flag = false;
            }
            else {
                _this.flag = true;
            }
        });
    }
    ReviewsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReviewsPage');
    };
    ReviewsPage.prototype.addReview = function () {
        console.log('Reviews \nMessId:' + this.navParams.get('messId') + "\nMenuId:" + this.navParams.get('mid'));
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__add_review_add_review__["a" /* AddReviewPage */], { messId: this.navParams.get('messId'), menuId: this.navParams.get('mid'), menuName: this.navParams.get('mName') });
        modal.present();
    };
    ReviewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-reviews',template:/*ion-inline-start:"/home/advait/Projects/PWA/myMessUser/src/pages/reviews/reviews.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{navParams.get(\'mName\')}}</ion-title>\n    <!-- <ion-buttons end>\n      <button ion-button icon-only (click)="addReview()">\n        <ion-icon name="create"></ion-icon>\n      </button>\n    </ion-buttons> -->\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list text-wrap *ngFor="let item of items | async">\n    <ion-item no-lines>\n      <ion-avatar text-center item-start>\n        <img src="assets/imgs/avatar.png">\n        <p>{{item.rating}}/10</p>\n      </ion-avatar>\n      <p text-justify>{{item.review}}</p>\n    </ion-item>\n  </ion-list>\n  <ion-fab *ngIf="flag" mini right bottom>\n    <button ion-fab mini (click)="addReview()">\n      <ion-icon color="danger" name="add-circle"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/home/advait/Projects/PWA/myMessUser/src/pages/reviews/reviews.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */]])
    ], ReviewsPage);
    return ReviewsPage;
}());

//# sourceMappingURL=reviews.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddReviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddReviewPage = (function () {
    function AddReviewPage(navCtrl, loadingCtrl, navParams, formBuilder, viewCtrl, authProvider, afs) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.viewCtrl = viewCtrl;
        this.authProvider = authProvider;
        this.afs = afs;
        this.rating = 0;
        this.reviewForm = formBuilder.group({
            rating: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            review: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])]
        });
    }
    AddReviewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddReviewPage');
    };
    AddReviewPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    AddReviewPage.prototype.ionViewCanEnter = function () {
        if (this.authProvider.getUser() == null) {
            return false;
        }
        else {
            return true;
        }
    };
    AddReviewPage.prototype.seekPosition = function () {
        this.rating = this.reviewForm.value.rating;
    };
    AddReviewPage.prototype.addReview = function () {
        var _this = this;
        console.log('MessId:' + this.navParams.get('messId') + "\nMenuId:" + this.navParams.get('menuId'));
        if (!this.reviewForm.valid) {
            console.log(this.reviewForm.value);
        }
        else {
            var review = {
                reviewId: this.authProvider.getUser().uid,
                rating: parseFloat(this.reviewForm.value.rating),
                review: this.reviewForm.value.review
            };
            var docRef = this.afs.doc("mess/" + this.navParams.get('messId') + "/menu/" + this.navParams.get('menuId') + "/reviews/" + this.authProvider.getUser().uid);
            docRef.set(review)
                .then(function (data) {
                _this.authProvider.showBasicAlert('Alert!', "Added successfully");
                _this.navCtrl.pop();
                _this.loading.dismiss();
            })
                .catch(function (error) {
                _this.authProvider.showBasicAlert("Failed!", error.message);
                _this.navCtrl.pop();
                _this.loading.dismiss();
                console.log("Failed!", error.message);
            });
            this.loading = this.loadingCtrl.create({ dismissOnPageChange: true });
            this.loading.present();
        }
    };
    AddReviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-add-review',template:/*ion-inline-start:"/home/advait/Projects/PWA/myMessUser/src/pages/add-review/add-review.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Add Review\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="reviewForm" (submit)="addReview()" novalidate>             \n    <p *ngIf="reviewForm.controls.rating.dirty" text-center>{{rating}}/10</p>\n    <ion-item no-lines>            \n      <ion-range min="0" max="10" (ionChange)="seekPosition()" formControlName="rating">\n        <ion-icon range-left name="sad"></ion-icon>\n        <ion-icon range-right name="happy"></ion-icon>\n      </ion-range>\n    </ion-item>\n    <p *ngIf="!reviewForm.controls.rating.valid  && reviewForm.controls.rating.dirty">\n        Rating is required.\n    </p>\n\n    <ion-label stacked>Review</ion-label>         \n      <ion-item class="review" no-lines>\n        <ion-textarea formControlName="review" fz-elastic></ion-textarea>  \n      </ion-item>\n      <p *ngIf="!reviewForm.controls.review.valid  && reviewForm.controls.review.dirty">\n        Review is required.\n      </p>\n      \n      <ion-list inset>\n          <button margin-top ion-button block [disabled]="!reviewForm.valid" type="submit">Add Review</button>      \n      </ion-list>\n  </form>\n</ion-content>'/*ion-inline-end:"/home/advait/Projects/PWA/myMessUser/src/pages/add-review/add-review.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], AddReviewPage);
    return AddReviewPage;
}());

//# sourceMappingURL=add-review.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewLocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewLocationPage = (function () {
    function ViewLocationPage(navCtrl, navParams, platform, geolocation) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.geolocation = geolocation;
        platform.ready().then(function () {
            _this.initMap();
        });
    }
    ViewLocationPage.prototype.initMap = function () {
        var _this = this;
        this.geolocation.getCurrentPosition({ enableHighAccuracy: true })
            .then(function (resp) {
            var mylocation = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, {
                zoom: 16,
                draggable: true,
                center: mylocation
            });
            var marker = new google.maps.Marker({
                position: _this.map.getCenter(),
                map: _this.map,
                // draggable: true,
                animation: google.maps.Animation.DROP,
            });
            _this.lat = marker.getPosition().lat();
            _this.lng = marker.getPosition().lng();
            google.maps.event.addListener(_this.map, 'center_changed', function () {
                _this.lat = marker.getPosition().lat();
                _this.lng = marker.getPosition().lng();
            });
            _this.addInfoWindow(marker, "<h4>" + _this.navParams.get('messName') + "</h4>");
            marker.bindTo('position', _this.map, 'center');
        }, function (err) {
            alert(err.message);
        }).catch(function (err) {
            alert(err.message);
        });
        // let watch = this.geolocation.watchPosition();    
        // watch.subscribe((data) => { });
    };
    ViewLocationPage.prototype.addInfoWindow = function (marker, content) {
        var _this = this;
        var infoWindow = new google.maps.InfoWindow({
            content: content
        });
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(_this.map, marker);
        });
    };
    ViewLocationPage.prototype.addLocation = function () {
        console.log("Co-ordinates:" + this.lat + ", " + this.lng);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ViewLocationPage.prototype, "mapElement", void 0);
    ViewLocationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-view-location',template:/*ion-inline-start:"/home/advait/Projects/PWA/myMessUser/src/pages/view-location/view-location.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Mess Location\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button style="text-transform: none!important;" icon-left (click)="addLocation()">\n          <ion-icon name="compass"></ion-icon>\n          Save\n      </button>\n    </ion-buttons> \n  </ion-navbar>\n</ion-header>\n \n<ion-content>\n  <div #map id="map"></div> \n</ion-content>'/*ion-inline-end:"/home/advait/Projects/PWA/myMessUser/src/pages/view-location/view-location.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
    ], ViewLocationPage);
    return ViewLocationPage;
}());

//# sourceMappingURL=view-location.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams, authProvider, afs) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authProvider = authProvider;
        this.afs = afs;
        this.user = {
            userId: '',
            userName: '',
            email: '',
            contact: null,
            address: {
                address: '',
                city: ''
            }
        };
        this.getUserInfo();
    }
    ProfilePage.prototype.ionViewCanEnter = function () {
        if (this.authProvider.getUser().uid == null) {
            return false;
        }
        else {
            return true;
        }
    };
    ProfilePage.prototype.getUserInfo = function () {
        var _this = this;
        var userRef = this.afs.doc("user/" + this.authProvider.getUser().uid);
        userRef.ref.onSnapshot(function (doc) {
            if (doc.exists) {
                _this.user.userName = doc.data().userName;
                _this.user.email = doc.data().email;
                _this.user.contact = doc.data().contact;
                _this.user.address = doc.data().address;
                _this.user.userId = doc.data().userId;
            }
            else {
                console.log("No such document!");
                _this.authProvider.showBasicAlert('Alert!', 'User data not found');
            }
        }, function (error) {
            console.log(error);
            //this.authProvider.showBasicAlert('Error', error.message);        
        });
    };
    ProfilePage.prototype.signOut = function () {
        var _this = this;
        this.authProvider.logoutUser().then(function (authData) {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
        }, function (error) {
            console.log(error);
        });
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-profile',template:/*ion-inline-start:"/home/advait/Projects/PWA/myMessUser/src/pages/profile/profile.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title >\n      myMess (Beta)\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n  \n<ion-content>\n  <!-- <ion-item no-lines>\n    <ion-avatar >\n      <img src="assets/imgs/profile.jpg">\n    </ion-avatar>\n  </ion-item> -->\n  <ion-list inset>    \n    <ion-label stacked>Full Name</ion-label>\n    <ion-item no-lines>\n      <ion-input disabled type="text" value="{{user.userName}}"></ion-input>\n    </ion-item>\n    <ion-label stacked>Email</ion-label>\n    <ion-item no-lines>\n      <ion-input disabled type="text" value="{{user.email}}"></ion-input>\n    </ion-item>\n    <ion-label stacked>Contact</ion-label>\n    <ion-item no-lines>\n      <ion-input disabled type="text" value="{{user.contact}}"></ion-input>\n    </ion-item>\n    <ion-label stacked>Address</ion-label>\n    <ion-item no-lines>\n      <ion-input disabled type="text" value="{{user.address.address}}"></ion-input>\n    </ion-item>\n    <ion-label stacked>City</ion-label>\n    <ion-item no-lines>\n      <ion-input disabled type="text" value="{{user.address.city}}"></ion-input>\n    </ion-item>    \n  </ion-list>\n  <ion-row padding>\n    <ion-col> \n      <button ion-button block (click)="signOut()">Logout</button>\n    </ion-col>  \n  </ion-row>\n</ion-content>'/*ion-inline-end:"/home/advait/Projects/PWA/myMessUser/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__validators_email__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RegisterPage = (function () {
    function RegisterPage(nav, authProvider, formBuilder, loadingCtrl, menu, afs) {
        this.nav = nav;
        this.authProvider = authProvider;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.menu = menu;
        this.afs = afs;
        this.user = {
            userId: '',
            userName: '',
            email: '',
            contact: null,
            address: null
        };
        this.menu = menu;
        this.menu.enable(false, 'myMenu');
        this.signupForm = formBuilder.group({
            userName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(5), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern('^[a-zA-Z\\s]*$')])],
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_5__validators_email__["a" /* EmailValidator */].isValid])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(6)])],
            contact: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(10)])],
            address: [''],
            city: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern('^[a-zA-Z\\s]*$')])]
        });
    }
    RegisterPage.prototype.signupUser = function () {
        var _this = this;
        if (!this.signupForm.valid) {
            console.log(this.signupForm.value);
        }
        else {
            this.authProvider.registerUser(this.signupForm.value.email, this.signupForm.value.password)
                .then(function (user) {
                _this.addUser(user);
            }, function (error) {
                _this.loading.dismiss().then(function () {
                    _this.authProvider.showBasicAlert('Registration failed!', error.message);
                });
            });
            this.loading = this.loadingCtrl.create({
                dismissOnPageChange: true,
            });
            this.loading.present();
        }
    };
    RegisterPage.prototype.addUser = function (user) {
        var _this = this;
        this.user.userId = user.uid;
        this.user.userName = this.signupForm.value.userName;
        this.user.email = this.signupForm.value.email;
        this.user.contact = this.signupForm.value.contact;
        this.user.address = {
            address: this.signupForm.value.address,
            city: this.signupForm.value.city
        };
        var userRef = this.afs.doc("user/" + user.uid);
        userRef.set(this.user)
            .then(function (data) {
            _this.authProvider.getUser().updateProfile({
                displayName: _this.user.userName,
                photoURL: ""
            })
                .then(function (data) {
                _this.authProvider.sendVerfication()
                    .then(function (data) {
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
                    _this.authProvider.showBasicAlert('Registered successfully!', "Please verify your email id to use services.");
                })
                    .catch(function (error) {
                    _this.authProvider.showBasicAlert("Verification link sending Failed!", error.message);
                    console.log("Verification link sending Failed!", error.message);
                });
            })
                .catch(function (error) {
                _this.authProvider.showBasicAlert("Profile update failed!", error.message);
                console.log("Profile update failed!", error.message);
            });
        })
            .catch(function (error) {
            _this.authProvider.showBasicAlert("Database update Failed!", error.message);
            console.log("Database update Failed!", error.message);
        });
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-register',template:/*ion-inline-start:"/home/advait/Projects/PWA/myMessUser/src/pages/register/register.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title >\n      myMess (Beta)\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n  \n  <ion-content padding>\n    <ion-list inset>\n      <form [formGroup]="signupForm" (submit)="signupUser()" novalidate>        \n        <ion-label stacked>Full Name</ion-label>\n        <ion-item>\n          <ion-input formControlName="userName" type="text"></ion-input>\n        </ion-item>\n        <p *ngIf="!signupForm.controls.userName.valid  && signupForm.controls.userName.dirty">\n          Enter a valid name (min. 5 characters)\n        </p>\n        \n        <ion-label stacked>Email</ion-label>\n        <ion-item>\n          <ion-input formControlName="email" type="email"></ion-input>\n        </ion-item>\n        <p *ngIf="!signupForm.controls.email.valid  && signupForm.controls.email.dirty">\n          Enter a valid email id\n        </p>\n               \n        <ion-label Stacked>Password</ion-label>\n        <ion-item>\n          <ion-input formControlName="password" type="password"></ion-input>\n        </ion-item>\n        <p *ngIf="!signupForm.controls.password.valid  && signupForm.controls.password.dirty">\n          Weak password (min. 6 characters)\n        </p>\n                \n        <ion-label stacked>Mobile Number</ion-label>\n        <ion-item>\n          <ion-input formControlName="contact" type="number"></ion-input>\n        </ion-item>\n        <p *ngIf="!signupForm.controls.contact.valid  && signupForm.controls.contact.dirty">\n          Enter a valid 10 digits mobile number\n        </p>\n\n        <ion-label stacked>Address</ion-label>\n        <ion-item>\n          <ion-textarea formControlName="address" type="text"></ion-textarea>\n        </ion-item>\n        \n        <ion-label stacked>City</ion-label>\n        <ion-item>\n          <ion-input formControlName="city" type="text"></ion-input>\n        </ion-item>\n        <p *ngIf="!signupForm.controls.city.valid  && signupForm.controls.city.dirty">\n          City is required\n        </p>    \n        <button ion-button margin-top block type="submit" [disabled]="!signupForm.valid">Create Account</button>      \n      </form>\n    </ion-list>\n  </ion-content>'/*ion-inline-end:"/home/advait/Projects/PWA/myMessUser/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validators_email__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ResetPasswordPage = (function () {
    function ResetPasswordPage(authProvider, formBuilder, nav, alertCtrl) {
        this.authProvider = authProvider;
        this.formBuilder = formBuilder;
        this.nav = nav;
        this.alertCtrl = alertCtrl;
        this.resetPasswordForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__validators_email__["a" /* EmailValidator */].isValid])],
        });
    }
    ResetPasswordPage.prototype.resetPassword = function () {
        var _this = this;
        if (!this.resetPasswordForm.valid) {
            console.log(this.resetPasswordForm.value);
        }
        else {
            this.authProvider.resetPassword(this.resetPasswordForm.value.email)
                .then(function (user) {
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
                _this.authProvider.showBasicAlert('Alert', 'We just sent a reset link to your registered email id.');
            }, function (error) {
                _this.authProvider.showBasicAlert('Error', error.message);
            });
        }
    };
    ResetPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-reset-password',template:/*ion-inline-start:"/home/advait/Projects/PWA/myMessUser/src/pages/reset-password/reset-password.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>\n        myMessAdmin (Beta)\n      </ion-title>\n    </ion-navbar>\n  </ion-header>  \n  \n  <ion-content padding>\n    <ion-list inset>\n      <form [formGroup]="resetPasswordForm" (submit)="resetPassword()" novalidate>  \n        <ion-label stacked>Email</ion-label>\n        <ion-item>        \n          <ion-input formControlName="email" type="email"></ion-input>\n        </ion-item>      \n        <p *ngIf="!resetPasswordForm.controls.email.valid  && resetPasswordForm.controls.email.dirty">\n          Please enter a valid email.\n        </p>  \n        <button ion-button margin-top block type="submit" [disabled]="!resetPasswordForm.valid">\n          Reset your Password\n        </button>  \n      </form>\n    </ion-list>\n  </ion-content>'/*ion-inline-end:"/home/advait/Projects/PWA/myMessUser/src/pages/reset-password/reset-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ResetPasswordPage);
    return ResetPasswordPage;
}());

//# sourceMappingURL=reset-password.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(303);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_elastic__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_elastic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng_elastic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_create_create__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_reviews_reviews__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_archieve_archieve__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_add_review_add_review__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_mess_detail_mess_detail__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_view_location_view_location__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_login_login__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_register_register__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_reset_password_reset_password__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_auth_auth__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angularfire2_auth__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angularfire2_firestore__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_geolocation__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















//Firebase




// Initialize Firebase
var config = {
    apiKey: "AIzaSyC_KeK56MdvteYU96PocSxfAaOgO9aVBSI",
    authDomain: "mymess-11f8c.firebaseapp.com",
    databaseURL: "https://mymess-11f8c.firebaseio.com",
    projectId: "mymess-11f8c",
    storageBucket: "mymess-11f8c.appspot.com",
    messagingSenderId: "201921251715"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_create_create__["a" /* CreatePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_reviews_reviews__["a" /* ReviewsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_archieve_archieve__["a" /* ArchievePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_add_review_add_review__["a" /* AddReviewPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_mess_detail_mess_detail__["a" /* MessDetailPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_view_location_view_location__["a" /* ViewLocationPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_reset_password_reset_password__["a" /* ResetPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ng_elastic__["ElasticModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_18_angularfire2__["a" /* AngularFireModule */].initializeApp(config),
                __WEBPACK_IMPORTED_MODULE_19_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_20_angularfire2_firestore__["b" /* AngularFirestoreModule */].enablePersistence()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_create_create__["a" /* CreatePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_reviews_reviews__["a" /* ReviewsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_add_review_add_review__["a" /* AddReviewPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_archieve_archieve__["a" /* ArchievePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_mess_detail_mess_detail__["a" /* MessDetailPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_view_location_view_location__["a" /* ViewLocationPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_reset_password_reset_password__["a" /* ResetPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_geolocation__["a" /* Geolocation */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_17__providers_auth_auth__["a" /* AuthProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(277);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthProvider = (function () {
    function AuthProvider(afAuth, alertCtrl) {
        var _this = this;
        this.afAuth = afAuth;
        this.alertCtrl = alertCtrl;
        this.currentUser = null;
        this.authState = this.afAuth.authState;
        this.authState.subscribe(function (user) {
            if (user) {
                _this.currentUser = user;
            }
            else {
                _this.currentUser = null;
            }
        });
    }
    AuthProvider.prototype.getAuthState = function () {
        return this.authState;
    };
    AuthProvider.prototype.getUser = function () {
        return this.currentUser;
    };
    AuthProvider.prototype.loginUser = function (email, password) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    };
    AuthProvider.prototype.resetPassword = function (email) {
        return this.afAuth.auth.sendPasswordResetEmail(email);
    };
    AuthProvider.prototype.logoutUser = function () {
        return this.afAuth.auth.signOut();
    };
    AuthProvider.prototype.registerUser = function (email, password) {
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
    };
    AuthProvider.prototype.sendVerfication = function () {
        return this.currentUser.sendEmailVerification();
    };
    AuthProvider.prototype.showBasicAlert = function (title, message) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_tabs_tabs__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_login_login__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyApp = (function () {
    function MyApp(authProvider) {
        this.authProvider = authProvider;
    }
    MyApp.prototype.ngOnInit = function () {
        var _this = this;
        this.authProvider.getAuthState().subscribe(function (user) {
            if (user) {
                if (user.emailVerified) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_1__pages_tabs_tabs__["a" /* TabsPage */];
                }
                else {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_login_login__["a" /* LoginPage */];
                }
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_login_login__["a" /* LoginPage */];
            }
        });
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/advait/Projects/PWA/myMessUser/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/advait/Projects/PWA/myMessUser/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreatePage = (function () {
    function CreatePage(navCtrl, loadingCtrl, navParams, formBuilder, authProvider, afs) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.authProvider = authProvider;
        this.afs = afs;
        this.menuForm = formBuilder.group({
            menuType: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            menuCategory: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            menuName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            timeFrom: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            timeTo: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            description: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            rate: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])]
        });
    }
    CreatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreatePage');
    };
    CreatePage.prototype.ionViewCanEnter = function () {
        if (this.authProvider.getUser() == null) {
            return false;
        }
        else {
            return true;
        }
    };
    CreatePage.prototype.addMenu = function () {
        var _this = this;
        if (!this.menuForm.valid) {
            console.log(this.menuForm.value);
        }
        else {
            this.menu = {
                menuId: this.afs.createId(),
                menuType: this.menuForm.value.menuType,
                menuCategory: this.menuForm.value.menuCategory,
                menuName: this.menuForm.value.menuName,
                timeFrom: new Date(this.menuForm.value.timeFrom),
                timeTo: new Date(this.menuForm.value.timeTo),
                description: this.menuForm.value.description,
                rate: parseFloat(this.menuForm.value.rate)
            };
            var docRef = this.afs.doc("mess/" + this.authProvider.getUser().uid + "/menu/" + this.menu.menuId);
            docRef.set(this.menu)
                .then(function (data) {
                _this.authProvider.showBasicAlert('Alert!', "Added successfully");
                _this.menuForm.reset();
                _this.loading.dismiss();
            })
                .catch(function (error) {
                _this.authProvider.showBasicAlert("Failed!", error.message);
                _this.menuForm.reset();
                _this.loading.dismiss();
                console.log("Failed!", error.message);
            });
            this.loading = this.loadingCtrl.create({ dismissOnPageChange: true });
            this.loading.present();
        }
    };
    CreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-create',template:/*ion-inline-start:"/home/advait/Projects/PWA/myMessUser/src/pages/create/create.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Add Menu</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <form [formGroup]="menuForm" (submit)="addMenu()" novalidate>             \n      <ion-item>\n        <ion-label stacked>Type</ion-label>          \n        <ion-select formControlName="menuType">\n          <ion-option selected value="false">Veg</ion-option>\n          <ion-option value="true">Non-Veg</ion-option>\n        </ion-select>\n      </ion-item> \n      <p *ngIf="!menuForm.controls.menuType.valid  && menuForm.controls.menuType.dirty">\n        Menu type is required.\n      </p>\n      \n      <ion-item>\n        <ion-label stacked>Catgory</ion-label>          \n        <ion-select formControlName="menuCategory">\n          <ion-option selected value="0">Breakfast</ion-option>\n          <ion-option value="1">Lunch</ion-option>\n          <ion-option value="2">Dinner</ion-option>\n        </ion-select>\n      </ion-item>            \n      <p *ngIf="!menuForm.controls.menuCategory.valid  && menuForm.controls.menuCategory.dirty">\n        Menu category is required.\n      </p>\n      \n      <ion-label class="label1" stacked>Timing From</ion-label>\n      <ion-item no-lines>\n        <ion-input formControlName="timeFrom" type="datetime-local"></ion-input>  \n      </ion-item>\n      <p *ngIf="!menuForm.controls.timeFrom.valid  && menuForm.controls.timeFrom.dirty">\n        Timing is required.\n      </p>\n\n      <ion-label class="label1" stacked>Timing To</ion-label>         \n      <ion-item no-lines>\n        <ion-input formControlName="timeTo" type="datetime-local"></ion-input>  \n      </ion-item>         \n      <p *ngIf="!menuForm.controls.timeTo.valid  && menuForm.controls.timeTo.dirty">\n        Timing is required.\n      </p>\n\n      <ion-label class="label1" stacked>Menu Name</ion-label>         \n      <ion-item no-lines>\n        <ion-input formControlName="menuName" type="text"></ion-input>    \n      </ion-item>       \n      <p *ngIf="!menuForm.controls.menuName.valid  && menuForm.controls.menuName.dirty">\n        Menu name is required.\n      </p>\n\n      <ion-label class="label1" stacked>Description</ion-label>         \n      <ion-item no-lines>\n        <ion-textarea formControlName="description" fz-elastic></ion-textarea>  \n      </ion-item>\n      <p *ngIf="!menuForm.controls.description.valid  && menuForm.controls.description.dirty">\n        Description is required.\n      </p>\n\n      <ion-label class="label1" stacked>Rate</ion-label>         \n      <ion-item no-lines>\n        <ion-input formControlName="rate" type="number"></ion-input>    \n      </ion-item>       \n      <p *ngIf="!menuForm.controls.rate.valid  && menuForm.controls.rate.dirty">\n        Rate is required.\n      </p>\n\n      <ion-list inset>\n        <button margin-top ion-button [disabled]="!menuForm.valid" type="submit" >Add Menu</button>      \n      </ion-list>\n    </form>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/advait/Projects/PWA/myMessUser/src/pages/create/create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], CreatePage);
    return CreatePage;
}());

//# sourceMappingURL=create.js.map

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArchievePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ArchievePage = (function () {
    function ArchievePage(navCtrl, authProvider, afs) {
        this.navCtrl = navCtrl;
        this.authProvider = authProvider;
        this.afs = afs;
        var d1 = new Date();
        d1.setHours(0, 0, 0, 0);
        var collRef = this.afs.collection("mess/" + this.authProvider.getUser().uid + "/menu", function (ref) { return ref.where('timeFrom', '<', d1).orderBy('timeFrom'); });
        this.items = collRef.valueChanges();
    }
    ArchievePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-archieve',template:/*ion-inline-start:"/home/advait/Projects/PWA/myMessUser/src/pages/archieve/archieve.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      myMess (Beta)\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngFor="let item of items | async">\n    <ion-card-content>\n      <ion-card-title>\n        {{item.menuName}}\n      </ion-card-title>\n      <p>\n        {{item.timeFrom | date: \'dd-MMMM ( hh:mm\'}} - {{item.timeTo | date: \'hh:mm a )\'}}<br/>\n        Rate {{item.rate}} Rupees<br/>\n        {{item.description}}\n      </p>\n    </ion-card-content>\n    <ion-row>\n        <ion-col col-1>\n            <button ion-button icon-only clear small>\n              <div style="width:20px; height:20px;">\n                <img *ngIf="item.menuType" src="assets/imgs/veg.png">\n                <img *ngIf="!item.menuType" src="assets/imgs/non-veg.png">\n              </div>\n            </button>\n          </ion-col>\n      <ion-col col-5>\n        <button ion-button clear small>\n            <div *ngIf="item.menuCategory==0">Breakfast</div>\n            <div *ngIf="item.menuCategory==1">Lunch</div>\n            <div *ngIf="item.menuCategory==2">Dinner</div>\n        </button>\n      </ion-col>      \n      <ion-col col-5>\n        <button ion-button clear small>\n          <div>1000 Reviews</div>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-card>  \n</ion-content>\n'/*ion-inline-end:"/home/advait/Projects/PWA/myMessUser/src/pages/archieve/archieve.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], ArchievePage);
    return ArchievePage;
}());

//# sourceMappingURL=archieve.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reset_password_reset_password__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__validators_email__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginPage = (function () {
    function LoginPage(navCtrl, loadingCtrl, menu, formBuilder, authProvider) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.menu = menu;
        this.formBuilder = formBuilder;
        this.authProvider = authProvider;
        this.menu = menu;
        this.menu.enable(false, 'myMenu');
        this.loginForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_7__validators_email__["a" /* EmailValidator */].isValid])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(6), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])]
        });
    }
    LoginPage.prototype.goToResetPassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__reset_password_reset_password__["a" /* ResetPasswordPage */]);
    };
    LoginPage.prototype.createAccount = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.loginUser = function () {
        var _this = this;
        if (!this.loginForm.valid) {
            console.log(this.loginForm.value);
        }
        else {
            this.authProvider.loginUser(this.loginForm.value.email, this.loginForm.value.password)
                .then(function (authData) {
                if (authData.emailVerified) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                }
                else {
                    _this.authProvider.showBasicAlert('Alert', "Please verify your email");
                    _this.loading.dismiss();
                }
            }, function (error) {
                _this.loading.dismiss().then(function () {
                    _this.authProvider.showBasicAlert('Error', error.message);
                });
            });
            this.loading = this.loadingCtrl.create({ dismissOnPageChange: true, });
            this.loading.present();
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"/home/advait/Projects/PWA/myMessUser/src/pages/login/login.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title >\n        myMess (Beta)\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n    <ion-list inset>\n      <div>\n        <img src="assets/imgs/logo.png">\n      </div>\n      \n      <form [formGroup]="loginForm" (submit)="loginUser()" novalidate>        \n        <ion-label stacked>Email</ion-label>          \n        <ion-item>\n            <ion-input formControlName="email" type="email"></ion-input>\n        </ion-item>        \n        <p *ngIf="!loginForm.controls.email.valid  && loginForm.controls.email.dirty">\n          Enter a valid email id\n        </p>\n        \n        <ion-label Stacked>Password</ion-label>\n        <ion-item>\n          <ion-input formControlName="password" type="password"></ion-input>\n        </ion-item>\n        <p *ngIf="!loginForm.controls.password.valid  && loginForm.controls.password.dirty">\n          Weak password (min. 6 characters)\n        </p>\n        \n        <button margin-top ion-button block type="submit" [disabled]="!loginForm.valid">Login</button>      \n      </form>\n    \n      <div padding-top style="text-align:center">\n        <a (click)="goToResetPassword()">\n          Forgot password?\n        </a>\n      </div>\n  \n      <div margin-top>\n        <ion-row>\n          <ion-col col-5><hr></ion-col>\n          <ion-col col-2 style="text-align:center;">OR</ion-col>\n          <ion-col col-5><hr></ion-col>\n        </ion-row>\n      </div>\n      \n      <div>\n          <button disabled ion-button icon-left block>\n              <ion-icon name="logo-google"></ion-icon>\n              &nbsp; Log in with Google\n          </button>      \n      </div>\n      <div padding-top style="text-align:center;">\n        <a (click)="createAccount()">\n          Don\'t have an account yet? Register here!\n        </a>\n      </div>\n    </ion-list>\n  </ion-content>'/*ion-inline-end:"/home/advait/Projects/PWA/myMessUser/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__["a" /* AuthProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[285]);
//# sourceMappingURL=main.js.map