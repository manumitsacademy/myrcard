(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<app-mainarea></app-mainarea>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/core.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/core.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>core works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/createpassword/createpassword.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/createpassword/createpassword.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<section id=\"login_page\" style=\"height:100%\">\r\n    <div class=\"row no-gutters\" >\r\n        <div class=\"col left_maincol  text-white \" style=\"background-color: #3075bf;\">\r\n            <div class=\"left_col\" >\r\n               \r\n                <a class=\"navbar-brand logohead\" href=\"#\" >\r\n                    <img src=\"/assets/logo_white.png\" width=\"35.3\" height=\"40\" class=\"d-inline-block align-top\" alt=\"\">\r\n                    <span class=\"ml-3 \" >Revenued</span>\r\n                </a>\r\n               \r\n                <h1>A card that cares less about FICO and more about your business</h1>\r\n                <!-- <p class=\"data\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, cupiditate?</p> -->\r\n            </div>\r\n            <footer>\r\n                <nav class=\"navbar navbar-expand-lg px-0 \">\r\n                    <ul class=\"navbar-nav text-uppercase\">\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link\" href=\"https://www.revenued.com/about/\">About Revenued</a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link\" href=\"https://www.revenued.com/contact/\">Contact us</a>\r\n                    </li>\r\n                    </ul>\r\n                </nav>\r\n            </footer>\r\n        </div>\r\n        \r\n        <div class=\"col d-flex justify-content-center right_maincol\">\r\n            \r\n            <div class=\"right_col\">                \r\n                <div class=\"right_col_head\">\r\n                    <h3>Welcome to RevCard,</h3>\r\n                    <h4> Create Password Below</h4>\r\n                </div>\r\n                <div [formGroup]=\"createPasswordForm\" id=\"form\">\r\n                    <div class=\"p-2\">\r\n                        <label for=\"password\">Password</label>\r\n                        <input formControlName=\"password\" type=\"password\" class=\"form-control p-1 \" placeholder=\"Enter Password\">\r\n                    </div>\r\n                    <div class=\"p-2\">\r\n                        <label for=\"confirmpassword\" >Confirm Password</label>\r\n                        <input type=\"password\" class=\"form-control p-1\" placeholder=\"************\">\r\n                    </div>\r\n                </div> \r\n                 <div class=\"text-center login_btn \">\r\n                     <button type=\"button\" class=\"btn  btn-center\" (click)=\"setPassword()\" >Set Password</button>\r\n                </div>\r\n                <div class=\"d-sm d-xl-none text-center mobile_signup\">\r\n                    <p clas=\"text-center\"><a href=\"#\">Not a member? &nbsp;&nbsp;<span>Sign Up</span></a></p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.7.0/css/all.css\" integrity=\"sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ\" crossorigin=\"anonymous\">\r\n<section id=\"main_footer\" class=\"d-none d-md-block d-lg-block d-xl-block\">\r\n    <div class=\"container\">\r\n        <div class=\"row no-gutters\">\r\n            <div class=\"col-md-4\">\r\n                <ul class=\"list-unstyled text-white\">\r\n                    <li><a href=\"https://www.credocard.com/about/\" target=\"_blank\">About Credocard</a></li>\r\n                    <li><a href=\"https://www.credocard.com/terms/\" target=\"_blank\">Terms of Service</a></li>\r\n                    <li><a href=\"https://www.credocard.com/privacy/\" target=\"_blank\">Privacy Policy</a></li>\r\n                    <li><a href=\"https://www.credocard.com/faq/\" target=\"_blank\">FAQs</a></li>\r\n                    <li><a href=\"https://www.credocard.com/contact/\" target=\"_blank\">Contact Us</a></li>\r\n                    <li><a href=\"https://www.credocard.com/site-map/\" target=\"_blank\">Site Map</a></li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                \r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                <div class=\"text-right text-white\">\r\n                    Credocard<br>\r\n                </div>\r\n                <div class=\"text-right text-white social_icons mt-3\">\r\n                    <a href=\"https://www.facebook.com/credocard\" target=\"_blank\"><i class=\"fab fa-facebook-f\" aria-hidden=\"true\"></i></a>\r\n                    <a href=\"https://twitter.com/credocard_com\" target=\"_blank\"><i class=\"fab fa-twitter\"></i></a>\r\n                    <a href=\"https://www.linkedin.com/company/credocard/\" target=\"_blank\"><i class=\"fab fa-linkedin-in\"></i></a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row no-gutters copy\">\r\n            <div class=\"col-md-12\">\r\n                <a href=\"https://www.credocard.com/about/\" target=\"_blank\"><p>&copy;2021 Credocard | All Rights Reserved</p></a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/forgotpassword/forgotpassword.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/forgotpassword/forgotpassword.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"login_page\" style=\"height:100%\">\r\n    <div class=\"row no-gutters\">\r\n        <div class=\"col d-flex justify-content-center right_maincol\">\r\n\r\n            <div class=\"right_col\">\r\n                <div class=\"right_col_head\">\r\n                    <div class=\"d-flex text-center justify-content-center\">\r\n                        <h3>Welcome to <span>Revenued</span></h3>\r\n                    </div>\r\n                </div>\r\n                <div [formGroup]=\"forgotPasswordForm\" id=\"form\">\r\n                    <div class=\"p-2\">\r\n                        <label for=\"password\" [class.field-focus]=\"isFieldFocussed\">Enter Your Email Address</label>\r\n                        <input formControlName=\"email\" type=\"text\" class=\"form-control p-1\" placeholder=\"Email Address\"\r\n                            (focus)=\"forgotPwdOnFocus()\" (focusout)=\"forgotPwdOnFocusOut()\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"text-center login_btn\">\r\n                    <button type=\"button\" class=\"btn btn-center login-button btn-responsive\"\r\n                        (click)=\"forgotPassword()\">Reset\r\n                        Password</button>\r\n                </div>\r\n                <p class=\"text-center p-2\">\r\n                    <a href=\"/login\" class=\"for_pass\">Login</a>\r\n                </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<link href=\"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" rel=\"stylesheet\"\r\n  integrity=\"sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN\" crossorigin=\"anonymous\">\r\n\r\n<section id=\"main_logo\" [ngClass]=\"divbg\" class=\"d-none d-xl-block d-md-block\">\r\n  <div class=\"container\">\r\n    <nav class=\"navbar navbar-expand-lg p-0\">\r\n      <div class=\"navbar-brand d-inline\">\r\n        <a routerLink=\"/dashboard\"><img src=\"/assets/credo-card-logo.png\" class=\"img-fluid d-inline\" alt=\"\"></a>\r\n      </div>\r\n      <div class=\"ml-auto mt-3 right_col\">\r\n        <div class=\"dropdown d-inline-block ml-4 w-100\">\r\n          <a class=\"dropdown-toggle\" href=\"#\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\r\n            aria-expanded=\"false\">\r\n            <p class=\"d-inline\">{{legalName}}<i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i>\r\n\r\n            </p>\r\n          </a>\r\n          <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n            <a class=\"dropdown-item\" (click)=\"changePassword()\">Change Password</a>\r\n            <a class=\"dropdown-item sign-out\" (click)=\"signout()\">Sign Out</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </nav>\r\n  </div>\r\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/login/login.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/login/login.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"login_page\" style=\"height:100%\" *ngIf=\"!loggedIn\">\r\n    <div class=\"row no-gutters\">\r\n        <div class=\"col d-flex justify-content-center right_maincol\">\r\n            <div class=\"right_col\">\r\n                <div class=\"right_col_head\">\r\n                    <div class=\"d-flex text-center justify-content-center\">\r\n                        <h3>Welcome to <span>Credocard</span></h3>\r\n                    </div>\r\n                </div>\r\n                <div [formGroup]=\"loginForm\" id=\"form\">\r\n                    <div>\r\n                        <label for=\"email\" [class.field-focus]=\"isEmailFocussed\">Email Address</label>\r\n                        <input formControlName=\"email\" type=\"text\" class=\"form-control p-0 email-input\"\r\n                            placeholder=\"User Email\" (focus)=\"emailOnFocus()\" (focusout)=\"emailOnFocusOut()\">\r\n                    </div>\r\n                    <div class=\"passwordL\">\r\n                        <label for=\"password\" [class.field-focus]=\"isPwdFocussed\">Password</label>\r\n                        <input formControlName=\"password\" type=\"password\" class=\"form-control p-0 pwd-input\"\r\n                            placeholder=\"************\" (focus)=\"pwdOnFocus()\" (focusout)=\"pwdOnFocusOut()\">\r\n                    </div>\r\n\r\n                    <div class=\"text-danger\" *ngIf=\"failedLogin\">\r\n                        <h6>Username and Password mismatch</h6>\r\n                    </div>\r\n\r\n                </div>\r\n                <p class=\"text-right \"><a routerLink=\"/forgotpassword\" class=\"for_pass \">Forgot Password?</a></p>\r\n                <div class=\"text-center login_btn\">\r\n                    <button type=\"button\" class=\"btn btn-center login-button btn-responsive\" (click)=\"login(loginForm)\">Login</button>\r\n                </div>\r\n                <div class=\"text-center mt-4 register\">\r\n                    <span routerLink=\"/register\">Register</span>      \r\n                </div>          \r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<div *ngIf=\"loggedIn && loginForm.valid\">\r\n    <div class=\"loader page-loader\"></div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/mainarea/mainarea.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/mainarea/mainarea.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<router-outlet></router-outlet>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/register/register.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/register/register.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"login_page\" style=\"height:100%\">\n    <div class=\"row no-gutters\">\n        <div class=\"col d-flex justify-content-center right_maincol\">\n            <div class=\"right_col\">\n                <div class=\"right_col_head\">\n                    <div class=\"d-flex text-center justify-content-center\">\n                        <h3>Register in <span>Credocard</span></h3>\n                    </div>\n                </div>\n                <div [formGroup]=\"registerForm\" id=\"form\">\n                    <div>\n                        <label for=\"uname\" [class.field-focus]=\"isUnameFocussed\">User Name</label>\n                        <input formControlName=\"uname\" type=\"text\" class=\"form-control p-0\"\n                            placeholder=\"User Name\" (focus)=\"unameOnFocus()\" (focusout)=\"unameOnFocusOut()\">\n                    </div>\n                    <div class=\"emailP\">\n                        <label for=\"email\" [class.field-focus]=\"isEmailFocussed\">Email Address</label>\n                        <input formControlName=\"email\" type=\"text\" class=\"form-control p-0\"\n                            placeholder=\"User Email\" (focus)=\"emailOnFocus()\" (focusout)=\"emailOnFocusOut()\">\n                    </div>\n                    <div class=\"passwordL\">\n                        <label for=\"password\" [class.field-focus]=\"isPwdFocussed\">Password</label>\n                        <input formControlName=\"password\" type=\"password\" class=\"form-control p-0\"\n                            placeholder=\"************\" (focus)=\"pwdOnFocus()\" (focusout)=\"pwdOnFocusOut()\">\n                    </div>\n\n                </div>\n                <div class=\"text-center login_btn\">\n                    <button type=\"button\" class=\"btn btn-center login-button btn-responsive\" (click)=\"register()\">Register</button>\n                </div>   \n                <div class=\"text-center mt-4 register\">\n                    <span routerLink=\"/login\">Login</span>      \n                </div>       \n            </div>\n        </div>\n    </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/login/login.component */ "./src/app/shared/login/login.component.ts");
/* harmony import */ var _shared_createpassword_createpassword_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/createpassword/createpassword.component */ "./src/app/shared/createpassword/createpassword.component.ts");
/* harmony import */ var _shared_forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/forgotpassword/forgotpassword.component */ "./src/app/shared/forgotpassword/forgotpassword.component.ts");
/* harmony import */ var _shared_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/register/register.component */ "./src/app/shared/register/register.component.ts");







const routes = [
    { path: '', component: _shared_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'login', component: _shared_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _shared_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"] },
    { path: 'createpassword', component: _shared_createpassword_createpassword_component__WEBPACK_IMPORTED_MODULE_4__["CreatepasswordComponent"] },
    { path: 'forgotpassword', component: _shared_forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_5__["ForgotpasswordComponent"] },
    { path: 'dashboard', loadChildren: () => __webpack_require__.e(/*! import() | dashboard-dashboard-module */ "dashboard-dashboard-module").then(__webpack_require__.bind(null, /*! ./dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts")).then(m => m.DashboardModule) }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'revcarddev';
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _core_core_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/core.component */ "./src/app/core/core.component.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");













let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _core_core_component__WEBPACK_IMPORTED_MODULE_8__["CoreComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["PopoverModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["TooltipModule"].forRoot(),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["PaginationModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["ModalModule"].forRoot()
        ],
        providers: [_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



window.global = window;
let AuthService = class AuthService {
    constructor(router) {
        this.router = router;
    }
    _setSession(authResult, profile) {
        // Save authentication data and update login status subject
        this.expiresAt = authResult.expiresIn * 1000 + Date.now();
        this.accessToken = authResult.accessToken;
        this.userProfile = profile;
        this.authenticated = true;
    }
    get isLoggedIn() {
        // Check if current date is before token
        // expiration and user is signed in locally
        //return Date.now() < this.expiresAt && this.authenticated;
        return window.localStorage.getItem('token') != null;
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthService);



/***/ }),

/***/ "./src/app/core/account.service.ts":
/*!*****************************************!*\
  !*** ./src/app/core/account.service.ts ***!
  \*****************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_model_mock_transaction_history_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/model/mock-transaction-history.json */ "./src/app/core/model/mock-transaction-history.json");
var src_app_core_model_mock_transaction_history_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/app/core/model/mock-transaction-history.json */ "./src/app/core/model/mock-transaction-history.json", 1);
/* harmony import */ var src_app_core_model_mock_account_summary_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/model/mock-account-summary.json */ "./src/app/core/model/mock-account-summary.json");
var src_app_core_model_mock_account_summary_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/app/core/model/mock-account-summary.json */ "./src/app/core/model/mock-account-summary.json", 1);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let AccountService = class AccountService {
    constructor() { }
    getAccountSummary() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(src_app_core_model_mock_account_summary_json__WEBPACK_IMPORTED_MODULE_3__);
    }
    getTransactionHistory() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(src_app_core_model_mock_transaction_history_json__WEBPACK_IMPORTED_MODULE_2__);
    }
};
AccountService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AccountService);



/***/ }),

/***/ "./src/app/core/authentication.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/authentication.service.ts ***!
  \************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let AuthenticationService = class AuthenticationService {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this.updatePwdUrl = "https://revcard.herokuapp.com/api/v1/updatePassword";
        this.forgotPwdUrl = "https://revcard.herokuapp.com/api/v1/forgotPassword";
        this.userUrl = "http://localhost:3000/users";
        this.credentials = {
            "email": "admin",
            "password": "password"
        };
        this.loggedInEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    loggedIn() {
        this.loggedInEvent.emit(true);
    }
    loggedOut() {
        this.loggedInEvent.emit(false);
    }
    signout() {
        var res = window.confirm("Are you Sure!");
        if (res) {
            window.localStorage.removeItem('token');
            this.router.navigate(['/login']);
        }
    }
    registerUser(user) {
        this.http.post(this.userUrl, user).subscribe((res) => {
            alert("Registration Successful");
            this.router.navigate(["/login"]);
        });
    }
    appLogin(loginForm) {
        if (loginForm.email === this.credentials.email && loginForm.password === this.credentials.password) {
            this.router.navigate(["/dashboard"]);
        }
        else {
            alert("wrong credentials");
        }
        //this.router.navigate(["/dashboard"]);
        /* this.http.get<any>(this.userUrl + `?email=${loginForm.email}&password=${loginForm.password}`).subscribe((res)=>{
          if(res.length){
            this.router.navigate(["/dashboard"]);
          }
          else{
            alert("wrong credentials");
          }
          
        }); */
    }
    updatePwd(cred) {
        return this.http.post(this.updatePwdUrl, cred);
    }
    setPwd(pwd) {
        return this.http.post(this.updatePwdUrl, pwd);
    }
    forgotPwd(pwd) {
        const headers = { 'appName': 'REV_CARD' };
        return this.http.post(this.forgotPwdUrl, pwd, { headers });
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthenticationService);



/***/ }),

/***/ "./src/app/core/core.component.css":
/*!*****************************************!*\
  !*** ./src/app/core/core.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29yZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/core/core.component.ts":
/*!****************************************!*\
  !*** ./src/app/core/core.component.ts ***!
  \****************************************/
/*! exports provided: CoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreComponent", function() { return CoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CoreComponent = class CoreComponent {
    constructor() { }
    ngOnInit() {
    }
};
CoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-core',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./core.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/core.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./core.component.css */ "./src/app/core/core.component.css")).default]
    })
], CoreComponent);



/***/ }),

/***/ "./src/app/core/model/mock-account-summary.json":
/*!******************************************************!*\
  !*** ./src/app/core/model/mock-account-summary.json ***!
  \******************************************************/
/*! exports provided: Result, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"Result\":{\"RevAccountSummary\":{\"limit\":{\"maxTrxnAmt\":50000,\"maxNextAmt\":677.86},\"summary\":{\"currentBal\":19664.20756,\"pendingBal\":10000}}}}");

/***/ }),

/***/ "./src/app/core/model/mock-transaction-history.json":
/*!**********************************************************!*\
  !*** ./src/app/core/model/mock-transaction-history.json ***!
  \**********************************************************/
/*! exports provided: Result, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"Result\":{\"array\":{\"RevTrxn\":[{\"id\":1,\"trxn\":{\"recDate\":\"08/28/2020\",\"cpty\":{\"name\":\"FLEETPRIDE810\"},\"status\":\"ctsCleared\",\"amount\":20000,\"legalName\":\"Org Name\"}},{\"id\":2,\"trxn\":{\"recDate\":\"08/28/2020\",\"cpty\":{\"name\":\"FLEETPRIDE810\"},\"status\":\"ctsCleared\",\"amount\":20000,\"legalName\":\"Org Name\"}},{\"id\":3,\"trxn\":{\"recDate\":\"08/28/2020\",\"cpty\":{\"name\":\"FLEETPRIDE810\"},\"status\":\"ctsCleared\",\"amount\":20000,\"legalName\":\"Org Name\"}},{\"id\":4,\"trxn\":{\"recDate\":\"08/28/2020\",\"cpty\":{\"name\":\"FLEETPRIDE810\"},\"status\":\"ctsCleared\",\"amount\":20000,\"legalName\":\"Org Name\"}},{\"id\":5,\"trxn\":{\"recDate\":\"08/28/2020\",\"cpty\":{\"name\":\"FLEETPRIDE810\"},\"status\":\"ctsCleared\",\"amount\":20000,\"legalName\":\"Org Name\"}}]}}}");

/***/ }),

/***/ "./src/app/shared/createpassword/createpassword.component.css":
/*!********************************************************************!*\
  !*** ./src/app/shared/createpassword/createpassword.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("*{\r\n  font-family: 'Montserrat', sans-serif;\r\n}\r\n#login_page .row{\r\n  height: 100%;\r\n}\r\n#login_page .left_col{\r\n \r\n    padding-left:25%;\r\n  \r\n}\r\n#login_page .left_col p{\r\n  width:411px;\r\n}\r\n#login_page .left_col h1{\r\n  color: #FFFFFF;\r\n  font-size: 50px;\r\n  font-weight: 900;\r\n  letter-spacing: 0.8px;\r\n  line-height: 60px;\r\n  height: 120px;\r\n  width: 476px;\r\n  \r\n}\r\n#login_page .left_col .data{\r\n  font-size: 1rem;\r\n  color:#ffffff;\r\n  margin-top:24px;\r\n}\r\n#login_page .left_col .logohead{\r\n \r\n  text-decoration: none;\r\n  color:white;\r\n  margin-bottom:80px;\r\n  margin-top:65px;\r\n  \r\n\r\n  \r\n}\r\n#login_page .left_col .logohead span{\r\n  color: #FFFFFF;\r\n  font-size: 26.67px;\r\n  font-weight: 600;\r\n  letter-spacing: 0.8px;\r\n  height: 33px;\r\n  width: 142px;\r\n  \r\n}\r\n#login_page .right_col .right_col_head{\r\n  \r\n  height: 36px;\r\n  width: 304px;\r\n  \r\n  \r\n \r\n \r\n}\r\n#login_page .right_col_head h3{\r\n  height: 36px;\r\n  width: 304px;\r\n  font-size: 30px;\r\n  font-weight: bold;\r\n  letter-spacing: 0;\r\n  line-height: 36px;\r\n}\r\n#login_page .right_col span{\r\n  color: #2B73B0;\r\n}\r\n#login_page .right_col_head p{\r\n  \r\n  width: 411px;\r\n  color: #90A2B1;\r\n  font-size: 16px;\r\n  letter-spacing: 0;\r\n  line-height: 19px;\r\n  \r\n}\r\n#login_page #form{\r\n  margin-top:120px;\r\n}\r\n#login_page .right_col{\r\n  height: 409px;\r\n  width: 411px;\r\n  margin-top:198px;\r\n}\r\n#login_page .right_col label{\r\n  \r\n  color: #90A2B1;\r\n  font-size: 12px;\r\n  font-weight: bold;\r\n  letter-spacing: 0;\r\n  line-height: 15px;\r\n  text-transform: uppercase;\r\n  margin-bottom:0px;\r\n}\r\n#login_page .right_col input,\r\n#login_page .right_col select.form-control {\r\n  background: transparent;\r\n  border: none;\r\n  border-bottom: 1px solid #dddddd;\r\n  box-shadow: none;\r\n  border-radius: 0;\r\n\r\n  box-sizing: border-box;\r\n  color: #072843;\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n  letter-spacing: 0;\r\n  line-height: 19px;\r\n}\r\n#login_page .passwordL{\r\n  margin-top:40px;\r\n}\r\n#login_page .right_col .for_pass{\r\n  \r\n  color: #2B73B0;\r\n  font-size: 12px;\r\n  font-weight: bold;\r\n  letter-spacing: 0;\r\n  line-height: 15px;\r\n  \r\n\r\n}\r\ninput:focus,\r\nselect.form-control:focus {\r\n  box-shadow: none;\r\n}\r\n.left_maincol{\r\n  min-height: 100%;\r\n  display: grid;\r\n  grid-template-rows: 1fr auto;\r\n}\r\nfooter {\r\n  margin-left:25%;\r\n  grid-row-start: 2;\r\n  grid-row-end: 3;\r\n \r\n  border-top: 1px solid #4B6377;\r\n}\r\n#login_page footer a{\r\n  text-decoration: none;\r\n  color:white;\r\n  font-size:12px;\r\n}\r\n.btn{\r\n  color:#FFFFFF;\r\n  font-size: 1rem;\r\n  height: 48px;\r\n  width: 255px;\r\n  border-radius: 4px;\r\n  background-color: #D46929;\r\n  font-weight:700;\r\n}\r\n#login_page .right_col .login_btn{\r\n  margin-top:40px;\r\n}\r\n@media (max-width: 576px) { \r\n  .left_maincol{\r\n     display:none;\r\n  }\r\n}\r\n@media (max-width:576px){\r\n  .right_col{\r\n    width:85% !important;\r\n    margin-top:140px !important;\r\n    \r\n  }\r\n}\r\n@media(max-width:360px){\r\n  .right_col{\r\n    margin-top:100px !important;\r\n  }\r\n}\r\n@media (max-width:576px){\r\n  .btn{\r\n    color:#072843 !important;\r\n    width:100% !important;\r\n    \r\n  }\r\n}\r\n.fa-arrow-left{\r\n  color:#ce6b20;\r\n  font-size:1rem;\r\n}\r\n@media (max-width:576px){\r\n  #login_page .right_col_head p{\r\n    width:100% !important;\r\n  }\r\n}\r\n#login_page .mobile_signup{\r\n  font-size:12px;\r\n  margin-top:12px;\r\n  font-weight:bold;\r\n  \r\n}\r\n#login_page .mobile_signup a{\r\n  text-decoration:none;\r\n  color:#90A2B1;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NyZWF0ZXBhc3N3b3JkL2NyZWF0ZXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQ0FBcUM7QUFDdkM7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBOztJQUVJLGdCQUFnQjs7QUFFcEI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsWUFBWTs7QUFFZDtBQUNBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixlQUFlO0FBQ2pCO0FBQ0E7O0VBRUUscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZUFBZTs7OztBQUlqQjtBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixZQUFZOztBQUVkO0FBR0E7O0VBRUUsWUFBWTtFQUNaLFlBQVk7Ozs7O0FBS2Q7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7O0VBRUUsWUFBWTtFQUNaLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGlCQUFpQjs7QUFFbkI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkI7QUFDQTs7RUFFRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGdDQUFnQztFQUdoQyxnQkFBZ0I7RUFDaEIsZ0JBQWdCOztFQUVoQixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBOztFQUVFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixpQkFBaUI7OztBQUduQjtBQUNBOztFQUdFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYiw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZUFBZTs7RUFFZiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsY0FBYztBQUNoQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0U7S0FDRyxZQUFZO0VBQ2Y7QUFDRjtBQUNBO0VBQ0U7SUFDRSxvQkFBb0I7SUFDcEIsMkJBQTJCOztFQUU3QjtBQUNGO0FBQ0E7RUFDRTtJQUNFLDJCQUEyQjtFQUM3QjtBQUNGO0FBRUE7RUFDRTtJQUNFLHdCQUF3QjtJQUN4QixxQkFBcUI7O0VBRXZCO0FBQ0Y7QUFDQTtFQUNFLGFBQWE7RUFDYixjQUFjO0FBQ2hCO0FBQ0E7RUFDRTtJQUNFLHFCQUFxQjtFQUN2QjtBQUNGO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjs7QUFFbEI7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY3JlYXRlcGFzc3dvcmQvY3JlYXRlcGFzc3dvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxufVxyXG4jbG9naW5fcGFnZSAucm93e1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4jbG9naW5fcGFnZSAubGVmdF9jb2x7XHJcbiBcclxuICAgIHBhZGRpbmctbGVmdDoyNSU7XHJcbiAgXHJcbn1cclxuI2xvZ2luX3BhZ2UgLmxlZnRfY29sIHB7XHJcbiAgd2lkdGg6NDExcHg7XHJcbn1cclxuI2xvZ2luX3BhZ2UgLmxlZnRfY29sIGgxe1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG4gIGZvbnQtc2l6ZTogNTBweDtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjhweDtcclxuICBsaW5lLWhlaWdodDogNjBweDtcclxuICBoZWlnaHQ6IDEyMHB4O1xyXG4gIHdpZHRoOiA0NzZweDtcclxuICBcclxufVxyXG4jbG9naW5fcGFnZSAubGVmdF9jb2wgLmRhdGF7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGNvbG9yOiNmZmZmZmY7XHJcbiAgbWFyZ2luLXRvcDoyNHB4O1xyXG59XHJcbiNsb2dpbl9wYWdlIC5sZWZ0X2NvbCAubG9nb2hlYWR7XHJcbiBcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgbWFyZ2luLWJvdHRvbTo4MHB4O1xyXG4gIG1hcmdpbi10b3A6NjVweDtcclxuICBcclxuXHJcbiAgXHJcbn1cclxuXHJcbiNsb2dpbl9wYWdlIC5sZWZ0X2NvbCAubG9nb2hlYWQgc3BhbntcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICBmb250LXNpemU6IDI2LjY3cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMC44cHg7XHJcbiAgaGVpZ2h0OiAzM3B4O1xyXG4gIHdpZHRoOiAxNDJweDtcclxuICBcclxufVxyXG5cclxuXHJcbiNsb2dpbl9wYWdlIC5yaWdodF9jb2wgLnJpZ2h0X2NvbF9oZWFke1xyXG4gIFxyXG4gIGhlaWdodDogMzZweDtcclxuICB3aWR0aDogMzA0cHg7XHJcbiAgXHJcbiAgXHJcbiBcclxuIFxyXG59XHJcbiNsb2dpbl9wYWdlIC5yaWdodF9jb2xfaGVhZCBoM3tcclxuICBoZWlnaHQ6IDM2cHg7XHJcbiAgd2lkdGg6IDMwNHB4O1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBsZXR0ZXItc3BhY2luZzogMDtcclxuICBsaW5lLWhlaWdodDogMzZweDtcclxufVxyXG4jbG9naW5fcGFnZSAucmlnaHRfY29sIHNwYW57XHJcbiAgY29sb3I6ICMyQjczQjA7XHJcbn1cclxuI2xvZ2luX3BhZ2UgLnJpZ2h0X2NvbF9oZWFkIHB7XHJcbiAgXHJcbiAgd2lkdGg6IDQxMXB4O1xyXG4gIGNvbG9yOiAjOTBBMkIxO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsZXR0ZXItc3BhY2luZzogMDtcclxuICBsaW5lLWhlaWdodDogMTlweDtcclxuICBcclxufVxyXG4jbG9naW5fcGFnZSAjZm9ybXtcclxuICBtYXJnaW4tdG9wOjEyMHB4O1xyXG59XHJcbiNsb2dpbl9wYWdlIC5yaWdodF9jb2x7XHJcbiAgaGVpZ2h0OiA0MDlweDtcclxuICB3aWR0aDogNDExcHg7XHJcbiAgbWFyZ2luLXRvcDoxOThweDtcclxufVxyXG4jbG9naW5fcGFnZSAucmlnaHRfY29sIGxhYmVse1xyXG4gIFxyXG4gIGNvbG9yOiAjOTBBMkIxO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBsZXR0ZXItc3BhY2luZzogMDtcclxuICBsaW5lLWhlaWdodDogMTVweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIG1hcmdpbi1ib3R0b206MHB4O1xyXG59XHJcbiNsb2dpbl9wYWdlIC5yaWdodF9jb2wgaW5wdXQsXHJcbiNsb2dpbl9wYWdlIC5yaWdodF9jb2wgc2VsZWN0LmZvcm0tY29udHJvbCB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkZGRkO1xyXG4gXHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBjb2xvcjogIzA3Mjg0MztcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbn1cclxuI2xvZ2luX3BhZ2UgLnBhc3N3b3JkTHtcclxuICBtYXJnaW4tdG9wOjQwcHg7XHJcbn1cclxuI2xvZ2luX3BhZ2UgLnJpZ2h0X2NvbCAuZm9yX3Bhc3N7XHJcbiAgXHJcbiAgY29sb3I6ICMyQjczQjA7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gIFxyXG5cclxufVxyXG5pbnB1dDpmb2N1cyxcclxuc2VsZWN0LmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5sZWZ0X21haW5jb2x7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG87XHJcbn1cclxuZm9vdGVyIHtcclxuICBtYXJnaW4tbGVmdDoyNSU7XHJcbiAgZ3JpZC1yb3ctc3RhcnQ6IDI7XHJcbiAgZ3JpZC1yb3ctZW5kOiAzO1xyXG4gXHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM0QjYzNzc7XHJcbn1cclxuI2xvZ2luX3BhZ2UgZm9vdGVyIGF7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIGZvbnQtc2l6ZToxMnB4O1xyXG59XHJcbi5idG57XHJcbiAgY29sb3I6I0ZGRkZGRjtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG4gIHdpZHRoOiAyNTVweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Q0NjkyOTtcclxuICBmb250LXdlaWdodDo3MDA7XHJcbn1cclxuI2xvZ2luX3BhZ2UgLnJpZ2h0X2NvbCAubG9naW5fYnRue1xyXG4gIG1hcmdpbi10b3A6NDBweDtcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHsgXHJcbiAgLmxlZnRfbWFpbmNvbHtcclxuICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOjU3NnB4KXtcclxuICAucmlnaHRfY29se1xyXG4gICAgd2lkdGg6ODUlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOjE0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBcclxuICB9XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDozNjBweCl7XHJcbiAgLnJpZ2h0X2NvbHtcclxuICAgIG1hcmdpbi10b3A6MTAwcHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjU3NnB4KXtcclxuICAuYnRue1xyXG4gICAgY29sb3I6IzA3Mjg0MyAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6MTAwJSAhaW1wb3J0YW50O1xyXG4gICAgXHJcbiAgfVxyXG59XHJcbi5mYS1hcnJvdy1sZWZ0e1xyXG4gIGNvbG9yOiNjZTZiMjA7XHJcbiAgZm9udC1zaXplOjFyZW07XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6NTc2cHgpe1xyXG4gICNsb2dpbl9wYWdlIC5yaWdodF9jb2xfaGVhZCBwe1xyXG4gICAgd2lkdGg6MTAwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4jbG9naW5fcGFnZSAubW9iaWxlX3NpZ251cHtcclxuICBmb250LXNpemU6MTJweDtcclxuICBtYXJnaW4tdG9wOjEycHg7XHJcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICBcclxufVxyXG4jbG9naW5fcGFnZSAubW9iaWxlX3NpZ251cCBhe1xyXG4gIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG4gIGNvbG9yOiM5MEEyQjE7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/shared/createpassword/createpassword.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/createpassword/createpassword.component.ts ***!
  \*******************************************************************/
/*! exports provided: CreatepasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatepasswordComponent", function() { return CreatepasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_core_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/authentication.service */ "./src/app/core/authentication.service.ts");






let CreatepasswordComponent = class CreatepasswordComponent {
    constructor(authService, router, activatedRouter, fb) {
        this.authService = authService;
        this.router = router;
        this.activatedRouter = activatedRouter;
        this.fb = fb;
        this.createPasswordForm = this.fb.group({
            email: [],
            password: [],
            passwordToken: []
        });
    }
    ngOnInit() {
        this.activatedRouter.queryParams.subscribe(({ email, passwordToken }) => {
            this.email = email;
            this.passwordToken = passwordToken;
        });
    }
    setPassword() {
        this.authService.setPwd(this.createPasswordForm.value)
            .subscribe(() => {
            this.router.navigate([`${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl}login`]);
        });
    }
};
CreatepasswordComponent.ctorParameters = () => [
    { type: src_app_core_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
CreatepasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-createpassword',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./createpassword.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/createpassword/createpassword.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./createpassword.component.css */ "./src/app/shared/createpassword/createpassword.component.css")).default]
    })
], CreatepasswordComponent);



/***/ }),

/***/ "./src/app/shared/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("*{\r\n    font-family: 'Montserrat', sans-serif;\r\n}\r\n#main_footer{\r\n    background-color: #33485a;\r\n    font-size: 1.1rem;\r\n    font-weight: 400;\r\n    line-height: 1.5;\r\n    padding:50px 0;\r\n    margin-top:2%;\r\n}\r\n#main_footer ul li{\r\n    margin-bottom: 5px;\r\n  }\r\n#main_footer ul li a{\r\n      text-decoration: none;\r\n      color:white;\r\n  }\r\n#main_footer .text_head{\r\n      font-weight:800;\r\n  }\r\n#main_footer .social_icons a{\r\n    text-decoration: none;\r\n    color:#7c7b7b;\r\n  }\r\n.fa-facebook-f, .fa-twitter, .fa-linkedin-in{\r\n      background-color:white;\r\n      padding:2%;\r\n      border-radius: 50%;\r\n      width:10%;\r\n      height:10%;\r\n      text-align:center;\r\n      -webkit-box-align: center;\r\n              align-items: center;\r\n      margin-left:10px;\r\n  }\r\n#main_footer .copy a{\r\n      text-decoration: none;\r\n      color:white;\r\n      text-align: right;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFDQUFxQztBQUN6QztBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxhQUFhO0FBQ2pCO0FBR0U7SUFDRSxrQkFBa0I7RUFDcEI7QUFDQTtNQUNJLHFCQUFxQjtNQUNyQixXQUFXO0VBQ2Y7QUFDQTtNQUNJLGVBQWU7RUFDbkI7QUFDQTtJQUNFLHFCQUFxQjtJQUNyQixhQUFhO0VBQ2Y7QUFDQTtNQUNJLHNCQUFzQjtNQUN0QixVQUFVO01BQ1Ysa0JBQWtCO01BQ2xCLFNBQVM7TUFDVCxVQUFVO01BQ1YsaUJBQWlCO01BQ2pCLHlCQUFtQjtjQUFuQixtQkFBbUI7TUFDbkIsZ0JBQWdCO0VBQ3BCO0FBQ0E7TUFDSSxxQkFBcUI7TUFDckIsV0FBVztNQUNYLGlCQUFpQjtFQUNyQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxufVxyXG4jbWFpbl9mb290ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM0ODVhO1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIHBhZGRpbmc6NTBweCAwO1xyXG4gICAgbWFyZ2luLXRvcDoyJTtcclxufVxyXG5cclxuXHJcbiAgI21haW5fZm9vdGVyIHVsIGxpe1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIH1cclxuICAjbWFpbl9mb290ZXIgdWwgbGkgYXtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBjb2xvcjp3aGl0ZTtcclxuICB9XHJcbiAgI21haW5fZm9vdGVyIC50ZXh0X2hlYWR7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OjgwMDtcclxuICB9XHJcbiAgI21haW5fZm9vdGVyIC5zb2NpYWxfaWNvbnMgYXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiM3YzdiN2I7XHJcbiAgfVxyXG4gIC5mYS1mYWNlYm9vay1mLCAuZmEtdHdpdHRlciwgLmZhLWxpbmtlZGluLWlue1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG4gICAgICBwYWRkaW5nOjIlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIHdpZHRoOjEwJTtcclxuICAgICAgaGVpZ2h0OjEwJTtcclxuICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OjEwcHg7XHJcbiAgfVxyXG4gICNtYWluX2Zvb3RlciAuY29weSBhe1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/shared/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/shared/forgotpassword/forgotpassword.component.css":
/*!********************************************************************!*\
  !*** ./src/app/shared/forgotpassword/forgotpassword.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("*{\r\n  font-family: 'Montserrat', sans-serif;\r\n}\r\n#login_page .right_col .right_col_head{\r\n  height: 36px;\r\n  width: 400px;  \r\n}\r\n#login_page .right_col_head h3{\r\n  height: 36px;\r\n  font-size: 30px;\r\n  letter-spacing: 0;\r\n  line-height: 36px;\r\n}\r\n#login_page .right_col{\r\n  height: 409px;\r\n  width: 400px;\r\n  margin-top:198px;\r\n}\r\n@media(max-width:576px){\r\n  .right_col{\r\n    margin-top:100px !important;\r\n    max-width: 306px;\r\n  }\r\n  .right_col_head{\r\n    max-width: 306px;\r\n  }\r\n  .right_col_head h3{\r\n    font-size: 20px !important;\r\n  }\r\n}\r\n@media (max-width:576px){\r\n  #login_page .right_col_head p{\r\n    width:100% !important;\r\n    font-size: 14px;\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2ZvcmdvdHBhc3N3b3JkL2ZvcmdvdHBhc3N3b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQ0FBcUM7QUFDdkM7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFO0lBQ0UsMkJBQTJCO0lBQzNCLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSwwQkFBMEI7RUFDNUI7QUFDRjtBQUNBO0VBQ0U7SUFDRSxxQkFBcUI7SUFDckIsZUFBZTtFQUNqQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2ZvcmdvdHBhc3N3b3JkL2ZvcmdvdHBhc3N3b3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbn1cclxuI2xvZ2luX3BhZ2UgLnJpZ2h0X2NvbCAucmlnaHRfY29sX2hlYWR7XHJcbiAgaGVpZ2h0OiAzNnB4O1xyXG4gIHdpZHRoOiA0MDBweDsgIFxyXG59IFxyXG4jbG9naW5fcGFnZSAucmlnaHRfY29sX2hlYWQgaDN7XHJcbiAgaGVpZ2h0OiAzNnB4O1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBsZXR0ZXItc3BhY2luZzogMDtcclxuICBsaW5lLWhlaWdodDogMzZweDtcclxufVxyXG4jbG9naW5fcGFnZSAucmlnaHRfY29se1xyXG4gIGhlaWdodDogNDA5cHg7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIG1hcmdpbi10b3A6MTk4cHg7XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDo1NzZweCl7XHJcbiAgLnJpZ2h0X2NvbHtcclxuICAgIG1hcmdpbi10b3A6MTAwcHggIWltcG9ydGFudDtcclxuICAgIG1heC13aWR0aDogMzA2cHg7XHJcbiAgfVxyXG4gIC5yaWdodF9jb2xfaGVhZHtcclxuICAgIG1heC13aWR0aDogMzA2cHg7XHJcbiAgfVxyXG4gIC5yaWdodF9jb2xfaGVhZCBoM3tcclxuICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDo1NzZweCl7XHJcbiAgI2xvZ2luX3BhZ2UgLnJpZ2h0X2NvbF9oZWFkIHB7XHJcbiAgICB3aWR0aDoxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG59Il19 */");

/***/ }),

/***/ "./src/app/shared/forgotpassword/forgotpassword.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/forgotpassword/forgotpassword.component.ts ***!
  \*******************************************************************/
/*! exports provided: ForgotpasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordComponent", function() { return ForgotpasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_core_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/authentication.service */ "./src/app/core/authentication.service.ts");







let ForgotpasswordComponent = class ForgotpasswordComponent {
    constructor(authService, router, fb, http) {
        this.authService = authService;
        this.router = router;
        this.fb = fb;
        this.http = http;
        this.isFieldFocussed = false;
        this.forgotPasswordForm = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    ngOnInit() {
    }
    forgotPwdOnFocus() {
        this.isFieldFocussed = true;
    }
    forgotPwdOnFocusOut() {
        this.isFieldFocussed = false;
    }
    forgotPassword() {
        if (this.forgotPasswordForm.valid) {
            this.authService.forgotPwd(this.forgotPasswordForm.value)
                .subscribe(() => {
                this.router.navigate([`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl}login`]);
            }, () => { alert("No account working with this email"); });
        }
        else {
            alert("Please enter your email to proceed");
        }
    }
};
ForgotpasswordComponent.ctorParameters = () => [
    { type: src_app_core_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
ForgotpasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgotpassword',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forgotpassword.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/forgotpassword/forgotpassword.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forgotpassword.component.css */ "./src/app/shared/forgotpassword/forgotpassword.component.css")).default]
    })
], ForgotpasswordComponent);



/***/ }),

/***/ "./src/app/shared/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/header/header.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("*{\r\n  font-family: 'Montserrat', sans-serif;\r\n}\r\n\r\n.fa-circle{\r\n  position: absolute;\r\n  margin-left:-10px;\r\n  margin-top:3px;\r\n  color:#EB0017;\r\n  font-size:11px;\r\n}\r\n\r\n#main_logo p{\r\n  display:inline-block;\r\n  margin-left:2%;\r\n  vertical-align: middle;\r\n  font-size: 1rem;\r\n  font-weight: 600;\r\n \r\n \r\n}\r\n\r\n#main_logo .navbar-brand{\r\n  display: inline-block;\r\n  width:60%;\r\n}\r\n\r\n#main_logo img{\r\n  width: 30%; \r\n}\r\n\r\n#main_logo .dropdown-toggle::after{\r\n  border:none;\r\n}\r\n\r\n#main_logo .bell{\r\n  box-sizing: border-box;\r\n  height: 25px;\r\n  width: 20.83px;\r\n}\r\n\r\n#main_logo .navbar-brand span{\r\n  font-size:24px;\r\n  font-size: 20px;\r\n  font-weight: 600;\r\n  letter-spacing: 0.3px;\r\n  line-height: 24px;\r\n  color: #555555;\r\n}\r\n\r\n#main_logo a{\r\n  text-decoration: none;\r\n  color:black;\r\n}\r\n\r\n@media (max-width: 576px) { \r\n  nav{\r\n     display:none;\r\n  }\r\n}\r\n\r\n.right_col .dropdown p{\r\n  font-size:1rem;\r\n  color: #072843;\r\n}\r\n\r\n.fa-angle-down{\r\n  color: #8DA2B3;\r\n  font-size:1.2rem;\r\n  margin-left:5px;\r\n}\r\n\r\n@media (max-width:576px){\r\n  #main_logo{\r\n    display:none;\r\n  }\r\n}\r\n\r\n.dropdown-item:hover{\r\n  cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGFBQWE7RUFDYixjQUFjO0FBQ2hCOztBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGdCQUFnQjs7O0FBR2xCOztBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLFNBQVM7QUFDWDs7QUFDQTtFQUNFLFVBQVU7QUFDWjs7QUFHQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFDQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0FBQ2I7O0FBRUE7RUFDRTtLQUNHLFlBQVk7RUFDZjtBQUNGOztBQUNBO0VBQ0UsY0FBYztFQUNkLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBQ0E7RUFDRTtJQUNFLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5mYS1jaXJjbGV7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi1sZWZ0Oi0xMHB4O1xyXG4gIG1hcmdpbi10b3A6M3B4O1xyXG4gIGNvbG9yOiNFQjAwMTc7XHJcbiAgZm9udC1zaXplOjExcHg7XHJcbn1cclxuI21haW5fbG9nbyBwe1xyXG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OjIlO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiBcclxuIFxyXG59XHJcbiNtYWluX2xvZ28gLm5hdmJhci1icmFuZHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6NjAlO1xyXG59XHJcbiNtYWluX2xvZ28gaW1ne1xyXG4gIHdpZHRoOiAzMCU7IFxyXG59XHJcblxyXG5cclxuI21haW5fbG9nbyAuZHJvcGRvd24tdG9nZ2xlOjphZnRlcntcclxuICBib3JkZXI6bm9uZTtcclxufVxyXG5cclxuI21haW5fbG9nbyAuYmVsbHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGhlaWdodDogMjVweDtcclxuICB3aWR0aDogMjAuODNweDtcclxufVxyXG4jbWFpbl9sb2dvIC5uYXZiYXItYnJhbmQgc3BhbntcclxuICBmb250LXNpemU6MjRweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgY29sb3I6ICM1NTU1NTU7XHJcbn1cclxuI21haW5fbG9nbyBhe1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjpibGFjaztcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7IFxyXG4gIG5hdntcclxuICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgfVxyXG59XHJcbi5yaWdodF9jb2wgLmRyb3Bkb3duIHB7XHJcbiAgZm9udC1zaXplOjFyZW07XHJcbiAgY29sb3I6ICMwNzI4NDM7XHJcbn1cclxuLmZhLWFuZ2xlLWRvd257XHJcbiAgY29sb3I6ICM4REEyQjM7XHJcbiAgZm9udC1zaXplOjEuMnJlbTtcclxuICBtYXJnaW4tbGVmdDo1cHg7XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6NTc2cHgpe1xyXG4gICNtYWluX2xvZ297XHJcbiAgICBkaXNwbGF5Om5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4uZHJvcGRvd24taXRlbTpob3ZlcntcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/authentication.service */ "./src/app/core/authentication.service.ts");
/* harmony import */ var _core_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/account.service */ "./src/app/core/account.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let HeaderComponent = class HeaderComponent {
    constructor(authService, accountService, router) {
        this.authService = authService;
        this.accountService = accountService;
        this.router = router;
        this.logInStatus = false;
        this.divbg = "bluebackground1";
    }
    ngOnInit() {
        this.accountService.getTransactionHistory().subscribe((res) => {
            //res = JSON.parse(res);
            this.legalName = res['Result'].array.RevTrxn[0].trxn.legalName;
        });
    }
    signout() {
        this.authService.signout();
    }
    changePassword() {
        this.router.navigate(['/dashboard/changepassword']);
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _core_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
    { type: _core_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/shared/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/shared/login/login.component.css":
/*!**************************************************!*\
  !*** ./src/app/shared/login/login.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("*{\r\n  font-family: 'Montserrat', sans-serif;\r\n}\r\n#login_page .right_col .right_col_head{\r\n  height: 36px;\r\n  width: 400px;  \r\n}\r\n#login_page .right_col_head h3{\r\n  height: 36px;\r\n  font-size: 30px;\r\n  letter-spacing: 0;\r\n  line-height: 36px;\r\n}\r\n#login_page .right_col{\r\n  height: 409px;\r\n  width: 400px;\r\n  margin-top:198px;\r\n}\r\n@media(max-width:576px){\r\n  .right_col{\r\n    margin-top:100px !important;\r\n    max-width: 306px;\r\n  }\r\n  .right_col_head{\r\n    max-width: 306px;\r\n  }\r\n  .right_col_head h3{\r\n    font-size: 20px !important;\r\n  }\r\n}\r\n@media (max-width:576px){\r\n  #login_page .right_col_head p{\r\n    width:100% !important;\r\n    font-size: 14px;\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQ0FBcUM7QUFDdkM7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFO0lBQ0UsMkJBQTJCO0lBQzNCLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSwwQkFBMEI7RUFDNUI7QUFDRjtBQUNBO0VBQ0U7SUFDRSxxQkFBcUI7SUFDckIsZUFBZTtFQUNqQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbn1cclxuI2xvZ2luX3BhZ2UgLnJpZ2h0X2NvbCAucmlnaHRfY29sX2hlYWR7XHJcbiAgaGVpZ2h0OiAzNnB4O1xyXG4gIHdpZHRoOiA0MDBweDsgIFxyXG59IFxyXG4jbG9naW5fcGFnZSAucmlnaHRfY29sX2hlYWQgaDN7XHJcbiAgaGVpZ2h0OiAzNnB4O1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBsZXR0ZXItc3BhY2luZzogMDtcclxuICBsaW5lLWhlaWdodDogMzZweDtcclxufVxyXG4jbG9naW5fcGFnZSAucmlnaHRfY29se1xyXG4gIGhlaWdodDogNDA5cHg7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIG1hcmdpbi10b3A6MTk4cHg7XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDo1NzZweCl7XHJcbiAgLnJpZ2h0X2NvbHtcclxuICAgIG1hcmdpbi10b3A6MTAwcHggIWltcG9ydGFudDtcclxuICAgIG1heC13aWR0aDogMzA2cHg7XHJcbiAgfVxyXG4gIC5yaWdodF9jb2xfaGVhZHtcclxuICAgIG1heC13aWR0aDogMzA2cHg7XHJcbiAgfVxyXG4gIC5yaWdodF9jb2xfaGVhZCBoM3tcclxuICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDo1NzZweCl7XHJcbiAgI2xvZ2luX3BhZ2UgLnJpZ2h0X2NvbF9oZWFkIHB7XHJcbiAgICB3aWR0aDoxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG59Il19 */");

/***/ }),

/***/ "./src/app/shared/login/login.component.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/login/login.component.ts ***!
  \*************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_core_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/authentication.service */ "./src/app/core/authentication.service.ts");





let LoginComponent = class LoginComponent {
    constructor(authService, router, fb) {
        this.authService = authService;
        this.router = router;
        this.fb = fb;
        this.loggedIn = false;
        this.isEmailFocussed = false;
        this.isPwdFocussed = false;
        this.failedLogin = false;
        this.loginForm = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    ngOnInit() {
    }
    emailOnFocus() {
        this.isEmailFocussed = true;
    }
    emailOnFocusOut() {
        this.isEmailFocussed = false;
    }
    pwdOnFocus() {
        this.isPwdFocussed = true;
    }
    pwdOnFocusOut() {
        this.isPwdFocussed = false;
    }
    login(loginForm) {
        //this.authService.appLogin(loginForm.value);
        if (loginForm.valid) {
            //this.loggedIn = true;
            this.authService.appLogin(loginForm.value);
        }
        else {
            alert("Please enter required details");
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: src_app_core_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/shared/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/shared/mainarea/mainarea.component.css":
/*!********************************************************!*\
  !*** ./src/app/shared/mainarea/mainarea.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9tYWluYXJlYS9tYWluYXJlYS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/shared/mainarea/mainarea.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/mainarea/mainarea.component.ts ***!
  \*******************************************************/
/*! exports provided: MainareaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainareaComponent", function() { return MainareaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");



let MainareaComponent = class MainareaComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
    }
};
MainareaComponent.ctorParameters = () => [
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
MainareaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mainarea',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mainarea.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/mainarea/mainarea.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mainarea.component.css */ "./src/app/shared/mainarea/mainarea.component.css")).default]
    })
], MainareaComponent);



/***/ }),

/***/ "./src/app/shared/register/register.component.css":
/*!********************************************************!*\
  !*** ./src/app/shared/register/register.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("*{\r\n    font-family: 'Montserrat', sans-serif;\r\n  }\r\n  #login_page .right_col .right_col_head{\r\n    height: 36px;\r\n    width: 400px;  \r\n  }\r\n  #login_page .right_col_head h3{\r\n    height: 36px;\r\n    font-size: 30px;\r\n    letter-spacing: 0;\r\n    line-height: 36px;\r\n  }\r\n  #login_page .right_col{\r\n    height: 409px;\r\n    width: 400px;\r\n    margin-top:198px;\r\n  }\r\n  @media(max-width:576px){\r\n    .right_col{\r\n      margin-top:100px !important;\r\n      max-width: 306px;\r\n    }\r\n    .right_col_head{\r\n      max-width: 306px;\r\n    }\r\n    .right_col_head h3{\r\n      font-size: 20px !important;\r\n    }\r\n  }\r\n  @media (max-width:576px){\r\n    #login_page .right_col_head p{\r\n      width:100% !important;\r\n      font-size: 14px;\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQ0FBcUM7RUFDdkM7RUFDQTtJQUNFLFlBQVk7SUFDWixZQUFZO0VBQ2Q7RUFDQTtJQUNFLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsYUFBYTtJQUNiLFlBQVk7SUFDWixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFO01BQ0UsMkJBQTJCO01BQzNCLGdCQUFnQjtJQUNsQjtJQUNBO01BQ0UsZ0JBQWdCO0lBQ2xCO0lBQ0E7TUFDRSwwQkFBMEI7SUFDNUI7RUFDRjtFQUNBO0lBQ0U7TUFDRSxxQkFBcUI7TUFDckIsZUFBZTtJQUNqQjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgI2xvZ2luX3BhZ2UgLnJpZ2h0X2NvbCAucmlnaHRfY29sX2hlYWR7XHJcbiAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICB3aWR0aDogNDAwcHg7ICBcclxuICB9IFxyXG4gICNsb2dpbl9wYWdlIC5yaWdodF9jb2xfaGVhZCBoM3tcclxuICAgIGhlaWdodDogMzZweDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDM2cHg7XHJcbiAgfVxyXG4gICNsb2dpbl9wYWdlIC5yaWdodF9jb2x7XHJcbiAgICBoZWlnaHQ6IDQwOXB4O1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgbWFyZ2luLXRvcDoxOThweDtcclxuICB9XHJcbiAgQG1lZGlhKG1heC13aWR0aDo1NzZweCl7XHJcbiAgICAucmlnaHRfY29se1xyXG4gICAgICBtYXJnaW4tdG9wOjEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1heC13aWR0aDogMzA2cHg7XHJcbiAgICB9XHJcbiAgICAucmlnaHRfY29sX2hlYWR7XHJcbiAgICAgIG1heC13aWR0aDogMzA2cHg7XHJcbiAgICB9XHJcbiAgICAucmlnaHRfY29sX2hlYWQgaDN7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDo1NzZweCl7XHJcbiAgICAjbG9naW5fcGFnZSAucmlnaHRfY29sX2hlYWQgcHtcclxuICAgICAgd2lkdGg6MTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/shared/register/register.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/register/register.component.ts ***!
  \*******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_core_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/authentication.service */ "./src/app/core/authentication.service.ts");




let RegisterComponent = class RegisterComponent {
    constructor(fb, authService) {
        this.fb = fb;
        this.authService = authService;
        this.isUnameFocussed = false;
        this.isEmailFocussed = false;
        this.isPwdFocussed = false;
        this.registerForm = this.fb.group({
            uname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    ngOnInit() {
    }
    unameOnFocus() {
        this.isUnameFocussed = true;
    }
    unameOnFocusOut() {
        this.isUnameFocussed = false;
    }
    emailOnFocus() {
        this.isEmailFocussed = true;
    }
    emailOnFocusOut() {
        this.isEmailFocussed = false;
    }
    pwdOnFocus() {
        this.isPwdFocussed = true;
    }
    pwdOnFocusOut() {
        this.isPwdFocussed = false;
    }
    register() {
        if (this.registerForm.valid) {
            this.authService.registerUser(this.registerForm.value);
        }
        else {
            alert("Please fill up all the fields");
        }
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_core_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/register/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.css */ "./src/app/shared/register/register.component.css")).default]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _mainarea_mainarea_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mainarea/mainarea.component */ "./src/app/shared/mainarea/mainarea.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/shared/login/login.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _createpassword_createpassword_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./createpassword/createpassword.component */ "./src/app/shared/createpassword/createpassword.component.ts");
/* harmony import */ var _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./forgotpassword/forgotpassword.component */ "./src/app/shared/forgotpassword/forgotpassword.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./register/register.component */ "./src/app/shared/register/register.component.ts");












let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _mainarea_mainarea_component__WEBPACK_IMPORTED_MODULE_4__["MainareaComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
            _createpassword_createpassword_component__WEBPACK_IMPORTED_MODULE_9__["CreatepasswordComponent"],
            _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_10__["ForgotpasswordComponent"],
            _register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild([]), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
        ],
        exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _mainarea_mainarea_component__WEBPACK_IMPORTED_MODULE_4__["MainareaComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]]
    })
], SharedModule);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    buildname: 'its in development',
    baseUrl: 'https://praveeng-1002.herokuapp.com/',
    soapUrl: 'https://praveeng-1002.herokuapp.com/'
    //soapUrl:'http://localhost:8080/'
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\projects\reform\myrcard\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map