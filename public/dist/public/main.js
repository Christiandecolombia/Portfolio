(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/animations.ts":
/*!*******************************!*\
  !*** ./src/app/animations.ts ***!
  \*******************************/
/*! exports provided: slideInAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInAnimation", function() { return slideInAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var slideInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ top: '-100%' })
        ], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])(), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '100%' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ top: '0%' }))
            ], { optional: true })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])(), { optional: true }),
    ]),
]);


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _games_games_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./games/games.component */ "./src/app/games/games.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");







var routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], data: { animation: 'Home' } },
    { path: 'projects', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsComponent"], data: { animation: 'Projects' } },
    { path: 'games', component: _games_games_component__WEBPACK_IMPORTED_MODULE_5__["GamesComponent"], data: { animation: 'Games' } },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"], data: { animation: 'Contact' } },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.card{\r\n    width: 18%;\r\n    height: 100%;\r\n    display: inline-block;\r\n    position: -webkit-fixed; /* Safari */\r\n    position: fixed;\r\n    top: 0;\r\n    z-index: 1;\r\n\r\n}\r\n\r\n.card-footer {\r\n    margin-top: 10%\r\n}\r\n\r\n#sections{\r\n    margin-left: 23%;\r\n    vertical-align: top;\r\n\r\n\r\n}\r\n\r\nimg{\r\n    display: block;\r\n    width: 70%;\r\n    margin: 20% auto 0%;\r\n    border-radius: 50%;\r\n    background: #303030;\r\n    padding: 1%; \r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLHVCQUF1QixFQUFFLFdBQVc7SUFDcEMsZUFBZTtJQUNmLE1BQU07SUFDTixVQUFVOztBQUVkOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7OztBQUd2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsV0FBVzs7QUFFZiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4uY2FyZHtcclxuICAgIHdpZHRoOiAxOCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogLXdlYmtpdC1maXhlZDsgLyogU2FmYXJpICovXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB6LWluZGV4OiAxO1xyXG5cclxufVxyXG5cclxuLmNhcmQtZm9vdGVyIHtcclxuICAgIG1hcmdpbi10b3A6IDEwJVxyXG59XHJcblxyXG4jc2VjdGlvbnN7XHJcbiAgICBtYXJnaW4tbGVmdDogMjMlO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuXHJcblxyXG59XHJcblxyXG5pbWd7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBtYXJnaW46IDIwJSBhdXRvIDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogIzMwMzAzMDtcclxuICAgIHBhZGRpbmc6IDElOyBcclxuXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n\n  <link ref=\"stylesheet\" href=\"https://bootswatch.com/4/darkly/bootstrap.min.css\">\n\n</head>\n\n<body>\n  <div class=\"card mb-3\">\n    <img src=\"assets/images/20190317_144500.jpg\" alt=\"Card image\">\n    <h3 class=\"card-header\" style=\"font-family: Playfair Display, Georgia, serif;\">Christian Rodriguez</h3>\n    <div class=\"card-body\">\n      <p class=\"card-text\">Full Stack Developer in Seattle<br>\n      </p>\n    </div>\n\n    <button type=\"button\" class=\"btn btn-secondary btn-lg btn-block\"[routerLink]=\"['/home']\">About</button>\n    <button type=\"button\" class=\"btn btn-secondary btn-lg btn-block\"[routerLink]=\"['/projects']\">Projects</button>\n    <button type=\"button\" class=\"btn btn-secondary btn-lg btn-block\"[routerLink]=\"['/contact']\">Contact</button>\n\n    <div class=\"card-footer text-muted\">\n      2019&copy; All rights reserved\n    </div>\n  </div>\n\n\n  <div id=\"sections\" [@routeAnimations]=\"prepareRoute(outlet)\">\n    <router-outlet #outlet=\"outlet\"></router-outlet>\n  </div>\n\n\n</body>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animations */ "./src/app/animations.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'public';
    }
    AppComponent.prototype.prepareRoute = function (outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            animations: [
                _animations__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]
                // animation triggers go here
            ],
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _games_games_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./games/games.component */ "./src/app/games/games.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"],
                _games_games_component__WEBPACK_IMPORTED_MODULE_7__["GamesComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <h1 class=\"display-5\">Contact Me</h1>\n  <hr class=\"my-4\">\n  <p>Because the internet is crazy, I wont be putting my email or any person contact information.\n    Please contact me on LinkedIn or GitHub.\n  </p>\n</div>\n\n<div class=\"card text-white bg-dark mb-3\">\n\n  <div class=\"card-body\">\n    <h4 class=\"card-title\"><a href=\"https://www.linkedin.com/in/christian-i-rodriguez\">LinkedIn</a></h4>\n    <h4 class=\"card-title\"><a href=\"https://github.com/Christiandecolombia\">GitHub</a></h4>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/games/games.component.css":
/*!*******************************************!*\
  !*** ./src/app/games/games.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-header img {\r\n    margin-left: 28%;\r\n}\r\n\r\niframe{\r\n    margin-left: 12%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZXMvZ2FtZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2dhbWVzL2dhbWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1oZWFkZXIgaW1nIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyOCU7XHJcbn1cclxuXHJcbmlmcmFtZXtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMiU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/games/games.component.html":
/*!********************************************!*\
  !*** ./src/app/games/games.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card text-white bg-secondary mb-3\" style=\"max-width: 50rem;\">\n    <div class=\"card-header\"><img src=\"../assets/images/Pvz_logo.png\" alt=\"Well, this is akward\" width=\"240\"></div>\n    <div class=\"card-body\">\n\n      <p class=\"card-text\">Take a break from the world and play the best game ever...</p>\n        \n        <br>\n        \n\n      <p>\n        <iframe src=\"https://www.gameflare.com/embed/plants-vs-zombies/\" frameborder=\"0\" scrolling=\"no\" width=\"540\"\n        height=\"435\" allowfullscreen></iframe>\n      </p>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/games/games.component.ts":
/*!******************************************!*\
  !*** ./src/app/games/games.component.ts ***!
  \******************************************/
/*! exports provided: GamesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesComponent", function() { return GamesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GamesComponent = /** @class */ (function () {
    function GamesComponent() {
    }
    GamesComponent.prototype.ngOnInit = function () {
    };
    GamesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-games',
            template: __webpack_require__(/*! ./games.component.html */ "./src/app/games/games.component.html"),
            styles: [__webpack_require__(/*! ./games.component.css */ "./src/app/games/games.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GamesComponent);
    return GamesComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.bd-example img{\r\n    border-radius: .5rem;\r\n}\r\n\r\n.carousel-caption{\r\n    background: rgba(48, 48, 48, 0.6);\r\n    border-radius: 1rem;\r\n    padding: 5px;\r\n} \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmJkLWV4YW1wbGUgaW1ne1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jYXB0aW9ue1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSg0OCwgNDgsIDQ4LCAwLjYpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufSAiXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bd-example\">\n  <div id=\"carouselExampleCaptions\" class=\"carousel slide\" data-ride=\"carousel\">\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"1\"></li>\n      <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"2\"></li>\n      <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"3\"></li>\n      <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"4\"></li>\n      <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"5\"></li>\n      <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"6\"></li>\n      <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"7\"></li>\n      <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"8\"></li>\n    </ol>\n    <div class=\"carousel-inner\">\n      <div class=\"carousel-item active\">\n        <img src=\"assets/images/carousel/light-bulb.jpg\" class=\"d-block w-100\" alt=\"Well, this is awkward\">\n        <div class=\"carousel-caption d-none d-md-block\">\n          <h5></h5>\n          <p>\"He who has a why to live can bear almost any how.\" - Friedrich Nietzshe</p>\n        </div>\n      </div>\n      <div class=\"carousel-item\">\n        <img src=\"assets/images/carousel/lake22.jpg\" class=\"d-block w-100\" alt=\"Well, this is awkward\">\n        <div class=\"carousel-caption d-none d-md-block\">\n          <h5>Lake 22</h5>\n          <p>My favorite hike, two miles up a mountain you find a beautful crystal clear lake. </p>\n        </div>\n      </div>\n      <div class=\"carousel-item\">\n        <img src=\"assets/images/carousel/vegas.jpg\" class=\"d-block w-100\" alt=\"Well, this is awkward\">\n        <div class=\"carousel-caption d-none d-md-block\">\n          <h5>LAS VEGAS, NEVADA </h5>\n          <p>“Las Vegas looks the way you'd imagine heaven must look at night.” – Chuck Palahniuk, in “Invisible\n            Monsters</p>\n        </div>\n      </div>\n      <div class=\"carousel-item\">\n        <img src=\"assets/images/carousel/mebogota.jpg\" class=\"d-block w-100\" alt=\"Well, this is awkward\">\n        <div class=\"carousel-caption d-none d-md-block\">\n          <h5>Monserrate in Bogota</h5>\n          <p>Famous church on top of a mountain in the middle of a city.. you read that right.</p>\n        </div>\n      </div>\n      <div class=\"carousel-item\">\n        <img src=\"assets/images/carousel/coffee.jpg\" class=\"d-block w-100\" alt=\"Well, this is awkward\">\n        <div class=\"carousel-caption d-none d-md-block\">\n          <h5>Coffee</h5>\n          <p>Enjoy the simple things in life</p>\n        </div>\n      </div>\n      <div class=\"carousel-item\">\n        <img src=\"assets/images/carousel/bogota.jpg\" class=\"d-block w-100\" alt=\"Well, this is awkward\">\n        <div class=\"carousel-caption d-none d-md-block\">\n          <h5>BOGOTA, COLOMBIA</h5>\n          <p>I am the first generation to live aboard, but I love going back.</p>\n        </div>\n      </div>\n      <div class=\"carousel-item\">\n        <img src=\"assets/images/carousel/palms.jpg\" class=\"d-block w-100\" alt=\"Well, this is awkward\">\n        <div class=\"carousel-caption d-none d-md-block\">\n          <h5>SANTA MARTA, COLOMBIA</h5>\n          <p>Paradise</p>\n        </div>\n      </div>\n      <div class=\"carousel-item\">\n        <img src=\"assets/images/carousel/seattle.jpg\" class=\"d-block w-100\" alt=\"Well, this is awkward\">\n        <div class=\"carousel-caption d-none d-md-block\">\n          <h5>SEATTLE, WASHINGTON</h5>\n          <p>This is home, No place quite like it. </p>\n        </div>\n      </div>\n      <div class=\"carousel-item\">\n        <img src=\"assets/images/carousel/rocks.jpg\" class=\"d-block w-100\" alt=\"Well, this is awkward\">\n        <div class=\"carousel-caption d-none d-md-block\">\n          <h5>Poo Poo point</h5>\n          <p>The beauty of nature</p>\n        </div>\n      </div>\n    </div>\n    <a class=\"carousel-control-prev\" href=\"#carouselExampleCaptions\" role=\"button\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#carouselExampleCaptions\" role=\"button\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n</div>\n\n<!-- new  -->\n\n\n<div class=\"jumbotron\">\n  <h1 class=\"display-3\">Hola Mundo!</h1>\n  <p class=\"lead\">My name is Christian Rodriguez</p>\n\n  <p><strong>About My Work:</strong>\n    I'm a certified full stack developer in C#, HTML5/CSS3, Python, MEAN; I’ve also earned certifications\n    in project management and lean practices. I worked at Boeing Airplane company for many years where I\n    trained in manufacturing and studied CAD engineering using CATIA V5. During my career at Boeing I\n    decided to switch lanes and go into the tech world where I felt I could make a difference and\n    connect people with efficient solutions. I want to join a team where I can utilize my experience,\n    gain further training, and fully invest in my passion for technology efficiency.</p>\n\n  <p><strong>About Me:</strong>\n    I'm born and raised in Seattle Washington with a Colombian heritage.<br>\n    My goal is to give back to my community,and find a way to bridge the gap between my techy\n    gifts and my purpose help make the world a happier place. I have a vision that my creativity will\n    help people all over the world, and I’m working tirelessly to find the quickest way to\n    fulfill this calling: wish me luck!</p>\n  <br>\n  <h4 class=\"card-title\"><a href=\"assets/images/ResumeChristianRodriguez.pdf\" download>Download CV/Resume</a></h4>\n  <br>\n  <br>\n  <p>Wow, you’re still reading this? I appreciate your time, you’re pretty awesome dude:\n    you deserve a little break! Go ahead have some fun and kill some zombies by clicking below</p>\n    <button type=\"button\" class=\"btn btn-secondary\" [routerLink]=\"['/games']\">Secret Game</button>\n\n\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.css":
/*!*************************************************!*\
  !*** ./src/app/projects/projects.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n    height: 100px;\r\n    margin-left: 5%;\r\n    background: rgba(48, 48, 48);\r\n    border-radius: .25rem;\r\n    padding: 2px;\r\n    transition: all .2s ease-in-out; \r\n}\r\n\r\nimg:hover {\r\n    -webkit-transform: scale(3);\r\n            transform: scale(3);\r\n}\r\n\r\n.card{\r\n    z-index: 1;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsNEJBQTRCO0lBQzVCLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksMkJBQW1CO1lBQW5CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoNDgsIDQ4LCA0OCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0OyBcclxufVxyXG5cclxuaW1nOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMyk7XHJcbn1cclxuXHJcbi5jYXJke1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/projects/projects.component.html":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\r\n      <h1 class=\"display-5\">Projects</h1>\r\n      <hr class=\"my-4\">\r\n      <p>Here are a few projects I have build while at Coding Dojo, Most of them do not have styling completed\r\n            because I wanted to focus on fuctionaly and and back-end developement. I am currently working with clients\r\n            and hope to update this site as I complete more work. stay tuned.</p>\r\n      <br>\r\n</div>\r\n\r\n<div class=\"card text-white bg-secondary mb-3\">\r\n      <div class=\"card-header\">PORTFOLIO WEBSITE</div>\r\n      <div class=\"card-body\">\r\n            <h4 class=\"card-title\">\r\n                  Mongo Database<br>\r\n                  Express<br>\r\n                  Angular 7<br>\r\n                  Node js<br></h4>\r\n            <p class=\"card-text\">Personal portfolio I made using the full MEAN stack.Multiple components\r\n                   with angular and bootstrap for style, still a work in progress. <br>\r\n                   No templates, No wordpress.<br>\r\n                   Feel free to <a href=\"https:/builtwith.com\">check out what I used</a> or check out my other projects.\r\n                  </p>\r\n            <br>\r\n      </div>\r\n</div>\r\n\r\n<div class=\"card text-white bg-info mb-3\">\r\n      <div class=\"card-header\">INKLING</div>\r\n      <div class=\"card-body\">\r\n            <h4 class=\"card-title\">\r\n                  C#<br>\r\n                  ENTITY FRAMEWORK<br>\r\n                  SQL DATABASE</h4>\r\n            <a href=\"https://github.com/Christiandecolombia/inkling\" class=\"btn btn-secondary\">GitHub</a>\r\n            <img src=\"assets/images/inkling/inkling1.png\" alt=\"Well, this is awkward\">\r\n            <img src=\"assets/images/inkling/inkling2.png\" alt=\"Well, this is awkward\">\r\n            <img src=\"assets/images/inkling/inkling3.png\" alt=\"Well, this is awkward\">\r\n            <br>\r\n            <p class=\"card-text\">Complete project I worked on with a classmate.\r\n                  Inkling is a company that takes an employee's ideas and routes them up the latter,\r\n                  with documentation on how to use our Experiment Driven Design concept.\r\n                  A complete SQL database with 9 tables and multiple web pages , its my favorite.</p>\r\n            <br>\r\n      </div>\r\n</div>\r\n\r\n<div class=\"card text-white bg-danger mb-3\">\r\n      <div class=\"card-header\">QUOTE RANKES</div>\r\n      <div class=\"card-body\">\r\n            <h4 class=\"card-title\">\r\n                  MEAN<br>\r\n                  NODE JS<br>\r\n                  MONGO DATABASE<br>\r\n            </h4>\r\n            <a href=\"https://github.com/Christiandecolombia/QuoteRanks\" class=\"btn btn-secondary\">GitHub</a>\r\n            <img src=\"assets/images/quoteRanks/quoteRanks1.png\" alt=\"Well, this is awkward\">\r\n            <img src=\"assets/images/quoteRanks/quoteRanks2.png\" alt=\"Well, this is awkward\">\r\n            <br>\r\n            <p class=\"card-text\"> I Created an application where users view authors and their famous quotes.\r\n                  List all the authors on the first page. From there, the user may click on\r\n                  a button to see each author's famous quotes. The user may then vote up, vote down,\r\n                  and delete the different quotes, and added forms so the user may contribute new authors and new\r\n                  quotes.Use backend validations to ensure that all author names and quotes are at least\r\n                  three characters long.</p>\r\n            <br>\r\n      </div>\r\n</div>\r\n\r\n\r\n<div class=\"card text-white bg-warning mb-3\">\r\n      <div class=\"card-header\">CAKE RANKS</div>\r\n      <div class=\"card-body\">\r\n            <h4 class=\"card-title\">\r\n                  EXPRESS<br>\r\n                  NODE JS<br>\r\n                  MONGO DATABASE<br>\r\n            </h4>\r\n            <img src=\"assets/images/cakeRanks/cakeRanks1.png\" alt=\"Well, this is awkward\">\r\n            <img src=\"assets/images/cakeRanks/cakeRanks2.png\" alt=\"Well, this is awkward\">\r\n            <br>\r\n            <p class=\"card-text\">The assignment was to create an application that allows users to submit\r\n                  pictures of cakes. All the cakes may be viewed, rated from 1-5 stars,\r\n                  and commented upon. When a cake image is clicked, have a nested details component show the image.</p>\r\n            <br>\r\n      </div>\r\n</div>\r\n\r\n<div class=\"card text-white bg-primary mb-3\">\r\n      <div class=\"card-header\">WEDDING PLANNER</div>\r\n      <div class=\"card-body\">\r\n            <h4 class=\"card-title\">\r\n                  C#<br>\r\n                  ENTITY FRAMEWORK<br>\r\n                  SQL DATABASE</h4>\r\n            <img src=\"assets/images/weddingPlanner/weddingPlanner1.png\" alt=\"Well, this is awkward\">\r\n            <img src=\"assets/images/weddingPlanner/weddingPlanner2.png\" alt=\"Well, this is awkward\">\r\n            <br>\r\n            <p class=\"card-text\"> In this assignment contained a login and registration with backend validations.\r\n                  I used sessions after the user was logged in to verify that they had access\r\n                  to the rest of the site. Used a SQL database to add events and details about each\r\n                  event and also built a many-many relationship so each event could have RSVPs</p>\r\n            <br>\r\n      </div>\r\n</div>\r\n\r\n<div class=\"card text-white bg-success mb-3\">\r\n      <div class=\"card-header\">DOJO SURVEY</div>\r\n      <div class=\"card-body\">\r\n            <h4 class=\"card-title\">\r\n                  PYTHON<br>\r\n                  DJANGO<br>\r\n                  SQL DATABASE<br>\r\n            </h4>\r\n            <a href=\"https://github.com/Christiandecolombia/PythonDojoSurvey\" class=\"btn btn-secondary\">GitHub</a>\r\n            <img src=\"assets/images/dojoSurvey/dojosurvey1.png\" alt=\"Well, this is awkward\">\r\n            <img src=\"assets/images/dojoSurvey/dojosurvey2.png\" alt=\"Well, this is awkward\">\r\n            <br>\r\n            <p class=\"card-text\"> Styling not in scope\r\n                  This assignment was focused on model binding.\r\n                  The User input on one page will be displayed on the next. I also used backend validations\r\n                  and Sessions to ensure the correct user was logged in.</p>\r\n            <br>\r\n      </div>\r\n</div>"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/projects/projects.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\chris\Code\mean\angular\Portfolio\public\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map