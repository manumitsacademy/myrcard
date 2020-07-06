function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/accountsummary/accountsummary.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/accountsummary/accountsummary.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardAccountsummaryAccountsummaryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.7.0/css/all.css\" integrity=\"sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ\" crossorigin=\"anonymous\">\r\n<!--<H1>ACCOUNT SUMMARY OF 'XXX1234'</H1>\r\n<div style=\"display: flex\">\r\n    <div>\r\n        <div>SPENDING LIMIT</div>\r\n        <H5>$30000</H5>\r\n    </div>\r\n    <div>\r\n        <div>DISCOUNTER BALANCE</div>\r\n        <H5>$10000</H5>\r\n    </div>\r\n    <div>\r\n        <div>PENDING ACCOUNTS</div>\r\n        <H5>$500</H5>\r\n    </div>\r\n    <div>\r\n        <div>SPENDING AVAILABILITY</div>\r\n        <H5>$19000</H5>\r\n    </div>\r\n    <div>\r\n        <div>DAILY SPEND LIMIT</div>\r\n        <H5>$10000</H5>\r\n    </div>\r\n</div>-->\r\n<section id=\"ac_summary\">\r\n    <div class=\"container \">\r\n        <div class=\"card card1\">\r\n            <div class=\"row no-gutters\">\r\n                <div class=\"col-md-12\" id=\"summaryheading\">\r\n                    <h5 class=\"text-uppercase\">CARD ENDING -   {{accountLast}}</h5>\r\n                </div>\r\n            </div>\r\n            <div class=\"d-none d-md-block d-lg-block d-xl-block\">\r\n                    <div class=\"row    pt-3 summary-l no-gutters justify-content-center \">\r\n                    \r\n                            <div class=\"  col-xs-12 w-sm-50 p-1 \">\r\n                                <div class=\"card  border-0  \">\r\n                                    <div class=\"spending-l-imit\">SPENDING LIMIT</div>\r\n                                    <H5 style=\"color:#3FC0EF\">{{spendingLimit|currency}}</H5>\r\n                                </div>\r\n                                \r\n                            </div>\r\n                            <div class=\"symbol col align-self-center text-center\"><i class=\"fa fa-minus\" aria-hidden=\"true\"></i></div>\r\n                            <div class=\"  col-xs-12 w-sm-50 p-1\" >\r\n                                <div class=\"card border-0\">\r\n                                    <div class=\"spending-l-imit\">DISCOUNTED BALANCE</div>\r\n                                    <H5 style=\"color:#CFAC1F\">{{discountedBalance|currency}}</H5>\r\n                                </div>\r\n                                \r\n                            </div>\r\n                            <div class=\"symbol col align-self-center text-center\"><i class=\"fa fa-minus\" aria-hidden=\"true\"></i></div>\r\n                            <div class=\"  col-xs-12 w-sm-50 p-1 \">\r\n                                <div class=\"card border-0\">\r\n                                    <div class=\"spending-l-imit\">PENDING BALANCE</div>\r\n                                    <H5 style=\"color:#542D87\">{{pendingAmount|currency}}</H5>\r\n                                </div>\r\n                                \r\n                            </div>\r\n                            <div class=\"symbol col align-self-center text-center\"><i class=\"fas fa-equals\"></i></div>\r\n                            <div class=\"  col-xs-12 w-sm-50 p-1\">\r\n                                <div class=\"card border-0\">\r\n                                    <div class=\"spending-l-imit\">SPENDING AVAILABILITY</div>\r\n                                    <H5 style=\"color:#D56926\">{{spendingAvailability|currency}}</H5>\r\n                                </div>\r\n                            \r\n                            </div>\r\n                            <div class=\"symbol col align-self-center text-center\"></div>\r\n                            <div  class=\"lead  verticalLine  col-xs-12 w-sm-50 p-1 ml-2 mr-auto\"> \r\n                                <div class=\"card border-0\">\r\n                                    <div class=\"spending-l-imit\">DAILY SPEND LIMIT</div>\r\n                                    <H5 style=\"color:#E5298A\">{{dailySpendLimit|currency}}</H5>\r\n                                </div>\r\n                            \r\n                            </div>\r\n                    \r\n                        \r\n                    </div>\r\n           </div>\r\n           <div class=\"accordion md-accordion\" id=\"my_ac\">\r\n               <div id=\"ac_summary1\" class=\"mobile_ac d-lg-none d-xl-none d-md-none collapse hide\" aria-labelledby=\"headingOne\" data-parent=\"#my_ac\">\r\n                   <div class=\"row d-flex justify-content-between no-gutters\">\r\n                       <div>\r\n                           <p>SPENDING LIMIT</p>\r\n                       </div>\r\n                       <div>\r\n                        <H5 style=\"color:#3FC0EF\">{{spendingLimit|currency}}</H5>\r\n                       </div>\r\n                   </div>\r\n                   <div class=\"row no-gutters\"><i class=\"fa fa-minus\" aria-hidden=\"true\"></i></div>\r\n                   <div class=\"row d-flex justify-content-between no-gutters\">\r\n                        <div>\r\n                            <p>DISCOUNTED BALANCE</p>\r\n                        </div>\r\n                        <div>\r\n                            <H5 style=\"color:#CFAC1F\">{{discountedBalance|currency}}</H5>\r\n                        </div>\r\n                     </div>\r\n                     <div class=\"row no-gutters\"><i class=\"fa fa-minus\" aria-hidden=\"true\"></i></div>\r\n                     <div class=\"row d-flex justify-content-between no-gutters\">\r\n                        <div>\r\n                            <p>PENDING BALANCE</p>\r\n                        </div>\r\n                        <div>\r\n                            <H5 style=\"color:#542D87\">{{pendingAmount|currency}}</H5>\r\n                        </div>\r\n                     </div>\r\n                     <div class=\"row no-gutters\"><i class=\"fas fa-equals\"></i></div>\r\n                     <div class=\"row d-flex justify-content-between no-gutters\">\r\n                         <div><p>AVAILABLESPENDING</p></div>\r\n                         <div>\r\n                            <H5 style=\"color:#E5298A\">{{dailySpendLimit|currency}}</H5>\r\n                         </div>\r\n                     </div>\r\n                     <div class=\"dropdown-divider\">\r\n\r\n                     </div>\r\n                     <div class=\"row d-flex justify-content-between no-gutters\">\r\n                         <div>\r\n                             <p>DAILy SPEND LIMIT</p>\r\n                         </div>\r\n                         <div>\r\n                            <H5 style=\"color:#E5298A\">{{dailySpendLimit|currency}}</H5>\r\n                         </div>\r\n                     </div>\r\n\r\n               </div>\r\n               <div class=\"d-flex justify-content-center\">\r\n                   <i class=\"fa fa-chevron-down ac_arrow d-md-none d-lg-none d-xl-none\" data-toggle=\"collapse\" data-target=\"#ac_summary1\" aria-expanded=\"true\" aria-controls=\"collapseOne\"></i>\r\n               </div>\r\n           </div> \r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div (mousemove)=\"autologout()\">\r\n<app-header></app-header>\r\n<app-shortcuts></app-shortcuts>\r\n<div [ngClass]=\"divbg\"></div>\r\n<div [ngClass]=\"hexabg\"></div>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n<div bsModal #childModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\"\r\n     role=\"dialog\" aria-labelledby=\"dialog-child-name\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 id=\"dialog-child-name\" class=\"modal-title pull-left\">Session will be expired</h4>\r\n        \r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"modal-body text-center\">\r\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"confirm()\" >Logout</button>\r\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"decline()\" >Resume</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboardhome/dashboardhome.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboardhome/dashboardhome.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardDashboardhomeDashboardhomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-accountsummary></app-accountsummary>\r\n<app-ministatement></app-ministatement>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/default/default.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/default/default.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardDefaultDefaultComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container \">\n    <div class=\"card \"  style=\"height:300px;\">\n        <div class=\"d-flex justify-content-center  my-auto\">\n            <div class=\"chat_box text-center\">\n                <img src=\"assets/chat_box1.png\" class=\"img-fluid\">\n                <p>Please contact RevCard Customer Support at 1-844-218-4834 (M-F 8am - 7pm)</p>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/ministatement/ministatement.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/ministatement/ministatement.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardMinistatementMinistatementComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"Div3\" class=\"row\">\r\n    <div id=\"Div4\" class=\"panel-grid panel-has-style\" style=\"width:100%\">\r\n        <div class=\"hexagonbg bottom panel-row-style panel-row-style-for-11-2\">\r\n            <div id=\"Div15\" class=\"panel-grid-cell panel-grid-cell-empty\"></div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div id=\"Div1\" class=\"row no-gutters\">\r\n    &nbsp;\r\n</div>\r\n<div>\r\n    <div class=\"container \">\r\n        <div class=\"card card1\">\r\n        <div class=\"row\">\r\n            \r\n            <div class=\"col-sm-12 col-md-12 col-lg-12\">\r\n                <div class=\"row pt-4\">\r\n                    <div class=\"col-md-12\" id=\"summaryheading\">\r\n                        <h5 class=\"text-uppercase d-inline\">Mini Statement</h5>\r\n                        <!-- <div class=\"d-inline right_dot\" style=\"float:right;\">\r\n                           <a href=\"#\" class=\"dots d-none d-xl-block\"> <img src=\"assets/dots.png\" alt=\"\" class=\"img-fluid \" style=\"width:60%\"></a>\r\n                           <a href=\"#\" class=\"view_all d-xl-none\">View all</a>\r\n                        </div> -->\r\n                    </div>\r\n                </div>\r\n                <div class=\"mini_table d-sm-none d-md-block d-xl-block d-lg-block\">\r\n                    \r\n                    <div class=\"table-responsive\">\r\n                        <!--<table class=\"table table-hover table-outline table-vcenter text-nowrap card-table\"  width=\"100%\">-->\r\n                        <table class=\"table table-hover table-vcenter text-left\" width=\"100%\" >\r\n                            <thead>\r\n                                <tr>\r\n                                    <th class=\"w-1p textwidget custom-html-widget\">\r\n                                        Date\r\n                                    </th>\r\n                                    <th class=\"textwidget custom-html-widget\">\r\n                                        Description\r\n                                    </th>\r\n                                    <th class=\"textwidget custom-html-widget\">\r\n                                        TRANSACTION ID\r\n                                    </th>\r\n                                    <th  class=\"textwidget custom-html-widget text-right\">\r\n                                        Amount\r\n                                    </th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let transaction of ministatement\">\r\n                                    <td style=\"padding: 10px;\" class=\"textwidget custom-html-widget\">\r\n                                        <span>{{transaction.trxn.recDate}}</span>\r\n                                    </td>\r\n                                    <td style=\"padding: 10px;\" class=\"textwidget custom-html-widget\">{{transaction.trxn.cpty.name}}\r\n                                    </td>\r\n                                    <td style=\"padding: 10px;\" class=\"textwidget custom-html-widget\">{{transaction.trxn.id}}\r\n                                    </td>\r\n                                    <td style=\" padding: 10px;\" class=\"textwidget custom-html-widget text-right\">{{transaction.trxn.amount|currency}}\r\n                                    </td>\r\n                                    <td style=\"padding: 10px;\" class=\"textwidget custom-html-widget\">\r\n                                        &nbsp;\r\n                                    </td> \r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                    \r\n                </div>\r\n                <div class=\"mobile_view d-xl-none d-sm d-md-none d-lg-none mt-4\">\r\n                    \r\n                    <div class=\"card mb-3\">\r\n                        <table class=\"table\">\r\n                            <tr>\r\n                                \r\n                                <td>\r\n                                    <p>Star Buks Store 02124</p>\r\n                                    <p><small>Jan 10 2016</small></p>\r\n                                </td>\r\n                                <td>$21.65</td>\r\n                            </tr>\r\n                        </table>\r\n                    </div>\r\n                    <div class=\"card mb-3\">\r\n                        <table class=\"table\">\r\n                            <tr>\r\n                               \r\n                                <td>\r\n                                    <p>Star Buks Store 02124</p>\r\n                                    <p><small>Jan 10 2016</small></p>\r\n                                </td>\r\n                                <td>$21.65</td>\r\n                            </tr>\r\n                        </table>\r\n                    </div>\r\n                    <div class=\"card mb-3\">\r\n                        <table class=\"table\">\r\n                            <tr>\r\n                                \r\n                                <td>\r\n                                    <p>Star Buks Store 02124</p>\r\n                                    <p><small>Jan 10 2016</small></p>\r\n                                </td>\r\n                                <td>$21.65</td>\r\n                            </tr>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n   ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/shortcuts/shortcuts.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/shortcuts/shortcuts.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardShortcutsShortcutsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--<div style=\"display: flex\" class=\"container\">\r\n    <div>Account Overview</div>\r\n    <div>Request limit Increase</div>\r\n    <div>Request Cash Draw</div>\r\n    <div>Payment Calendar</div>\r\n    <div>Transaction History</div>\r\n    <div>Rewards</div>\r\n</div>-->\r\n<link href=\"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" rel=\"stylesheet\" integrity=\"sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN\" crossorigin=\"anonymous\">\r\n<section id=\"short_cut\" class=\"py-4\" [ngClass]=\"divbg\">\r\n    <div class=\"container\">\r\n        <nav class=\"navbar navbar-expand-lg navbar-expand-md navbar-light\">\r\n          <div class=\"container\">\r\n            <div class=\"row short_mobile no-gutters d-xl-none d-sm d-md-none d-lg-none \">\r\n              \r\n                  <button class=\"navbar-toggler border-0\" type=\"button\" data-toggle=\"collapse\" data-target=\"#shortcut\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                    <span class=\"navbar-toggler-icon\"></span>\r\n                  </button>\r\n                <h5 class=\"d-inline d-xl-none d-sm text-white align-self-end\">Account Overview</h5>\r\n              <!--  <div class=\" d-xl-none d-sm d-inline \">\r\n                  <i class=\"fa fa-bell text-white\" aria-hidden=\"true\" style=\"font-size:1.5rem;\"></i>\r\n                  <i class=\"fa fa-circle border-1 border-white\" aria-hidden=\"true\"></i>\r\n                \r\n                </div>-->\r\n                <div class=\" d-xl-none d-sm d-inline \">\r\n                </div>\r\n               \r\n            </div>\r\n          <div class=\"collapse navbar-collapse\" id=\"shortcut\">\r\n            <ul class=\"navbar-nav\">\r\n                <li class=\"nav-item\">\r\n                  <a class=\"nav-link\" routerLink=\"/dashboard\">Account Overview</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                  <a class=\"nav-link\"  routerLink=\"/dashboard/default\">Request Limit Increase</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                  <a class=\"nav-link\"  routerLink=\"/dashboard/default\">Request Cash Draw</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                  <a class=\"nav-link\"  routerLink=\"/dashboard/default\" >Payment Calendar</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\"  routerLink=\"transactionhistory\" >Transaction History</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\"  routerLink=\"/dashboard/default\" >Rewards</a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </nav>\r\n    </div>\r\n</section>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/transactionhistory/transactionhistory.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/transactionhistory/transactionhistory.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardTransactionhistoryTransactionhistoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<ng-template #popTemplate >\r\n    <div *ngIf=\"popoverInfo.trxn.status!=='ctsDeclined'\">\r\n        <div class=\"row no-gutters mb-2 d-flex justify-content-between\">\r\n            <div class=\" left_tt\"> Payback Amount:</div>\r\n            <div class=\" text-right right_tt\" *ngIf=\"popoverInfo.fundingStmt\"> {{(popoverInfo.fundingStmt?popoverInfo.fundingStmt.paybackAmount:'0.00')|number:'1.2-2'|currency}}</div>\r\n            <div class=\" text-right right_tt\" *ngIf=\"!popoverInfo.fundingStmt\">N/A</div>\r\n        </div>\r\n        <div class=\"row no-gutters mb-2 d-flex justify-content-between\">\r\n            <div class=\" left_tt\"> Collected Amount:</div>\r\n            <div class=\" text-right right_tt\" *ngIf=\"popoverInfo.fundingStmt\"> {{((popoverInfo.fundingStmt && popoverInfo.fundingStmt.totCollAmt)?popoverInfo.fundingStmt.totCollAmt[0]:0.00)|number:'1.2-2'|currency}}</div>\r\n            <div class=\" text-right right_tt\" *ngIf=\"!popoverInfo.fundingStmt\">N/A</div>\r\n        </div>\r\n        <div class=\"dropdown-divider\"></div>\r\n        <div class=\"row no-gutters d-flex justify-content-between\">\r\n            <div class=\" total_bal\">Balance Amount:</div>\r\n            <div class=\" text-right total_bal\" *ngIf=\"popoverInfo.fundingStmt\"> {{((popoverInfo.fundingStmt && popoverInfo.fundingStmt.balToDone)?(popoverInfo.fundingStmt.paybackAmount-popoverInfo.fundingStmt.totCollAmt[0]):0.00)|number:'1.2-2'|currency}}</div>\r\n            <div class=\" text-right right_tt\" *ngIf=\"!popoverInfo.fundingStmt\">N/A</div>\r\n        </div>\r\n    </div> \r\n</ng-template>\r\n<section id=\"trans_his\">\r\n    <div class=\"container\">\r\n        <div class=\"card card1\">\r\n            <div class=\"navbar navbar-expand-lg mt-3\">\r\n                <a class=\"navbar-brand mr-auto font-weight-bold text-dark text-uppercase\" href=\"#\">Transaction History</a>\r\n                <div class=\"form-inline my-2 my-lg-0\">\r\n                    <div class=\"form-group mr-2\">\r\n                        <div class=\"icon-addon addon-lg\">\r\n                            <input type=\"text\" placeholder=\"Search...\" class=\"form-control\" id=\"email\" [(ngModel)]=\"searchKey\"  (keyup)=\"searchHistory()\">\r\n                            <label for=\"email\" class=\"fa fa-search\" rel=\"tooltip\" title=\"Search...\"></label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group mr-2\">\r\n                        <div class=\"icon-addon addon-lg\">                           \r\n                            <input class=\"form-control\" #drp=\"bsDaterangepicker\" bsDaterangepicker [(ngModel)]=\"bsRangeValue\" [bsConfig]=\"{containerClass:'mytheme-purple'}\" id=\"daterange\"  (bsValueChange)=\"onDateChange($event)\">\r\n                            <label for=\"daterange\" class=\"fa fa-calendar-o\" rel=\"tooltip\" title=\"Date\"></label>\r\n                        </div>\r\n                    </div>                    \r\n                </div>                \r\n            </div>\r\n            <div class=\"table-responsive\">\r\n                <table class=\"table table-hover table-vcenter\" width=\"100%\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th class=\"w-1p textwidget custom-html-widget\">\r\n                                Date\r\n                            </th>\r\n                            <th class=\"textwidget custom-html-widget\">\r\n                                Description\r\n                            </th>\r\n                            <th style=\"text-align: center\" class=\"textwidget custom-html-widget\">\r\n                                Amount\r\n                            </th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let transaction of currentTransactions\">\r\n                            <td style=\"padding: 10px;\" class=\"textwidget custom-html-widget\" [ngClass]=\"transaction.trxn.status==='ctsDeclined'?'text-danger':''\">\r\n                                <span>{{transaction.trxn.recDate|date}}</span>\r\n                            </td>\r\n                            <td style=\"padding: 10px;\" class=\"textwidget custom-html-widget\"  [ngClass]=\"transaction.trxn.status==='ctsDeclined'?'text-danger':''\">{{transaction.trxn.cpty.name}}\r\n                            </td>                \r\n                            <td style=\"text-align: right; padding: 10px;\" class=\"textwidget custom-html-widget\" [ngClass]=\"transaction.trxn.status==='ctsDeclined'?'text-danger':''\">{{(transaction.trxn?transaction.trxn.amount:0.00)|number:'1.2-2'|currency}}\r\n                               \r\n                            </td>\r\n                            <td style=\"padding: 10px;\" [ngClass]=\"transaction.trxn.status==='ctsDeclined'?'text-danger':''\">\r\n                                <i class=\"fa fa-info\" triggers=\"mouseenter:mouseleave\" [popover]=\"popTemplate\" [outsideClick]=\"true\" placement=\"bottom\" [popoverTitle]=\"transaction.trxn.status==='ctsDeclined'?'DECLINED':'INFO'\" (mouseenter)=\"popoverInfo=transaction\"></i>\r\n                            </td>\r\n                            <td style=\"padding: 10px;\" class=\"textwidget custom-html-widget hammer\" [ngClass]=\"transaction.trxn.status==='ctsDeclined'?'text-danger':''\">\r\n                                <a routerLink=\"/dashboard/default\"  style=\"cursor:pointer;\">\r\n                                    <img src=\"assets/hammer.png\" class=\"img-fluid\" title=\"Dispute Charge\">\r\n                                </a>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>  \r\n        </div>  \r\n        <div class=\"d-flex justify-content-center p-5 border-0\">\r\n            <pagination class=\" border-0\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\" [totalItems]=\"transactionHistoryLength-1\" (pageChanged)=\"pageChanged($event)\"  [boundaryLinks]=\"true\" itemsPerPage=\"20\" \r\n            ></pagination>\r\n        </div>\r\n        \r\n    </div>\r\n        \r\n    \r\n</section>\r\n";
    /***/
  },

  /***/
  "./src/app/auth/auth.guard.ts":
  /*!************************************!*\
    !*** ./src/app/auth/auth.guard.ts ***!
    \************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppAuthAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(authService, router) {
        _classCallCheck(this, AuthGuard);

        this.authService = authService;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          if (!this.authService.isLoggedIn) {
            this.router.navigate(['/login']);
            return false;
          }

          return true;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], AuthGuard);
    /***/
  },

  /***/
  "./src/app/dashboard/accountsummary/accountsummary.component.css":
  /*!***********************************************************************!*\
    !*** ./src/app/dashboard/accountsummary/accountsummary.component.css ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardAccountsummaryAccountsummaryComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n*{\r\n    font-family: Gotham bold;\r\n    font-weight:bold;\r\n}\r\n#summaryheading h5{\r\n        height: 19px;\r\n        color: #1F74B1;\r\n        font-family: Gotham bold;\r\n        font-size: 1rem;\r\n        font-weight: bold;\r\n        letter-spacing: 0;\r\n        line-height: 19px;\r\n}\r\n.spending-l-imit {\r\n    width: 100%;\r\n    color: #90A2B1;\r\n    font-family: Gotham bold;\r\n    font-size: 12px;\r\n    font-weight: bold;\r\n    line-height: 15px;\r\n    margin-bottom:10px;\r\n  }\r\n.card1{\r\n    border: 1px solid #D9DEE4;\r\n    border-radius: 4px;\r\n    background-color: #FFFFFF;\r\n    box-shadow: 0 2px 0 0 rgba(7,40,67,0.25);\r\n    padding:2%;\r\n   \r\n  }\r\n.summaru-l H5{\r\n    line-height: 24px;\r\n    width:100%;\r\n  }\r\n#ac_summary .verticalLine:after{\r\n   \r\n    content: \"\";\r\n    background-color:#E6EBF0;\r\n    position: absolute;\r\n    width: 1px;\r\n    height: 30px;\r\n    top: 50%;\r\n    left: 83%;\r\n    display: block;\r\n    z-index:99;\r\n  }\r\n@media (max-width: 576px) { \r\n  \r\n     .verticalLine:after{\r\n      display:none;\r\n    }\r\n  }\r\n/*  @media (max-width:576px){\r\n    .card1{\r\n      padding:3px;\r\n      border:none;\r\n      box-shadow: none;\r\n    }\r\n  }*/\r\n.fa-minus, .fa-equals{\r\n    \r\n    color: #90A2B1;\r\n   \r\n    font-size: 0.7rem;\r\n    font-weight: bold;\r\n    letter-spacing: 0;\r\n    line-height: 34px;\r\n  }\r\n#ac_summary1 p{\r\n    color:#90A2B1;\r\n    font-family: GOtham bold;\r\n    font-size: 12px;\r\n    font-weight: bold;\r\n    letter-spacing: 0;\r\n    line-height:15px;\r\n  }\r\n#ac_summary1 H5{\r\n  font-family: Gotham bold;\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n  letter-spacing: 0;\r\n  line-height: 24px;\r\n  text-align: right;\r\n}\r\n.dropdown-divider{\r\n  border-top:2px solid #e9ecef  !important;\r\n\r\n}\r\n.ac_arrow{\r\n  background-color: white;\r\n  border:1px solid rgb(195, 195, 195);\r\n  border-radius: 50%;\r\n  padding:4px;\r\n  color:#1F74B1;\r\n  font-size: 1.rem;\r\n  position: absolute;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2FjY291bnRzdW1tYXJ5L2FjY291bnRzdW1tYXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLGdCQUFnQjtBQUNwQjtBQUNBO1FBQ1EsWUFBWTtRQUNaLGNBQWM7UUFDZCx3QkFBd0I7UUFDeEIsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDakIsaUJBQWlCO0FBQ3pCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7QUFDQTtJQUNFLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLHdDQUF3QztJQUN4QyxVQUFVOztFQUVaO0FBQ0E7SUFDRSxpQkFBaUI7SUFDakIsVUFBVTtFQUNaO0FBQ0E7O0lBRUUsV0FBVztJQUNYLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVk7SUFDWixRQUFRO0lBQ1IsU0FBUztJQUNULGNBQWM7SUFDZCxVQUFVO0VBQ1o7QUFDQTs7S0FFRztNQUNDLFlBQVk7SUFDZDtFQUNGO0FBQ0Y7Ozs7OztJQU1JO0FBSUY7O0lBRUUsY0FBYzs7SUFFZCxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7QUFDQTtJQUNFLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsZ0JBQWdCO0VBQ2xCO0FBQ0Y7RUFDRSx3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usd0NBQXdDOztBQUUxQztBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1DQUFtQztFQUNuQyxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2FjY291bnRzdW1tYXJ5L2FjY291bnRzdW1tYXJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuKntcclxuICAgIGZvbnQtZmFtaWx5OiBHb3RoYW0gYm9sZDtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbn1cclxuI3N1bW1hcnloZWFkaW5nIGg1e1xyXG4gICAgICAgIGhlaWdodDogMTlweDtcclxuICAgICAgICBjb2xvcjogIzFGNzRCMTtcclxuICAgICAgICBmb250LWZhbWlseTogR290aGFtIGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG59XHJcbi5zcGVuZGluZy1sLWltaXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjogIzkwQTJCMTtcclxuICAgIGZvbnQtZmFtaWx5OiBHb3RoYW0gYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOjEwcHg7XHJcbiAgfVxyXG4gIC5jYXJkMXtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNEOURFRTQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggMCAwIHJnYmEoNyw0MCw2NywwLjI1KTtcclxuICAgIHBhZGRpbmc6MiU7XHJcbiAgIFxyXG4gIH1cclxuICAuc3VtbWFydS1sIEg1e1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gIH1cclxuICAjYWNfc3VtbWFyeSAudmVydGljYWxMaW5lOmFmdGVye1xyXG4gICBcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNFNkVCRjA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMXB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA4MyU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHotaW5kZXg6OTk7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkgeyBcclxuICBcclxuICAgICAudmVydGljYWxMaW5lOmFmdGVye1xyXG4gICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG4vKiAgQG1lZGlhIChtYXgtd2lkdGg6NTc2cHgpe1xyXG4gICAgLmNhcmQxe1xyXG4gICAgICBwYWRkaW5nOjNweDtcclxuICAgICAgYm9yZGVyOm5vbmU7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICB9XHJcbiAgfSovXHJcblxyXG5cclxuICBcclxuICAuZmEtbWludXMsIC5mYS1lcXVhbHN7XHJcbiAgICBcclxuICAgIGNvbG9yOiAjOTBBMkIxO1xyXG4gICBcclxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzNHB4O1xyXG4gIH1cclxuICAjYWNfc3VtbWFyeTEgcHtcclxuICAgIGNvbG9yOiM5MEEyQjE7XHJcbiAgICBmb250LWZhbWlseTogR090aGFtIGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgbGluZS1oZWlnaHQ6MTVweDtcclxuICB9XHJcbiNhY19zdW1tYXJ5MSBINXtcclxuICBmb250LWZhbWlseTogR290aGFtIGJvbGQ7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5kcm9wZG93bi1kaXZpZGVye1xyXG4gIGJvcmRlci10b3A6MnB4IHNvbGlkICNlOWVjZWYgICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcbi5hY19hcnJvd3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6MXB4IHNvbGlkIHJnYigxOTUsIDE5NSwgMTk1KTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgcGFkZGluZzo0cHg7XHJcbiAgY29sb3I6IzFGNzRCMTtcclxuICBmb250LXNpemU6IDEucmVtO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/dashboard/accountsummary/accountsummary.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/dashboard/accountsummary/accountsummary.component.ts ***!
    \**********************************************************************/

  /*! exports provided: AccountsummaryComponent */

  /***/
  function srcAppDashboardAccountsummaryAccountsummaryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountsummaryComponent", function () {
      return AccountsummaryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_core_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/core/account.service */
    "./src/app/core/account.service.ts");

    var AccountsummaryComponent =
    /*#__PURE__*/
    function () {
      function AccountsummaryComponent(accountService) {
        _classCallCheck(this, AccountsummaryComponent);

        this.accountService = accountService;
      }

      _createClass(AccountsummaryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.accountService.getTransactionHistory().subscribe(function (res) {
            _this.accountLast = res['Result'].array.RevTrxn[0].trxn.acctLast4;
          });
          this.accountService.getAccountSummary().subscribe(function (res) {
            console.log("Acc summ", res);
            _this.spendingLimit = res['Result'].RevAccountSummary.limit.maxTrxnAmt;
            _this.discountedBalance = res['Result'].RevAccountSummary.summary.currentBal;
            _this.pendingAmount = res['Result'].RevAccountSummary.summary.pendingBal;
            _this.spendingAvailability = _this.spendingLimit - _this.discountedBalance - _this.pendingAmount;
            var mn = res['Result'].RevAccountSummary.limit.maxNextAmt;
            var ma = res['Result'].RevAccountSummary.limit.maxTrxnAmt;
            var sa = _this.spendingAvailability;
            _this.dailySpendLimit = mn < ma ? mn < sa ? mn : sa : ma < sa ? ma : sa;
          });
        }
      }]);

      return AccountsummaryComponent;
    }();

    AccountsummaryComponent.ctorParameters = function () {
      return [{
        type: src_app_core_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]
      }];
    };

    AccountsummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-accountsummary',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./accountsummary.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/accountsummary/accountsummary.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./accountsummary.component.css */
      "./src/app/dashboard/accountsummary/accountsummary.component.css")).default]
    })], AccountsummaryComponent);
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: DashboardRoutingModule */

  /***/
  function srcAppDashboardDashboardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function () {
      return DashboardRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _dashboardhome_dashboardhome_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./dashboardhome/dashboardhome.component */
    "./src/app/dashboard/dashboardhome/dashboardhome.component.ts");
    /* harmony import */


    var _transactionhistory_transactionhistory_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./transactionhistory/transactionhistory.component */
    "./src/app/dashboard/transactionhistory/transactionhistory.component.ts");
    /* harmony import */


    var _default_default_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./default/default.component */
    "./src/app/dashboard/default/default.component.ts");
    /* harmony import */


    var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../auth/auth.guard */
    "./src/app/auth/auth.guard.ts");

    var routes = [{
      path: '',
      component: _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
      children: [{
        path: '',
        component: _dashboardhome_dashboardhome_component__WEBPACK_IMPORTED_MODULE_4__["DashboardhomeComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
      }, {
        path: 'transactionhistory',
        component: _transactionhistory_transactionhistory_component__WEBPACK_IMPORTED_MODULE_5__["TransactionhistoryComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
      }, {
        path: 'default',
        component: _default_default_component__WEBPACK_IMPORTED_MODULE_6__["DefaultComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
      }]
    }];

    var DashboardRoutingModule = function DashboardRoutingModule() {
      _classCallCheck(this, DashboardRoutingModule);
    };

    DashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DashboardRoutingModule);
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.css":
  /*!***************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardDashboardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".bluebackground1{\r\n    width:100%;\r\n    height:70px;\r\n    background-color:#2b73b0;\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    position: absolute;\r\n    top:150px;\r\n    left:0px;\r\n    z-index:-1;\r\n}\r\n.bluebackground{\r\n    width:100%;\r\n    height:40%;\r\n    background-image:url(\"/assets/blue.png\");\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    position: absolute;\r\n    top:220px;\r\n    left:0px;\r\n    z-index:-1;\r\n}\r\n.purplebackground1{\r\n    width:100%;\r\n    height:70px;\r\n    background-color:#542d87;\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    position: absolute;\r\n    top:150px;\r\n    left:0px;\r\n    z-index:-1;\r\n}\r\n.purplebackground{\r\n    width:100%;\r\n    height:40%;\r\n    background-image:url(\"/assets/purple.png\");\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    position: absolute;\r\n    top:220px;\r\n    left:0px;\r\n    z-index:-1;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCx3QkFBd0I7SUFDeEIsd0JBQXdCO0lBQ3hCLDRCQUE0QjtJQUM1QixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7SUFDUixVQUFVO0FBQ2Q7QUFDQTtJQUNJLFVBQVU7SUFDVixVQUFVO0lBQ1Ysd0NBQXdDO0lBQ3hDLHdCQUF3QjtJQUN4Qiw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0lBQ1IsVUFBVTtBQUNkO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLHdCQUF3QjtJQUN4Qix3QkFBd0I7SUFDeEIsNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtJQUNSLFVBQVU7QUFDZDtBQUNBO0lBQ0ksVUFBVTtJQUNWLFVBQVU7SUFDViwwQ0FBMEM7SUFDMUMsd0JBQXdCO0lBQ3hCLDRCQUE0QjtJQUM1QixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7SUFDUixVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmx1ZWJhY2tncm91bmQxe1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDo3MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMmI3M2IwO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDoxNTBweDtcclxuICAgIGxlZnQ6MHB4O1xyXG4gICAgei1pbmRleDotMTtcclxufVxyXG4uYmx1ZWJhY2tncm91bmR7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OjQwJTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKFwiL2Fzc2V0cy9ibHVlLnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6MjIwcHg7XHJcbiAgICBsZWZ0OjBweDtcclxuICAgIHotaW5kZXg6LTE7XHJcbn1cclxuLnB1cnBsZWJhY2tncm91bmQxe1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDo3MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojNTQyZDg3O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDoxNTBweDtcclxuICAgIGxlZnQ6MHB4O1xyXG4gICAgei1pbmRleDotMTtcclxufVxyXG4ucHVycGxlYmFja2dyb3VuZHtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6NDAlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoXCIvYXNzZXRzL3B1cnBsZS5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOjIyMHB4O1xyXG4gICAgbGVmdDowcHg7XHJcbiAgICB6LWluZGV4Oi0xO1xyXG59XHJcblxyXG5cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.ts ***!
    \**************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _core_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../core/authentication.service */
    "./src/app/core/authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");

    var DashboardComponent =
    /*#__PURE__*/
    function () {
      function DashboardComponent(authService, aR, router, modalService) {
        var _this2 = this;

        _classCallCheck(this, DashboardComponent);

        this.authService = authService;
        this.aR = aR;
        this.router = router;
        this.modalService = modalService;
        this.divbg = "bluebackground1";
        this.hexabg = "bluebackground";
        router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (e) {
          return e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterEvent"];
        })).subscribe(function (e) {
          if (e['url'] == '/dashboard/transactionhistory') {
            _this2.divbg = "purplebackground1";
            _this2.hexabg = "purplebackground";
          } else {
            _this2.divbg = "bluebackground1";
            _this2.hexabg = "bluebackground";
          }
        });
      }

      _createClass(DashboardComponent, [{
        key: "showChildModal",
        value: function showChildModal() {
          this.childModal.show();
        }
      }, {
        key: "hideChildModal",
        value: function hideChildModal() {
          this.childModal.hide();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.authService.loggedIn();
          this.autologout();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.authService.loggedOut();
        }
      }, {
        key: "autologout",
        value: function autologout() {
          var _this3 = this;

          clearTimeout(this.idletimeout);
          this.idletimeout = setTimeout(function () {
            _this3.childModal.show();

            _this3.confirmBoxTimeout = setTimeout(function () {
              _this3.childModal.hide();

              clearTimeout(_this3.idletimeout);
              window.localStorage.removeItem('token');

              _this3.router.navigate(['/login']);
            }, 1000 * 60 * 1);
          }, 1000 * 60 * 4);
        }
      }, {
        key: "openModal",
        value: function openModal(template) {
          this.modalRef = this.modalService.show(template, {
            class: 'modal-sm'
          });
        }
      }, {
        key: "confirm",
        value: function confirm() {
          window.localStorage.removeItem('token');
          this.router.navigate(['/login']);
          this.childModal.hide();
        }
      }, {
        key: "decline",
        value: function decline() {
          clearTimeout(this.confirmBoxTimeout);
          this.autologout();
          this.childModal.hide();
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ctorParameters = function () {
      return [{
        type: _core_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('childModal', {
      static: false
    })], DashboardComponent.prototype, "childModal", void 0);
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.css */
      "./src/app/dashboard/dashboard.component.css")).default]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/dashboard/dashboard.module.ts ***!
    \***********************************************/

  /*! exports provided: DashboardModule */

  /***/
  function srcAppDashboardDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardModule", function () {
      return DashboardModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard-routing.module */
    "./src/app/dashboard/dashboard-routing.module.ts");
    /* harmony import */


    var _dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _shortcuts_shortcuts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./shortcuts/shortcuts.component */
    "./src/app/dashboard/shortcuts/shortcuts.component.ts");
    /* harmony import */


    var _accountsummary_accountsummary_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./accountsummary/accountsummary.component */
    "./src/app/dashboard/accountsummary/accountsummary.component.ts");
    /* harmony import */


    var _ministatement_ministatement_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./ministatement/ministatement.component */
    "./src/app/dashboard/ministatement/ministatement.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _dashboardhome_dashboardhome_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./dashboardhome/dashboardhome.component */
    "./src/app/dashboard/dashboardhome/dashboardhome.component.ts");
    /* harmony import */


    var _transactionhistory_transactionhistory_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./transactionhistory/transactionhistory.component */
    "./src/app/dashboard/transactionhistory/transactionhistory.component.ts");
    /* harmony import */


    var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ngx-bootstrap */
    "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
    /* harmony import */


    var _default_default_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./default/default.component */
    "./src/app/dashboard/default/default.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var DashboardModule = function DashboardModule() {
      _classCallCheck(this, DashboardModule);
    };

    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"], _shortcuts_shortcuts_component__WEBPACK_IMPORTED_MODULE_5__["ShortcutsComponent"], _accountsummary_accountsummary_component__WEBPACK_IMPORTED_MODULE_6__["AccountsummaryComponent"], _ministatement_ministatement_component__WEBPACK_IMPORTED_MODULE_7__["MinistatementComponent"], _dashboardhome_dashboardhome_component__WEBPACK_IMPORTED_MODULE_10__["DashboardhomeComponent"], _transactionhistory_transactionhistory_component__WEBPACK_IMPORTED_MODULE_11__["TransactionhistoryComponent"], _default_default_component__WEBPACK_IMPORTED_MODULE_13__["DefaultComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__["PopoverModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__["BsDatepickerModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__["PaginationModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__["ModalModule"]]
    })], DashboardModule);
    /***/
  },

  /***/
  "./src/app/dashboard/dashboardhome/dashboardhome.component.css":
  /*!*********************************************************************!*\
    !*** ./src/app/dashboard/dashboardhome/dashboardhome.component.css ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardDashboardhomeDashboardhomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmRob21lL2Rhc2hib2FyZGhvbWUuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/dashboard/dashboardhome/dashboardhome.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/dashboard/dashboardhome/dashboardhome.component.ts ***!
    \********************************************************************/

  /*! exports provided: DashboardhomeComponent */

  /***/
  function srcAppDashboardDashboardhomeDashboardhomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardhomeComponent", function () {
      return DashboardhomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DashboardhomeComponent =
    /*#__PURE__*/
    function () {
      function DashboardhomeComponent() {
        _classCallCheck(this, DashboardhomeComponent);
      }

      _createClass(DashboardhomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DashboardhomeComponent;
    }();

    DashboardhomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboardhome',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboardhome.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboardhome/dashboardhome.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboardhome.component.css */
      "./src/app/dashboard/dashboardhome/dashboardhome.component.css")).default]
    })], DashboardhomeComponent);
    /***/
  },

  /***/
  "./src/app/dashboard/default/default.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/dashboard/default/default.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardDefaultDefaultComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card{\r\n    border: 1px solid #D9DEE4;\r\n    border-radius: 4px;\r\n    background-color: #FFFFFF;\r\n    box-shadow: 0 2px 0 0 rgba(7,40,67,0.25);\r\n    \r\n}\r\n.card img{\r\n    width:35%;\r\n    margin-bottom:5%;\r\n}\r\n.chat_box{\r\n    width:30%;\r\n}\r\n.chat_box p{\r\n    color: #90A2B1;\r\n  font-family: Lato;\r\n  font-size: 16px;\r\n  letter-spacing: 0;\r\n  line-height: 19px;\r\n  text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2RlZmF1bHQvZGVmYXVsdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsd0NBQXdDOztBQUU1QztBQUNBO0lBQ0ksU0FBUztJQUNULGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksU0FBUztBQUNiO0FBQ0E7SUFDSSxjQUFjO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGVmYXVsdC9kZWZhdWx0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNEOURFRTQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggMCAwIHJnYmEoNyw0MCw2NywwLjI1KTtcclxuICAgIFxyXG59XHJcbi5jYXJkIGltZ3tcclxuICAgIHdpZHRoOjM1JTtcclxuICAgIG1hcmdpbi1ib3R0b206NSU7XHJcbn1cclxuLmNoYXRfYm94e1xyXG4gICAgd2lkdGg6MzAlO1xyXG59XHJcbi5jaGF0X2JveCBwe1xyXG4gICAgY29sb3I6ICM5MEEyQjE7XHJcbiAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/dashboard/default/default.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/dashboard/default/default.component.ts ***!
    \********************************************************/

  /*! exports provided: DefaultComponent */

  /***/
  function srcAppDashboardDefaultDefaultComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DefaultComponent", function () {
      return DefaultComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DefaultComponent =
    /*#__PURE__*/
    function () {
      function DefaultComponent() {
        _classCallCheck(this, DefaultComponent);
      }

      _createClass(DefaultComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DefaultComponent;
    }();

    DefaultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-default',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./default.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/default/default.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./default.component.css */
      "./src/app/dashboard/default/default.component.css")).default]
    })], DefaultComponent);
    /***/
  },

  /***/
  "./src/app/dashboard/ministatement/ministatement.component.css":
  /*!*********************************************************************!*\
    !*** ./src/app/dashboard/ministatement/ministatement.component.css ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardMinistatementMinistatementComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".textwidget.custom-html-widget{\r\n    color:#7c7b7b;\r\n}\r\n*{\r\n    font-family: Gotham book;\r\n}\r\n#summaryheading{\r\n    padding-bottom:14px;\r\n}\r\n#summaryheading h5{\r\n    color: #1F74B1;\r\n    font-family: Gotham bold;\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n    padding-left:2.5rem;\r\n    \r\n}\r\n.card1{\r\n    border: 1px solid #D9DEE4;\r\n    border-radius: 4px;\r\n    background-color: #FFFFFF;\r\n    box-shadow: 0 2px 0 0 rgba(7,40,67,0.25);\r\n}\r\n.table th{\r\n    border-top:none;\r\n    text-transform: uppercase;\r\n    color: #90A2B1;\r\n    font-family: Gotham bold;\r\n    font-size: 12px;\r\n    font-weight: bold;\r\n    letter-spacing: 0;\r\n    line-height: 15px;\r\n    \r\n}\r\n@media (max-width:576px){\r\n    .mini_table{\r\n        display:none;\r\n    }\r\n}\r\n.mobile_view  .table{\r\n    align-self: center;\r\n  \r\n    \r\n}\r\n.mobile_view .table td:nth-child(1){\r\n    width:90%;\r\n  \r\n    \r\n}\r\n.mobile_view .table td p{\r\n    margin-bottom:1px;   \r\n}\r\n.mobile_view .table td:nth-child(2){\r\n    font-weight:bold;\r\n}\r\n@media (max-width:576px){\r\n.summaryheading .dots{\r\n    display: none;\r\n    }\r\n}\r\n@media (max-width:576px){\r\n    .summaryheading .view_all{\r\n        text-decoration: none;\r\n        color:#90A2B1;\r\n    }\r\n}\r\n.table thead tr th:nth-child(1){\r\n    padding-left:2.5rem;\r\n    \r\n}\r\n.table tbody tr td:nth-child(1){\r\n    padding-left:2.5rem !important;\r\n    \r\n}\r\n.right_dot{\r\n    padding-right:2rem;\r\n}\r\n.table tbody td:nth-child(2){\r\n    text-transform: uppercase;\r\n    width:25%;\r\n}\r\n.table tbody td:nth-child(3){\r\n    width:35%;\r\n}\r\n.table tbody td:nth-child(4){\r\n    width:5%;\r\n}\r\n@media (max-width:576px){\r\n    .card1{\r\n        border:none;\r\n        box-shadow: 0 0px 0 0;\r\n\r\n       \r\n    }\r\n}\r\n@media (max-width:576px){\r\n    #summaryheading h5{\r\n        padding-left:0px;;\r\n    }\r\n}\r\n.table tbody tr td{\r\n    color: #072843;\r\n    font-family:Gotham book;\r\n    font-size: 14px;\r\n    letter-spacing: 0;\r\n    line-height: 24px;\r\n    font-weight: 400;\r\n   \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL21pbmlzdGF0ZW1lbnQvbWluaXN0YXRlbWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixtQkFBbUI7O0FBRXZCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6Qix3Q0FBd0M7QUFDNUM7QUFDQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsY0FBYztJQUNkLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixpQkFBaUI7O0FBRXJCO0FBRUE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7QUFDSjtBQUNBO0lBQ0ksa0JBQWtCOzs7QUFHdEI7QUFDQTtJQUNJLFNBQVM7OztBQUdiO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0FBQ0E7SUFDSSxhQUFhO0lBQ2I7QUFDSjtBQUNBO0lBQ0k7UUFDSSxxQkFBcUI7UUFDckIsYUFBYTtJQUNqQjtBQUNKO0FBQ0E7SUFDSSxtQkFBbUI7O0FBRXZCO0FBQ0E7SUFDSSw4QkFBOEI7O0FBRWxDO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixTQUFTO0FBQ2I7QUFFQTtJQUNJLFNBQVM7QUFDYjtBQUNBO0lBQ0ksUUFBUTtBQUNaO0FBQ0E7SUFDSTtRQUNJLFdBQVc7UUFDWCxxQkFBcUI7OztJQUd6QjtBQUNKO0FBQ0E7SUFDSTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGdCQUFnQjs7QUFFcEIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvbWluaXN0YXRlbWVudC9taW5pc3RhdGVtZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dHdpZGdldC5jdXN0b20taHRtbC13aWRnZXR7XHJcbiAgICBjb2xvcjojN2M3YjdiO1xyXG59XHJcbip7XHJcbiAgICBmb250LWZhbWlseTogR290aGFtIGJvb2s7XHJcbn1cclxuI3N1bW1hcnloZWFkaW5ne1xyXG4gICAgcGFkZGluZy1ib3R0b206MTRweDtcclxufVxyXG4jc3VtbWFyeWhlYWRpbmcgaDV7XHJcbiAgICBjb2xvcjogIzFGNzRCMTtcclxuICAgIGZvbnQtZmFtaWx5OiBHb3RoYW0gYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZy1sZWZ0OjIuNXJlbTtcclxuICAgIFxyXG59XHJcbi5jYXJkMXtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNEOURFRTQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggMCAwIHJnYmEoNyw0MCw2NywwLjI1KTtcclxufVxyXG4udGFibGUgdGh7XHJcbiAgICBib3JkZXItdG9wOm5vbmU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6ICM5MEEyQjE7XHJcbiAgICBmb250LWZhbWlseTogR290aGFtIGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICBcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6NTc2cHgpe1xyXG4gICAgLm1pbmlfdGFibGV7XHJcbiAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgfVxyXG59XHJcbi5tb2JpbGVfdmlldyAgLnRhYmxle1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIFxyXG4gICAgXHJcbn1cclxuLm1vYmlsZV92aWV3IC50YWJsZSB0ZDpudGgtY2hpbGQoMSl7XHJcbiAgICB3aWR0aDo5MCU7XHJcbiAgXHJcbiAgICBcclxufVxyXG4ubW9iaWxlX3ZpZXcgLnRhYmxlIHRkIHB7XHJcbiAgICBtYXJnaW4tYm90dG9tOjFweDsgICBcclxufVxyXG5cclxuLm1vYmlsZV92aWV3IC50YWJsZSB0ZDpudGgtY2hpbGQoMil7XHJcbiAgICBmb250LXdlaWdodDpib2xkO1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOjU3NnB4KXtcclxuLnN1bW1hcnloZWFkaW5nIC5kb3Rze1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDo1NzZweCl7XHJcbiAgICAuc3VtbWFyeWhlYWRpbmcgLnZpZXdfYWxse1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBjb2xvcjojOTBBMkIxO1xyXG4gICAgfVxyXG59XHJcbi50YWJsZSB0aGVhZCB0ciB0aDpudGgtY2hpbGQoMSl7XHJcbiAgICBwYWRkaW5nLWxlZnQ6Mi41cmVtO1xyXG4gICAgXHJcbn1cclxuLnRhYmxlIHRib2R5IHRyIHRkOm50aC1jaGlsZCgxKXtcclxuICAgIHBhZGRpbmctbGVmdDoyLjVyZW0gIWltcG9ydGFudDtcclxuICAgIFxyXG59XHJcbi5yaWdodF9kb3R7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjJyZW07XHJcbn1cclxuXHJcbi50YWJsZSB0Ym9keSB0ZDpudGgtY2hpbGQoMil7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgd2lkdGg6MjUlO1xyXG59XHJcblxyXG4udGFibGUgdGJvZHkgdGQ6bnRoLWNoaWxkKDMpe1xyXG4gICAgd2lkdGg6MzUlO1xyXG59XHJcbi50YWJsZSB0Ym9keSB0ZDpudGgtY2hpbGQoNCl7XHJcbiAgICB3aWR0aDo1JTtcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDo1NzZweCl7XHJcbiAgICAuY2FyZDF7XHJcbiAgICAgICAgYm9yZGVyOm5vbmU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwcHggMCAwO1xyXG5cclxuICAgICAgIFxyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOjU3NnB4KXtcclxuICAgICNzdW1tYXJ5aGVhZGluZyBoNXtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6MHB4OztcclxuICAgIH1cclxufVxyXG4udGFibGUgdGJvZHkgdHIgdGR7XHJcbiAgICBjb2xvcjogIzA3Mjg0MztcclxuICAgIGZvbnQtZmFtaWx5OkdvdGhhbSBib29rO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgIFxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/dashboard/ministatement/ministatement.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/dashboard/ministatement/ministatement.component.ts ***!
    \********************************************************************/

  /*! exports provided: MinistatementComponent */

  /***/
  function srcAppDashboardMinistatementMinistatementComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MinistatementComponent", function () {
      return MinistatementComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_core_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/core/account.service */
    "./src/app/core/account.service.ts");

    var MinistatementComponent =
    /*#__PURE__*/
    function () {
      function MinistatementComponent(accountService) {
        _classCallCheck(this, MinistatementComponent);

        this.accountService = accountService;
      }

      _createClass(MinistatementComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.accountService.getTransactionHistory().subscribe(function (res) {
            console.log(res);
            _this4.ministatement = res['Result'].array.RevTrxn.sort(function (a, b) {
              return a.trxn.recDate > b.trxn.recDate ? -1 : 1;
            }).slice(0, 10);
          });
        }
      }]);

      return MinistatementComponent;
    }();

    MinistatementComponent.ctorParameters = function () {
      return [{
        type: src_app_core_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]
      }];
    };

    MinistatementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ministatement',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ministatement.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/ministatement/ministatement.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ministatement.component.css */
      "./src/app/dashboard/ministatement/ministatement.component.css")).default]
    })], MinistatementComponent);
    /***/
  },

  /***/
  "./src/app/dashboard/shortcuts/shortcuts.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/dashboard/shortcuts/shortcuts.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardShortcutsShortcutsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".bluebackground1{\r\n    background-color: #2b73b0;\r\n}\r\n.purplebackground1{\r\n    background-color: #542d87;\r\n}\r\n/*#short_cut:after{\r\n    background: \r\n                linear-gradient(-45deg, transparent 20px, #0074b6ff 0), \r\n                linear-gradient(45deg, transparent 20px, #0074b6ff  0);\r\n    background-repeat: repeat-x;\r\n    background-position: left bottom;\r\n    background-size: 30px 20px;\r\n    content: \"\";\r\n    display: block;\r\n\r\n    width: 100%;\r\n    height: 32px;\r\n\r\n     position: relative;\r\n    top:47%;\r\n    left:0px;\r\n    border:none;\r\n  \r\n}\r\n*/\r\n#short_cut nav{\r\n    flex-wrap:nowrap;\r\n}\r\n#short_cut .container{\r\n    padding-left:0px !important;\r\n    padding-right:0px !important;\r\n}\r\n#short_cut .navbar .nav-link{\r\n    \r\n    font-size:15px;\r\n    font-weight:400;\r\n    padding-left:24px;\r\n    padding-right:24px;\r\n    opacity: 0.9;\r\n    color: #FFFFFF;\r\n    font-family: Gotham book;\r\n   \r\n    letter-spacing: 0;\r\n    line-height: 15px;\r\n    text-align:left;\r\n    \r\n    \r\n}\r\n#short_cut .navbar .nav-link.active{\r\n    color: #FFFFFF;\r\n  font-family: Gotham bold;\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n  letter-spacing: 0;\r\n  line-height: 15px;\r\n    background-color: rgb(255, 255, 255, 0.15);\r\n   border-top-left-radius: 20px;\r\n   border-bottom-left-radius: 20px;\r\n   border-top-right-radius: 20px;\r\n   border-bottom-right-radius: 20px;\r\n}\r\n#short_cut .navbar .nav-link:hover{\r\n    color:white;\r\n    background-color: rgb(255, 255, 255, 0.15);\r\n   border-top-left-radius: 20px;\r\n   border-bottom-left-radius: 20px;\r\n   border-top-right-radius: 20px;\r\n   border-bottom-right-radius: 20px;\r\n}\r\n#short_cut .navbar ul{\r\n    display:d-flex;\r\n    -webkit-box-align:stretch;\r\n            align-items:stretch;\r\n    justify-content:space-around;\r\n    width:100%;\r\n    margin:0;\r\n    padding:0;\r\n    \r\n}\r\n#short_cut .nav-link{\r\n    padding:0.5rem 0.5rem;\r\n}\r\n*{\r\n    font-family: Gotham book;\r\n}\r\n.fa-bell-o{\r\n    position: relative;\r\n    font-size:1.6rem;\r\n  }\r\n.fa-circle{\r\n    position: absolute;\r\n    margin-left:-12px;\r\n    color:red;\r\n    font-size:0.8rem;\r\n  }\r\n.short_mobile{\r\n    display:d-flex;\r\n    -webkit-box-align:stretch;\r\n            align-items:stretch;\r\n    -webkit-box-pack:justify;\r\n            justify-content:space-between;\r\n    width:100%;\r\n    margin:0;\r\n    padding:0;\r\n  }\r\n@media (max-width: 576px) {\r\n    .navbar-collapse {\r\n        position: absolute;\r\n        top: 54px;\r\n        right: 100%;\r\n        padding-left: 15px;\r\n        padding-right: 15px;\r\n        padding-bottom: 15px;\r\n        width: 100%;\r\n        -webkit-transition: all 0.3s ease;\r\n        transition: all 0.3s ease;\r\n        display: block;\r\n        z-index:99;\r\n        background-color: black;\r\n    }\r\n    .navbar-collapse.collapsing {\r\n        height: auto !important;\r\n        margin-right: 50%;\r\n        -webkit-transition: all 0.3s ease;\r\n        transition: all 0.3s ease;\r\n        display: block;\r\n    }\r\n    .navbar-collapse.show {\r\n        right: 0;\r\n    }\r\n}\r\n@media(max-width:360px){\r\n    .navbar-collapse {\r\n        position: absolute;\r\n        top: 54px;\r\n        right: 100%;\r\n        padding-left: 15px;\r\n        padding-right: 15px;\r\n        padding-bottom: 15px;\r\n        width: 100%;\r\n        -webkit-transition: all 0.3s ease;\r\n        transition: all 0.3s ease;\r\n        display: block;\r\n        z-index:99;\r\n        background-color: black;\r\n    }\r\n    .navbar-collapse.collapsing {\r\n        height: auto !important;\r\n        margin-right: 50%;\r\n        -webkit-transition: all 0.3s ease;\r\n        transition: all 0.3s ease;\r\n        display: block;\r\n    }\r\n    .navbar-collapse.show {\r\n        right: 0;\r\n    }\r\n\r\n}\r\n@media(max-width:640px){\r\n    .navbar-collapse {\r\n        position: absolute;\r\n        top: 54px;\r\n        right: 110%;\r\n        padding-left: 15px;\r\n        padding-right: 15px;\r\n        padding-bottom: 15px;\r\n        width: 100%;\r\n        -webkit-transition: all 0.3s ease;\r\n        transition: all 0.3s ease;\r\n        display: block;\r\n        z-index:99;\r\n        background-color: black;\r\n    }\r\n    .navbar-collapse.collapsing {\r\n        height: auto !important;\r\n        margin-right: 50%;\r\n        -webkit-transition: all 0.3s ease;\r\n        transition: all 0.3s ease;\r\n        display: block;\r\n    }\r\n    .navbar-collapse.show {\r\n        right: 0;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3Nob3J0Y3V0cy9zaG9ydGN1dHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FtQkM7QUFDRDtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksMkJBQTJCO0lBQzNCLDRCQUE0QjtBQUNoQztBQUNBOztJQUVJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osY0FBYztJQUNkLHdCQUF3Qjs7SUFFeEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixlQUFlOzs7QUFHbkI7QUFDQTtJQUNJLGNBQWM7RUFDaEIsd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtJQUNmLDBDQUEwQztHQUMzQyw0QkFBNEI7R0FDNUIsK0JBQStCO0dBQy9CLDZCQUE2QjtHQUM3QixnQ0FBZ0M7QUFDbkM7QUFDQTtJQUNJLFdBQVc7SUFDWCwwQ0FBMEM7R0FDM0MsNEJBQTRCO0dBQzVCLCtCQUErQjtHQUMvQiw2QkFBNkI7R0FDN0IsZ0NBQWdDO0FBQ25DO0FBQ0E7SUFDSSxjQUFjO0lBQ2QseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQiw0QkFBNEI7SUFDNUIsVUFBVTtJQUNWLFFBQVE7SUFDUixTQUFTOztBQUViO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtFQUNsQjtBQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1QsZ0JBQWdCO0VBQ2xCO0FBQ0E7SUFDRSxjQUFjO0lBQ2QseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQix3QkFBNkI7WUFBN0IsNkJBQTZCO0lBQzdCLFVBQVU7SUFDVixRQUFRO0lBQ1IsU0FBUztFQUNYO0FBQ0E7SUFDRTtRQUNJLGtCQUFrQjtRQUNsQixTQUFTO1FBQ1QsV0FBVztRQUNYLGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIsb0JBQW9CO1FBQ3BCLFdBQVc7UUFDWCxpQ0FBeUI7UUFBekIseUJBQXlCO1FBQ3pCLGNBQWM7UUFDZCxVQUFVO1FBQ1YsdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSx1QkFBdUI7UUFDdkIsaUJBQWlCO1FBQ2pCLGlDQUF5QjtRQUF6Qix5QkFBeUI7UUFDekIsY0FBYztJQUNsQjtJQUNBO1FBQ0ksUUFBUTtJQUNaO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksa0JBQWtCO1FBQ2xCLFNBQVM7UUFDVCxXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQixvQkFBb0I7UUFDcEIsV0FBVztRQUNYLGlDQUF5QjtRQUF6Qix5QkFBeUI7UUFDekIsY0FBYztRQUNkLFVBQVU7UUFDVix1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLHVCQUF1QjtRQUN2QixpQkFBaUI7UUFDakIsaUNBQXlCO1FBQXpCLHlCQUF5QjtRQUN6QixjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxRQUFRO0lBQ1o7O0FBRUo7QUFDQTtJQUNJO1FBQ0ksa0JBQWtCO1FBQ2xCLFNBQVM7UUFDVCxXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQixvQkFBb0I7UUFDcEIsV0FBVztRQUNYLGlDQUF5QjtRQUF6Qix5QkFBeUI7UUFDekIsY0FBYztRQUNkLFVBQVU7UUFDVix1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLHVCQUF1QjtRQUN2QixpQkFBaUI7UUFDakIsaUNBQXlCO1FBQXpCLHlCQUF5QjtRQUN6QixjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxRQUFRO0lBQ1o7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9zaG9ydGN1dHMvc2hvcnRjdXRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmx1ZWJhY2tncm91bmQxe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJiNzNiMDtcclxufVxyXG4ucHVycGxlYmFja2dyb3VuZDF7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTQyZDg3O1xyXG59XHJcbi8qI3Nob3J0X2N1dDphZnRlcntcclxuICAgIGJhY2tncm91bmQ6IFxyXG4gICAgICAgICAgICAgICAgbGluZWFyLWdyYWRpZW50KC00NWRlZywgdHJhbnNwYXJlbnQgMjBweCwgIzAwNzRiNmZmIDApLCBcclxuICAgICAgICAgICAgICAgIGxpbmVhci1ncmFkaWVudCg0NWRlZywgdHJhbnNwYXJlbnQgMjBweCwgIzAwNzRiNmZmICAwKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgYm90dG9tO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAzMHB4IDIwcHg7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcblxyXG4gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDo0NyU7XHJcbiAgICBsZWZ0OjBweDtcclxuICAgIGJvcmRlcjpub25lO1xyXG4gIFxyXG59XHJcbiovXHJcbiNzaG9ydF9jdXQgbmF2e1xyXG4gICAgZmxleC13cmFwOm5vd3JhcDtcclxufVxyXG4jc2hvcnRfY3V0IC5jb250YWluZXJ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjBweCAhaW1wb3J0YW50O1xyXG59XHJcbiNzaG9ydF9jdXQgLm5hdmJhciAubmF2LWxpbmt7XHJcbiAgICBcclxuICAgIGZvbnQtc2l6ZToxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6NDAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OjI0cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjI0cHg7XHJcbiAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIGZvbnQtZmFtaWx5OiBHb3RoYW0gYm9vaztcclxuICAgXHJcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgXHJcbiAgICBcclxufVxyXG4jc2hvcnRfY3V0IC5uYXZiYXIgLm5hdi1saW5rLmFjdGl2ZXtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gIGZvbnQtZmFtaWx5OiBHb3RoYW0gYm9sZDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XHJcbiAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcclxufVxyXG4jc2hvcnRfY3V0IC5uYXZiYXIgLm5hdi1saW5rOmhvdmVye1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XHJcbiAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcclxufVxyXG4jc2hvcnRfY3V0IC5uYXZiYXIgdWx7XHJcbiAgICBkaXNwbGF5OmQtZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOnN0cmV0Y2g7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIG1hcmdpbjowO1xyXG4gICAgcGFkZGluZzowO1xyXG4gICAgXHJcbn1cclxuI3Nob3J0X2N1dCAubmF2LWxpbmt7XHJcbiAgICBwYWRkaW5nOjAuNXJlbSAwLjVyZW07XHJcbn1cclxuKntcclxuICAgIGZvbnQtZmFtaWx5OiBHb3RoYW0gYm9vaztcclxufVxyXG4uZmEtYmVsbC1ve1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZm9udC1zaXplOjEuNnJlbTtcclxuICB9XHJcbiAgLmZhLWNpcmNsZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi1sZWZ0Oi0xMnB4O1xyXG4gICAgY29sb3I6cmVkO1xyXG4gICAgZm9udC1zaXplOjAuOHJlbTtcclxuICB9XHJcbiAgLnNob3J0X21vYmlsZXtcclxuICAgIGRpc3BsYXk6ZC1mbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6c3RyZXRjaDtcclxuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIG1hcmdpbjowO1xyXG4gICAgcGFkZGluZzowO1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAgIC5uYXZiYXItY29sbGFwc2Uge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDU0cHg7XHJcbiAgICAgICAgcmlnaHQ6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB6LWluZGV4Ojk5O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG4gICAgLm5hdmJhci1jb2xsYXBzZS5jb2xsYXBzaW5nIHtcclxuICAgICAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDUwJTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgLm5hdmJhci1jb2xsYXBzZS5zaG93IHtcclxuICAgICAgICByaWdodDogMDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEobWF4LXdpZHRoOjM2MHB4KXtcclxuICAgIC5uYXZiYXItY29sbGFwc2Uge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDU0cHg7XHJcbiAgICAgICAgcmlnaHQ6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB6LWluZGV4Ojk5O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG4gICAgLm5hdmJhci1jb2xsYXBzZS5jb2xsYXBzaW5nIHtcclxuICAgICAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDUwJTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgLm5hdmJhci1jb2xsYXBzZS5zaG93IHtcclxuICAgICAgICByaWdodDogMDtcclxuICAgIH1cclxuXHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDo2NDBweCl7XHJcbiAgICAubmF2YmFyLWNvbGxhcHNlIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1NHB4O1xyXG4gICAgICAgIHJpZ2h0OiAxMTAlO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgei1pbmRleDo5OTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIH1cclxuICAgIC5uYXZiYXItY29sbGFwc2UuY29sbGFwc2luZyB7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1MCU7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIC5uYXZiYXItY29sbGFwc2Uuc2hvdyB7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICB9XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/dashboard/shortcuts/shortcuts.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/dashboard/shortcuts/shortcuts.component.ts ***!
    \************************************************************/

  /*! exports provided: ShortcutsComponent */

  /***/
  function srcAppDashboardShortcutsShortcutsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShortcutsComponent", function () {
      return ShortcutsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var ShortcutsComponent = function ShortcutsComponent(aR, router) {
      var _this5 = this;

      _classCallCheck(this, ShortcutsComponent);

      this.aR = aR;
      this.router = router;
      this.divbg = "bluebackground1";
      router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (e) {
        return e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterEvent"];
      })).subscribe(function (e) {
        if (e['url'] == '/dashboard/transactionhistory') {
          _this5.divbg = "purplebackground1";
        } else {
          _this5.divbg = "bluebackground1";
        }
      });
    };

    ShortcutsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    ShortcutsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-shortcuts',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./shortcuts.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/shortcuts/shortcuts.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./shortcuts.component.css */
      "./src/app/dashboard/shortcuts/shortcuts.component.css")).default]
    })], ShortcutsComponent);
    /***/
  },

  /***/
  "./src/app/dashboard/transactionhistory/transactionhistory.component.css":
  /*!*******************************************************************************!*\
    !*** ./src/app/dashboard/transactionhistory/transactionhistory.component.css ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardTransactionhistoryTransactionhistoryComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".search1{\r\n    opacity: 0.5;\r\n    color: #90A2B1;\r\n    font-family: Gotham book;\r\n    font-size: 12px;\r\n   \r\n   \r\n   \r\n}\r\n.navbar-brand{\r\n    padding-left:1.5rem;\r\n    color: #532D85 !important;\r\n  font-family: Gotham bold;\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n  letter-spacing: 1px;\r\n  line-height: 19px;\r\n}\r\nform .btn{\r\n   padding:10px 10px 10px 10px;\r\n}\r\n.center-block {\r\n    float: none;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n.input-group .icon-addon .form-control {\r\n    border-radius: 0;\r\n}\r\n.icon-addon {\r\n    position: relative;\r\n    color: #555;\r\n    display: block;\r\n}\r\n.icon-addon:after,\r\n.icon-addon:before {\r\n    display: table;\r\n    content: \" \";\r\n}\r\n.icon-addon:after {\r\n    clear: both;\r\n}\r\n.icon-addon.addon-md .glyphicon,\r\n.icon-addon .glyphicon, \r\n.icon-addon.addon-md .fa,\r\n.icon-addon .fa {\r\n    position: absolute;\r\n    z-index: 2;\r\n    left: 10px;\r\n    font-size: 14px;\r\n    width: 20px;\r\n    margin-left: -2.5px;\r\n    text-align: center;\r\n    padding: 10px 0;\r\n    top: 1px\r\n}\r\n.icon-addon.addon-lg .form-control {\r\n    line-height: 1.33;\r\n    height: 46px;\r\n    font-size: 12px;\r\n    padding: 10px 40px 10px 10px;\r\n}\r\n.icon-addon.addon-sm .form-control {\r\n    height: 30px;\r\n    padding: 5px 10px 5px 28px;\r\n    font-size: 12px;\r\n    line-height: 1.5;\r\n}\r\n.icon-addon.addon-lg .fa,\r\n.icon-addon.addon-lg .glyphicon {\r\n    font-size: 14px;\r\n    margin-left: 0;\r\n    left: 85%;\r\n    top: 8px;\r\n    background-color:white;\r\n    color:lightgrey;\r\n}\r\n.icon-addon.addon-md .form-control,\r\n.icon-addon .form-control {\r\n    padding-left: 30px;\r\n    float: left;\r\n    font-weight: normal;\r\n}\r\n.icon-addon.addon-sm .fa,\r\n.icon-addon.addon-sm .glyphicon {\r\n    margin-left: 0;\r\n    font-size: 12px;\r\n    left: 5px;\r\n    top: -1px\r\n}\r\n.icon-addon .form-control:focus + .glyphicon,\r\n.icon-addon:hover .glyphicon,\r\n.icon-addon .form-control:focus + .fa,\r\n.icon-addon:hover .fa {\r\n    color: #2580db;\r\n}\r\ninput::-webkit-input-placeholder{\r\n    opacity: 0.5;\r\n    color: #90A2B1;\r\n    font-family: Gotham book;\r\n    font-size: 12px;\r\n    letter-spacing: 0;\r\n    line-height: 15px;\r\n}\r\ninput::-moz-placeholder{\r\n    opacity: 0.5;\r\n    color: #90A2B1;\r\n    font-family: Gotham book;\r\n    font-size: 12px;\r\n    letter-spacing: 0;\r\n    line-height: 15px;\r\n}\r\ninput::-ms-input-placeholder{\r\n    opacity: 0.5;\r\n    color: #90A2B1;\r\n    font-family: Gotham book;\r\n    font-size: 12px;\r\n    letter-spacing: 0;\r\n    line-height: 15px;\r\n}\r\ninput::placeholder{\r\n    opacity: 0.5;\r\n    color: #90A2B1;\r\n    font-family: Gotham book;\r\n    font-size: 12px;\r\n    letter-spacing: 0;\r\n    line-height: 15px;\r\n}\r\n.card1{\r\n    border: 1px solid #D9DEE4;\r\n    border-radius: 4px;\r\n    background-color: #FFFFFF;\r\n    box-shadow: 0 2px 0 0 rgba(7,40,67,0.25);\r\n}\r\n.table tr td:nth-child(1){\r\n    padding-left:2.5rem !important;\r\n    width:20%;\r\n}\r\n.table thead th:nth-child(1){\r\n    padding-left:2.5rem;\r\n}\r\n.table th{\r\n    border-top:none;\r\n    text-transform: uppercase;\r\n    color: #90A2B1;\r\n    font-family: Gotham bold;\r\n    font-size: 12px;\r\n    font-weight: bold;\r\n    letter-spacing: 0;\r\n    line-height: 15px;\r\n    \r\n}\r\n.table tbody td:nth-child(2){\r\n    width:40%;\r\n}\r\n.table tbody{\r\n    color:black;\r\n}\r\n.table tbody td:nth-child(3){\r\n    width:5%;\r\n}\r\n.table tbody tr td:nth-child(5){\r\n    width:10%;\r\n}\r\n.table tbody tr td{\r\n    color: #072843;\r\n    font-family: Gotham book;\r\n    font-size: 14px;\r\n    letter-spacing: 0;\r\n    line-height: 24px;\r\n    font-weight: 400;\r\n}\r\n.hammer img{\r\n    box-sizing: border-box;\r\n  height: 16.3px;\r\n  width: 16.3px;\r\n \r\n}\r\n.fa-info{\r\n    border:2px solid #A0A5BA;\r\n    font-size:9px;\r\n    border-radius: 50%;    \r\n    color:#A0A5BA;    \r\n    padding: 3px 6px;\r\n}\r\n.left_tt{\r\n    color: #072843;\r\n  font-family: Gotham book;\r\n  font-size: 14px;\r\n  letter-spacing: 0;\r\n  line-height: 24px;\r\n  margin-right:2rem;\r\n}\r\n.right_tt{\r\n    color: #072843;\r\n    font-family:Gotham bold;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    letter-spacing: 0;\r\n    line-height: 17px;\r\n}\r\n:host(a) {\r\n    color:red !important;\r\n}\r\n.total_bal{\r\n    color:#2B73B0;\r\n    font-family: Gotham bold;\r\n    font-size: 16px;\r\n    letter-spacing: 0;\r\n    line-height: 19px;\r\n}\r\n.fa-info:hover{\r\n    border:2px solid #2B73B0;\r\n    color:#2B73B0;    \r\n}\r\n.dropdown-divider{\r\n height:2px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3RyYW5zYWN0aW9uaGlzdG9yeS90cmFuc2FjdGlvbmhpc3RvcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2Qsd0JBQXdCO0lBQ3hCLGVBQWU7Ozs7QUFJbkI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQix5QkFBeUI7RUFDM0Isd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjtBQUNBO0dBQ0csMkJBQTJCO0FBQzlCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGNBQWM7QUFDbEI7QUFFQTs7SUFFSSxjQUFjO0lBQ2QsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksV0FBVztBQUNmO0FBRUE7Ozs7SUFJSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFVBQVU7SUFDVixlQUFlO0lBQ2YsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmO0FBQ0o7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZUFBZTtJQUNmLDRCQUE0QjtBQUNoQztBQUVBO0lBQ0ksWUFBWTtJQUNaLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBRUE7O0lBRUksZUFBZTtJQUNmLGNBQWM7SUFDZCxTQUFTO0lBQ1QsUUFBUTtJQUNSLHNCQUFzQjtJQUN0QixlQUFlO0FBQ25CO0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7QUFFQTs7SUFFSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLFNBQVM7SUFDVDtBQUNKO0FBRUE7Ozs7SUFJSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjtBQVBBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7QUFQQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2Qsd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCO0FBUEE7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsd0NBQXdDO0FBQzVDO0FBQ0E7SUFDSSw4QkFBOEI7SUFDOUIsU0FBUztBQUNiO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsY0FBYztJQUNkLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixpQkFBaUI7O0FBRXJCO0FBQ0E7SUFDSSxTQUFTO0FBQ2I7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksUUFBUTtBQUNaO0FBQ0E7SUFDSSxTQUFTO0FBQ2I7QUFDQTtJQUNJLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxzQkFBc0I7RUFDeEIsY0FBYztFQUNkLGFBQWE7O0FBRWY7QUFDQTtJQUNJLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGNBQWM7RUFDaEIsd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjtBQUNBO0lBQ0ksY0FBYztJQUNkLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLGFBQWE7QUFDakI7QUFDQTtDQUNDLFVBQVU7QUFDWCIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC90cmFuc2FjdGlvbmhpc3RvcnkvdHJhbnNhY3Rpb25oaXN0b3J5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoMXtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIGNvbG9yOiAjOTBBMkIxO1xyXG4gICAgZm9udC1mYW1pbHk6IEdvdGhhbSBib29rO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICBcclxuICAgXHJcbiAgIFxyXG59XHJcbi5uYXZiYXItYnJhbmR7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MS41cmVtO1xyXG4gICAgY29sb3I6ICM1MzJEODUgIWltcG9ydGFudDtcclxuICBmb250LWZhbWlseTogR290aGFtIGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbn1cclxuZm9ybSAuYnRue1xyXG4gICBwYWRkaW5nOjEwcHggMTBweCAxMHB4IDEwcHg7XHJcbn1cclxuLmNlbnRlci1ibG9jayB7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXAgLmljb24tYWRkb24gLmZvcm0tY29udHJvbCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG59XHJcblxyXG4uaWNvbi1hZGRvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjb2xvcjogIzU1NTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uaWNvbi1hZGRvbjphZnRlcixcclxuLmljb24tYWRkb246YmVmb3JlIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgY29udGVudDogXCIgXCI7XHJcbn1cclxuXHJcbi5pY29uLWFkZG9uOmFmdGVyIHtcclxuICAgIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4uaWNvbi1hZGRvbi5hZGRvbi1tZCAuZ2x5cGhpY29uLFxyXG4uaWNvbi1hZGRvbiAuZ2x5cGhpY29uLCBcclxuLmljb24tYWRkb24uYWRkb24tbWQgLmZhLFxyXG4uaWNvbi1hZGRvbiAuZmEge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGxlZnQ6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMi41cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICB0b3A6IDFweFxyXG59XHJcblxyXG4uaWNvbi1hZGRvbi5hZGRvbi1sZyAuZm9ybS1jb250cm9sIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjMzO1xyXG4gICAgaGVpZ2h0OiA0NnB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgcGFkZGluZzogMTBweCA0MHB4IDEwcHggMTBweDtcclxufVxyXG5cclxuLmljb24tYWRkb24uYWRkb24tc20gLmZvcm0tY29udHJvbCB7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweCA1cHggMjhweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbn1cclxuXHJcbi5pY29uLWFkZG9uLmFkZG9uLWxnIC5mYSxcclxuLmljb24tYWRkb24uYWRkb24tbGcgLmdseXBoaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIGxlZnQ6IDg1JTtcclxuICAgIHRvcDogOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuICAgIGNvbG9yOmxpZ2h0Z3JleTtcclxufVxyXG5cclxuLmljb24tYWRkb24uYWRkb24tbWQgLmZvcm0tY29udHJvbCxcclxuLmljb24tYWRkb24gLmZvcm0tY29udHJvbCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5pY29uLWFkZG9uLmFkZG9uLXNtIC5mYSxcclxuLmljb24tYWRkb24uYWRkb24tc20gLmdseXBoaWNvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxlZnQ6IDVweDtcclxuICAgIHRvcDogLTFweFxyXG59XHJcblxyXG4uaWNvbi1hZGRvbiAuZm9ybS1jb250cm9sOmZvY3VzICsgLmdseXBoaWNvbixcclxuLmljb24tYWRkb246aG92ZXIgLmdseXBoaWNvbixcclxuLmljb24tYWRkb24gLmZvcm0tY29udHJvbDpmb2N1cyArIC5mYSxcclxuLmljb24tYWRkb246aG92ZXIgLmZhIHtcclxuICAgIGNvbG9yOiAjMjU4MGRiO1xyXG59XHJcbmlucHV0OjpwbGFjZWhvbGRlcntcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIGNvbG9yOiAjOTBBMkIxO1xyXG4gICAgZm9udC1mYW1pbHk6IEdvdGhhbSBib29rO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICBsaW5lLWhlaWdodDogMTVweDtcclxufVxyXG5cclxuLmNhcmQxe1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0Q5REVFNDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCAwIDAgcmdiYSg3LDQwLDY3LDAuMjUpO1xyXG59XHJcbi50YWJsZSB0ciB0ZDpudGgtY2hpbGQoMSl7XHJcbiAgICBwYWRkaW5nLWxlZnQ6Mi41cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDoyMCU7XHJcbn1cclxuLnRhYmxlIHRoZWFkIHRoOm50aC1jaGlsZCgxKXtcclxuICAgIHBhZGRpbmctbGVmdDoyLjVyZW07XHJcbn1cclxuLnRhYmxlIHRoe1xyXG4gICAgYm9yZGVyLXRvcDpub25lO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGNvbG9yOiAjOTBBMkIxO1xyXG4gICAgZm9udC1mYW1pbHk6IEdvdGhhbSBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgXHJcbn1cclxuLnRhYmxlIHRib2R5IHRkOm50aC1jaGlsZCgyKXtcclxuICAgIHdpZHRoOjQwJTtcclxufVxyXG4udGFibGUgdGJvZHl7XHJcbiAgICBjb2xvcjpibGFjaztcclxufVxyXG4udGFibGUgdGJvZHkgdGQ6bnRoLWNoaWxkKDMpe1xyXG4gICAgd2lkdGg6NSU7XHJcbn1cclxuLnRhYmxlIHRib2R5IHRyIHRkOm50aC1jaGlsZCg1KXtcclxuICAgIHdpZHRoOjEwJTtcclxufVxyXG4udGFibGUgdGJvZHkgdHIgdGR7XHJcbiAgICBjb2xvcjogIzA3Mjg0MztcclxuICAgIGZvbnQtZmFtaWx5OiBHb3RoYW0gYm9vaztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbi5oYW1tZXIgaW1ne1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBoZWlnaHQ6IDE2LjNweDtcclxuICB3aWR0aDogMTYuM3B4O1xyXG4gXHJcbn1cclxuLmZhLWluZm97XHJcbiAgICBib3JkZXI6MnB4IHNvbGlkICNBMEE1QkE7XHJcbiAgICBmb250LXNpemU6OXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlOyAgICBcclxuICAgIGNvbG9yOiNBMEE1QkE7ICAgIFxyXG4gICAgcGFkZGluZzogM3B4IDZweDtcclxufVxyXG4ubGVmdF90dHtcclxuICAgIGNvbG9yOiAjMDcyODQzO1xyXG4gIGZvbnQtZmFtaWx5OiBHb3RoYW0gYm9vaztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OjJyZW07XHJcbn1cclxuLnJpZ2h0X3R0e1xyXG4gICAgY29sb3I6ICMwNzI4NDM7XHJcbiAgICBmb250LWZhbWlseTpHb3RoYW0gYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICBsaW5lLWhlaWdodDogMTdweDtcclxufVxyXG46aG9zdChhKSB7XHJcbiAgICBjb2xvcjpyZWQgIWltcG9ydGFudDtcclxufVxyXG4udG90YWxfYmFse1xyXG4gICAgY29sb3I6IzJCNzNCMDtcclxuICAgIGZvbnQtZmFtaWx5OiBHb3RoYW0gYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbn1cclxuLmZhLWluZm86aG92ZXJ7XHJcbiAgICBib3JkZXI6MnB4IHNvbGlkICMyQjczQjA7XHJcbiAgICBjb2xvcjojMkI3M0IwOyAgICBcclxufVxyXG4uZHJvcGRvd24tZGl2aWRlcntcclxuIGhlaWdodDoycHg7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/dashboard/transactionhistory/transactionhistory.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/dashboard/transactionhistory/transactionhistory.component.ts ***!
    \******************************************************************************/

  /*! exports provided: TransactionhistoryComponent */

  /***/
  function srcAppDashboardTransactionhistoryTransactionhistoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransactionhistoryComponent", function () {
      return TransactionhistoryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_core_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/core/account.service */
    "./src/app/core/account.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var TransactionhistoryComponent =
    /*#__PURE__*/
    function () {
      function TransactionhistoryComponent(accountService, router) {
        _classCallCheck(this, TransactionhistoryComponent);

        this.accountService = accountService;
        this.router = router;
        this.bsValue = new Date();
        this.maxDate = new Date();
        this.transactionHistoryLength = 0;
      }

      _createClass(TransactionhistoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.maxDate.setDate(this.maxDate.getDate() + 7);
          this.bsRangeValue = [this.bsValue, this.maxDate];
          this.accountService.getTransactionHistory().subscribe(function (res) {
            console.log("trxn his", res);
            _this6.transactionHistoryLength = res['Result'].array.RevTrxn.length;
            _this6.transactionHistory = res['Result'].array.RevTrxn.sort(function (a, b) {
              return a.trxn.recDate > b.trxn.recDate ? -1 : 1;
            });
            _this6.currentTransactions = _this6.transactionHistory.slice(0, 20); // const parser = new xml2js.Parser({ strict: false, trim: true });
            // parser.parseString(res, (err, result) => {
            //   // console.log(result['ARRAY']['REVTRXN'])
            //   this.transactionHistoryLength = result['ARRAY']['REVTRXN'].length;
            //   this.transactionHistory = result['ARRAY']['REVTRXN'].sort((a,b)=>{
            //     return a.TRXN[0].RECDATE[0]>b.TRXN[0].RECDATE[0]?-1:1;
            //   });  
            //   this.currentTransactions = this.transactionHistory.slice(0,20);
            //   //(Payback Amount) revtrxn.fundingstmnt.paybackAmount        
            //   //(Paid Amount) revtrxn.fundingstmnt.totCollAmt
            //   //--------------------------------------m -------
            //   //(Remaining Amount) revtrxn.fundingstmnt.balToDone
            // });
          }); // this.accountService.getSummary().subscribe((res)=>{
          //   const parser = new xml2js.Parser({ strict: false, trim: true });
          //   parser.parseString(res, (err, result) => {
          //     var spendingLimit=result.REVACCOUNTSUMMARY.LIMIT[0].MAXTRXNAMT[0];   
          //     var discountedBalance = result.REVACCOUNTSUMMARY.SUMMARY[0].UNCLEAREDBAL[0];
          //     var pendingAmount = result.REVACCOUNTSUMMARY.SUMMARY[0].PENDINGBAL[0]; 
          //     this.spendingAvailability = spendingLimit-discountedBalance-pendingAmount;         
          //   });
          // })
        }
      }, {
        key: "onDateChange",
        value: function onDateChange($event) {
          if (this.transactionHistory) {
            this.currentTransactions = this.transactionHistory.filter(function (t, i) {
              var tranTime = new Date(t.trxn.recDate).getTime();
              return tranTime >= $event[0].getTime() && tranTime <= $event[1].getTime();
            });
          }
        } //TRXN[0].RECDATE[0]

      }, {
        key: "searchHistory",
        value: function searchHistory() {
          var _this7 = this;

          this.currentTransactions = this.transactionHistory.filter(function (t, i) {
            var temp = JSON.stringify(t).toUpperCase();
            return temp.includes(_this7.searchKey.toUpperCase());
          });
        }
      }, {
        key: "gotoaccount",
        value: function gotoaccount() {
          this.router.navigate(['/dashboard']);
        }
      }, {
        key: "pageChanged",
        value: function pageChanged(event) {
          var startItem = (event.page - 1) * event.itemsPerPage;
          var endItem = event.page * event.itemsPerPage;
          this.currentTransactions = this.transactionHistory.slice(startItem, endItem);
        }
      }]);

      return TransactionhistoryComponent;
    }();

    TransactionhistoryComponent.ctorParameters = function () {
      return [{
        type: src_app_core_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    TransactionhistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-transactionhistory',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./transactionhistory.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/transactionhistory/transactionhistory.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./transactionhistory.component.css */
      "./src/app/dashboard/transactionhistory/transactionhistory.component.css")).default]
    })], TransactionhistoryComponent);
    /***/
  }
}]);
//# sourceMappingURL=dashboard-dashboard-module-es5.js.map