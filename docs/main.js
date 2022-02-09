"use strict";
(self["webpackChunkform"] = self["webpackChunkform"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _examples_membership_membership_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./examples/membership/membership.component */ 8657);
/* harmony import */ var _examples_register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./examples/register/register.component */ 9273);
/* harmony import */ var _examples_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./examples/login/login.component */ 7207);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






const routes = [
    { path: 'membership', component: _examples_membership_membership_component__WEBPACK_IMPORTED_MODULE_0__.MembershipComponent },
    { path: 'register', component: _examples_register_register_component__WEBPACK_IMPORTED_MODULE_1__.RegisterComponent },
    { path: 'login', component: _examples_login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent },
    { path: '', redirectTo: 'membership', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var ngxa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngxa */ 762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);



class AppComponent {
    constructor() {
        this.title = 'formify';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 47, vars: 1, consts: [["role", "main", 1, "content"], [1, "card", "highlight-card", "card-small", "angular-formify"], ["id", "rocket", "alt", "Rocket Ship", "xmlns", "http://www.w3.org/2000/svg", "width", "101.678", "height", "101.678", "viewBox", "0 0 101.678 101.678"], ["id", "Group_83", "data-name", "Group 83", "transform", "translate(-141 -696)"], ["id", "Ellipse_8", "data-name", "Ellipse 8", "cx", "50.839", "cy", "50.839", "r", "50.839", "transform", "translate(141 696)", "fill", "#673ab7"], ["id", "Group_47", "data-name", "Group 47", "transform", "translate(165.185 720.185)"], ["id", "Path_33", "data-name", "Path 33", "d", "M3.4,42.615a3.084,3.084,0,0,0,3.553,3.553,21.419,21.419,0,0,0,12.215-6.107L9.511,30.4A21.419,21.419,0,0,0,3.4,42.615Z", "transform", "translate(0.371 3.363)", "fill", "#fff"], ["id", "Path_34", "data-name", "Path 34", "d", "M53.3,3.221A3.09,3.09,0,0,0,50.081,0,48.227,48.227,0,0,0,18.322,13.437c-6-1.666-14.991-1.221-18.322,7.218A33.892,33.892,0,0,1,9.439,25.1l-.333.666a3.013,3.013,0,0,0,.555,3.553L23.985,43.641a2.9,2.9,0,0,0,3.553.555l.666-.333A33.892,33.892,0,0,1,32.647,53.3c8.55-3.664,8.884-12.326,7.218-18.322A48.227,48.227,0,0,0,53.3,3.221ZM34.424,9.772a6.439,6.439,0,1,1,9.106,9.106,6.368,6.368,0,0,1-9.106,0A6.467,6.467,0,0,1,34.424,9.772Z", "transform", "translate(0 0.005)", "fill", "#fff"], [1, "title"], [1, "card-container"], ["rel", "noopener", "href", "javascript:", "routerLink", "/membership", 1, "card"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", 1, "material-icons"], ["d", "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"], ["rel", "noopener", "href", "javascript:", "routerLink", "/register", 1, "card"], ["rel", "noopener", "href", "javascript:", "routerLink", "/login", 1, "card"], [1, "form"], ["type", "hidden"], ["selection", ""], [2, "padding", "10px 0"], [1, "footer"], [1, "section"], ["href", "https://github.com/klodianshaba/angular-formify", "target", "_blank"], ["alt", "GitHub Logo", "src", "./assets/images/GitHub-Mark-32px.png"], ["href", "https://www.linkedin.com/in/klodian-shaba-536269153/", "target", "_blank"], ["alt", "GitHub Logo", "src", "./assets/images/In-Blue-Logo.png.original.png"], [1, "fw-bold", "fs-5", "copyright"], ["id", "clouds", "alt", "Gray Clouds Background", "xmlns", "http://www.w3.org/2000/svg", "width", "2611.084", "height", "485.677", "viewBox", "0 0 2611.084 485.677"], ["id", "Path_39", "data-name", "Path 39", "d", "M2379.709,863.793c10-93-77-171-168-149-52-114-225-105-264,15-75,3-140,59-152,133-30,2.83-66.725,9.829-93.5,26.25-26.771-16.421-63.5-23.42-93.5-26.25-12-74-77-130-152-133-39-120-212-129-264-15-54.084-13.075-106.753,9.173-138.488,48.9-31.734-39.726-84.4-61.974-138.487-48.9-52-114-225-105-264,15a162.027,162.027,0,0,0-103.147,43.044c-30.633-45.365-87.1-72.091-145.206-58.044-52-114-225-105-264,15-75,3-140,59-152,133-53,5-127,23-130,83-2,42,35,72,70,86,49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33,61.112,8.015,113.854-5.72,150.492-29.764a165.62,165.62,0,0,0,110.861-3.236c47,94,178,113,251,33,31.385,4.116,60.563,2.495,86.487-3.311,25.924,5.806,55.1,7.427,86.488,3.311,73,80,204,61,251-33a165.625,165.625,0,0,0,120,0c51,13,108,15,157-5a147.188,147.188,0,0,0,33.5-18.694,147.217,147.217,0,0,0,33.5,18.694c49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33C2446.709,1093.793,2554.709,922.793,2379.709,863.793Z", "transform", "translate(142.69 -634.312)", "fill", "#673ab7"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "circle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "g", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Angular Formify");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Angular library to generate forms dynamically by having the ability to customize, manipulate and scale it easy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Membership formify");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Register formify");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Login formify");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "footer", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\u00A9 Klodian Shaba");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "svg", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@zoomInLeft", undefined);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 14px;\n  color: #333;\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  margin: 8px 0;\n}\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.toolbar[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  background-color: #1976d2;\n  color: white;\n  font-weight: 600;\n}\n.toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 0 16px;\n}\nfooter[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 16px;\n}\n.toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%] {\n  height: 40px;\n  margin: 0 8px;\n}\n.toolbar[_ngcontent-%COMP%]   #youtube-logo[_ngcontent-%COMP%] {\n  height: 40px;\n  margin-left: 16px;\n}\n.toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%]:hover, .toolbar[_ngcontent-%COMP%]   #youtube-logo[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 0 auto;\n  padding: 20px 20px;\n  flex-direction: column;\n  align-items: center;\n  background: linear-gradient(180.01deg, #673ab7 0.01%, #FFFFFF 90.37%), #FFFFFF;\n}\n.content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  max-width: 800px;\n}\n.content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: white;\n  text-align: center;\n  margin-top: 30px;\n}\n.content[_ngcontent-%COMP%]   .angular-formify[_ngcontent-%COMP%] {\n  box-shadow: 0px 0px 15px 0px #673AB7;\n}\n.content[_ngcontent-%COMP%]   .angular-formify[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  filter: drop-shadow(2px 4px 6px #673ab7);\n}\n.content[_ngcontent-%COMP%] {\n  padding-bottom: 150px;\n}\nsvg.material-icons[_ngcontent-%COMP%] {\n  height: 24px;\n  width: auto;\n}\nsvg.material-icons[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 8px;\n}\n.card[_ngcontent-%COMP%]   svg.material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: white;\n}\n.card-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: 16px;\n  max-width: 800px;\n}\n.card[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  background-color: #673ab7;\n  width: 200px;\n  margin: 5px;\n  padding: 16px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.2s ease-in-out;\n  line-height: 24px;\n}\n.card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: white;\n}\n.card.card-small[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 168px;\n}\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card) {\n  cursor: pointer;\n}\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover {\n  transform: translateY(-3px);\n  box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\n}\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover   .material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #696767;\n}\n.card.highlight-card[_ngcontent-%COMP%] {\n  background-color: #673ab7;\n  color: white;\n  font-weight: 600;\n  border: none;\n  width: 200px;\n  position: relative;\n}\n.card.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 60px;\n}\nsvg#rocket[_ngcontent-%COMP%] {\n  width: 80px;\n  position: absolute;\n  left: -10px;\n  top: -24px;\n}\nsvg#rocket-smoke[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  margin-left: -600px;\n  z-index: -10;\n}\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\n  color: #1976d2;\n  text-decoration: none;\n}\na[_ngcontent-%COMP%]:hover {\n  color: #125699;\n}\n.terminal[_ngcontent-%COMP%] {\n  position: relative;\n  width: 80%;\n  max-width: 600px;\n  border-radius: 6px;\n  padding-top: 45px;\n  margin-top: 8px;\n  overflow: hidden;\n  background-color: #0f0f10;\n}\n.terminal[_ngcontent-%COMP%]::before {\n  content: \"\u2022\u2022\u2022\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 4px;\n  background: #3a3a3a;\n  color: #c2c3c4;\n  width: 100%;\n  font-size: 2rem;\n  line-height: 0;\n  padding: 14px 0;\n  text-indent: 4px;\n}\n.terminal[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;\n  color: white;\n  padding: 0 1rem 1rem;\n  margin: 0;\n}\n.circle-link[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  border-radius: 40px;\n  margin: 8px;\n  background-color: white;\n  border: 1px solid #eeeeee;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: 1s ease-out;\n}\n.circle-link[_ngcontent-%COMP%]:hover {\n  transform: translateY(-0.25rem);\n  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n}\nfooter[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  display: flex;\n  align-items: center;\n  line-height: 20px;\n  width: 740px;\n}\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.github-star-badge[_ngcontent-%COMP%] {\n  color: #24292e;\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  padding: 3px 10px;\n  border: 1px solid rgba(27, 31, 35, 0.2);\n  border-radius: 3px;\n  background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);\n  margin-left: 4px;\n  font-weight: 600;\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;\n}\n.github-star-badge[_ngcontent-%COMP%]:hover {\n  background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);\n  border-color: rgba(27, 31, 35, 0.35);\n  background-position: -0.5em;\n}\n.github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 16px;\n  margin-right: 4px;\n}\nsvg#clouds[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: -330px;\n  left: -230px;\n  z-index: 10;\n  width: 1920px;\n}\nsvg#clouds[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  filter: drop-shadow(40px 40px 40px #673ab7);\n}\n.form[_ngcontent-%COMP%] {\n  width: 722px;\n  max-width: 722px;\n}\n.footer[_ngcontent-%COMP%] {\n  text-align: center;\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  color: var(--ngxa-color-active);\n  width: 100%;\n}\n.footer[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%] {\n  color: #673ab7;\n  padding: 0 10px;\n  display: flex;\n}\n.footer[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n  color: var(--ngxa-background);\n}\n.footer[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 25px;\n  margin-right: 25px;\n}\n.footer[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  transform: scale(1.3);\n  transition: 0.2s;\n}\n@media (max-width: 430px) {\n  .footer[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-right: 10px;\n  }\n}\n@media (max-width: 370px) {\n  .footer[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-right: 5px;\n  }\n}\n\n@media screen and (max-width: 767px) {\n  footer[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .card-container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .card-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .form[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 100%;\n  }\n\n  .card[_ngcontent-%COMP%]:not(.highlight-card) {\n    height: 16px;\n    margin: 8px 0;\n  }\n\n  .card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-left: 72px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDRSwwSkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0FBRUY7QUFDQTs7Ozs7O0VBTUUsYUFBQTtBQUVGO0FBQ0E7RUFDRSxTQUFBO0FBRUY7QUFDQTtFQUNFLE9BQUE7QUFFRjtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFFRjtBQUNBO0VBQ0UsY0FBQTtBQUVGO0FBQUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUFHRjtBQUFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUFHRjtBQUFBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FBR0Y7QUFBQTs7RUFFRSxZQUFBO0FBR0Y7QUFBQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEVBQUE7QUFHRjtBQUNFO0VBQ0UsZ0JBQUE7QUFDSjtBQUFJO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFFTjtBQUNFO0VBRUUsb0NBQUE7QUFDSjtBQUFJO0VBQ0Usd0NBQUE7QUFFTjtBQUVBO0VBQ0UscUJBQUE7QUFDRjtBQUVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFDRjtBQUVBO0VBQ0UsaUJBQUE7QUFDRjtBQUVBO0VBQ0UsV0FBQTtBQUNGO0FBRUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNGO0FBRUE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBRUEsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7QUFBRjtBQUNFO0VBQ0UsWUFBQTtBQUNKO0FBTUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQUhGO0FBTUE7RUFDRSxlQUFBO0FBSEY7QUFNQTtFQUNFLDJCQUFBO0VBQ0EsMENBQUE7QUFIRjtBQU1BO0VBQ0UsYUFBQTtBQUhGO0FBTUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFHQSxZQUFBO0VBQ0Esa0JBQUE7QUFMRjtBQVFBO0VBQ0UsaUJBQUE7QUFMRjtBQVFBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFMRjtBQVFBO0VBRUUsa0JBQUE7RUFDQSxTQUFBO0VBRUEsbUJBQUE7RUFDQSxZQUFBO0FBUEY7QUFVQTs7O0VBR0UsY0FBQTtFQUNBLHFCQUFBO0FBUEY7QUFVQTtFQUNFLGNBQUE7QUFQRjtBQVVBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFQRjtBQVVBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBUEY7QUFVQTtFQUNFLHdFQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsU0FBQTtBQVBGO0FBVUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx3RUFBQTtFQUNBLHVCQUFBO0FBUEY7QUFVQTtFQUNFLCtCQUFBO0VBQ0EsMkNBQUE7QUFQRjtBQVVBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQVBGO0FBVUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFQRjtBQVVBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHVDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnRUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwSUFBQTtBQVBGO0FBVUE7RUFDRSxnRUFBQTtFQUNBLG9DQUFBO0VBQ0EsMkJBQUE7QUFQRjtBQVVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQVBGO0FBVUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQVBGO0FBUUU7RUFDRSwyQ0FBQTtBQU5KO0FBU0E7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUFORjtBQVNBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxXQUFBO0FBTkY7QUFPRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQUxKO0FBTUk7RUFDRSw2QkFBQTtBQUpOO0FBTUk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUFKTjtBQUtNO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtBQUhSO0FBU0E7RUFHTTtJQUNFLGtCQUFBO0VBUk47QUFDRjtBQWFBO0VBR007SUFDRSxpQkFBQTtFQWJOO0FBQ0Y7QUFtQkEsc0JBQUE7QUFDQTtFQUNFO0lBQ0UsV0FBQTtFQWpCRjs7RUFtQkE7SUFDRSxXQUFBO0VBaEJGOztFQWtCQTs7SUFFRSxXQUFBO0VBZkY7O0VBaUJBO0lBQ0UsV0FBQTtJQUNBLGVBQUE7RUFkRjs7RUFpQkE7SUFDRSxZQUFBO0lBQ0EsYUFBQTtFQWRGOztFQWlCQTtJQUNFLGlCQUFBO0VBZEY7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogIzMzMztcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbn1cclxuXHJcbmgxLFxyXG5oMixcclxuaDMsXHJcbmg0LFxyXG5oNSxcclxuaDYge1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbn1cclxuXHJcbnAge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnNwYWNlciB7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLnRvb2xiYXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi50b29sYmFyIGltZyB7XHJcbiAgbWFyZ2luOiAwIDE2cHg7XHJcbn1cclxuZm9vdGVye1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLnRvb2xiYXIgI3R3aXR0ZXItbG9nbyB7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIG1hcmdpbjogMCA4cHg7XHJcbn1cclxuXHJcbi50b29sYmFyICN5b3V0dWJlLWxvZ28ge1xyXG4gIGhlaWdodDogNDBweDtcclxuICBtYXJnaW4tbGVmdDogMTZweDtcclxufVxyXG5cclxuLnRvb2xiYXIgI3R3aXR0ZXItbG9nbzpob3ZlcixcclxuLnRvb2xiYXIgI3lvdXR1YmUtbG9nbzpob3ZlciB7XHJcbiAgb3BhY2l0eTogMC44O1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgMTgwLjAxZGVnXHJcbiAgICAsICM2NzNhYjcuMDElLCAjRkZGRkZGIDkwLjM3JSksICNGRkZGRkY7XHJcblxyXG4gIC50aXRsZXtcclxuICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICBoMiB7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuYW5ndWxhci1mb3JtaWZ5e1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDE1cHggMHB4ICM2NzNBQjc7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggMHB4ICM2NzNBQjc7XHJcbiAgICBzdmd7XHJcbiAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMnB4IDRweCA2cHggIzY3M2FiNyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5jb250ZW50e1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNTBweDtcclxufVxyXG5cclxuc3ZnLm1hdGVyaWFsLWljb25zIHtcclxuICBoZWlnaHQ6IDI0cHg7XHJcbiAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbnN2Zy5tYXRlcmlhbC1pY29uczpub3QoOmxhc3QtY2hpbGQpIHtcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG5cclxuLmNhcmQgc3ZnLm1hdGVyaWFsLWljb25zIHBhdGgge1xyXG4gIGZpbGw6IHdoaXRlO1xyXG59XHJcblxyXG4uY2FyZC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgbWF4LXdpZHRoOiA4MDBweDtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjczYWI3O1xyXG4gIC8vaGVpZ2h0OiA0MHB4O1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBtYXJnaW46IDVweCA7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBzcGFue1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxufVxyXG5cclxuLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCg6bGFzdC1jaGlsZCkge1xyXG59XHJcblxyXG4uY2FyZC5jYXJkLXNtYWxsIHtcclxuICBoZWlnaHQ6IDE2cHg7XHJcbiAgd2lkdGg6IDE2OHB4O1xyXG59XHJcblxyXG4uY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCkge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTdweCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xyXG59XHJcblxyXG4uY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCk6aG92ZXIgLm1hdGVyaWFsLWljb25zIHBhdGgge1xyXG4gIGZpbGw6IHJnYigxMDUsIDEwMywgMTAzKTtcclxufVxyXG5cclxuLmNhcmQuaGlnaGxpZ2h0LWNhcmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NzNhYjc7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIC8vd2lkdGg6IGF1dG87XHJcbiAgLy9taW4td2lkdGg6IDMwJTtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uY2FyZC5jYXJkLmhpZ2hsaWdodC1jYXJkIHNwYW4ge1xyXG4gIG1hcmdpbi1sZWZ0OiA2MHB4O1xyXG59XHJcblxyXG5zdmcjcm9ja2V0IHtcclxuICB3aWR0aDogODBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogLTEwcHg7XHJcbiAgdG9wOiAtMjRweDtcclxufVxyXG5cclxuc3ZnI3JvY2tldC1zbW9rZSB7XHJcbiAgLy9oZWlnaHQ6IGNhbGMoMTAwdmggLSA5NXB4KTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIC8vcmlnaHQ6IDI1MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtNjAwcHg7XHJcbiAgei1pbmRleDogLTEwO1xyXG59XHJcblxyXG5hLFxyXG5hOnZpc2l0ZWQsXHJcbmE6aG92ZXIge1xyXG4gIGNvbG9yOiAjMTk3NmQyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuYTpob3ZlciB7XHJcbiAgY29sb3I6ICMxMjU2OTk7XHJcbn1cclxuXHJcbi50ZXJtaW5hbCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgcGFkZGluZy10b3A6IDQ1cHg7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1LCAxNSwgMTYpO1xyXG59XHJcblxyXG4udGVybWluYWw6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXDIwMjIgXFwyMDIyIFxcMjAyMlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBoZWlnaHQ6IDRweDtcclxuICBiYWNrZ3JvdW5kOiByZ2IoNTgsIDU4LCA1OCk7XHJcbiAgY29sb3I6ICNjMmMzYzQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAwO1xyXG4gIHBhZGRpbmc6IDE0cHggMDtcclxuICB0ZXh0LWluZGVudDogNHB4O1xyXG59XHJcblxyXG4udGVybWluYWwgcHJlIHtcclxuICBmb250LWZhbWlseTogU0ZNb25vLVJlZ3VsYXIsQ29uc29sYXMsTGliZXJhdGlvbiBNb25vLE1lbmxvLG1vbm9zcGFjZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMCAxcmVtIDFyZW07XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uY2lyY2xlLWxpbmsge1xyXG4gIGhlaWdodDogNDBweDtcclxuICB3aWR0aDogNDBweDtcclxuICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gIG1hcmdpbjogOHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWVlZWU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XHJcbiAgdHJhbnNpdGlvbjogMXMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbi5jaXJjbGUtbGluazpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjI1cmVtKTtcclxuICBib3gtc2hhZG93OiAwcHggM3B4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcblxyXG5mb290ZXIge1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgd2lkdGg6IDc0MHB4O1xyXG59XHJcblxyXG5mb290ZXIgYSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZ2l0aHViLXN0YXItYmFkZ2Uge1xyXG4gIGNvbG9yOiAjMjQyOTJlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgcGFkZGluZzogM3B4IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNywzMSwzNSwuMik7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCNmYWZiZmMsI2VmZjNmNiA5MCUpO1xyXG4gIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsU2Vnb2UgVUksSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWYsQXBwbGUgQ29sb3IgRW1vamksU2Vnb2UgVUkgRW1vamksU2Vnb2UgVUkgU3ltYm9sO1xyXG59XHJcblxyXG4uZ2l0aHViLXN0YXItYmFkZ2U6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCNmMGYzZjYsI2U2ZWJmMSA5MCUpO1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNywzMSwzNSwuMzUpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0uNWVtO1xyXG59XHJcblxyXG4uZ2l0aHViLXN0YXItYmFkZ2UgLm1hdGVyaWFsLWljb25zIHtcclxuICBoZWlnaHQ6IDE2cHg7XHJcbiAgd2lkdGg6IDE2cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbn1cclxuXHJcbnN2ZyNjbG91ZHMge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IC0zMzBweDtcclxuICBsZWZ0OiAtMjMwcHg7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgd2lkdGg6IDE5MjBweDtcclxuICBwYXRoe1xyXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdyg0MHB4IDQwcHggNDBweCAjNjczYWI3KTtcclxuICB9XHJcbn1cclxuLmZvcm17XHJcbiAgd2lkdGg6IDcyMnB4O1xyXG4gIG1heC13aWR0aDogNzIycHg7XHJcbn1cclxuXHJcbi5mb290ZXJ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBjb2xvcjogdmFyKC0tbmd4YS1jb2xvci1hY3RpdmUpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC5zZWN0aW9ue1xyXG4gICAgY29sb3I6ICM2NzNhYjc7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLmNvcHlyaWdodHtcclxuICAgICAgY29sb3I6IHZhcigtLW5neGEtYmFja2dyb3VuZCk7XHJcbiAgICB9XHJcbiAgICBhIGltZyB7XHJcbiAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcbiAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0MzBweCkge1xyXG4gIC5mb290ZXJ7XHJcbiAgICAuc2VjdGlvbntcclxuICAgICAgYSBpbWd7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMzcwcHgpIHtcclxuICAuZm9vdGVye1xyXG4gICAgLnNlY3Rpb257XHJcbiAgICAgIGEgaW1ne1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLyogUmVzcG9uc2l2ZSBTdHlsZXMgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICBmb290ZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLmNhcmQtY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5jYXJkLWNvbnRhaW5lciA+ICo6bm90KC5jaXJjbGUtbGluaykgLFxyXG4gIC50ZXJtaW5hbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLmZvcm17XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpIHtcclxuICAgIGhlaWdodDogMTZweDtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgfVxyXG5cclxuICAuY2FyZC5oaWdobGlnaHQtY2FyZCBzcGFuIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA3MnB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcclxufVxyXG4iXX0= */"], data: { animation: [
            (0,ngxa__WEBPACK_IMPORTED_MODULE_2__.zoomIn)({ direction: 'Left', timings: '1000ms' }),
        ] } });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _formify_formify_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formify/formify.module */ 9968);
/* harmony import */ var _formify_custom_custom_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formify/custom/custom.module */ 1287);
/* harmony import */ var _formify_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formify/material.module */ 7483);
/* harmony import */ var ngx_json_viewer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-json-viewer */ 6124);
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-highlightjs */ 90);
/* harmony import */ var _examples_membership_membership_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/membership/membership.component */ 8657);
/* harmony import */ var _examples_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/register/register.component */ 9273);
/* harmony import */ var _examples_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/login/login.component */ 7207);
/* harmony import */ var _examples_highlights_highlights_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/highlights/highlights.component */ 7973);
/* harmony import */ var _examples_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/header/header.component */ 7122);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ providers: [
        {
            provide: ngx_highlightjs__WEBPACK_IMPORTED_MODULE_11__.HIGHLIGHT_OPTIONS,
            useValue: {
                fullLibraryLoader: () => __webpack_require__.e(/*! import() */ "node_modules_highlight_js_lib_index_js").then(__webpack_require__.t.bind(__webpack_require__, /*! highlight.js */ 8058, 23)),
            }
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.BrowserAnimationsModule,
            _formify_formify_module__WEBPACK_IMPORTED_MODULE_2__.FormifyModule,
            _formify_custom_custom_module__WEBPACK_IMPORTED_MODULE_3__.CustomModule,
            _formify_material_module__WEBPACK_IMPORTED_MODULE_4__.MaterialModule,
            ngx_json_viewer__WEBPACK_IMPORTED_MODULE_14__.NgxJsonViewerModule,
            ngx_highlightjs__WEBPACK_IMPORTED_MODULE_11__.HighlightModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _examples_membership_membership_component__WEBPACK_IMPORTED_MODULE_5__.MembershipComponent,
        _examples_register_register_component__WEBPACK_IMPORTED_MODULE_6__.RegisterComponent,
        _examples_login_login_component__WEBPACK_IMPORTED_MODULE_7__.LoginComponent,
        _examples_highlights_highlights_component__WEBPACK_IMPORTED_MODULE_8__.HighlightsComponent,
        _examples_header_header_component__WEBPACK_IMPORTED_MODULE_9__.HeaderComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.BrowserAnimationsModule,
        _formify_formify_module__WEBPACK_IMPORTED_MODULE_2__.FormifyModule,
        _formify_custom_custom_module__WEBPACK_IMPORTED_MODULE_3__.CustomModule,
        _formify_material_module__WEBPACK_IMPORTED_MODULE_4__.MaterialModule,
        ngx_json_viewer__WEBPACK_IMPORTED_MODULE_14__.NgxJsonViewerModule,
        ngx_highlightjs__WEBPACK_IMPORTED_MODULE_11__.HighlightModule] }); })();


/***/ }),

/***/ 7122:
/*!*****************************************************!*\
  !*** ./src/app/examples/header/header.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ 6246);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 2544);




class HeaderComponent {
    constructor() {
        this.toggleCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.label = 'Membershqip Formify';
        this.collapse = true;
    }
    ngOnInit() {
    }
    onToggleCollapse() {
        this.collapse = !this.collapse;
        this.toggleCollapse.emit(this.collapse);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["formify-header"]], inputs: { label: "label" }, outputs: { toggleCollapse: "toggleCollapse" }, decls: 9, vars: 1, consts: [[1, "form-header"], ["mat-icon-button", "", "target", "_blank", "href", "https://github.com/klodianshaba/angular-formify"], ["id", "github-svg", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "aria-hidden", "true", "focusable", "false", "width", "1em", "height", "1em", "preserveAspectRatio", "xMidYMid meet", "viewBox", "0 0 24 24", 2, "-ms-transform", "rotate(360deg)", "-webkit-transform", "rotate(360deg)", "transform", "rotate(360deg)"], ["d", "M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z", "fill", "black"], [1, "label"], ["mat-icon-button", "", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_6_listener() { return ctx.onToggleCollapse(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatAnchor, _angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon], styles: [".form-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 0;\n}\n.form-header[_ngcontent-%COMP%]   #github-svg[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n.form-header[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUNGO0FBQUU7RUFDRSxlQUFBO0FBRUo7QUFBRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUVKIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWhlYWRlcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDIwcHggMDtcclxuICAjZ2l0aHViLXN2Z3tcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICB9XHJcbiAgLmxhYmVse1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 7973:
/*!*************************************************************!*\
  !*** ./src/app/examples/highlights/highlights.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Highlights": () => (/* binding */ Highlights),
/* harmony export */   "HighlightState": () => (/* binding */ HighlightState),
/* harmony export */   "HighlightsComponent": () => (/* binding */ HighlightsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/tabs */ 5264);
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-highlightjs */ 90);
/* harmony import */ var ngx_json_viewer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-json-viewer */ 6124);





function HighlightsComponent_div_0_mat_tab_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "code", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const highlight_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", highlight_r2.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", highlight_r2.code);
} }
function HighlightsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab-group", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HighlightsComponent_div_0_mat_tab_2_Template, 3, 2, "mat-tab", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-tab", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ngx-json-viewer", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.highlight.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("json", ctx_r0.json)("expanded", false);
} }
var Highlights;
(function (Highlights) {
    Highlights["membership"] = "membership";
    Highlights["register"] = "register";
    Highlights["login"] = "login";
})(Highlights || (Highlights = {}));
class HighlightState {
}
class HighlightsComponent {
    constructor() {
        this.collapse = true;
        this.json = {};
        this.highlightType = Highlights.membership;
        this.highlights = [
            {
                type: Highlights.membership,
                items: [
                    {
                        label: 'HTML',
                        language: 'html',
                        code: `<form class="formify" [formGroup]="formify.formGroup" #form="ngForm" (ngSubmit)="onSubmit()">
  <formify-input formControlName="firstName" [fieldModel]="formify.field('firstName')"></formify-input>
  <formify-input formControlName="lastName" [fieldModel]="formify.field('lastName')"></formify-input>
  <formify-select formControlName="languages" [fieldModel]="formify.field('languages')"></formify-select>
  <formify-textarea formControlName="biography" [fieldModel]="formify.field('biography')"></formify-textarea>
  <formify-toggle formControlName="toggleColor" [fieldModel]="formify.field('toggleColor')"></formify-toggle>
  <formify-radio formControlName="color" [fieldModel]="formify.field('color')"></formify-radio>
  <formify-exercises [groupModel]="formify.group('exercises')"></formify-exercises>
  <formify-radio formControlName="appearance" [fieldModel]="formify.field('appearance')"></formify-radio>
  <formify-address [arrayModel]="formify.array('address')"></formify-address>
  <formify-toggle formControlName="toggleContact" [fieldModel]="formify.field('toggleContact')"></formify-toggle>
  <formify-contact [groupModel]="formify.group('contact')"></formify-contact>
  <formify-submit [submit]="formify.submit"></formify-submit>
</form>`
                    },
                    {
                        label: 'TS',
                        language: 'ts',
                        code: `export class MembershipComponent implements OnInit, OnDestroy {
  public formify: FormifyModel = new FormifyModel({
    controls: [
      new NameFieldControl({}), // extends FieldModel
      new FieldModel({controlName: 'lastName', label: 'Enter last name', placeholder: 'last name'}),
      new LanguageFieldControl({}), // extends FieldModel
      new BiographyFieldControl({}), // extends FieldModel
      new ColorFieldControl({}), // extends FieldModel
      new AppearanceFieldControl(),
      new ToggleFieldControl({controlName: 'toggleColor', label: 'Show/Hidden choose color radios'}), // extends FieldModel
      new ArrayModel({controlName: 'address', label: 'Address:', controls: [
          new AddressGroupControl(), // extends GroupModel
        ]}),
      new ExercisesGroupControl(), // extends GroupModel
      new ToggleFieldControl({controlName: 'toggleContact', label: 'Add/Remove fill contact group'}), // extends FieldModel
      new ContactGroupControl(),
    ],
    submit: {text: 'Save Membership'},
  });
  constructor() {
     this.formify.formGroup.get('color').valueChanges.subscribe(color => { // handle color change
      this.formify.updateFields({color});
      this.formify.updateSubmit({color});
    });
    this.formify.formGroup.get('appearance').valueChanges.subscribe(appearance => { // handle appearance change
      this.formify.updateFields({appearance});
    });
    this.formify.formGroup.get('toggleColor').valueChanges.subscribe(toggle => { // handle show/hide color radios
      if (toggle){
        this.formify.field('color').update({hidden: false });
      }else{
        this.formify.field('color').update({hidden: true });
      }
    });
    this.formify.formGroup.get('toggleContact').valueChanges.subscribe(contact => { // handle add/remove contact group
      if (contact){
        this.formify.addControl( new ContactGroupControl());
      }else{
        this.formify.removeControl('contact');
      }
    });
  }
  ngOnDestroy(): void {
    this.formify.unSubscribe();
  }
}`
                    },
                ]
            },
            {
                type: Highlights.register,
                items: [{
                        label: 'HTML',
                        language: 'html',
                        code: ` <formify [formify]="formify" (submit)="onSubmit()"></formify>`
                    },
                    {
                        label: 'TS',
                        language: 'ts',
                        code: `public formify = new FormifyModel({
    controls: [
      new NameFieldControl({ controlName: 'fullName' , label: 'Enter your full name'}), // extends FieldModel and overwrite
      new EmailFieldControl(),
      new ToggleFieldControl({ // extends FieldModel, overwrite by given optional FieldState
        fieldType: FieldTypes.radio, label: 'Account Type', defaultValue: 'visitor',
        controlName: 'accountType', options: [ {text: 'Business', value: 'business'},  {text: 'Visitor', value: 'visitor'}]
      }),
      new LanguageFieldControl(), // extends FieldModel
      new PasswordFieldControl(), // extends FieldModel
      new FieldModel({ // FieldModel
        controlName: 'confirmPassword', icon: 'check', type: 'password', label: 'Confirm password', placeholder: 'password',
        validators: [
          new ValidatorModel( {validator: Validators.required , errorCode: 'required', description: 'Confirm password is required'} ),
          new ValidatorModel( {validator: Validators.minLength(8), errorCode: 'minlength', description: 'Confirm password must have 8 characters'}),
          {validator: null, errorCode: 'notMatch', description: 'Confirm password not match'},
        ]
      }),
    ],
    submit: {text: 'Register' , color: 'warn'}, // submit button
    options: MatchConfirmPassword  // options: ValidatorFn | ValidatorFn[] | AbstractControlOptions
 });`
                    }
                ]
            },
            {
                type: Highlights.login,
                items: [
                    {
                        label: 'HTML',
                        language: 'html',
                        code: ` <formify [formify]="formify" (submit)="onSubmit()"></formify>`
                    },
                    {
                        label: 'TS',
                        language: 'ts',
                        code: `public formify = new FormifyModel({
    controls: [
      new EmailFieldControl(), // extends FieldModel
      new PasswordFieldControl(), // extends FieldModel
    ],
    submit: {text: 'Login'}
});`
                    }
                ]
            }
        ];
    }
    set onHighlight(highlightType) {
        this.highlightType = highlightType;
        this.initCurrentHighlight();
    }
    initCurrentHighlight() {
        this.highlight = this.highlights.find(highlight => highlight.type === this.highlightType);
    }
    ngOnInit() {
        this.initCurrentHighlight();
    }
}
HighlightsComponent.ɵfac = function HighlightsComponent_Factory(t) { return new (t || HighlightsComponent)(); };
HighlightsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HighlightsComponent, selectors: [["formify-highlights"]], inputs: { onHighlight: ["highlightType", "onHighlight"], collapse: "collapse", json: "json" }, decls: 1, vars: 1, consts: [["class", "code-content", 4, "ngIf"], [1, "code-content"], ["mat-align-tabs", "start"], [3, "label", 4, "ngFor", "ngForOf"], ["label", "JSON"], [3, "json", "expanded"], [3, "label"], [3, "highlight"]], template: function HighlightsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HighlightsComponent_div_0_Template, 5, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.collapse);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__.MatTabGroup, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__.MatTab, ngx_highlightjs__WEBPACK_IMPORTED_MODULE_3__.Highlight, ngx_json_viewer__WEBPACK_IMPORTED_MODULE_4__.NgxJsonViewerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoaWdobGlnaHRzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 7207:
/*!***************************************************!*\
  !*** ./src/app/examples/login/login.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _formify_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../formify/models */ 3566);
/* harmony import */ var _formify_fields__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../formify/fields */ 8793);
/* harmony import */ var _highlights_highlights_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../highlights/highlights.component */ 7973);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header/header.component */ 7122);
/* harmony import */ var _formify_components_formify_formify_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../formify/components/formify/formify.component */ 8860);







class LoginComponent {
    constructor() {
        this.collapse = true;
        this.Highlights = _highlights_highlights_component__WEBPACK_IMPORTED_MODULE_2__.Highlights;
        this.formify = new _formify_models__WEBPACK_IMPORTED_MODULE_0__.FormifyModel({
            controls: [
                new _formify_fields__WEBPACK_IMPORTED_MODULE_1__.EmailFieldControl(),
                new _formify_fields__WEBPACK_IMPORTED_MODULE_1__.PasswordFieldControl(), // extends FieldModel
            ],
            submit: { text: 'Login' }, // submit button
        });
    }
    ngOnInit() {
    }
    onSubmit() {
        this.formify.loading(true);
        setTimeout(() => {
            this.formify.loading(false);
        }, 1000);
    }
    onToggleCollapse() {
        this.collapse = !this.collapse;
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["formify-login"]], decls: 5, vars: 4, consts: [[1, "register-content"], ["label", "Login formify", 2, "width", "100%", 3, "toggleCollapse"], [3, "highlightType", "collapse", "json"], [1, "form-content"], [3, "formify", "submit"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "formify-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("toggleCollapse", function LoginComponent_Template_formify_header_toggleCollapse_1_listener($event) { return ctx.collapse = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "formify-highlights", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "formify", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("submit", function LoginComponent_Template_formify_submit_4_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("highlightType", ctx.Highlights.login)("collapse", ctx.collapse)("json", ctx.formify.formGroup.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formify", ctx.formify);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent, _highlights_highlights_component__WEBPACK_IMPORTED_MODULE_2__.HighlightsComponent, _formify_components_formify_formify_component__WEBPACK_IMPORTED_MODULE_4__.FormifyComponent], styles: [".register-content[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.register-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n  margin: 16px;\n  font-size: 18px;\n  font-weight: bold;\n  text-align: center;\n}\n.register-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child   button[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 8px;\n}\n.register-content[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%] {\n  width: 300px;\n}\n.register-content[_ngcontent-%COMP%]   formify-highlights[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@media screen and (max-width: 575px) {\n  .register-content[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUFGO0FBQ0U7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUFJO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtBQUVOO0FBQ0U7RUFDRSxZQUFBO0FBQ0o7QUFDRTtFQUNFLFdBQUE7QUFDSjtBQUdBO0VBRUk7SUFDRSxXQUFBO0VBREo7QUFDRiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ucmVnaXN0ZXItY29udGVudCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gID4gZGl2OmZpcnN0LWNoaWxkIHtcclxuICAgIG1hcmdpbjogMTZweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYnV0dG9ue1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICB0b3A6IDhweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmZvcm0tY29udGVudHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICB9XHJcbiAgZm9ybWlmeS1oaWdobGlnaHRze1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gIC5yZWdpc3Rlci1jb250ZW50IHtcclxuICAgIC5mb3JtLWNvbnRlbnQge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 8657:
/*!*************************************************************!*\
  !*** ./src/app/examples/membership/membership.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MembershipComponent": () => (/* binding */ MembershipComponent)
/* harmony export */ });
/* harmony import */ var _formify_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../formify/models */ 3566);
/* harmony import */ var _formify_fields__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../formify/fields */ 8793);
/* harmony import */ var _formify_groups__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../formify/groups */ 4775);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header/header.component */ 7122);
/* harmony import */ var _highlights_highlights_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../highlights/highlights.component */ 7973);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _formify_components_input_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../formify/components/input/input.component */ 6257);
/* harmony import */ var _formify_components_select_select_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../formify/components/select/select.component */ 7872);
/* harmony import */ var _formify_components_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../formify/components/textarea/textarea.component */ 8418);
/* harmony import */ var _formify_components_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../formify/components/toggle/toggle.component */ 4412);
/* harmony import */ var _formify_components_radio_radio_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../formify/components/radio/radio.component */ 7932);
/* harmony import */ var _formify_custom_components_exercises_exercises_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../formify/custom/components/exercises/exercises.component */ 7904);
/* harmony import */ var _formify_custom_components_address_address_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../formify/custom/components/address/address.component */ 163);
/* harmony import */ var _formify_custom_components_contact_contact_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../formify/custom/components/contact/contact.component */ 9872);
/* harmony import */ var _formify_components_submit_submit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../formify/components/submit/submit.component */ 8366);

















const _c0 = function (a0) { return { "loading-form": a0 }; };
class MembershipComponent {
    constructor(cd) {
        this.cd = cd;
        this.collapse = true;
        this.formify = new _formify_models__WEBPACK_IMPORTED_MODULE_0__.FormifyModel({
            controls: [
                new _formify_fields__WEBPACK_IMPORTED_MODULE_1__.NameFieldControl({}),
                new _formify_models__WEBPACK_IMPORTED_MODULE_0__.FieldModel({ controlName: 'lastName', label: 'Enter last name', placeholder: 'last name' }),
                new _formify_fields__WEBPACK_IMPORTED_MODULE_1__.LanguageFieldControl({}),
                new _formify_fields__WEBPACK_IMPORTED_MODULE_1__.BiographyFieldControl({}),
                new _formify_fields__WEBPACK_IMPORTED_MODULE_1__.ColorFieldControl({}),
                new _formify_fields__WEBPACK_IMPORTED_MODULE_1__.AppearanceFieldControl({}),
                new _formify_fields__WEBPACK_IMPORTED_MODULE_1__.ToggleFieldControl({ controlName: 'toggleColor', label: 'Show/Hidden choose color radios' }),
                new _formify_models__WEBPACK_IMPORTED_MODULE_0__.ArrayModel({ controlName: 'address', label: 'Address:', controls: [
                        new _formify_groups__WEBPACK_IMPORTED_MODULE_2__.AddressGroupControl({}), // extends GroupModel
                    ] }),
                new _formify_groups__WEBPACK_IMPORTED_MODULE_2__.ExercisesGroupControl({}),
                new _formify_fields__WEBPACK_IMPORTED_MODULE_1__.ToggleFieldControl({ controlName: 'toggleContact', label: 'Add/Remove fill contact group' }),
                new _formify_groups__WEBPACK_IMPORTED_MODULE_2__.ContactGroupControl({}),
            ],
            submit: { text: 'Save Membership' },
        });
        this.formify.formGroup.get('color').valueChanges.subscribe(color => {
            this.formify.updateFields({ color });
            this.formify.updateSubmit({ color });
        });
        this.formify.formGroup.get('appearance').valueChanges.subscribe(appearance => {
            this.formify.updateFields({ appearance });
        });
        this.formify.formGroup.get('toggleColor').valueChanges.subscribe(toggle => {
            if (toggle) {
                this.formify.field('color').update({ hidden: false });
            }
            else {
                this.formify.field('color').update({ hidden: true });
            }
        });
        this.formify.formGroup.get('toggleContact').valueChanges.subscribe(contact => {
            if (contact) {
                this.formify.addControl(new _formify_groups__WEBPACK_IMPORTED_MODULE_2__.ContactGroupControl());
            }
            else {
                this.formify.removeControl('contact');
            }
            this.cd.detectChanges();
        });
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.formify.unSubscribe();
    }
    onSubmit() {
        this.formify.loading(true);
        setTimeout(() => {
            this.formify.loading(false);
        }, 1000);
    }
    onToggleCollapse() {
        this.collapse = !this.collapse;
    }
}
MembershipComponent.ɵfac = function MembershipComponent_Factory(t) { return new (t || MembershipComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_14__.ChangeDetectorRef)); };
MembershipComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({ type: MembershipComponent, selectors: [["formify-membership"]], decls: 18, vars: 18, consts: [[1, "form-content"], ["label", "Membership Formify", 2, "width", "100%", 3, "toggleCollapse"], [3, "collapse", "json"], [3, "formGroup", "ngClass", "ngSubmit"], ["form", "ngForm"], [1, "full-name"], ["formControlName", "firstName", 3, "fieldModel"], ["formControlName", "lastName", 3, "fieldModel"], ["formControlName", "languages", 3, "fieldModel"], ["formControlName", "biography", 3, "fieldModel"], ["formControlName", "toggleColor", 3, "fieldModel"], ["formControlName", "color", 3, "fieldModel"], [3, "groupModel"], ["formControlName", "appearance", 3, "fieldModel"], [3, "arrayModel"], ["formControlName", "toggleContact", 3, "fieldModel"], [3, "submit"]], template: function MembershipComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "formify-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("toggleCollapse", function MembershipComponent_Template_formify_header_toggleCollapse_1_listener($event) { return ctx.collapse = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "formify-highlights", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngSubmit", function MembershipComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](6, "formify-input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](7, "formify-input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](8, "formify-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](9, "formify-textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](10, "formify-toggle", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](11, "formify-radio", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](12, "formify-exercises", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](13, "formify-radio", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](14, "formify-address", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](15, "formify-toggle", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](16, "formify-contact", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](17, "formify-submit", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("collapse", ctx.collapse)("json", ctx.formify.formGroup.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx.formify.formGroup)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](16, _c0, ctx.formify.submit.loading));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("fieldModel", ctx.formify.field("firstName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("fieldModel", ctx.formify.field("lastName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("fieldModel", ctx.formify.field("languages"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("fieldModel", ctx.formify.field("biography"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("fieldModel", ctx.formify.field("toggleColor"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("fieldModel", ctx.formify.field("color"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("groupModel", ctx.formify.group("exercises"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("fieldModel", ctx.formify.field("appearance"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("arrayModel", ctx.formify.array("address"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("fieldModel", ctx.formify.field("toggleContact"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("groupModel", ctx.formify.group("contact"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("submit", ctx.formify.submit);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent, _highlights_highlights_component__WEBPACK_IMPORTED_MODULE_4__.HighlightsComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgClass, _formify_components_input_input_component__WEBPACK_IMPORTED_MODULE_5__.InputComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControlName, _formify_components_select_select_component__WEBPACK_IMPORTED_MODULE_6__.SelectComponent, _formify_components_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_7__.TextareaComponent, _formify_components_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_8__.ToggleComponent, _formify_components_radio_radio_component__WEBPACK_IMPORTED_MODULE_9__.RadioComponent, _formify_custom_components_exercises_exercises_component__WEBPACK_IMPORTED_MODULE_10__.ExercisesComponent, _formify_custom_components_address_address_component__WEBPACK_IMPORTED_MODULE_11__.AddressComponent, _formify_custom_components_contact_contact_component__WEBPACK_IMPORTED_MODULE_12__.ContactComponent, _formify_components_submit_submit_component__WEBPACK_IMPORTED_MODULE_13__.SubmitComponent], styles: [".form-content[_ngcontent-%COMP%] {\n  position: relative;\n}\n.form-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  margin: 16px;\n  font-size: 18px;\n  font-weight: bold;\n  text-align: center;\n}\n.form-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: -10px;\n}\n.form-content[_ngcontent-%COMP%]   .full-name[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.form-content[_ngcontent-%COMP%]   .full-name[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: calc(50% - 5px);\n}\n.loading-form[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n.loading-form[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  z-index: 1000 !important;\n  width: 100%;\n  height: 100%;\n  top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbWJlcnNoaXAuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXHNjc3NcXG1peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usa0JBQUE7QUFBRjtBQUNFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0o7QUFBSTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUFFTjtBQUNFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBQ0o7QUFDSTtFQUNFLHNCQUFBO0FBQ047QUFHQTtFQUVFLFlBQUE7QUFERjtBQ3RCRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0FEd0JKIiwiZmlsZSI6Im1lbWJlcnNoaXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL2FwcC9zY3NzL21peGluc1wiO1xyXG4uZm9ybS1jb250ZW50IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgPiBkaXYge1xyXG4gICAgbWFyZ2luOiAxNnB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBidXR0b257XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIHRvcDogLTEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5mdWxsLW5hbWV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgID4gKiB7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDUwJSAtIDVweCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5sb2FkaW5nLWZvcm17XHJcbiAgQGluY2x1ZGUgZGlzYWJsZWQtY29udGVudDtcclxuICBvcGFjaXR5OiAwLjc7XHJcbn1cclxuIiwiXHJcbkBtaXhpbiBkaXNhYmxlZC1jb250ZW50KCl7XHJcbiAgJjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxMDAwICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRvcDogMDtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 9273:
/*!*********************************************************!*\
  !*** ./src/app/examples/register/register.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _formify_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../formify/models */ 3566);
/* harmony import */ var _formify_fields__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../formify/fields */ 8793);
/* harmony import */ var _formify_models_error_mathers_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../formify/models/error-mathers.config */ 3331);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _highlights_highlights_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../highlights/highlights.component */ 7973);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../header/header.component */ 7122);
/* harmony import */ var _formify_components_formify_formify_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../formify/components/formify/formify.component */ 8860);









class RegisterComponent {
    constructor() {
        this.collapse = true;
        this.Highlights = _highlights_highlights_component__WEBPACK_IMPORTED_MODULE_3__.Highlights;
        this.formify = new _formify_models__WEBPACK_IMPORTED_MODULE_0__.FormifyModel({
            controls: [
                new _formify_fields__WEBPACK_IMPORTED_MODULE_1__.NameFieldControl({ controlName: 'fullName', label: 'Enter your full name' }),
                new _formify_fields__WEBPACK_IMPORTED_MODULE_1__.EmailFieldControl(),
                new _formify_fields__WEBPACK_IMPORTED_MODULE_1__.ToggleFieldControl({
                    fieldType: _formify_models__WEBPACK_IMPORTED_MODULE_0__.FieldTypes.radio, label: 'Account Type', defaultValue: 'visitor',
                    controlName: 'accountType', options: [{ text: 'Business', value: 'business' }, { text: 'Visitor', value: 'visitor' }]
                }),
                new _formify_fields__WEBPACK_IMPORTED_MODULE_1__.LanguageFieldControl(),
                new _formify_fields__WEBPACK_IMPORTED_MODULE_1__.PasswordFieldControl(),
                new _formify_models__WEBPACK_IMPORTED_MODULE_0__.FieldModel({
                    controlName: 'confirmPassword', icon: 'check', type: 'password', label: 'Confirm password', placeholder: 'password',
                    validators: [
                        new _formify_models__WEBPACK_IMPORTED_MODULE_0__.ValidatorModel({ validator: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, errorCode: 'required', description: 'Confirm password is required' }),
                        new _formify_models__WEBPACK_IMPORTED_MODULE_0__.ValidatorModel({ validator: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(8), errorCode: 'minlength', description: 'Confirm password must have 8 characters' }),
                        { validator: null, errorCode: 'notMatch', description: 'Confirm password not match' },
                    ]
                }),
            ],
            submit: { text: 'Register' },
            options: _formify_models_error_mathers_config__WEBPACK_IMPORTED_MODULE_2__.MatchConfirmPassword // options: ValidatorFn | ValidatorFn[] | AbstractControlOptions
        });
    }
    ngOnInit() {
    }
    onSubmit() {
        this.formify.loading(true);
        setTimeout(() => {
            this.formify.loading(false);
        }, 1000);
    }
    onToggleCollapse() {
        this.collapse = !this.collapse;
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(); };
RegisterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["formify-register"]], decls: 5, vars: 4, consts: [[1, "register-content"], ["label", "Register formify", 2, "width", "100%", 3, "toggleCollapse"], [3, "highlightType", "collapse", "json"], [1, "form-content"], [3, "formify", "submit"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "formify-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("toggleCollapse", function RegisterComponent_Template_formify_header_toggleCollapse_1_listener($event) { return ctx.collapse = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "formify-highlights", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "formify", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("submit", function RegisterComponent_Template_formify_submit_4_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("highlightType", ctx.Highlights.register)("collapse", ctx.collapse)("json", ctx.formify.formGroup.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formify", ctx.formify);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_4__.HeaderComponent, _highlights_highlights_component__WEBPACK_IMPORTED_MODULE_3__.HighlightsComponent, _formify_components_formify_formify_component__WEBPACK_IMPORTED_MODULE_5__.FormifyComponent], styles: [".register-content[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.register-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n  margin: 16px;\n  font-size: 18px;\n  font-weight: bold;\n  text-align: center;\n}\n.register-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child   button[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 8px;\n}\n.register-content[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%] {\n  width: 300px;\n}\n.register-content[_ngcontent-%COMP%]   formify-highlights[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@media screen and (max-width: 575px) {\n  .register-content[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQUU7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFFSjtBQURJO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtBQUdOO0FBQUU7RUFDRSxZQUFBO0FBRUo7QUFBRTtFQUNFLFdBQUE7QUFFSjtBQUVBO0VBRUk7SUFDRSxXQUFBO0VBQUo7QUFDRiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWdpc3Rlci1jb250ZW50IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgPiBkaXY6Zmlyc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luOiAxNnB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBidXR0b257XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIHRvcDogOHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuZm9ybS1jb250ZW50e1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gIH1cclxuICBmb3JtaWZ5LWhpZ2hsaWdodHN7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgLnJlZ2lzdGVyLWNvbnRlbnQge1xyXG4gICAgLmZvcm0tY29udGVudCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 4285:
/*!*****************************************************************************!*\
  !*** ./src/app/formify/components/array-control/array-control.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArrayControlComponent": () => (/* binding */ ArrayControlComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models */ 3566);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);





function ArrayControlComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "button", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.formGroup);
} }
const _c0 = ["*"];
class ArrayControlComponent {
    constructor() {
        this._arrayModel = new _models__WEBPACK_IMPORTED_MODULE_0__.ArrayModel({ controlName: '', controls: [] });
    }
    set onArrayConfig(arrayModel) {
        this._arrayModel = arrayModel;
        if (arrayModel) {
            this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({ [this.arrayModel.controlName]: this.arrayModel.formArray });
            this.formGroup.statusChanges.subscribe(status => {
                this.arrayModel.change.next(this.formGroup.value);
            });
        }
    }
    get arrayModel() {
        return this._arrayModel;
    }
    ngOnChanges(changes) { }
    ngOnInit() { }
    ngOnDestroy() {
        if (this.arrayModel) {
            this.arrayModel.change.complete();
        }
    }
}
ArrayControlComponent.ɵfac = function ArrayControlComponent_Factory(t) { return new (t || ArrayControlComponent)(); };
ArrayControlComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ArrayControlComponent, selectors: [["formify-array"]], inputs: { onArrayConfig: ["arrayModel", "onArrayConfig"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 1, vars: 1, consts: [[3, "formGroup", 4, "ngIf"], [3, "formGroup"], ["form", "ngForm"], ["hidden", ""], ["submit", ""]], template: function ArrayControlComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ArrayControlComponent_form_0_Template, 5, 1, "form", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.arrayModel);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcnJheS1jb250cm9sLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 9202:
/*!*******************************************************************!*\
  !*** ./src/app/formify/components/checkbox/checkbox.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckboxComponent": () => (/* binding */ CheckboxComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _field_control_field_control_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../field-control/field-control.component */ 4882);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/checkbox */ 7644);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 2288);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 2544);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 3935);










const _c0 = function (a0) { return { "error-icon": a0 }; };
function CheckboxComponent_form_0_mat_icon_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, ctx_r2.control.invalid && ctx_r2.submitted)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.icon);
} }
function CheckboxComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-checkbox", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function CheckboxComponent_form_0_Template_mat_checkbox_change_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.emitValue(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CheckboxComponent_form_0_mat_icon_6_Template, 3, 6, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "button", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.formGroup)("autocomplete", ctx_r0.autoComplete);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControlName", ctx_r0.controlName)("color", ctx_r0.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](!ctx_r0.useTranslation ? ctx_r0.label : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 6, ctx_r0.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.icon);
} }
class CheckboxComponent extends _field_control_field_control_component__WEBPACK_IMPORTED_MODULE_0__.FieldControlComponent {
    constructor(formBuilder) {
        super(formBuilder);
        this.formBuilder = formBuilder;
    }
    ngOnChanges(changes) { super.ngOnChanges(changes); }
    ngOnInit() { super.ngOnInit(); }
}
CheckboxComponent.ɵfac = function CheckboxComponent_Factory(t) { return new (t || CheckboxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder)); };
CheckboxComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CheckboxComponent, selectors: [["formify-checkbox"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALUE_ACCESSOR, useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => CheckboxComponent), multi: true }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [[3, "formGroup", "autocomplete", 4, "ngIf"], [3, "formGroup", "autocomplete"], ["form", "ngForm"], [1, "checkbox", 3, "formControlName", "color", "change"], ["matSuffix", "", 3, "ngClass", 4, "ngIf"], ["hidden", ""], ["submit", ""], ["matSuffix", "", 3, "ngClass"]], template: function CheckboxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CheckboxComponent_form_0_Template, 9, 8, "form", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.fieldModel && !ctx.hidden);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__.MatCheckbox, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatSuffix, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe], styles: [".checkbox[_ngcontent-%COMP%] {\n  margin: 10px 10px 10px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrYm94LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7QUFDRiIsImZpbGUiOiJjaGVja2JveC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGVja2JveHtcclxuICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDA7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 4882:
/*!*****************************************************************************!*\
  !*** ./src/app/formify/components/field-control/field-control.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FieldControlComponent": () => (/* binding */ FieldControlComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models */ 3566);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);








const _c0 = ["submit"];
function FieldControlComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "button", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.formGroup);
} }
const _c1 = ["*"];
class FieldControlComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this._fieldModel = new _models__WEBPACK_IMPORTED_MODULE_0__.FieldModel({ controlName: null });
        this.onPrefix = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.$unSubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    }
    set noFieldConfig(fieldModel) { this._fieldModel = fieldModel; }
    writeValue(obj) {
        this.formGroup.controls[this.controlName].setValue(obj, { emitEvent: false });
    }
    registerOnChange(fn) { this.onChange = fn; }
    registerOnTouched(fn) { }
    setDisabledState(isDisabled) { }
    emitValue() {
        if (this.onChange) {
            this.onChange(this.formGroup.controls[this.controlName].value);
        }
    }
    ngOnChanges(changes) { }
    ngOnInit() {
        this.formGroup = this.formBuilder.group({
            [this.controlName]: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, this.validators.map(validator => validator.validator).filter(validator => validator)),
        });
        (this.readOnly) ? this.formGroup.disable() : this.formGroup.enable();
        this.formControl.statusChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.$unSubscribe)).subscribe(status => {
            if (status === 'INVALID') {
                this.checkCustomErrors(this.control);
            }
        });
    }
    ngAfterViewInit() {
        this.submitted.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.$unSubscribe)).subscribe(status => {
            if (status) {
                this.submit.nativeElement.click();
            }
        });
    }
    ngOnDestroy() {
        this.$unSubscribe.next();
        this.$unSubscribe.complete();
    }
    handlePrefix(event) { this.onPrefix.emit(true); }
    get control() { return this.formGroup.get(this.controlName); }
    get fieldModel() { return this._fieldModel; }
    get formControl() { return this.fieldModel.formControl; }
    get autoComplete() { return this.fieldModel.autoComplete; }
    get submitted() { return this.fieldModel.submit.status; }
    get errorStateMatcher() { return this.fieldModel.errorStateMatcher; }
    get validators() { return this.fieldModel.validators; }
    get options() { return this.fieldModel.options; }
    get controlType() { return this.fieldModel.controlType; }
    get controlName() { return this.fieldModel.controlName; }
    get useTranslation() { return this.fieldModel.useTranslation; }
    get icon() { return this.fieldModel.icon; }
    get label() { return this.fieldModel.label; }
    get placeholder() { return this.fieldModel.placeholder; }
    get hint() { return this.fieldModel.hint; }
    get appearance() { return this.fieldModel.appearance; }
    get type() { return this.fieldModel.type; }
    get none() { return this.fieldModel.none; }
    get multiple() { return this.fieldModel.multiple; }
    get prefix() { return this.fieldModel.prefix; }
    get dropDownInPrefix() { return this.fieldModel.dropDownInPrefix; }
    get readOnly() { return this.fieldModel.readOnly; }
    get color() { return this.fieldModel.color; }
    get hidden() { return this.fieldModel.hidden; }
    get disabled() { return this.fieldModel.disabled; }
    errors(control) {
        const firstError = [];
        if (control.invalid) {
            for (const validator of this.validators) {
                if (control.hasError(validator.errorCode)) {
                    firstError.push(validator);
                    break;
                }
            }
        }
        return firstError;
    }
    checkCustomErrors(control) {
        if (this.formControl.errors) {
            Object.entries(this.formControl.errors).map(([name, value]) => ({ name, value })).forEach(error => {
                this.validators.filter(item => !item.validator).forEach(validator => {
                    if (validator.errorCode === error.name) {
                        control.setErrors({ [error.name]: true });
                    }
                });
            });
        }
    }
}
FieldControlComponent.ɵfac = function FieldControlComponent_Factory(t) { return new (t || FieldControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder)); };
FieldControlComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FieldControlComponent, selectors: [["formify-field"]], viewQuery: function FieldControlComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.submit = _t.first);
    } }, inputs: { noFieldConfig: ["fieldModel", "noFieldConfig"] }, outputs: { onPrefix: "onPrefix" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c1, decls: 1, vars: 1, consts: [[3, "formGroup", 4, "ngIf"], [3, "formGroup"], ["form", "ngForm"], ["hidden", ""], ["submit", ""]], template: function FieldControlComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, FieldControlComponent_form_0_Template, 5, 1, "form", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.fieldModel && !ctx.hidden);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWVsZC1jb250cm9sLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 8860:
/*!*****************************************************************!*\
  !*** ./src/app/formify/components/formify/formify.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormifyComponent": () => (/* binding */ FormifyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models */ 3566);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _input_input_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../input/input.component */ 6257);
/* harmony import */ var _select_select_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../select/select.component */ 7872);
/* harmony import */ var _radio_radio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../radio/radio.component */ 7932);
/* harmony import */ var _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../checkbox/checkbox.component */ 9202);
/* harmony import */ var _textarea_textarea_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../textarea/textarea.component */ 8418);
/* harmony import */ var _toggle_toggle_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../toggle/toggle.component */ 4412);
/* harmony import */ var _submit_submit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../submit/submit.component */ 8366);












const _c0 = ["submitButton"];
function FormifyComponent_ng_template_2_span_0_ng_container_1_formify_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "formify-input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onPrefix", function FormifyComponent_ng_template_2_span_0_ng_container_1_formify_input_1_Template_formify_input_onPrefix_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4); return ctx_r16.handlePrefix($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const control_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formControl", control_r6.formControl)("fieldModel", control_r6);
} }
function FormifyComponent_ng_template_2_span_0_ng_container_1_formify_select_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "formify-select", 11);
} if (rf & 2) {
    const control_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formControl", control_r6.formControl)("fieldModel", control_r6);
} }
function FormifyComponent_ng_template_2_span_0_ng_container_1_formify_radio_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "formify-radio", 11);
} if (rf & 2) {
    const control_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formControl", control_r6.formControl)("fieldModel", control_r6);
} }
function FormifyComponent_ng_template_2_span_0_ng_container_1_formify_checkbox_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "formify-checkbox", 11);
} if (rf & 2) {
    const control_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formControl", control_r6.formControl)("fieldModel", control_r6);
} }
function FormifyComponent_ng_template_2_span_0_ng_container_1_formify_textarea_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "formify-textarea", 11);
} if (rf & 2) {
    const control_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formControl", control_r6.formControl)("fieldModel", control_r6);
} }
function FormifyComponent_ng_template_2_span_0_ng_container_1_formify_toggle_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "formify-toggle", 11);
} if (rf & 2) {
    const control_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formControl", control_r6.formControl)("fieldModel", control_r6);
} }
function FormifyComponent_ng_template_2_span_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, FormifyComponent_ng_template_2_span_0_ng_container_1_formify_input_1_Template, 1, 2, "formify-input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, FormifyComponent_ng_template_2_span_0_ng_container_1_formify_select_2_Template, 1, 2, "formify-select", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, FormifyComponent_ng_template_2_span_0_ng_container_1_formify_radio_3_Template, 1, 2, "formify-radio", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, FormifyComponent_ng_template_2_span_0_ng_container_1_formify_checkbox_4_Template, 1, 2, "formify-checkbox", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, FormifyComponent_ng_template_2_span_0_ng_container_1_formify_textarea_5_Template, 1, 2, "formify-textarea", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, FormifyComponent_ng_template_2_span_0_ng_container_1_formify_toggle_6_Template, 1, 2, "formify-toggle", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const control_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", control_r6.fieldType === ctx_r7.fieldTypes.input);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", control_r6.fieldType === ctx_r7.fieldTypes.select);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", control_r6.fieldType === ctx_r7.fieldTypes.radio);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", control_r6.fieldType === ctx_r7.fieldTypes.checkbox);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", control_r6.fieldType === ctx_r7.fieldTypes.textarea);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", control_r6.fieldType === ctx_r7.fieldTypes.toggle);
} }
function FormifyComponent_ng_template_2_span_0_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainer"](0);
} }
const _c1 = function (a0) { return { controls: a0 }; };
function FormifyComponent_ng_template_2_span_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, FormifyComponent_ng_template_2_span_0_ng_container_2_ng_container_3_Template, 1, 0, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const control_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](control_r6.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](3, _c1, control_r6.controls));
} }
function FormifyComponent_ng_template_2_span_0_ng_container_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainer"](0);
} }
function FormifyComponent_ng_template_2_span_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, FormifyComponent_ng_template_2_span_0_ng_container_3_ng_container_3_Template, 1, 0, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const control_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](control_r6.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](3, _c1, control_r6.controls));
} }
function FormifyComponent_ng_template_2_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, FormifyComponent_ng_template_2_span_0_ng_container_1_Template, 7, 6, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, FormifyComponent_ng_template_2_span_0_ng_container_2_Template, 4, 5, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, FormifyComponent_ng_template_2_span_0_ng_container_3_Template, 4, 5, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const control_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitch", control_r6.controlType);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitchCase", ctx_r5.controlTypes.formField);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitchCase", ctx_r5.controlTypes.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitchCase", ctx_r5.controlTypes.formArray);
} }
function FormifyComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, FormifyComponent_ng_template_2_span_0_Template, 4, 4, "span", 5);
} if (rf & 2) {
    const list_r4 = ctx.controls;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", list_r4);
} }
function FormifyComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainer"](0);
} }
const _c2 = function (a0) { return { "loading-form": a0 }; };
class FormifyComponent {
    constructor() {
        this.onPrefix = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
        this.fieldTypes = _models__WEBPACK_IMPORTED_MODULE_0__.FieldTypes;
        this.controlTypes = _models__WEBPACK_IMPORTED_MODULE_0__.ControlTypes;
    }
    set onForm(formify) { this.formify = formify; }
    get formGroup() {
        return this.formify.formGroup;
    }
    get controls() {
        return this.formify.controls;
    }
    get loading() {
        return this.formify.submit.loading;
    }
    get submit() {
        return this.formify.submit;
    }
    ngOnInit() { }
    ngOnChanges(changes) { }
    onSubmit() { }
    onKeyPressAddContactForm(event) {
        if (event.keyCode === 13) {
            this.submitButton._elementRef.nativeElement.click();
        }
    }
    handlePrefix(event) {
        this.onPrefix.emit(event);
    }
}
FormifyComponent.ɵfac = function FormifyComponent_Factory(t) { return new (t || FormifyComponent)(); };
FormifyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: FormifyComponent, selectors: [["formify"]], viewQuery: function FormifyComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.submitButton = _t.first);
    } }, inputs: { onForm: ["formify", "onForm"] }, outputs: { onPrefix: "onPrefix" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵNgOnChangesFeature"]], decls: 6, vars: 9, consts: [[3, "formGroup", "ngClass", "ngSubmit", "keypress"], ["ngForm", "ngForm"], ["recursiveList", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "submit"], [3, "ngSwitch", 4, "ngFor", "ngForOf"], [3, "ngSwitch"], [4, "ngSwitchCase"], [3, "formControl", "fieldModel", "onPrefix", 4, "ngIf"], [3, "formControl", "fieldModel", 4, "ngIf"], [3, "formControl", "fieldModel", "onPrefix"], [3, "formControl", "fieldModel"], [1, "label"]], template: function FormifyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function FormifyComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); })("keypress", function FormifyComponent_Template_form_keypress_0_listener($event) { return ctx.onKeyPressAddContactForm($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, FormifyComponent_ng_template_2_Template, 1, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, FormifyComponent_ng_container_4_Template, 1, 0, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "formify-submit", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.formGroup)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](5, _c2, ctx.loading));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](7, _c1, ctx.controls));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("submit", ctx.submit);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _input_input_component__WEBPACK_IMPORTED_MODULE_1__.InputComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlDirective, _select_select_component__WEBPACK_IMPORTED_MODULE_2__.SelectComponent, _radio_radio_component__WEBPACK_IMPORTED_MODULE_3__.RadioComponent, _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_4__.CheckboxComponent, _textarea_textarea_component__WEBPACK_IMPORTED_MODULE_5__.TextareaComponent, _toggle_toggle_component__WEBPACK_IMPORTED_MODULE_6__.ToggleComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgTemplateOutlet, _submit_submit_component__WEBPACK_IMPORTED_MODULE_7__.SubmitComponent], styles: ["form[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 4px;\n}\n\n.icon_button_login[_ngcontent-%COMP%] {\n  position: relative;\n  top: -3px;\n}\n\n.input[_ngcontent-%COMP%], .mat-raised-button[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\np[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.loading-form[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n\n.loading-form[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  z-index: 1000 !important;\n  width: 100%;\n  height: 100%;\n  top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm1pZnkuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFxzY3NzXFxtaXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUdFO0VBQ0UscUJBQUE7QUFBSjs7QUFHQTtFQUVFLFlBQUE7QUFERjs7QUNsQkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtBRG9CSiIsImZpbGUiOiJmb3JtaWZ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy9hcHAvc2Nzcy9taXhpbnNcIjtcclxuZm9ybXtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5pY29uX2J1dHRvbl9sb2dpbntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOi0zcHg7XHJcbn1cclxuXHJcbi5pbnB1dCwgLm1hdC1yYWlzZWQtYnV0dG9ue1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5we1xyXG4gIGF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG59XHJcbi5sb2FkaW5nLWZvcm17XHJcbiAgQGluY2x1ZGUgZGlzYWJsZWQtY29udGVudDtcclxuICBvcGFjaXR5OiAwLjc7XHJcbn1cclxuIiwiXHJcbkBtaXhpbiBkaXNhYmxlZC1jb250ZW50KCl7XHJcbiAgJjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxMDAwICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRvcDogMDtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 2406:
/*!*****************************************************************************!*\
  !*** ./src/app/formify/components/group-control/group-control.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupControlComponent": () => (/* binding */ GroupControlComponent)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models */ 3566);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);




function GroupControlComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "button", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.groupModel.label, " ");
} }
const _c0 = ["*"];
class GroupControlComponent {
    constructor() {
        this._groupModel = new _models__WEBPACK_IMPORTED_MODULE_0__.GroupModel({ controlName: '', controls: [] });
    }
    set onArrayConfig(groupModel) {
        this._groupModel = groupModel;
        if (groupModel) {
            this.formGroup = groupModel.formGroup;
            this.formGroup.statusChanges.subscribe(status => {
                this.groupModel.change.next(this.formGroup.value);
            });
        }
    }
    get groupModel() {
        return this._groupModel;
    }
    ngOnChanges(changes) { }
    ngOnInit() { }
    ngOnDestroy() {
        if (this.groupModel) {
            this.groupModel.change.complete();
        }
    }
}
GroupControlComponent.ɵfac = function GroupControlComponent_Factory(t) { return new (t || GroupControlComponent)(); };
GroupControlComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GroupControlComponent, selectors: [["formify-group"]], inputs: { onArrayConfig: ["groupModel", "onArrayConfig"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 1, vars: 1, consts: [[3, "formGroup", 4, "ngIf"], [3, "formGroup"], ["form", "ngForm"], ["hidden", ""], ["submit", ""]], template: function GroupControlComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, GroupControlComponent_form_0_Template, 6, 2, "form", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.groupModel);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJncm91cC1jb250cm9sLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 6257:
/*!*************************************************************!*\
  !*** ./src/app/formify/components/input/input.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputComponent": () => (/* binding */ InputComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _field_control_field_control_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../field-control/field-control.component */ 4882);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 2288);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 2544);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 5342);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 3935);










function InputComponent_form_0_span_6_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InputComponent_form_0_span_6_mat_icon_2_Template_mat_icon_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r8.handlePrefix($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function InputComponent_form_0_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InputComponent_form_0_span_6_Template_span_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r10.handlePrefix($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, InputComponent_form_0_span_6_mat_icon_2_Template, 2, 0, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " \u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.prefix, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.dropDownInPrefix);
} }
const _c0 = function (a0) { return { "error-icon": a0 }; };
function InputComponent_form_0_mat_icon_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, ctx_r3.control.invalid && ctx_r3.submitted)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.icon);
} }
function InputComponent_form_0_mat_hint_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](!ctx_r4.useTranslation ? ctx_r4.hint : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx_r4.hint));
} }
function InputComponent_form_0_mat_error_12_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r13 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", !ctx_r12.useTranslation ? error_r13.description : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, error_r13.translationCode, error_r13.parameters), " ");
} }
function InputComponent_form_0_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, InputComponent_form_0_mat_error_12_span_1_Template, 3, 4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.errors(ctx_r5.control));
} }
function InputComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-form-field", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, InputComponent_form_0_span_6_Template, 4, 2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function InputComponent_form_0_Template_input_input_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.emitValue(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, InputComponent_form_0_mat_icon_10_Template, 3, 6, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, InputComponent_form_0_mat_hint_11_Template, 3, 3, "mat-hint", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, InputComponent_form_0_mat_error_12_Template, 2, 1, "mat-error", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "button", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.formGroup)("autocomplete", ctx_r0.autoComplete);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("appearance", ctx_r0.appearance);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](!ctx_r0.useTranslation ? ctx_r0.label : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 12, ctx_r0.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.prefix);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControlName", ctx_r0.controlName)("errorStateMatcher", ctx_r0.errorStateMatcher)("type", ctx_r0.type)("placeholder", !ctx_r0.useTranslation ? ctx_r0.placeholder : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 14, ctx_r0.placeholder));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.hint);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 16, ctx_r0.control.invalid && ctx_r0.submitted));
} }
class InputComponent extends _field_control_field_control_component__WEBPACK_IMPORTED_MODULE_0__.FieldControlComponent {
    constructor(formBuilder) {
        super(formBuilder);
        this.formBuilder = formBuilder;
    }
    ngOnChanges(changes) { super.ngOnChanges(changes); }
    ngOnInit() { super.ngOnInit(); }
}
InputComponent.ɵfac = function InputComponent_Factory(t) { return new (t || InputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder)); };
InputComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: InputComponent, selectors: [["formify-input"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALUE_ACCESSOR, useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => InputComponent), multi: true }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [[3, "formGroup", "autocomplete", 4, "ngIf"], [3, "formGroup", "autocomplete"], ["form", "ngForm"], [1, "full-width", 3, "appearance"], ["matPrefix", "", 3, "click", 4, "ngIf"], ["matInput", "", 3, "formControlName", "errorStateMatcher", "type", "placeholder", "input"], ["matSuffix", "", 3, "ngClass", 4, "ngIf"], [4, "ngIf"], ["hidden", ""], ["submit", ""], ["matPrefix", "", 3, "click"], ["class", "dropDownIconInPrefix", 3, "click", 4, "ngIf"], [1, "dropDownIconInPrefix", 3, "click"], ["matSuffix", "", 3, "ngClass"], [4, "ngFor", "ngForOf"]], template: function InputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, InputComponent_form_0_Template, 16, 18, "form", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.fieldModel && !ctx.hidden);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatPrefix, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatSuffix, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatError, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe], styles: [".full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.error-icon[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.dropDownIconInPrefix[_ngcontent-%COMP%] {\n  position: relative;\n  top: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQUNGOztBQUNBO0VBQ0UsVUFBQTtBQUVGOztBQUFBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0FBR0YiLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbC13aWR0aCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmVycm9yLWljb257XHJcbiAgY29sb3I6cmVkO1xyXG59XHJcbi5kcm9wRG93bkljb25JblByZWZpeHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiA2cHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 7932:
/*!*************************************************************!*\
  !*** ./src/app/formify/components/radio/radio.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RadioComponent": () => (/* binding */ RadioComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _field_control_field_control_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../field-control/field-control.component */ 4882);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 2288);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/radio */ 6287);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 3935);









function RadioComponent_form_0_mat_radio_button_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-radio-button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r5 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", ctx_r2.color)("value", option_r5.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", option_r5.text, " ");
} }
function RadioComponent_form_0_mat_error_7_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r7 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", !ctx_r6.useTranslation ? error_r7.description : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, error_r7.translationCode, error_r7.parameters), " ");
} }
function RadioComponent_form_0_mat_error_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RadioComponent_form_0_mat_error_7_span_1_Template, 3, 4, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.errors(ctx_r3.control));
} }
function RadioComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-label", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-radio-group", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RadioComponent_form_0_Template_mat_radio_group_change_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.emitValue(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, RadioComponent_form_0_mat_radio_button_6_Template, 2, 3, "mat-radio-button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, RadioComponent_form_0_mat_error_7_Template, 2, 1, "mat-error", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "button", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.formGroup)("autocomplete", ctx_r0.autoComplete);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", !ctx_r0.useTranslation ? ctx_r0.label : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 6, ctx_r0.label), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControlName", ctx_r0.controlName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 8, ctx_r0.control.invalid && ctx_r0.submitted));
} }
class RadioComponent extends _field_control_field_control_component__WEBPACK_IMPORTED_MODULE_0__.FieldControlComponent {
    constructor(formBuilder) {
        super(formBuilder);
        this.formBuilder = formBuilder;
    }
    ngOnChanges(changes) { super.ngOnChanges(changes); }
    ngOnInit() { super.ngOnInit(); }
}
RadioComponent.ɵfac = function RadioComponent_Factory(t) { return new (t || RadioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder)); };
RadioComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RadioComponent, selectors: [["formify-radio"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALUE_ACCESSOR, useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => RadioComponent), multi: true }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [[3, "formGroup", "autocomplete", 4, "ngIf"], [3, "formGroup", "autocomplete"], ["form", "ngForm"], [1, "label"], [3, "formControlName", "change"], ["class", "radio-button", 3, "color", "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["hidden", ""], ["submit", ""], [1, "radio-button", 3, "color", "value"], [4, "ngFor", "ngForOf"]], template: function RadioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, RadioComponent_form_0_Template, 11, 10, "form", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.fieldModel && !ctx.hidden);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatLabel, _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__.MatRadioGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__.MatRadioButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatError], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe], styles: [".radio-button[_ngcontent-%COMP%] {\n  margin: 10px 10px 10px 0;\n}\n\nmat-label[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhZGlvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0FBRUYiLCJmaWxlIjoicmFkaW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmFkaW8tYnV0dG9ue1xyXG4gIG1hcmdpbjogMTBweCAxMHB4IDEwcHggMDtcclxufVxyXG5tYXQtbGFiZWx7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 7872:
/*!***************************************************************!*\
  !*** ./src/app/formify/components/select/select.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectComponent": () => (/* binding */ SelectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _field_control_field_control_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../field-control/field-control.component */ 4882);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 2288);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 2544);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ 1412);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ 4369);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 3935);











function SelectComponent_form_0_span_6_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectComponent_form_0_span_6_mat_icon_2_Template_mat_icon_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r10.handlePrefix($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SelectComponent_form_0_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectComponent_form_0_span_6_Template_span_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r12.handlePrefix($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SelectComponent_form_0_span_6_mat_icon_2_Template, 2, 0, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " &nbsp ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.prefix, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.dropDownInPrefix);
} }
function SelectComponent_form_0_mat_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "None");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SelectComponent_form_0_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", option_r14.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", option_r14.text, " ");
} }
const _c0 = function (a0) { return { "error-icon": a0 }; };
function SelectComponent_form_0_mat_icon_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, ctx_r5.control.invalid && ctx_r5.submitted)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.icon);
} }
function SelectComponent_form_0_mat_hint_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](!ctx_r6.useTranslation ? ctx_r6.hint : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx_r6.hint));
} }
function SelectComponent_form_0_mat_error_12_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r16 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", !ctx_r15.useTranslation ? error_r16.description : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, error_r16.translationCode, error_r16.parameters), " ");
} }
function SelectComponent_form_0_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SelectComponent_form_0_mat_error_12_span_1_Template, 3, 4, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r7.errors(ctx_r7.control));
} }
function SelectComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-form-field", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SelectComponent_form_0_span_6_Template, 4, 2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-select", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function SelectComponent_form_0_Template_mat_select_selectionChange_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.emitValue(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, SelectComponent_form_0_mat_option_8_Template, 2, 0, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, SelectComponent_form_0_mat_option_9_Template, 2, 2, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, SelectComponent_form_0_mat_icon_10_Template, 3, 6, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, SelectComponent_form_0_mat_hint_11_Template, 3, 3, "mat-hint", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, SelectComponent_form_0_mat_error_12_Template, 2, 1, "mat-error", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "button", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.formGroup)("autocomplete", ctx_r0.autoComplete);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("appearance", ctx_r0.appearance);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](!ctx_r0.useTranslation ? ctx_r0.label : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 13, ctx_r0.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.prefix);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("multiple", ctx_r0.multiple);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControlName", ctx_r0.controlName)("errorStateMatcher", ctx_r0.errorStateMatcher);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.none);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.hint);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 15, ctx_r0.control.invalid && ctx_r0.submitted));
} }
class SelectComponent extends _field_control_field_control_component__WEBPACK_IMPORTED_MODULE_0__.FieldControlComponent {
    constructor(formBuilder) {
        super(formBuilder);
        this.formBuilder = formBuilder;
    }
    ngOnChanges(changes) { super.ngOnChanges(changes); }
    ngOnInit() { super.ngOnInit(); }
}
SelectComponent.ɵfac = function SelectComponent_Factory(t) { return new (t || SelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder)); };
SelectComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SelectComponent, selectors: [["formify-select"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALUE_ACCESSOR, useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => SelectComponent), multi: true }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [[3, "formGroup", "autocomplete", 4, "ngIf"], [3, "formGroup", "autocomplete"], ["form", "ngForm"], [1, "full-width", 3, "appearance"], ["matPrefix", "", 3, "click", 4, "ngIf"], [3, "formControlName", "multiple", "errorStateMatcher", "selectionChange"], [4, "ngIf"], [3, "value", 4, "ngFor", "ngForOf"], ["matSuffix", "", 3, "ngClass", 4, "ngIf"], ["hidden", ""], ["submit", ""], ["matPrefix", "", 3, "click"], ["class", "dropDownIconInPrefix", 3, "click", 4, "ngIf"], [1, "dropDownIconInPrefix", 3, "click"], [3, "value"], ["matSuffix", "", 3, "ngClass"], [4, "ngFor", "ngForOf"]], template: function SelectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SelectComponent_form_0_Template, 16, 17, "form", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.fieldModel && !ctx.hidden);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatPrefix, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_select__WEBPACK_IMPORTED_MODULE_6__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatSuffix, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatError], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe], styles: [".full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.error-icon[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.dropDownIconInPrefix[_ngcontent-%COMP%] {\n  position: relative;\n  top: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRjs7QUFDQTtFQUNFLFVBQUE7QUFFRjs7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtBQUdGIiwiZmlsZSI6InNlbGVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uZXJyb3ItaWNvbntcclxuICBjb2xvcjpyZWQ7XHJcbn1cclxuLmRyb3BEb3duSWNvbkluUHJlZml4e1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDZweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 8366:
/*!***************************************************************!*\
  !*** ./src/app/formify/components/submit/submit.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubmitComponent": () => (/* binding */ SubmitComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models */ 3566);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 6246);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 2544);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-spinner */ 8824);







function SubmitComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.submit.text, "");
} }
function SubmitComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-spinner", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("diameter", 30);
} }
class SubmitComponent {
    constructor() {
        this.submit = new _models__WEBPACK_IMPORTED_MODULE_0__.SubmitModel();
        this.disabled = false;
        this.onSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    ngOnInit() { }
    onHandleSubmit() {
        this.onSubmit.emit(true);
        this.submit.status.next(true);
    }
}
SubmitComponent.ɵfac = function SubmitComponent_Factory(t) { return new (t || SubmitComponent)(); };
SubmitComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SubmitComponent, selectors: [["formify-submit"]], inputs: { submit: "submit", disabled: "disabled" }, outputs: { onSubmit: "onSubmit" }, decls: 5, vars: 4, consts: [[1, "submit-content"], ["mat-raised-button", "", 1, "submit", 3, "disabled", "color", "click"], [4, "ngIf", "ngIfElse"], ["loading_spinner_login", ""], [1, "icon_button_login"], [1, "loading", "center", 3, "diameter"]], template: function SubmitComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SubmitComponent_Template_button_click_1_listener() { return ctx.onHandleSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SubmitComponent_span_2_Template, 2, 1, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SubmitComponent_ng_template_3_Template, 2, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("color", ctx.submit.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.submit.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.submit.loading)("ngIfElse", _r1);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__.MatSpinner], styles: [".submit-content[_ngcontent-%COMP%] {\n  padding-top: 10px;\n}\n.submit-content[_ngcontent-%COMP%]   .submit[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.submit-content[_ngcontent-%COMP%]   .icon_button_login[_ngcontent-%COMP%] {\n  position: relative;\n  top: -3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Ym1pdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FBQ0Y7QUFBRTtFQUNFLFdBQUE7QUFFSjtBQUFFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0FBRUoiLCJmaWxlIjoic3VibWl0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1Ym1pdC1jb250ZW50e1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIC5zdWJtaXR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLmljb25fYnV0dG9uX2xvZ2lue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOi0zcHg7XHJcbiAgfVxyXG59XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ 8418:
/*!*******************************************************************!*\
  !*** ./src/app/formify/components/textarea/textarea.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextareaComponent": () => (/* binding */ TextareaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _field_control_field_control_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../field-control/field-control.component */ 4882);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 2288);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 2544);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 5342);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 3935);










function TextareaComponent_form_0_span_6_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TextareaComponent_form_0_span_6_mat_icon_2_Template_mat_icon_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r8.handlePrefix($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TextareaComponent_form_0_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TextareaComponent_form_0_span_6_Template_span_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r10.handlePrefix($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TextareaComponent_form_0_span_6_mat_icon_2_Template, 2, 0, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " &nbsp ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.prefix, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.dropDownInPrefix);
} }
const _c0 = function (a0) { return { "error-icon": a0 }; };
function TextareaComponent_form_0_mat_icon_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, ctx_r3.control.invalid && ctx_r3.submitted)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.icon);
} }
function TextareaComponent_form_0_mat_hint_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](!ctx_r4.useTranslation ? ctx_r4.hint : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx_r4.hint));
} }
function TextareaComponent_form_0_mat_error_12_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r13 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", !ctx_r12.useTranslation ? error_r13.description : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, error_r13.translationCode, error_r13.parameters), " ");
} }
function TextareaComponent_form_0_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TextareaComponent_form_0_mat_error_12_span_1_Template, 3, 4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.errors(ctx_r5.control));
} }
function TextareaComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-form-field", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, TextareaComponent_form_0_span_6_Template, 4, 2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "textarea", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function TextareaComponent_form_0_Template_textarea_input_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.emitValue(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, TextareaComponent_form_0_mat_icon_10_Template, 3, 6, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, TextareaComponent_form_0_mat_hint_11_Template, 3, 3, "mat-hint", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, TextareaComponent_form_0_mat_error_12_Template, 2, 1, "mat-error", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "button", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.formGroup)("autocomplete", ctx_r0.autoComplete);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("appearance", ctx_r0.appearance);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](!ctx_r0.useTranslation ? ctx_r0.label : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 12, ctx_r0.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.prefix);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControlName", ctx_r0.controlName)("errorStateMatcher", ctx_r0.errorStateMatcher)("type", ctx_r0.type)("placeholder", !ctx_r0.useTranslation ? ctx_r0.placeholder : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 14, ctx_r0.placeholder));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.hint);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 16, ctx_r0.control.invalid && ctx_r0.submitted));
} }
class TextareaComponent extends _field_control_field_control_component__WEBPACK_IMPORTED_MODULE_0__.FieldControlComponent {
    constructor(formBuilder) {
        super(formBuilder);
        this.formBuilder = formBuilder;
    }
    ngOnChanges(changes) { super.ngOnChanges(changes); }
    ngOnInit() { super.ngOnInit(); }
}
TextareaComponent.ɵfac = function TextareaComponent_Factory(t) { return new (t || TextareaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder)); };
TextareaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TextareaComponent, selectors: [["formify-textarea"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALUE_ACCESSOR, useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => TextareaComponent), multi: true }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [[3, "formGroup", "autocomplete", 4, "ngIf"], [3, "formGroup", "autocomplete"], ["form", "ngForm"], [1, "full-width", 3, "appearance"], ["matPrefix", "", 3, "click", 4, "ngIf"], ["matInput", "", 3, "formControlName", "errorStateMatcher", "type", "placeholder", "input"], ["matSuffix", "", 3, "ngClass", 4, "ngIf"], [4, "ngIf"], ["hidden", ""], ["submit", ""], ["matPrefix", "", 3, "click"], ["class", "dropDownIconInPrefix", 3, "click", 4, "ngIf"], [1, "dropDownIconInPrefix", 3, "click"], ["matSuffix", "", 3, "ngClass"], [4, "ngFor", "ngForOf"]], template: function TextareaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TextareaComponent_form_0_Template, 16, 18, "form", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.fieldModel && !ctx.hidden);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatPrefix, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatSuffix, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatError, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe], styles: [".full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.error-icon[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.dropDownIconInPrefix[_ngcontent-%COMP%] {\n  position: relative;\n  top: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRleHRhcmVhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQUNGOztBQUNBO0VBQ0UsVUFBQTtBQUVGOztBQUFBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0FBR0YiLCJmaWxlIjoidGV4dGFyZWEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbC13aWR0aCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmVycm9yLWljb257XHJcbiAgY29sb3I6cmVkO1xyXG59XHJcbi5kcm9wRG93bkljb25JblByZWZpeHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiA2cHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 4412:
/*!***************************************************************!*\
  !*** ./src/app/formify/components/toggle/toggle.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToggleComponent": () => (/* binding */ ToggleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _field_control_field_control_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../field-control/field-control.component */ 4882);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/slide-toggle */ 9765);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 2544);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 2288);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 3935);










const _c0 = function (a0) { return { "error-icon": a0 }; };
function ToggleComponent_form_0_mat_icon_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, ctx_r2.control.invalid && ctx_r2.submitted)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.icon);
} }
function ToggleComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-slide-toggle", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ToggleComponent_form_0_Template_mat_slide_toggle_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.emitValue(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ToggleComponent_form_0_mat_icon_6_Template, 3, 6, "mat-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "button", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.formGroup)("autocomplete", ctx_r0.autoComplete);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("color", ctx_r0.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControlName", ctx_r0.controlName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](!ctx_r0.useTranslation ? ctx_r0.label : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 6, ctx_r0.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.icon);
} }
class ToggleComponent extends _field_control_field_control_component__WEBPACK_IMPORTED_MODULE_0__.FieldControlComponent {
    constructor(formBuilder) {
        super(formBuilder);
        this.formBuilder = formBuilder;
    }
    ngOnChanges(changes) { super.ngOnChanges(changes); }
    ngOnInit() { super.ngOnInit(); }
}
ToggleComponent.ɵfac = function ToggleComponent_Factory(t) { return new (t || ToggleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder)); };
ToggleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ToggleComponent, selectors: [["formify-toggle"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALUE_ACCESSOR, useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => ToggleComponent), multi: true }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [[3, "formGroup", "autocomplete", 4, "ngIf"], [3, "formGroup", "autocomplete"], ["form", "ngForm"], [1, "toggle-content"], [3, "formControlName", "color", "change"], ["matSuffix", "", 3, "ngClass", 4, "ngIf"], ["hidden", ""], ["submit", ""], ["matSuffix", "", 3, "ngClass"]], template: function ToggleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ToggleComponent_form_0_Template, 9, 8, "form", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.fieldModel && !ctx.hidden);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__.MatSlideToggle, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatSuffix, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe], styles: [".toggle-content[_ngcontent-%COMP%] {\n  padding: 10px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZ2dsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRiIsImZpbGUiOiJ0b2dnbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9nZ2xlLWNvbnRlbnR7XHJcbiAgcGFkZGluZzogMTBweCAwO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 163:
/*!************************************************************************!*\
  !*** ./src/app/formify/custom/components/address/address.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddressComponent": () => (/* binding */ AddressComponent)
/* harmony export */ });
/* harmony import */ var _components_array_control_array_control_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/array-control/array-control.component */ 4285);
/* harmony import */ var _groups_address_group_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../groups/address.group-control */ 3265);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 6246);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 2544);
/* harmony import */ var _components_input_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/input/input.component */ 6257);
/* harmony import */ var _components_select_select_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/select/select.component */ 7872);









function AddressComponent_form_0_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "formify-input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "formify-input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "formify-select", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "formify-input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formArrayName", ctx_r2.arrayModel.controlName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroupName", i_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("fieldModel", item_r4.field("street"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("fieldModel", item_r4.field("city"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("fieldModel", item_r4.field("country"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("fieldModel", item_r4.field("zip"));
} }
function AddressComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " Add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddressComponent_form_0_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r6.addAddress(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "or delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddressComponent_form_0_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r8.delete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "address group");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, AddressComponent_form_0_div_17_Template, 7, 6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "button", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r0.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.arrayModel.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.arrayModel["controls"]);
} }
class AddressComponent extends _components_array_control_array_control_component__WEBPACK_IMPORTED_MODULE_0__.ArrayControlComponent {
    constructor() { super(); }
    ngOnInit() {
        super.ngOnInit();
    }
    addAddress() {
        this.arrayModel.push(new _groups_address_group_control__WEBPACK_IMPORTED_MODULE_1__.AddressGroupControl());
    }
    delete() {
        this.arrayModel.removeAt(this.arrayModel.controls.length - 1);
    }
}
AddressComponent.ɵfac = function AddressComponent_Factory(t) { return new (t || AddressComponent)(); };
AddressComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AddressComponent, selectors: [["formify-address"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[3, "formGroup", 4, "ngIf"], [3, "formGroup"], ["form", "ngForm"], [1, "label"], [2, "margin-left", "10px"], ["mat-icon-button", "", 3, "click"], ["color", "warn"], [3, "formArrayName", 4, "ngFor", "ngForOf"], ["hidden", ""], ["submit", ""], [3, "formArrayName"], [3, "formGroupName"], [1, "address-content"], ["formControlName", "street", 3, "fieldModel"], ["formControlName", "city", 3, "fieldModel"], ["formControlName", "country", 3, "fieldModel"], ["formControlName", "zip", 3, "fieldModel"]], template: function AddressComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, AddressComponent_form_0_Template, 20, 3, "form", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.arrayModel);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormArrayName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupName, _components_input_input_component__WEBPACK_IMPORTED_MODULE_2__.InputComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _components_select_select_component__WEBPACK_IMPORTED_MODULE_3__.SelectComponent], styles: [".address-content {\n  display: flex;\n  justify-content: space-between;\n}\n .address-content > * {\n  width: calc(25% - 10px);\n}\n.label[_ngcontent-%COMP%] {\n  line-height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZHJlc3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUFDRjtBQUFFO0VBQ0UsdUJBQUE7QUFFSjtBQUNBO0VBQ0UsaUJBQUE7QUFFRiIsImZpbGUiOiJhZGRyZXNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwLmFkZHJlc3MtY29udGVudHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICA+ICoge1xyXG4gICAgd2lkdGg6IGNhbGMoMjUlIC0gMTBweCk7XHJcbiAgfVxyXG59XHJcbi5sYWJlbHtcclxuICBsaW5lLWhlaWdodDogNDBweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 9872:
/*!************************************************************************!*\
  !*** ./src/app/formify/custom/components/contact/contact.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactComponent": () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _components_group_control_group_control_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/group-control/group-control.component */ 2406);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _components_input_input_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/input/input.component */ 6257);





function ContactComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "formify-input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "formify-input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "formify-input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "button", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.groupModel.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fieldModel", ctx_r0.groupModel.field("phone"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fieldModel", ctx_r0.groupModel.field("email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fieldModel", ctx_r0.groupModel.field("location"));
} }
class ContactComponent extends _components_group_control_group_control_component__WEBPACK_IMPORTED_MODULE_0__.GroupControlComponent {
    constructor() { super(); }
    ngOnInit() {
        super.ngOnInit();
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["formify-contact"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[3, "formGroup", 4, "ngIf"], [3, "formGroup"], ["form", "ngForm"], [1, "label"], [1, "contact-content"], ["formControlName", "phone", 3, "fieldModel"], ["formControlName", "email", 3, "fieldModel"], ["formControlName", "location", 3, "fieldModel"], ["hidden", ""], ["submit", ""]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ContactComponent_form_0_Template, 10, 5, "form", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.groupModel);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _components_input_input_component__WEBPACK_IMPORTED_MODULE_1__.InputComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName], styles: [".contact-content {\n  display: flex;\n  justify-content: space-between;\n}\n .contact-content > * {\n  width: calc(33% - 5px);\n}\n.label[_ngcontent-%COMP%] {\n  line-height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUFDRjtBQUFFO0VBQ0Usc0JBQUE7QUFFSjtBQUNBO0VBQ0UsaUJBQUE7QUFFRiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwLmNvbnRhY3QtY29udGVudHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICA+ICoge1xyXG4gICAgd2lkdGg6IGNhbGMoMzMlIC0gNXB4KTtcclxuICB9XHJcbn1cclxuLmxhYmVse1xyXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 7904:
/*!****************************************************************************!*\
  !*** ./src/app/formify/custom/components/exercises/exercises.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExercisesComponent": () => (/* binding */ ExercisesComponent)
/* harmony export */ });
/* harmony import */ var _components_group_control_group_control_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/group-control/group-control.component */ 2406);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models */ 3566);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _components_input_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/input/input.component */ 6257);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 6246);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 2544);
/* harmony import */ var _components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/checkbox/checkbox.component */ 9202);









function ExercisesComponent_form_0_div_12_formify_checkbox_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "formify-checkbox", 12);
} if (rf & 2) {
    const control_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControlName", control_r4.controlName)("fieldModel", control_r4);
} }
function ExercisesComponent_form_0_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ExercisesComponent_form_0_div_12_formify_checkbox_1_Template, 1, 2, "formify-checkbox", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const control_r4 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", control_r4.fieldType === ctx_r2.fieldTypes.checkbox);
} }
function ExercisesComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "formify-input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keypress", function ExercisesComponent_form_0_Template_formify_input_keypress_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r7.onKeyPressAddExercise($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " Press enter to add \u00A0 -or- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExercisesComponent_form_0_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r9.addExercise(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, ExercisesComponent_form_0_div_12_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "button", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r0.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.groupModel.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("fieldModel", ctx_r0.groupModel.field("addExercise"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.groupModel.controls);
} }
class ExercisesComponent extends _components_group_control_group_control_component__WEBPACK_IMPORTED_MODULE_0__.GroupControlComponent {
    constructor() {
        super();
        this.fieldTypes = _models__WEBPACK_IMPORTED_MODULE_1__.FieldTypes;
    }
    ngOnInit() {
        super.ngOnInit();
    }
    addExercise() {
        const AddExerciseField = this.groupModel.formGroup.get('addExercise');
        if (AddExerciseField.value) {
            if (AddExerciseField.value.length > 0) {
                this.groupModel.addControl(new _models__WEBPACK_IMPORTED_MODULE_1__.FieldModel({
                    controlName: AddExerciseField.value,
                    label: AddExerciseField.value,
                    fieldType: _models__WEBPACK_IMPORTED_MODULE_1__.FieldTypes.checkbox,
                    defaultValue: true
                }));
                AddExerciseField.reset();
            }
        }
    }
    onKeyPressAddExercise(event) {
        if (event.keyCode === 13) {
            this.addExercise();
        }
    }
}
ExercisesComponent.ɵfac = function ExercisesComponent_Factory(t) { return new (t || ExercisesComponent)(); };
ExercisesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ExercisesComponent, selectors: [["formify-exercises"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[3, "formGroup", 4, "ngIf"], [3, "formGroup"], ["form", "ngForm"], [1, "label"], [1, "exercises-header"], ["formControlName", "addExercise", 3, "fieldModel", "keypress"], ["mat-icon-button", "", 3, "click"], [1, "exercises-content"], [4, "ngFor", "ngForOf"], ["hidden", ""], ["submit", ""], [3, "formControlName", "fieldModel", 4, "ngIf"], [3, "formControlName", "fieldModel"]], template: function ExercisesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, ExercisesComponent_form_0_Template, 15, 4, "form", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.groupModel);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _components_input_input_component__WEBPACK_IMPORTED_MODULE_2__.InputComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_3__.CheckboxComponent], styles: [".exercises-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.exercises-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n.exercises-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.label[_ngcontent-%COMP%] {\n  line-height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4ZXJjaXNlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFBZSxtQkFBQTtBQUVqQjtBQURFO0VBQ0Usa0JBQUE7QUFHSjtBQUFBO0VBQ0UsYUFBQTtFQUFlLGVBQUE7QUFJakI7QUFGQTtFQUNFLGlCQUFBO0FBS0YiLCJmaWxlIjoiZXhlcmNpc2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4ZXJjaXNlcy1oZWFkZXJ7XHJcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBzcGFue1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIH1cclxufVxyXG4uZXhlcmNpc2VzLWNvbnRlbnR7XHJcbiAgZGlzcGxheTogZmxleDsgZmxleC13cmFwOiB3cmFwXHJcbn1cclxuLmxhYmVse1xyXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 1287:
/*!*************************************************!*\
  !*** ./src/app/formify/custom/custom.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomModule": () => (/* binding */ CustomModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _components_address_address_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/address/address.component */ 163);
/* harmony import */ var _formify_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../formify.module */ 9968);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../material.module */ 7483);
/* harmony import */ var _components_exercises_exercises_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/exercises/exercises.component */ 7904);
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/contact/contact.component */ 9872);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);







class CustomModule {
}
CustomModule.ɵfac = function CustomModule_Factory(t) { return new (t || CustomModule)(); };
CustomModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: CustomModule });
CustomModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _formify_module__WEBPACK_IMPORTED_MODULE_1__.FormifyModule,
            _material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](CustomModule, { declarations: [_components_address_address_component__WEBPACK_IMPORTED_MODULE_0__.AddressComponent, _components_exercises_exercises_component__WEBPACK_IMPORTED_MODULE_3__.ExercisesComponent, _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__.ContactComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _formify_module__WEBPACK_IMPORTED_MODULE_1__.FormifyModule,
        _material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule], exports: [_components_address_address_component__WEBPACK_IMPORTED_MODULE_0__.AddressComponent,
        _components_exercises_exercises_component__WEBPACK_IMPORTED_MODULE_3__.ExercisesComponent,
        _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__.ContactComponent] }); })();


/***/ }),

/***/ 918:
/*!************************************************************!*\
  !*** ./src/app/formify/fields/appearance.field-control.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppearanceFieldControl": () => (/* binding */ AppearanceFieldControl)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models */ 3566);

class AppearanceFieldControl extends _models__WEBPACK_IMPORTED_MODULE_0__.FieldModel {
    constructor(overwrite = {}) {
        const field = new _models__WEBPACK_IMPORTED_MODULE_0__.FieldModel({
            controlName: 'appearance',
            fieldType: _models__WEBPACK_IMPORTED_MODULE_0__.FieldTypes.radio,
            label: 'Appearance',
            defaultValue: 'legacy',
            options: [{ text: 'Legacy', value: 'legacy' }, { text: 'Standard', value: 'standard' }, { text: 'Fill', value: 'fill' }, { text: 'Outline', value: 'outline' }]
        });
        super(Object.assign(field, overwrite));
    }
}


/***/ }),

/***/ 9593:
/*!***********************************************************!*\
  !*** ./src/app/formify/fields/biography.field-control.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BiographyFieldControl": () => (/* binding */ BiographyFieldControl)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models */ 3566);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 587);


class BiographyFieldControl extends _models__WEBPACK_IMPORTED_MODULE_0__.FieldModel {
    constructor(overwrite = {}) {
        const field = new _models__WEBPACK_IMPORTED_MODULE_0__.FieldModel({
            controlName: 'biography',
            fieldType: _models__WEBPACK_IMPORTED_MODULE_0__.FieldTypes.textarea,
            label: 'Describe your biography',
            placeholder: 'biography',
            autoComplete: 'off',
            validators: [
                new _models__WEBPACK_IMPORTED_MODULE_0__.ValidatorModel({ validator: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, errorCode: 'required', description: 'biography is required' }),
            ]
        });
        super(Object.assign(field, overwrite));
    }
}


/***/ }),

/***/ 2045:
/*!*******************************************************!*\
  !*** ./src/app/formify/fields/color.field-control.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorFieldControl": () => (/* binding */ ColorFieldControl)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models */ 3566);

class ColorFieldControl extends _models__WEBPACK_IMPORTED_MODULE_0__.FieldModel {
    constructor(overwrite = {}) {
        const field = new _models__WEBPACK_IMPORTED_MODULE_0__.FieldModel({
            controlName: 'color',
            fieldType: _models__WEBPACK_IMPORTED_MODULE_0__.FieldTypes.radio,
            label: 'Color',
            defaultValue: 'primary',
            options: [{ text: 'Primary', value: 'primary' }, { text: 'Accent', value: 'accent' }, { text: 'Warn', value: 'warn' }]
        });
        super(Object.assign(field, overwrite));
    }
}


/***/ }),

/***/ 4605:
/*!*********************************************************!*\
  !*** ./src/app/formify/fields/country.field-control.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountryFieldControl": () => (/* binding */ CountryFieldControl)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models */ 3566);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 587);


class CountryFieldControl extends _models__WEBPACK_IMPORTED_MODULE_0__.FieldModel {
    constructor(overwrite = {}) {
        const field = new _models__WEBPACK_IMPORTED_MODULE_0__.FieldModel({
            controlName: 'country',
            fieldType: _models__WEBPACK_IMPORTED_MODULE_0__.FieldTypes.select,
            label: 'Choose country',
            placeholder: 'country',
            autoComplete: 'off',
            options: [{ text: 'Albania', value: 'Al' }, { text: 'England', value: 'En' }, { text: 'Germany', value: 'Gr' }],
            validators: [
                new _models__WEBPACK_IMPORTED_MODULE_0__.ValidatorModel({ validator: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, errorCode: 'required', description: 'identity is required' }),
            ]
        });
        super(Object.assign(field, overwrite));
    }
}


/***/ }),

/***/ 2333:
/*!*******************************************************!*\
  !*** ./src/app/formify/fields/email.field-control.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailFieldControl": () => (/* binding */ EmailFieldControl)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models */ 3566);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _regex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./regex */ 5435);



class EmailFieldControl extends _models__WEBPACK_IMPORTED_MODULE_0__.FieldModel {
    constructor(overwrite = {}) {
        const field = new _models__WEBPACK_IMPORTED_MODULE_0__.FieldModel({
            controlName: 'email',
            label: 'Email address',
            placeholder: 'email',
            icon: 'email',
            autoComplete: 'off',
            validators: [
                { validator: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, errorCode: 'required', description: 'identity is required' },
                { validator: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern(_regex__WEBPACK_IMPORTED_MODULE_1__.Email), errorCode: 'pattern', description: 'Email address is incorrect' },
                { validator: null, errorCode: 'exist', description: 'This email exist in server' },
            ]
        });
        super(Object.assign(field, overwrite));
    }
}


/***/ }),

/***/ 8793:
/*!*****************************************!*\
  !*** ./src/app/formify/fields/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Email": () => (/* reexport safe */ _regex__WEBPACK_IMPORTED_MODULE_0__.Email),
/* harmony export */   "Phone": () => (/* reexport safe */ _regex__WEBPACK_IMPORTED_MODULE_0__.Phone),
/* harmony export */   "AppearanceFieldControl": () => (/* reexport safe */ _appearance_field_control__WEBPACK_IMPORTED_MODULE_1__.AppearanceFieldControl),
/* harmony export */   "BiographyFieldControl": () => (/* reexport safe */ _biography_field_control__WEBPACK_IMPORTED_MODULE_2__.BiographyFieldControl),
/* harmony export */   "ColorFieldControl": () => (/* reexport safe */ _color_field_control__WEBPACK_IMPORTED_MODULE_3__.ColorFieldControl),
/* harmony export */   "CountryFieldControl": () => (/* reexport safe */ _country_field_control__WEBPACK_IMPORTED_MODULE_4__.CountryFieldControl),
/* harmony export */   "EmailFieldControl": () => (/* reexport safe */ _email_field_control__WEBPACK_IMPORTED_MODULE_5__.EmailFieldControl),
/* harmony export */   "LanguageFieldControl": () => (/* reexport safe */ _language_field_control__WEBPACK_IMPORTED_MODULE_6__.LanguageFieldControl),
/* harmony export */   "NameFieldControl": () => (/* reexport safe */ _name_field_control__WEBPACK_IMPORTED_MODULE_7__.NameFieldControl),
/* harmony export */   "PasswordFieldControl": () => (/* reexport safe */ _password_field_control__WEBPACK_IMPORTED_MODULE_8__.PasswordFieldControl),
/* harmony export */   "PhoneFieldControl": () => (/* reexport safe */ _phone_field_control__WEBPACK_IMPORTED_MODULE_9__.PhoneFieldControl),
/* harmony export */   "ToggleFieldControl": () => (/* reexport safe */ _toggle_field_control__WEBPACK_IMPORTED_MODULE_10__.ToggleFieldControl)
/* harmony export */ });
/* harmony import */ var _regex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex */ 5435);
/* harmony import */ var _appearance_field_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appearance.field-control */ 918);
/* harmony import */ var _biography_field_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./biography.field-control */ 9593);
/* harmony import */ var _color_field_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./color.field-control */ 2045);
/* harmony import */ var _country_field_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./country.field-control */ 4605);
/* harmony import */ var _email_field_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./email.field-control */ 2333);
/* harmony import */ var _language_field_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./language.field-control */ 5557);
/* harmony import */ var _name_field_control__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./name.field-control */ 1197);
/* harmony import */ var _password_field_control__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./password.field-control */ 2863);
/* harmony import */ var _phone_field_control__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./phone.field-control */ 4342);
/* harmony import */ var _toggle_field_control__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./toggle.field-control */ 1457);













/***/ }),

/***/ 5557:
/*!**********************************************************!*\
  !*** ./src/app/formify/fields/language.field-control.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguageFieldControl": () => (/* binding */ LanguageFieldControl)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models */ 3566);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 587);


class LanguageFieldControl extends _models__WEBPACK_IMPORTED_MODULE_0__.FieldModel {
    constructor(overwrite = {}) {
        const field = new _models__WEBPACK_IMPORTED_MODULE_0__.FieldModel({
            controlName: 'languages',
            fieldType: _models__WEBPACK_IMPORTED_MODULE_0__.FieldTypes.select,
            label: 'Choose languages',
            placeholder: 'language',
            autoComplete: 'off',
            defaultValue: ['en'],
            multiple: true,
            options: [{ text: 'Shqip', value: 'al' }, { text: 'English', value: 'en' }, { text: 'Italiano', value: 'it' }, { text: 'Espanol', value: 'es' }, { text: 'Francais', value: 'fr' }],
            validators: [
                new _models__WEBPACK_IMPORTED_MODULE_0__.ValidatorModel({ validator: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, errorCode: 'required', description: 'language is required' }),
            ]
        });
        super(Object.assign(field, overwrite));
    }
}


/***/ }),

/***/ 1197:
/*!******************************************************!*\
  !*** ./src/app/formify/fields/name.field-control.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NameFieldControl": () => (/* binding */ NameFieldControl)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models */ 3566);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 587);


class NameFieldControl extends _models__WEBPACK_IMPORTED_MODULE_0__.FieldModel {
    constructor(overwrite = {}) {
        const field = new _models__WEBPACK_IMPORTED_MODULE_0__.FieldModel({
            controlName: 'firstName',
            label: 'Enter first name',
            placeholder: 'first name',
            autoComplete: 'off',
            validators: [
                new _models__WEBPACK_IMPORTED_MODULE_0__.ValidatorModel({ validator: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, errorCode: 'required', description: 'Name is required' }),
                new _models__WEBPACK_IMPORTED_MODULE_0__.ValidatorModel({ validator: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(3), errorCode: 'minlength', description: 'Minimum 3 characters required', parameters: { value: 3 } }),
            ]
        });
        super(Object.assign(field, overwrite));
    }
}


/***/ }),

/***/ 2863:
/*!**********************************************************!*\
  !*** ./src/app/formify/fields/password.field-control.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordFieldControl": () => (/* binding */ PasswordFieldControl)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models */ 3566);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 587);


class PasswordFieldControl extends _models__WEBPACK_IMPORTED_MODULE_0__.FieldModel {
    constructor(overwrite = {}) {
        const field = new _models__WEBPACK_IMPORTED_MODULE_0__.FieldModel({
            controlName: 'password',
            icon: 'vpn_key',
            type: 'password',
            label: 'Enter password',
            placeholder: 'password',
            validators: [
                { validator: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, errorCode: 'required', description: 'Password is required' },
                { validator: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(8), errorCode: 'minlength', description: 'Minimum 8 characters are required', parameters: { value: 8 } },
                { validator: null, errorCode: 'invalid', description: 'Password is invalid' },
            ]
        });
        super(Object.assign(field, overwrite));
    }
}


/***/ }),

/***/ 4342:
/*!*******************************************************!*\
  !*** ./src/app/formify/fields/phone.field-control.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhoneFieldControl": () => (/* binding */ PhoneFieldControl)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models */ 3566);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _regex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./regex */ 5435);



class PhoneFieldControl extends _models__WEBPACK_IMPORTED_MODULE_0__.FieldModel {
    constructor(overwrite = {}) {
        const field = new _models__WEBPACK_IMPORTED_MODULE_0__.FieldModel({
            controlName: 'phone',
            prefix: '+355', type: 'tel',
            label: 'Number phone',
            placeholder: 'phone',
            icon: 'phone',
            autoComplete: 'off',
            validators: [
                { validator: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, errorCode: 'required', description: 'identity is required' },
                { validator: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern(_regex__WEBPACK_IMPORTED_MODULE_1__.Phone), errorCode: 'pattern', description: 'Phone number is incorrect' },
                { validator: null, errorCode: 'exist', description: 'This phone exist in server' },
            ]
        });
        super(Object.assign(field, overwrite));
    }
}


/***/ }),

/***/ 5435:
/*!*****************************************!*\
  !*** ./src/app/formify/fields/regex.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Email": () => (/* binding */ Email),
/* harmony export */   "Phone": () => (/* binding */ Phone)
/* harmony export */ });
const Email = '[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})';
const Phone = '^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\\s\\./0-9]*$';


/***/ }),

/***/ 1457:
/*!********************************************************!*\
  !*** ./src/app/formify/fields/toggle.field-control.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToggleFieldControl": () => (/* binding */ ToggleFieldControl)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models */ 3566);

class ToggleFieldControl extends _models__WEBPACK_IMPORTED_MODULE_0__.FieldModel {
    constructor(overwrite = {}) {
        const field = new _models__WEBPACK_IMPORTED_MODULE_0__.FieldModel({
            controlName: 'toggle',
            label: 'Toggle',
            defaultValue: true,
            fieldType: _models__WEBPACK_IMPORTED_MODULE_0__.FieldTypes.toggle,
        });
        super(Object.assign(field, overwrite));
    }
}


/***/ }),

/***/ 9968:
/*!*******************************************!*\
  !*** ./src/app/formify/formify.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader),
/* harmony export */   "FormifyModule": () => (/* binding */ FormifyModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _components_input_input_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/input/input.component */ 6257);
/* harmony import */ var _components_field_control_field_control_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/field-control/field-control.component */ 4882);
/* harmony import */ var _components_select_select_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/select/select.component */ 7872);
/* harmony import */ var _components_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/textarea/textarea.component */ 8418);
/* harmony import */ var _components_formify_formify_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/formify/formify.component */ 8860);
/* harmony import */ var _components_submit_submit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/submit/submit.component */ 8366);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/http-loader */ 2202);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material.module */ 7483);
/* harmony import */ var _components_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/toggle/toggle.component */ 4412);
/* harmony import */ var _components_radio_radio_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/radio/radio.component */ 7932);
/* harmony import */ var _components_array_control_array_control_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/array-control/array-control.component */ 4285);
/* harmony import */ var _components_group_control_group_control_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/group-control/group-control.component */ 2406);
/* harmony import */ var _components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/checkbox/checkbox.component */ 9202);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);




















function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__.TranslateHttpLoader(http, 'assets/i18n/', '.json');
}
class FormifyModule {
}
FormifyModule.ɵfac = function FormifyModule_Factory(t) { return new (t || FormifyModule)(); };
FormifyModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: FormifyModule });
FormifyModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule,
            _material_module__WEBPACK_IMPORTED_MODULE_6__.MaterialModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateModule.forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateLoader,
                    useFactory: (createTranslateLoader),
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClient]
                },
            }),
        ], _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](FormifyModule, { declarations: [_components_field_control_field_control_component__WEBPACK_IMPORTED_MODULE_1__.FieldControlComponent,
        _components_array_control_array_control_component__WEBPACK_IMPORTED_MODULE_9__.ArrayControlComponent,
        _components_group_control_group_control_component__WEBPACK_IMPORTED_MODULE_10__.GroupControlComponent,
        _components_submit_submit_component__WEBPACK_IMPORTED_MODULE_5__.SubmitComponent,
        _components_input_input_component__WEBPACK_IMPORTED_MODULE_0__.InputComponent,
        _components_select_select_component__WEBPACK_IMPORTED_MODULE_2__.SelectComponent,
        _components_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_3__.TextareaComponent,
        _components_submit_submit_component__WEBPACK_IMPORTED_MODULE_5__.SubmitComponent,
        _components_formify_formify_component__WEBPACK_IMPORTED_MODULE_4__.FormifyComponent,
        _components_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_7__.ToggleComponent,
        _components_radio_radio_component__WEBPACK_IMPORTED_MODULE_8__.RadioComponent,
        _components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_11__.CheckboxComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule,
        _material_module__WEBPACK_IMPORTED_MODULE_6__.MaterialModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateModule], exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule,
        _components_field_control_field_control_component__WEBPACK_IMPORTED_MODULE_1__.FieldControlComponent,
        _components_array_control_array_control_component__WEBPACK_IMPORTED_MODULE_9__.ArrayControlComponent,
        _components_group_control_group_control_component__WEBPACK_IMPORTED_MODULE_10__.GroupControlComponent,
        _components_submit_submit_component__WEBPACK_IMPORTED_MODULE_5__.SubmitComponent,
        _components_input_input_component__WEBPACK_IMPORTED_MODULE_0__.InputComponent,
        _components_select_select_component__WEBPACK_IMPORTED_MODULE_2__.SelectComponent,
        _components_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_3__.TextareaComponent,
        _components_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_7__.ToggleComponent,
        _components_radio_radio_component__WEBPACK_IMPORTED_MODULE_8__.RadioComponent,
        _components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_11__.CheckboxComponent,
        _components_formify_formify_component__WEBPACK_IMPORTED_MODULE_4__.FormifyComponent] }); })();


/***/ }),

/***/ 3265:
/*!*********************************************************!*\
  !*** ./src/app/formify/groups/address.group-control.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddressGroupControl": () => (/* binding */ AddressGroupControl)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models */ 3566);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _fields_country_field_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fields/country.field-control */ 4605);



class AddressGroupControl extends _models__WEBPACK_IMPORTED_MODULE_0__.GroupModel {
    constructor(overwrite = {}) {
        const group = new _models__WEBPACK_IMPORTED_MODULE_0__.GroupModel({
            controlName: 'address',
            label: 'address:',
            controls: [
                new _models__WEBPACK_IMPORTED_MODULE_0__.FieldModel({
                    controlName: 'street', label: 'Enter your street', placeholder: 'street', icon: 'add_road', autoComplete: 'off',
                    validators: [
                        new _models__WEBPACK_IMPORTED_MODULE_0__.ValidatorModel({ validator: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, errorCode: 'required', description: 'identity is required' }),
                    ]
                }),
                new _models__WEBPACK_IMPORTED_MODULE_0__.FieldModel({
                    controlName: 'city', label: 'Enter city', placeholder: 'city', icon: 'location_city', autoComplete: 'off',
                    validators: [
                        { validator: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, errorCode: 'required', description: 'identity is required' },
                    ]
                }),
                new _fields_country_field_control__WEBPACK_IMPORTED_MODULE_1__.CountryFieldControl(),
                new _models__WEBPACK_IMPORTED_MODULE_0__.FieldModel({
                    controlName: 'zip', label: 'Enter zip code', type: 'number', placeholder: 'zip code', icon: 'pin', autoComplete: 'off',
                    validators: [
                        { validator: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, errorCode: 'required', description: 'identity is required' },
                    ]
                }),
            ]
        });
        super(Object.assign(group, overwrite));
    }
}


/***/ }),

/***/ 3177:
/*!*********************************************************!*\
  !*** ./src/app/formify/groups/contact.group-control.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactGroupControl": () => (/* binding */ ContactGroupControl)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models */ 3566);
/* harmony import */ var _fields_email_field_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fields/email.field-control */ 2333);
/* harmony import */ var _fields_phone_field_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fields/phone.field-control */ 4342);



class ContactGroupControl extends _models__WEBPACK_IMPORTED_MODULE_0__.GroupModel {
    constructor(overwrite = {}) {
        const group = new _models__WEBPACK_IMPORTED_MODULE_0__.GroupModel({
            controlName: 'contact',
            label: 'Contact:',
            controls: [
                new _fields_phone_field_control__WEBPACK_IMPORTED_MODULE_2__.PhoneFieldControl(),
                new _fields_email_field_control__WEBPACK_IMPORTED_MODULE_1__.EmailFieldControl(),
                new _models__WEBPACK_IMPORTED_MODULE_0__.FieldModel({
                    controlName: 'location', label: 'Enter your location', placeholder: 'location', icon: 'location_on', autoComplete: 'off',
                })
            ]
        });
        super(Object.assign(group, overwrite));
    }
}


/***/ }),

/***/ 857:
/*!***********************************************************!*\
  !*** ./src/app/formify/groups/exercises.group-control.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExercisesGroupControl": () => (/* binding */ ExercisesGroupControl)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models */ 3566);

class ExercisesGroupControl extends _models__WEBPACK_IMPORTED_MODULE_0__.GroupModel {
    constructor(overwrite = {}) {
        const group = new _models__WEBPACK_IMPORTED_MODULE_0__.GroupModel({
            controlName: 'exercises',
            label: 'Exercises:',
            controls: [
                new _models__WEBPACK_IMPORTED_MODULE_0__.FieldModel({ controlName: 'addExercise', label: 'Write your custom exercise', icon: 'directions_run', placeholder: 'exercise' }),
                new _models__WEBPACK_IMPORTED_MODULE_0__.FieldModel({ controlName: 'running', label: 'Running', fieldType: _models__WEBPACK_IMPORTED_MODULE_0__.FieldTypes.checkbox, defaultValue: true }),
                new _models__WEBPACK_IMPORTED_MODULE_0__.FieldModel({ controlName: 'skipping', label: 'Skipping', fieldType: _models__WEBPACK_IMPORTED_MODULE_0__.FieldTypes.checkbox, defaultValue: false }),
                new _models__WEBPACK_IMPORTED_MODULE_0__.FieldModel({ controlName: 'cycling', label: 'Cycling', fieldType: _models__WEBPACK_IMPORTED_MODULE_0__.FieldTypes.checkbox, defaultValue: false }),
                new _models__WEBPACK_IMPORTED_MODULE_0__.FieldModel({ controlName: 'burpee', label: 'Burpee', fieldType: _models__WEBPACK_IMPORTED_MODULE_0__.FieldTypes.checkbox, defaultValue: false }),
                new _models__WEBPACK_IMPORTED_MODULE_0__.FieldModel({ controlName: 'pool', label: 'Pool', fieldType: _models__WEBPACK_IMPORTED_MODULE_0__.FieldTypes.checkbox, defaultValue: false }),
                new _models__WEBPACK_IMPORTED_MODULE_0__.FieldModel({ controlName: 'surfing', label: 'Surfing', fieldType: _models__WEBPACK_IMPORTED_MODULE_0__.FieldTypes.checkbox, defaultValue: true }),
                new _models__WEBPACK_IMPORTED_MODULE_0__.FieldModel({ controlName: 'sledding', label: 'Sledding', fieldType: _models__WEBPACK_IMPORTED_MODULE_0__.FieldTypes.checkbox, defaultValue: false }),
                new _models__WEBPACK_IMPORTED_MODULE_0__.FieldModel({ controlName: 'skateboarding', label: 'Skateboarding', fieldType: _models__WEBPACK_IMPORTED_MODULE_0__.FieldTypes.checkbox, defaultValue: true }),
            ]
        });
        super(Object.assign(group, overwrite));
    }
}


/***/ }),

/***/ 4775:
/*!*****************************************!*\
  !*** ./src/app/formify/groups/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddressGroupControl": () => (/* reexport safe */ _address_group_control__WEBPACK_IMPORTED_MODULE_0__.AddressGroupControl),
/* harmony export */   "ContactGroupControl": () => (/* reexport safe */ _contact_group_control__WEBPACK_IMPORTED_MODULE_1__.ContactGroupControl),
/* harmony export */   "ExercisesGroupControl": () => (/* reexport safe */ _exercises_group_control__WEBPACK_IMPORTED_MODULE_2__.ExercisesGroupControl)
/* harmony export */ });
/* harmony import */ var _address_group_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./address.group-control */ 3265);
/* harmony import */ var _contact_group_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.group-control */ 3177);
/* harmony import */ var _exercises_group_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exercises.group-control */ 857);





/***/ }),

/***/ 7483:
/*!********************************************!*\
  !*** ./src/app/formify/material.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/progress-spinner */ 8824);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 2544);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 6246);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 2288);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 5342);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ 1412);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slide-toggle */ 9765);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/radio */ 6287);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ 7644);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tabs */ 5264);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);












class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule
        ], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__.MatProgressSpinnerModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInputModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelectModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__.MatSlideToggleModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__.MatRadioModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__.MatCheckboxModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__.MatTabsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule], exports: [_angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__.MatProgressSpinnerModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInputModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelectModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__.MatSlideToggleModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__.MatRadioModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__.MatCheckboxModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__.MatTabsModule] }); })();


/***/ }),

/***/ 355:
/*!**********************************************************!*\
  !*** ./src/app/formify/models/accessibility.abstract.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormifyAccessibility": () => (/* binding */ FormifyAccessibility)
/* harmony export */ });
class FormifyAccessibility {
    get(path) { return null; }
    field(path) { return null; }
    group(path) { return null; }
    array(path) { return null; }
}


/***/ }),

/***/ 9813:
/*!***********************************************!*\
  !*** ./src/app/formify/models/array.model.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArrayModel": () => (/* binding */ ArrayModel)
/* harmony export */ });
/* harmony import */ var _formify_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formify.model */ 946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var _field_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./field.model */ 5698);
/* harmony import */ var _group_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./group.model */ 5216);
/* harmony import */ var _formify_generate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formify.generate */ 9620);





class ArrayModel extends _formify_generate__WEBPACK_IMPORTED_MODULE_3__.FormifyGenerate {
    constructor(config) {
        super();
        this.formArray = null;
        this.controlName = '';
        this.controlType = _formify_model__WEBPACK_IMPORTED_MODULE_0__.ControlTypes.formArray;
        this.controls = [];
        this.change = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(null);
        this.label = '';
        Object.assign(this, config);
    }
    get(path) {
        for (const control of this.controls) {
            if (path === control.controlName) {
                return control;
            }
        }
        return null;
    }
    field(path) {
        const control = this.get(path);
        if (control instanceof _field_model__WEBPACK_IMPORTED_MODULE_1__.FieldModel) {
            return control;
        }
        return null;
    }
    group(path) {
        const control = this.get(path);
        if (control instanceof _group_model__WEBPACK_IMPORTED_MODULE_2__.GroupModel) {
            return control;
        }
        return null;
    }
    array(path) {
        const control = this.get(path);
        if (control instanceof ArrayModel) {
            return control;
        }
        return null;
    }
    removeAt(index) {
        this.controls.splice(index, 1);
        this.formArray.removeAt(index);
    }
    insertAt(index, control) {
        if (control instanceof _field_model__WEBPACK_IMPORTED_MODULE_1__.FieldModel) {
            this.controls.splice(index, 0, control);
            this.formArray.insert(index, this.generateFormControl(control));
        }
        else if (control instanceof _group_model__WEBPACK_IMPORTED_MODULE_2__.GroupModel) {
            this.controls.splice(index, 0, control);
            this.formArray.insert(index, this.generateFormGroup(control));
        }
        else if (control instanceof ArrayModel) {
            this.controls.splice(index, 0, control);
            this.formArray.insert(index, this.generateFormArray(control));
        }
    }
    push(control) {
        if (control instanceof _field_model__WEBPACK_IMPORTED_MODULE_1__.FieldModel) {
            this.formArray.push(this.generateFormControl(control));
            this.controls.push(control);
        }
        else if (control instanceof _group_model__WEBPACK_IMPORTED_MODULE_2__.GroupModel) {
            this.formArray.push(this.generateFormGroup(control));
            this.controls.push(control);
        }
        else if (control instanceof ArrayModel) {
            this.formArray.push(this.generateFormArray(control));
            this.controls.push(control);
        }
    }
    unshift(control) {
        if (control instanceof _field_model__WEBPACK_IMPORTED_MODULE_1__.FieldModel) {
            this.formArray.insert(0, this.generateFormControl(control));
            this.controls.unshift(control);
        }
        else if (control instanceof _group_model__WEBPACK_IMPORTED_MODULE_2__.GroupModel) {
            this.formArray.insert(0, this.generateFormGroup(control));
            this.controls.unshift(control);
        }
        else if (control instanceof ArrayModel) {
            this.formArray.insert(0, this.generateFormArray(control));
            this.controls.unshift(control);
        }
    }
    reset() {
        this.formGroup.reset();
    }
}


/***/ }),

/***/ 3331:
/*!********************************************************!*\
  !*** ./src/app/formify/models/error-mathers.config.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyErrorStateMatcher": () => (/* binding */ MyErrorStateMatcher),
/* harmony export */   "MatchConfirmPassword": () => (/* binding */ MatchConfirmPassword),
/* harmony export */   "MyErrorStatePasswordMatcher": () => (/* binding */ MyErrorStatePasswordMatcher)
/* harmony export */ });
class MyErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && isSubmitted);
    }
}
const MatchConfirmPassword = (control) => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    if (password.value !== confirmPassword.value && confirmPassword.value) {
        console.log('not match');
        confirmPassword.setErrors({ notMatch: true });
    }
    else {
        if (confirmPassword.hasError('notMatch')) {
            delete confirmPassword.errors['notMatch'];
            confirmPassword.updateValueAndValidity();
            console.log('match');
        }
    }
    return null;
};
class MyErrorStatePasswordMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        const data = control.parent.value;
        return !!(control && data.password !== data.confirmPassword && isSubmitted);
    }
}


/***/ }),

/***/ 5698:
/*!***********************************************!*\
  !*** ./src/app/formify/models/field.model.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FieldTypes": () => (/* binding */ FieldTypes),
/* harmony export */   "FieldModel": () => (/* binding */ FieldModel)
/* harmony export */ });
/* harmony import */ var _formify_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formify.model */ 946);
/* harmony import */ var _error_mathers_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error-mathers.config */ 3331);
/* harmony import */ var _submit_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./submit.model */ 5155);
/* harmony import */ var _accessibility_abstract__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accessibility.abstract */ 355);




var FieldTypes;
(function (FieldTypes) {
    FieldTypes["input"] = "[INPUT] input field";
    FieldTypes["textarea"] = "[textarea] textarea field";
    FieldTypes["select"] = "[SELECT] select field";
    FieldTypes["radio"] = "[RADIO] radio field";
    FieldTypes["checkbox"] = "[CHECKBOX] checkbox field";
    FieldTypes["toggle"] = "[TOGGLE] toggle field";
    FieldTypes["inputPhone"] = "[RADIO] input phone field";
})(FieldTypes || (FieldTypes = {}));
class FieldModel extends _accessibility_abstract__WEBPACK_IMPORTED_MODULE_3__.FormifyAccessibility {
    constructor(config) {
        super();
        this.formControl = null;
        this.controlName = null;
        this.controlType = _formify_model__WEBPACK_IMPORTED_MODULE_0__.ControlTypes.formField;
        this.fieldType = FieldTypes.input;
        this.defaultValue = null;
        this.errorStateMatcher = new _error_mathers_config__WEBPACK_IMPORTED_MODULE_1__.MyErrorStateMatcher();
        this.validators = [];
        this.options = null;
        this.appearance = 'legacy';
        this.useTranslation = false;
        this.prefix = null;
        this.dropDownInPrefix = false;
        this.type = null;
        this.label = null;
        this.placeholder = null;
        this.hint = null;
        this.autoComplete = 'on';
        this.icon = null;
        this.color = 'primary';
        this.multiple = false;
        this.readOnly = false;
        this.none = false;
        this.hidden = false;
        this.disabled = false;
        this.submit = new _submit_model__WEBPACK_IMPORTED_MODULE_2__.SubmitModel();
        Object.assign(this, config);
    }
    update(overwrite) {
        Object.assign(this, overwrite);
    }
    field(path) {
        return null;
    }
    group(path) {
        return null;
    }
    array(path) {
        return null;
    }
    get(path) {
        return null;
    }
}


/***/ }),

/***/ 5760:
/*!*********************************************************!*\
  !*** ./src/app/formify/models/formify-builder.model.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormifyBuilderModel": () => (/* binding */ FormifyBuilderModel)
/* harmony export */ });
/* harmony import */ var _formify_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formify.model */ 946);
/* harmony import */ var _field_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./field.model */ 5698);
/* harmony import */ var _group_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./group.model */ 5216);
/* harmony import */ var _array_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./array.model */ 9813);




class FormifyBuilderModel {
    form(config) {
        return new _formify_model__WEBPACK_IMPORTED_MODULE_0__.FormifyModel(config);
    }
    field(config) {
        return new _field_model__WEBPACK_IMPORTED_MODULE_1__.FieldModel(config);
    }
    group(config) {
        return new _group_model__WEBPACK_IMPORTED_MODULE_2__.GroupModel(config);
    }
    array(config) {
        this.field({ controlName: 'f' });
        return new _array_model__WEBPACK_IMPORTED_MODULE_3__.ArrayModel(config);
    }
}


/***/ }),

/***/ 9620:
/*!****************************************************!*\
  !*** ./src/app/formify/models/formify.generate.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormifyGenerate": () => (/* binding */ FormifyGenerate)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _field_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./field.model */ 5698);
/* harmony import */ var _group_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./group.model */ 5216);
/* harmony import */ var _array_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./array.model */ 9813);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 5921);






class FormifyGenerate {
    constructor() {
        this.$unSubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.formGroup = null;
    }
    generateFormControls(controls) {
        const formControls = {};
        for (const control of controls) {
            if (control instanceof _field_model__WEBPACK_IMPORTED_MODULE_0__.FieldModel) {
                Object.assign(formControls, { [control.controlName]: this.generateFormControl(control) });
            }
            else if (control instanceof _group_model__WEBPACK_IMPORTED_MODULE_1__.GroupModel) {
                Object.assign(formControls, { [control.controlName]: this.generateFormGroup(control) });
            }
            else if (control instanceof _array_model__WEBPACK_IMPORTED_MODULE_2__.ArrayModel) {
                Object.assign(formControls, { [control.controlName]: this.generateFormArray(control) });
            }
        }
        return formControls;
    }
    generateFormControl(control) {
        const formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(control.defaultValue, control.validators.map(validator => validator.validator)
            .filter(validator => validator));
        control.formControl = formControl;
        control.submit = this.submit;
        return formControl;
    }
    generateFormGroup(control) {
        const formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup(this.generateFormControls(control.controls)); // recursion
        control.formGroup = formGroup;
        control.submit = this.submit;
        control.change.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.$unSubscribe)).subscribe(change => {
            if (change) {
                this.formGroup.patchValue(change);
            }
        });
        return formGroup;
    }
    generateFormArray(control) {
        const formArray = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormArray(Object.entries(this.generateFormControls(control.controls)) // recursion
            .map(([name, value]) => ({ name, value }))
            .map(item => item.value));
        control.formArray = formArray;
        control.submit = this.submit;
        control.change.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.$unSubscribe)).subscribe(change => {
            if (change) {
                this.formGroup.patchValue(change);
            }
        });
        return formArray;
    }
}


/***/ }),

/***/ 946:
/*!*************************************************!*\
  !*** ./src/app/formify/models/formify.model.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ControlTypes": () => (/* binding */ ControlTypes),
/* harmony export */   "FormifyModel": () => (/* binding */ FormifyModel)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _field_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./field.model */ 5698);
/* harmony import */ var _group_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./group.model */ 5216);
/* harmony import */ var _array_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./array.model */ 9813);
/* harmony import */ var _submit_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./submit.model */ 5155);
/* harmony import */ var _formify_generate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formify.generate */ 9620);






var ControlTypes;
(function (ControlTypes) {
    ControlTypes["formField"] = "[FORMFIELD] formField direction";
    ControlTypes["formGroup"] = "[FORMGROUP] formGroup direction";
    ControlTypes["formArray"] = "[FORMARRAY] formArray direction";
})(ControlTypes || (ControlTypes = {}));
class FormifyModel extends _formify_generate__WEBPACK_IMPORTED_MODULE_4__.FormifyGenerate {
    constructor(config) {
        super();
        this.submit = new _submit_model__WEBPACK_IMPORTED_MODULE_3__.SubmitModel();
        this.controls = config.controls;
        if (config.hasOwnProperty('submit')) {
            this.submit = Object.assign(Object.assign({}, this.submit), config.submit);
        }
        if (config.hasOwnProperty('options')) {
            this.options = config.options;
        }
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup(this.generateFormControls(this.controls), this.options);
        this.formGroup.statusChanges.subscribe(status => {
            this.checkDisabledSubmit();
        });
    }
    get(path) {
        for (const control of this.controls) {
            if (path === control.controlName) {
                return control;
            }
        }
        return null;
    }
    field(path) {
        const control = this.get(path);
        if (control instanceof _field_model__WEBPACK_IMPORTED_MODULE_0__.FieldModel) {
            return control;
        }
        return null;
    }
    group(path) {
        const control = this.get(path);
        if (control instanceof _group_model__WEBPACK_IMPORTED_MODULE_1__.GroupModel) {
            return control;
        }
        return null;
    }
    array(path) {
        const control = this.get(path);
        if (control instanceof _array_model__WEBPACK_IMPORTED_MODULE_2__.ArrayModel) {
            return control;
        }
        return null;
    }
    addControl(control) {
        if (control instanceof _field_model__WEBPACK_IMPORTED_MODULE_0__.FieldModel) {
            this.controls.push(control);
            this.formGroup.addControl(control.controlName, this.generateFormControl(control));
        }
        else if (control instanceof _group_model__WEBPACK_IMPORTED_MODULE_1__.GroupModel) {
            this.controls.push(control);
            this.formGroup.addControl(control.controlName, this.generateFormGroup(control));
        }
        else if (control instanceof _array_model__WEBPACK_IMPORTED_MODULE_2__.ArrayModel) {
            this.controls.push(control);
            this.formGroup.addControl(control.controlName, this.generateFormArray(control));
        }
    }
    removeControl(name) {
        this.controls = this.controls.filter(control => control.controlName !== name);
        this.formGroup.removeControl(name);
    }
    checkDisabledSubmit() {
        this.submit.disabled = (this.formGroup.invalid && this.submit.status.value || this.submit.loading);
    }
    loading(loading) {
        this.submit.loading = loading;
        this.checkDisabledSubmit();
    }
    reset() {
        this.formGroup.reset();
    }
    unSubscribe() {
        this.$unSubscribe.next();
        this.$unSubscribe.complete();
    }
    updateSubmit(overwrite) {
        Object.assign(this.submit, overwrite);
    }
    updateFields(overwrite) { this.overwriteFields(overwrite, this.controls); }
    overwriteFields(overwrite, controls) {
        controls.forEach(control => {
            if (control instanceof _field_model__WEBPACK_IMPORTED_MODULE_0__.FieldModel) {
                Object.assign(control, overwrite);
            }
            else {
                this.overwriteFields(overwrite, control.controls); // recursion
            }
        });
    }
}


/***/ }),

/***/ 5216:
/*!***********************************************!*\
  !*** ./src/app/formify/models/group.model.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupModel": () => (/* binding */ GroupModel)
/* harmony export */ });
/* harmony import */ var _formify_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formify.model */ 946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var _field_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./field.model */ 5698);
/* harmony import */ var _array_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./array.model */ 9813);
/* harmony import */ var _formify_generate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formify.generate */ 9620);





class GroupModel extends _formify_generate__WEBPACK_IMPORTED_MODULE_3__.FormifyGenerate {
    constructor(config) {
        super();
        this.controlName = '';
        this.controlType = _formify_model__WEBPACK_IMPORTED_MODULE_0__.ControlTypes.formGroup;
        this.controls = [];
        this.change = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(null);
        this.label = '';
        Object.assign(this, config);
    }
    get(path) {
        for (const control of this.controls) {
            if (path === control.controlName) {
                return control;
            }
        }
        return null;
    }
    field(path) {
        const control = this.get(path);
        if (control instanceof _field_model__WEBPACK_IMPORTED_MODULE_1__.FieldModel) {
            return control;
        }
        return null;
    }
    group(path) {
        const control = this.get(path);
        if (control instanceof GroupModel) {
            return control;
        }
        return null;
    }
    array(path) {
        const control = this.get(path);
        if (control instanceof _array_model__WEBPACK_IMPORTED_MODULE_2__.ArrayModel) {
            return control;
        }
        return null;
    }
    addControl(control) {
        if (control instanceof _field_model__WEBPACK_IMPORTED_MODULE_1__.FieldModel) {
            this.controls.push(control);
            this.formGroup.addControl(control.controlName, this.generateFormControl(control));
        }
        else if (control instanceof GroupModel) {
            this.controls.push(control);
            this.formGroup.addControl(control.controlName, this.generateFormGroup(control));
        }
        else if (control instanceof _array_model__WEBPACK_IMPORTED_MODULE_2__.ArrayModel) {
            this.controls.push(control);
            this.formGroup.addControl(control.controlName, this.generateFormArray(control));
        }
    }
    removeControl(name) {
        this.controls = this.controls.filter(control => control.controlName !== name);
        this.formGroup.removeControl(name);
    }
    reset() {
        this.formGroup.reset();
    }
}


/***/ }),

/***/ 3566:
/*!*****************************************!*\
  !*** ./src/app/formify/models/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ControlTypes": () => (/* reexport safe */ _formify_model__WEBPACK_IMPORTED_MODULE_0__.ControlTypes),
/* harmony export */   "FormifyModel": () => (/* reexport safe */ _formify_model__WEBPACK_IMPORTED_MODULE_0__.FormifyModel),
/* harmony export */   "FormifyBuilderModel": () => (/* reexport safe */ _formify_builder_model__WEBPACK_IMPORTED_MODULE_1__.FormifyBuilderModel),
/* harmony export */   "FieldModel": () => (/* reexport safe */ _field_model__WEBPACK_IMPORTED_MODULE_2__.FieldModel),
/* harmony export */   "FieldTypes": () => (/* reexport safe */ _field_model__WEBPACK_IMPORTED_MODULE_2__.FieldTypes),
/* harmony export */   "ArrayModel": () => (/* reexport safe */ _array_model__WEBPACK_IMPORTED_MODULE_3__.ArrayModel),
/* harmony export */   "GroupModel": () => (/* reexport safe */ _group_model__WEBPACK_IMPORTED_MODULE_4__.GroupModel),
/* harmony export */   "OptionModel": () => (/* reexport safe */ _option_model__WEBPACK_IMPORTED_MODULE_5__.OptionModel),
/* harmony export */   "SubmitModel": () => (/* reexport safe */ _submit_model__WEBPACK_IMPORTED_MODULE_6__.SubmitModel),
/* harmony export */   "ValidatorModel": () => (/* reexport safe */ _validator_model__WEBPACK_IMPORTED_MODULE_7__.ValidatorModel),
/* harmony export */   "FormifyAccessibility": () => (/* reexport safe */ _accessibility_abstract__WEBPACK_IMPORTED_MODULE_8__.FormifyAccessibility)
/* harmony export */ });
/* harmony import */ var _formify_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formify.model */ 946);
/* harmony import */ var _formify_builder_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formify-builder.model */ 5760);
/* harmony import */ var _field_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./field.model */ 5698);
/* harmony import */ var _array_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./array.model */ 9813);
/* harmony import */ var _group_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./group.model */ 5216);
/* harmony import */ var _option_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./option.model */ 310);
/* harmony import */ var _submit_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./submit.model */ 5155);
/* harmony import */ var _validator_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./validator.model */ 8272);
/* harmony import */ var _accessibility_abstract__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./accessibility.abstract */ 355);











/***/ }),

/***/ 310:
/*!************************************************!*\
  !*** ./src/app/formify/models/option.model.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OptionModel": () => (/* binding */ OptionModel)
/* harmony export */ });
class OptionModel {
    constructor() {
        this.text = null;
        this.value = null;
    }
}


/***/ }),

/***/ 5155:
/*!************************************************!*\
  !*** ./src/app/formify/models/submit.model.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubmitModel": () => (/* binding */ SubmitModel)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4505);

class SubmitModel {
    constructor() {
        this.text = 'Submit';
        this.color = 'primary';
        this.loading = false;
        this.disabled = false;
        this.status = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    }
}


/***/ }),

/***/ 8272:
/*!***************************************************!*\
  !*** ./src/app/formify/models/validator.model.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ValidatorModel": () => (/* binding */ ValidatorModel)
/* harmony export */ });
class ValidatorModel {
    constructor(config) {
        this.validator = null;
        this.errorCode = null;
        this.description = null;
        this.translationCode = null;
        this.parameters = null;
        Object.assign(this, config);
    }
}


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map