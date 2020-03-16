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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-todo-page></app-todo-page>\n<app-footer></app-footer>"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ToDoApp';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _todos_todo_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todos/todo.module */ "./src/app/todos/todo.module.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _app_reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.reducer */ "./src/app/app.reducer.ts");








// NgRx



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _todos_todo_module__WEBPACK_IMPORTED_MODULE_4__["TodoModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forRoot(_app_reducer__WEBPACK_IMPORTED_MODULE_10__["appReducers"]),
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__["StoreDevtoolsModule"].instrument({
                    maxAge: 25,
                    logOnly: src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production,
                }),
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.reducer.ts":
/*!********************************!*\
  !*** ./src/app/app.reducer.ts ***!
  \********************************/
/*! exports provided: appReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appReducers", function() { return appReducers; });
/* harmony import */ var _todos_todo_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos/todo.reducer */ "./src/app/todos/todo.reducer.ts");
/* harmony import */ var _filtro_filtro_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filtro/filtro.reducer */ "./src/app/filtro/filtro.reducer.ts");


var appReducers = {
    todos: _todos_todo_reducer__WEBPACK_IMPORTED_MODULE_0__["todoReducer"],
    filtro: _filtro_filtro_reducer__WEBPACK_IMPORTED_MODULE_1__["filtroReducer"]
};


/***/ }),

/***/ "./src/app/filtro/filtro.actions.ts":
/*!******************************************!*\
  !*** ./src/app/filtro/filtro.actions.ts ***!
  \******************************************/
/*! exports provided: setFiltro */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFiltro", function() { return setFiltro; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var setFiltro = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Filtro] Set Filtro', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/filtro/filtro.reducer.ts":
/*!******************************************!*\
  !*** ./src/app/filtro/filtro.reducer.ts ***!
  \******************************************/
/*! exports provided: initialState, filtroReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filtroReducer", function() { return filtroReducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _filtro_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filtro.actions */ "./src/app/filtro/filtro.actions.ts");


var initialState = 'all';
var _filtroReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_filtro_actions__WEBPACK_IMPORTED_MODULE_1__["setFiltro"], function (state, _a) {
    var filtro = _a.filtro;
    return filtro;
}));
function filtroReducer(state, action) {
    return _filtroReducer(state, action);
}


/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"info\">\n    <!-- Remove the below line ↓ -->\n    <p>Template by <a href=\"http://sindresorhus.com\">Sindre Sorhus</a></p>\n    <!-- Change this out with your name and url ↓ -->\n    <p>Created by <a target=\"_blank\" href=\"https://onofrimelisa.github.io/myportfolio/\">Melisa Ailén Onofri</a></p>\n    <p>Part of <a href=\"http://todomvc.com\">TodoMVC</a></p>\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/todos/filtro.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/todos/filtro.pipe.ts ***!
  \**************************************/
/*! exports provided: FiltroPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltroPipe", function() { return FiltroPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FiltroPipe = /** @class */ (function () {
    function FiltroPipe() {
    }
    FiltroPipe.prototype.transform = function (todos, filtro) {
        switch (filtro) {
            case 'completed':
                return todos.filter(function (todo) { return todo.completado; });
            case 'pending':
                return todos.filter(function (todo) { return !todo.completado; });
            default:
                return todos;
        }
    };
    FiltroPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filtro'
        })
    ], FiltroPipe);
    return FiltroPipe;
}());



/***/ }),

/***/ "./src/app/todos/models/todo.model.ts":
/*!********************************************!*\
  !*** ./src/app/todos/models/todo.model.ts ***!
  \********************************************/
/*! exports provided: Todo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Todo", function() { return Todo; });
var Todo = /** @class */ (function () {
    function Todo(texto, completado) {
        if (completado === void 0) { completado = false; }
        this.texto = texto;
        this.id = Math.random();
        this.completado = completado;
    }
    return Todo;
}());



/***/ }),

/***/ "./src/app/todos/todo-add/todo-add.component.css":
/*!*******************************************************!*\
  !*** ./src/app/todos/todo-add/todo-add.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n    margin: 20px;\n    margin-bottom: 10px !important;\n    padding-top: 20px;\n    font-style: italic;\n    font-size: 15px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kb3MvdG9kby1hZGQvdG9kby1hZGQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQiwwQkFBMEI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC90b2Rvcy90b2RvLWFkZC90b2RvLWFkZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/todos/todo-add/todo-add.component.html":
/*!********************************************************!*\
  !*** ./src/app/todos/todo-add/todo-add.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n    <h1>Today's tasks</h1>\n    <p class=\"info\">You can add, delete, edit or mark as completed a task for today. In order to edit, double click on the task and then press enter.</p>\n\n    <input [formControl]=\"txtInput\" class=\"new-todo\" placeholder=\"What needs to be done?\" autofocus (keyup.enter)=\"agregar()\">\n\n</header>"

/***/ }),

/***/ "./src/app/todos/todo-add/todo-add.component.ts":
/*!******************************************************!*\
  !*** ./src/app/todos/todo-add/todo-add.component.ts ***!
  \******************************************************/
/*! exports provided: TodoAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoAddComponent", function() { return TodoAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _todo_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../todo.actions */ "./src/app/todos/todo.actions.ts");





var TodoAddComponent = /** @class */ (function () {
    function TodoAddComponent(store) {
        this.store = store;
        this.txtInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
    }
    TodoAddComponent.prototype.ngOnInit = function () {
    };
    TodoAddComponent.prototype.agregar = function () {
        if (this.txtInput.valid) {
            // disparo la accion
            this.store.dispatch(_todo_actions__WEBPACK_IMPORTED_MODULE_4__["crear"]({ texto: this.txtInput.value }));
            this.txtInput.reset();
        }
    };
    TodoAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-todo-add',
            template: __webpack_require__(/*! ./todo-add.component.html */ "./src/app/todos/todo-add/todo-add.component.html"),
            styles: [__webpack_require__(/*! ./todo-add.component.css */ "./src/app/todos/todo-add/todo-add.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], TodoAddComponent);
    return TodoAddComponent;
}());



/***/ }),

/***/ "./src/app/todos/todo-footer/todo-footer.component.css":
/*!*************************************************************!*\
  !*** ./src/app/todos/todo-footer/todo-footer.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvZG9zL3RvZG8tZm9vdGVyL3RvZG8tZm9vdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/todos/todo-footer/todo-footer.component.html":
/*!**************************************************************!*\
  !*** ./src/app/todos/todo-footer/todo-footer.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- This footer should hidden by default and shown when there are todos -->\n<footer class=\"footer\">\n    <!-- This should be `0 items left` by default -->\n    <span class=\"todo-count\"><strong>{{ pendientes }}</strong> to complete</span>\n    <!-- Remove this if you don't implement routing -->\n    <ul class=\"filters\">\n        <li *ngFor=\"let filtro of filtros\">\n            <a [class.selected]=\"filtro == filtroActual\" (click)=\"cambiarFiltro( filtro )\" class=\"pointer\">{{ filtro | titlecase }}</a>\n        </li>\n    </ul>\n    <!-- Hidden if no completed items are left ↓ -->\n    <button class=\"clear-completed pointer\" (click)=\"clearAll()\">Clear completed</button>\n</footer>"

/***/ }),

/***/ "./src/app/todos/todo-footer/todo-footer.component.ts":
/*!************************************************************!*\
  !*** ./src/app/todos/todo-footer/todo-footer.component.ts ***!
  \************************************************************/
/*! exports provided: TodoFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoFooterComponent", function() { return TodoFooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _filtro_filtro_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../filtro/filtro.actions */ "./src/app/filtro/filtro.actions.ts");
/* harmony import */ var _todo_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../todo.actions */ "./src/app/todos/todo.actions.ts");





var TodoFooterComponent = /** @class */ (function () {
    function TodoFooterComponent(store) {
        this.store = store;
        this.filtroActual = 'all';
        this.filtros = ['completed', 'pending', 'all'];
        this.pendientes = 0;
    }
    TodoFooterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.subscribe(function (state) {
            _this.filtroActual = state.filtro;
            _this.pendientes = state.todos.filter(function (todo) { return !todo.completado; }).length;
        });
    };
    TodoFooterComponent.prototype.cambiarFiltro = function (filtro) {
        this.store.dispatch(_filtro_filtro_actions__WEBPACK_IMPORTED_MODULE_3__["setFiltro"]({ filtro: filtro }));
    };
    TodoFooterComponent.prototype.clearAll = function () {
        this.store.dispatch(Object(_todo_actions__WEBPACK_IMPORTED_MODULE_4__["borrarAll"])());
    };
    TodoFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-todo-footer',
            template: __webpack_require__(/*! ./todo-footer.component.html */ "./src/app/todos/todo-footer/todo-footer.component.html"),
            styles: [__webpack_require__(/*! ./todo-footer.component.css */ "./src/app/todos/todo-footer/todo-footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], TodoFooterComponent);
    return TodoFooterComponent;
}());



/***/ }),

/***/ "./src/app/todos/todo-item/todo-item.component.css":
/*!*********************************************************!*\
  !*** ./src/app/todos/todo-item/todo-item.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvZG9zL3RvZG8taXRlbS90b2RvLWl0ZW0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/todos/todo-item/todo-item.component.html":
/*!**********************************************************!*\
  !*** ./src/app/todos/todo-item/todo-item.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- List items should get the class `editing` when editing and `completed` when marked as completed -->\n<li [class.completed]=\"todo.completado\" [class.editing]=\"editando\">\n    <div class=\"view\">\n        <input class=\"toggle pointer\" type=\"checkbox\" [formControl]=\"chkCompletado\" title=\"Mark as completed\">\n        <label (dblclick)=\"editar()\" class=\"pointer\">{{ todo.texto }}</label>\n        <button class=\"destroy pointer\" (click)=\"borrar()\" title=\"Delete task\"></button>\n    </div>\n    <input class=\"edit\" value=\"Create a TodoMVC template\" [formControl]=\"txtInput\" type=\"text\" #inputFisico (blur)=\"terminarEdicion()\" (keyup.enter)=\"terminarEdicion()\">\n</li>"

/***/ }),

/***/ "./src/app/todos/todo-item/todo-item.component.ts":
/*!********************************************************!*\
  !*** ./src/app/todos/todo-item/todo-item.component.ts ***!
  \********************************************************/
/*! exports provided: TodoItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoItemComponent", function() { return TodoItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_todo_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/todo.model */ "./src/app/todos/models/todo.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _todo_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../todo.actions */ "./src/app/todos/todo.actions.ts");






var TodoItemComponent = /** @class */ (function () {
    function TodoItemComponent(store) {
        this.store = store;
        this.editando = false;
    }
    TodoItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chkCompletado = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.todo.completado);
        this.txtInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.todo.texto, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
        this.chkCompletado.valueChanges.subscribe(function (value) {
            _this.store.dispatch(_todo_actions__WEBPACK_IMPORTED_MODULE_5__["toggle"]({ id: _this.todo.id }));
        });
    };
    TodoItemComponent.prototype.editar = function () {
        var _this = this;
        this.txtInput.setValue(this.todo.texto);
        this.editando = true;
        setTimeout(function () {
            _this.txtInputFisico.nativeElement.select();
        }, 1);
    };
    TodoItemComponent.prototype.terminarEdicion = function () {
        if (this.txtInput.valid && (this.txtInput.value !== this.todo.texto) && this.editando) {
            this.store.dispatch(_todo_actions__WEBPACK_IMPORTED_MODULE_5__["editar"]({ id: this.todo.id, texto: this.txtInput.value }));
        }
        this.editando = false;
    };
    TodoItemComponent.prototype.borrar = function () {
        this.store.dispatch(_todo_actions__WEBPACK_IMPORTED_MODULE_5__["borrar"]({ id: this.todo.id }));
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_todo_model__WEBPACK_IMPORTED_MODULE_2__["Todo"])
    ], TodoItemComponent.prototype, "todo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputFisico'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TodoItemComponent.prototype, "txtInputFisico", void 0);
    TodoItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-todo-item',
            template: __webpack_require__(/*! ./todo-item.component.html */ "./src/app/todos/todo-item/todo-item.component.html"),
            styles: [__webpack_require__(/*! ./todo-item.component.css */ "./src/app/todos/todo-item/todo-item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], TodoItemComponent);
    return TodoItemComponent;
}());



/***/ }),

/***/ "./src/app/todos/todo-list/todo-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/todos/todo-list/todo-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvZG9zL3RvZG8tbGlzdC90b2RvLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/todos/todo-list/todo-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/todos/todo-list/todo-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"todo-list\">\n    <app-todo-item *ngFor=\"let todo of todos | filtro: filtroActual\" [todo]=\"todo\"></app-todo-item>\n</ul>"

/***/ }),

/***/ "./src/app/todos/todo-list/todo-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/todos/todo-list/todo-list.component.ts ***!
  \********************************************************/
/*! exports provided: TodoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListComponent", function() { return TodoListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");



var TodoListComponent = /** @class */ (function () {
    function TodoListComponent(store) {
        this.store = store;
        this.todos = [];
    }
    TodoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // me suscribo al store
        this.store.subscribe(function (state) {
            _this.todos = state.todos;
            _this.filtroActual = state.filtro;
        });
    };
    TodoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-todo-list',
            template: __webpack_require__(/*! ./todo-list.component.html */ "./src/app/todos/todo-list/todo-list.component.html"),
            styles: [__webpack_require__(/*! ./todo-list.component.css */ "./src/app/todos/todo-list/todo-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], TodoListComponent);
    return TodoListComponent;
}());



/***/ }),

/***/ "./src/app/todos/todo-page/todo-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/todos/todo-page/todo-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvZG9zL3RvZG8tcGFnZS90b2RvLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/todos/todo-page/todo-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/todos/todo-page/todo-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n    <section class=\"todoapp\">\n        <app-todo-add></app-todo-add>\n        <!-- This section should be hidden by default and shown when there are todos -->\n\n        <section class=\"main\">\n            <input id=\"toggle-all\" class=\"toggle-all pointer\" type=\"checkbox\" title=\"Mark all as completed\" (click)=\"toggleAll()\">\n            <label for=\"toggle-all\" class=\"pointer\">Mark all as complete</label>\n\n            <app-todo-list></app-todo-list>\n\n        </section>\n\n        <app-todo-footer></app-todo-footer>\n    </section>\n\n\n</body>"

/***/ }),

/***/ "./src/app/todos/todo-page/todo-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/todos/todo-page/todo-page.component.ts ***!
  \********************************************************/
/*! exports provided: TodoPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoPageComponent", function() { return TodoPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _todo_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../todo.actions */ "./src/app/todos/todo.actions.ts");




var TodoPageComponent = /** @class */ (function () {
    function TodoPageComponent(store) {
        this.store = store;
        this.completado = false;
    }
    TodoPageComponent.prototype.ngOnInit = function () {
    };
    TodoPageComponent.prototype.toggleAll = function () {
        this.completado = !this.completado;
        this.store.dispatch(_todo_actions__WEBPACK_IMPORTED_MODULE_3__["toggleAll"]({ completado: this.completado }));
    };
    TodoPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-todo-page',
            template: __webpack_require__(/*! ./todo-page.component.html */ "./src/app/todos/todo-page/todo-page.component.html"),
            styles: [__webpack_require__(/*! ./todo-page.component.css */ "./src/app/todos/todo-page/todo-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], TodoPageComponent);
    return TodoPageComponent;
}());



/***/ }),

/***/ "./src/app/todos/todo.actions.ts":
/*!***************************************!*\
  !*** ./src/app/todos/todo.actions.ts ***!
  \***************************************/
/*! exports provided: crear, editar, borrar, toggleAll, toggle, borrarAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "crear", function() { return crear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editar", function() { return editar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borrar", function() { return borrar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleAll", function() { return toggleAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggle", function() { return toggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borrarAll", function() { return borrarAll; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var crear = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[TODO] Crear todo', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var editar = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[TODO] Editar todo', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var borrar = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[TODO] Borrar todo', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var toggleAll = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[TODO] Toggle all todos', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// cambia el completado
var toggle = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[TODO] Toggle todo', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var borrarAll = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[TODO] Borrar todos');


/***/ }),

/***/ "./src/app/todos/todo.module.ts":
/*!**************************************!*\
  !*** ./src/app/todos/todo.module.ts ***!
  \**************************************/
/*! exports provided: TodoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoModule", function() { return TodoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _todo_add_todo_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo-add/todo-add.component */ "./src/app/todos/todo-add/todo-add.component.ts");
/* harmony import */ var _todo_footer_todo_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo-footer/todo-footer.component */ "./src/app/todos/todo-footer/todo-footer.component.ts");
/* harmony import */ var _todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todo-item/todo-item.component */ "./src/app/todos/todo-item/todo-item.component.ts");
/* harmony import */ var _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./todo-list/todo-list.component */ "./src/app/todos/todo-list/todo-list.component.ts");
/* harmony import */ var _todo_page_todo_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./todo-page/todo-page.component */ "./src/app/todos/todo-page/todo-page.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _filtro_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./filtro.pipe */ "./src/app/todos/filtro.pipe.ts");










var TodoModule = /** @class */ (function () {
    function TodoModule() {
    }
    TodoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_todo_add_todo_add_component__WEBPACK_IMPORTED_MODULE_3__["TodoAddComponent"], _todo_footer_todo_footer_component__WEBPACK_IMPORTED_MODULE_4__["TodoFooterComponent"], _todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_5__["TodoItemComponent"], _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_6__["TodoListComponent"], _todo_page_todo_page_component__WEBPACK_IMPORTED_MODULE_7__["TodoPageComponent"], _filtro_pipe__WEBPACK_IMPORTED_MODULE_9__["FiltroPipe"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
            ],
            exports: [_todo_page_todo_page_component__WEBPACK_IMPORTED_MODULE_7__["TodoPageComponent"]]
        })
    ], TodoModule);
    return TodoModule;
}());



/***/ }),

/***/ "./src/app/todos/todo.reducer.ts":
/*!***************************************!*\
  !*** ./src/app/todos/todo.reducer.ts ***!
  \***************************************/
/*! exports provided: estadoInicial, todoReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "estadoInicial", function() { return estadoInicial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todoReducer", function() { return todoReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _todo_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo.actions */ "./src/app/todos/todo.actions.ts");
/* harmony import */ var _models_todo_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/todo.model */ "./src/app/todos/models/todo.model.ts");




var estadoInicial = [
    new _models_todo_model__WEBPACK_IMPORTED_MODULE_3__["Todo"]('Buy groceries ', true),
    new _models_todo_model__WEBPACK_IMPORTED_MODULE_3__["Todo"]('Breakfast with Lo 💕'),
    new _models_todo_model__WEBPACK_IMPORTED_MODULE_3__["Todo"]('Wish Bob a happy birthday', true),
    new _models_todo_model__WEBPACK_IMPORTED_MODULE_3__["Todo"]('Go to the dentist 16pm '),
    new _models_todo_model__WEBPACK_IMPORTED_MODULE_3__["Todo"]('Cinema with Miley - get the car!'),
    new _models_todo_model__WEBPACK_IMPORTED_MODULE_3__["Todo"]('Math homework - at least 10 exercises'),
];
var _todoReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(estadoInicial, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_todo_actions__WEBPACK_IMPORTED_MODULE_2__["crear"], function (state, _a) {
    var texto = _a.texto;
    return state.concat([new _models_todo_model__WEBPACK_IMPORTED_MODULE_3__["Todo"](texto)]);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_todo_actions__WEBPACK_IMPORTED_MODULE_2__["toggle"], function (state, _a) {
    var id = _a.id;
    return state.map(function (todo) {
        if (todo.id === id) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, todo, { completado: !todo.completado });
        }
        else {
            return todo;
        }
    });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_todo_actions__WEBPACK_IMPORTED_MODULE_2__["editar"], function (state, _a) {
    var id = _a.id, texto = _a.texto;
    return state.map(function (todo) {
        if (todo.id === id) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, todo, { texto: texto });
        }
        else {
            return todo;
        }
    });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_todo_actions__WEBPACK_IMPORTED_MODULE_2__["borrar"], function (state, _a) {
    var id = _a.id;
    return state.filter(function (todo) { return todo.id !== id; });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_todo_actions__WEBPACK_IMPORTED_MODULE_2__["toggleAll"], function (state, _a) {
    var completado = _a.completado;
    return state.map(function (todo) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, todo, { completado: completado });
    });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_todo_actions__WEBPACK_IMPORTED_MODULE_2__["borrar"], function (state, _a) {
    var id = _a.id;
    return state.filter(function (todo) { return todo.id !== id; });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_todo_actions__WEBPACK_IMPORTED_MODULE_2__["borrarAll"], function (state) {
    return state.filter(function (todo) { return !todo.completado; });
}));
function todoReducer(state, action) {
    return _todoReducer(state, action);
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/melisa/Documentos/CURSOS_UDEMY/CURSO_REDUX/ToDoApp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map