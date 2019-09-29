(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./admin/admin.module": [
		"./src/app/admin/admin.module.ts",
		"admin-admin-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app",
            template: "<router-outlet></router-outlet>"
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _store_store_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/store.module */ "./src/app/store/store.module.ts");
/* harmony import */ var _store_store_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/store.component */ "./src/app/store/store.component.ts");
/* harmony import */ var _store_cartDetail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/cartDetail.component */ "./src/app/store/cartDetail.component.ts");
/* harmony import */ var _store_checkout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/checkout.component */ "./src/app/store/checkout.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _storeFirst_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./storeFirst.guard */ "./src/app/storeFirst.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: "store", component: _store_store_component__WEBPACK_IMPORTED_MODULE_4__["StoreComponent"],
        canActivate: [_storeFirst_guard__WEBPACK_IMPORTED_MODULE_8__["StoreFirstGuard"]]
    },
    {
        path: "cart", component: _store_cartDetail_component__WEBPACK_IMPORTED_MODULE_5__["CartDetailComponent"],
        canActivate: [_storeFirst_guard__WEBPACK_IMPORTED_MODULE_8__["StoreFirstGuard"]]
    },
    {
        path: "checkout", component: _store_checkout_component__WEBPACK_IMPORTED_MODULE_6__["CheckoutComponent"],
        canActivate: [_storeFirst_guard__WEBPACK_IMPORTED_MODULE_8__["StoreFirstGuard"]]
    },
    {
        path: "admin",
        loadChildren: "./admin/admin.module#AdminModule",
        canActivate: [_storeFirst_guard__WEBPACK_IMPORTED_MODULE_8__["StoreFirstGuard"]]
    },
    { path: "**", redirectTo: "/store" }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _store_store_module__WEBPACK_IMPORTED_MODULE_3__["StoreModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(routes, { enableTracing: true })
            ],
            providers: [_storeFirst_guard__WEBPACK_IMPORTED_MODULE_8__["StoreFirstGuard"]],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/model/cart.model.ts":
/*!*************************************!*\
  !*** ./src/app/model/cart.model.ts ***!
  \*************************************/
/*! exports provided: Cart, CartEntry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cart", function() { return Cart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartEntry", function() { return CartEntry; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Cart = /** @class */ (function () {
    function Cart() {
        this.entries = [];
        this.itemCount = 0;
        this.cartTotal = 0;
    }
    Cart.prototype.addEntry = function (product, quantity) {
        if (quantity === void 0) { quantity = 1; }
        var entry = this.entries.find(function (entry) { return entry.product.id == product.id; });
        if (entry != undefined) {
            entry.quantity += quantity;
        }
        else {
            this.entries.push(new CartEntry(product, quantity));
        }
        this.recalculate();
    };
    Cart.prototype.updateQuantity = function (product, quantity) {
        var entry = this.entries.find(function (entry) { return entry.product.id == product.id; });
        if (entry != undefined) {
            entry.quantity = Number(quantity);
            entry.entryTotal = product.price * quantity;
        }
        this.recalculate();
    };
    Cart.prototype.removeEntry = function (entry) {
        var index = this.entries.findIndex(function (e) { return e.product.id == entry.product.id; });
        if (index != undefined) {
            this.entries.splice(index, 1);
            this.recalculate();
        }
    };
    Cart.prototype.clear = function () {
        this.entries = [];
        this.itemCount = 0;
        this.cartTotal = 0;
    };
    Cart.prototype.recalculate = function () {
        var _this = this;
        this.itemCount = 0;
        this.cartTotal = 0;
        this.entries.forEach(function (e) {
            _this.itemCount += e.quantity;
            _this.cartTotal += e.entryTotal;
        });
    };
    Cart = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], Cart);
    return Cart;
}());

var CartEntry = /** @class */ (function () {
    function CartEntry(product, quantity) {
        this.product = product;
        this.quantity = quantity;
        this.entryTotal = 0;
        this.entryTotal = this.product.price * this.quantity;
    }
    return CartEntry;
}());



/***/ }),

/***/ "./src/app/model/model.module.ts":
/*!***************************************!*\
  !*** ./src/app/model/model.module.ts ***!
  \***************************************/
/*! exports provided: ModelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelModule", function() { return ModelModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.repository */ "./src/app/model/product.repository.ts");
/* harmony import */ var _static_datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./static.datasource */ "./src/app/model/static.datasource.ts");
/* harmony import */ var _cart_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart.model */ "./src/app/model/cart.model.ts");
/* harmony import */ var _order_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./order.model */ "./src/app/model/order.model.ts");
/* harmony import */ var _order_repository__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order.repository */ "./src/app/model/order.repository.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _rest_datasource__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rest.datasource */ "./src/app/model/rest.datasource.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ModelModule = /** @class */ (function () {
    function ModelModule() {
    }
    ModelModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]],
            providers: [
                _product_repository__WEBPACK_IMPORTED_MODULE_1__["ProductRepository"],
                _cart_model__WEBPACK_IMPORTED_MODULE_3__["Cart"],
                _order_model__WEBPACK_IMPORTED_MODULE_4__["Order"],
                _order_repository__WEBPACK_IMPORTED_MODULE_5__["OrderRepository"],
                { provide: _static_datasource__WEBPACK_IMPORTED_MODULE_2__["StaticDataSource"], useClass: _rest_datasource__WEBPACK_IMPORTED_MODULE_7__["RestDataSource"] }
            ]
        })
    ], ModelModule);
    return ModelModule;
}());



/***/ }),

/***/ "./src/app/model/order.model.ts":
/*!**************************************!*\
  !*** ./src/app/model/order.model.ts ***!
  \**************************************/
/*! exports provided: Order */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
/* harmony import */ var _cart_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart.model */ "./src/app/model/cart.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Order = /** @class */ (function () {
    function Order(cart) {
        this.cart = cart;
        this.shipped = false;
    }
    Order.prototype.clear = function () {
        this.id = null;
        this.name = this.address = this.city = null;
        this.state = this.zip = this.country = null;
        this.shipped = false;
        this.cart.clear();
    };
    Order = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_cart_model__WEBPACK_IMPORTED_MODULE_0__["Cart"]])
    ], Order);
    return Order;
}());



/***/ }),

/***/ "./src/app/model/order.repository.ts":
/*!*******************************************!*\
  !*** ./src/app/model/order.repository.ts ***!
  \*******************************************/
/*! exports provided: OrderRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderRepository", function() { return OrderRepository; });
/* harmony import */ var _static_datasource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./static.datasource */ "./src/app/model/static.datasource.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrderRepository = /** @class */ (function () {
    function OrderRepository(dataSource) {
        this.dataSource = dataSource;
        this.orders = [];
    }
    OrderRepository.prototype.findOrders = function () {
        return this.orders;
    };
    OrderRepository.prototype.saveOrder = function (order) {
        return this.dataSource.saveOrder(order);
    };
    OrderRepository = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_static_datasource__WEBPACK_IMPORTED_MODULE_0__["StaticDataSource"]])
    ], OrderRepository);
    return OrderRepository;
}());



/***/ }),

/***/ "./src/app/model/product.model.ts":
/*!****************************************!*\
  !*** ./src/app/model/product.model.ts ***!
  \****************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
var Product = /** @class */ (function () {
    function Product(id, name, category, description, price) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.description = description;
        this.price = price;
    }
    return Product;
}());



/***/ }),

/***/ "./src/app/model/product.repository.ts":
/*!*********************************************!*\
  !*** ./src/app/model/product.repository.ts ***!
  \*********************************************/
/*! exports provided: ProductRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRepository", function() { return ProductRepository; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _static_datasource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./static.datasource */ "./src/app/model/static.datasource.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductRepository = /** @class */ (function () {
    function ProductRepository(dataSource) {
        var _this = this;
        this.dataSource = dataSource;
        this.products = [];
        this.categories = [];
        dataSource.getProducts().subscribe(function (data) {
            _this.products = data;
            _this.categories = data.map(function (p) { return p.category; })
                .filter(function (c, index, array) { return array.indexOf(c) == index; }).sort();
        });
    }
    ProductRepository.prototype.findProducts = function (category) {
        if (category === void 0) { category = null; }
        return this.products
            .filter(function (p) { return category == null || category == p.category; });
    };
    ProductRepository.prototype.findProduct = function (id) {
        return this.products.find(function (p) { return p.id == id; });
    };
    ProductRepository.prototype.findCategories = function () {
        return this.categories;
    };
    ProductRepository = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_static_datasource__WEBPACK_IMPORTED_MODULE_1__["StaticDataSource"]])
    ], ProductRepository);
    return ProductRepository;
}());



/***/ }),

/***/ "./src/app/model/rest.datasource.ts":
/*!******************************************!*\
  !*** ./src/app/model/rest.datasource.ts ***!
  \******************************************/
/*! exports provided: RestDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestDataSource", function() { return RestDataSource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PROTOCOL = "http";
var PORT = 3500;
var RestDataSource = /** @class */ (function () {
    function RestDataSource(http) {
        this.http = http;
        this.baseUrl = PROTOCOL + "://" + location.hostname + ":" + PORT + "/";
    }
    RestDataSource.prototype.getProducts = function () {
        return this.http.get(this.baseUrl + "products");
    };
    RestDataSource.prototype.saveOrder = function (order) {
        return this.http.post(this.baseUrl + "orders", order);
    };
    RestDataSource = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RestDataSource);
    return RestDataSource;
}());



/***/ }),

/***/ "./src/app/model/static.datasource.ts":
/*!********************************************!*\
  !*** ./src/app/model/static.datasource.ts ***!
  \********************************************/
/*! exports provided: StaticDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticDataSource", function() { return StaticDataSource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.model */ "./src/app/model/product.model.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StaticDataSource = /** @class */ (function () {
    function StaticDataSource() {
        this.products = [
            new _product_model__WEBPACK_IMPORTED_MODULE_1__["Product"](1, "Product 1", "Category 1", "Product 1 (Category 1)", 100),
            new _product_model__WEBPACK_IMPORTED_MODULE_1__["Product"](2, "Product 2", "Category 1", "Product 2 (Category 1)", 100),
            new _product_model__WEBPACK_IMPORTED_MODULE_1__["Product"](3, "Product 3", "Category 1", "Product 3 (Category 1)", 100),
            new _product_model__WEBPACK_IMPORTED_MODULE_1__["Product"](4, "Product 4", "Category 1", "Product 4 (Category 1)", 100),
            new _product_model__WEBPACK_IMPORTED_MODULE_1__["Product"](5, "Product 5", "Category 1", "Product 5 (Category 1)", 100),
            new _product_model__WEBPACK_IMPORTED_MODULE_1__["Product"](6, "Product 6", "Category 2", "Product 6 (Category 2)", 100),
            new _product_model__WEBPACK_IMPORTED_MODULE_1__["Product"](7, "Product 7", "Category 2", "Product 7 (Category 2)", 100),
            new _product_model__WEBPACK_IMPORTED_MODULE_1__["Product"](8, "Product 8", "Category 2", "Product 8 (Category 2)", 100),
            new _product_model__WEBPACK_IMPORTED_MODULE_1__["Product"](9, "Product 9", "Category 2", "Product 9 (Category 2)", 100),
            new _product_model__WEBPACK_IMPORTED_MODULE_1__["Product"](10, "Product 10", "Category 3", "Product 10 (Category 3)", 100),
            new _product_model__WEBPACK_IMPORTED_MODULE_1__["Product"](11, "Product 11", "Category 3", "Product 11 (Category 3)", 100),
            new _product_model__WEBPACK_IMPORTED_MODULE_1__["Product"](12, "Product 12", "Category 3", "Product 12 (Category 3)", 100),
            new _product_model__WEBPACK_IMPORTED_MODULE_1__["Product"](13, "Product 13", "Category 3", "Product 13 (Category 3)", 100),
            new _product_model__WEBPACK_IMPORTED_MODULE_1__["Product"](14, "Product 14", "Category 3", "Product 14 (Category 3)", 100),
            new _product_model__WEBPACK_IMPORTED_MODULE_1__["Product"](15, "Product 15", "Category 3", "Product 15 (Category 3)", 100),
        ];
    }
    /**
     * getProducts
     */
    StaticDataSource.prototype.getProducts = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])([this.products]);
    };
    StaticDataSource.prototype.saveOrder = function (order) {
        console.log(JSON.stringify(order));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])([order]);
    };
    StaticDataSource = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], StaticDataSource);
    return StaticDataSource;
}());



/***/ }),

/***/ "./src/app/store/cartDetail.component.html":
/*!*************************************************!*\
  !*** ./src/app/store/cartDetail.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col bg-dark text-white\">\n            <a class=\"navbar-brand\"> SPORT STORE </a>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col mt-2\">\n            <h2 class=\"text-center\">Your Cart</h2>\n            <table class=\"table table-bordered table-striped p-2\">\n                <thead>\n                    <tr>\n                        <th>Quantity</th>\n                        <th>Product</th>\n                        <th class=\"text-right\">Price</th>\n                        <th class=\"text-right\">Subtotal</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngIf=\"cart.entries.length == 0\">\n                        <td colspan=\"4\" class=\"text-center\">\n                            Your cart is empty\n                        </td>\n                    </tr>\n                    <tr *ngFor=\"let entry of cart.entries\">\n                        <td>\n                            <input type=\"number\" class=\"form-control-sm\" style=\"width:5em\" [value]=\"entry.quantity\"\n                                (change)=\"cart.updateQuantity(entry.product, $event.target.value)\">\n                        </td>\n                        <td>{{entry.product.name}}</td>\n                        <td>{{entry.product.price | currency:\"USD\":true:\"2.2-2\"}} </td>\n                        <td>{{entry.entryTotal | currency:\"USD\":true:\"2.2-2\"}} </td>\n                        <td class=\"text-center\">\n                            <button class=\"btn btn-sm btn-danger\" (click)=\"cart.removeEntry(entry)\">\n                                Remove\n                            </button>\n                        </td>\n                    </tr>\n                </tbody>\n                <tfoot>\n                    <tr>\n                        <td colspan=\"3\" class=\"text-right\"> Total: </td>\n                        <td class=\"text-right\">{{cart.cartTotal | currency:\"USD\":\"symbol\":\"2.2-2\"}}</td>\n                    </tr>\n                </tfoot>\n            </table>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col\">\n            <div class=\"text-center\">\n                <button class=\"btn btn-primary m-1\" routerLink=\"/store\">Continue Shopping</button>\n                <button class=\"btn btn-secondary m-1\" routerLink=\"/checkout\"\n                    [disabled]=\"cart.entries.length == 0\">Checkout</button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/store/cartDetail.component.ts":
/*!***********************************************!*\
  !*** ./src/app/store/cartDetail.component.ts ***!
  \***********************************************/
/*! exports provided: CartDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartDetailComponent", function() { return CartDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_cart_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/cart.model */ "./src/app/model/cart.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartDetailComponent = /** @class */ (function () {
    function CartDetailComponent(cart) {
        this.cart = cart;
    }
    CartDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "cartdetail",
            template: __webpack_require__(/*! ./cartDetail.component.html */ "./src/app/store/cartDetail.component.html"),
        }),
        __metadata("design:paramtypes", [_model_cart_model__WEBPACK_IMPORTED_MODULE_1__["Cart"]])
    ], CartDetailComponent);
    return CartDetailComponent;
}());



/***/ }),

/***/ "./src/app/store/cartSummary.component.html":
/*!**************************************************!*\
  !*** ./src/app/store/cartSummary.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"float-right\">\n    <small>\n        Your cart:\n        <span *ngIf=\"cart.itemCount > 0\">\n            {{cart.itemCount}} items\n            {{cart.cartTotal | currency:\"USD\":\"symbol\":\"2.2-2\"}}\n        </span>\n        <span *ngIf=\"cart.itemCount == 0\">\n            (empty)\n        </span>\n        <button class=\"btn btn-sm bg-dark text-white\" routerLink=\"/cart\" [disabled]=\"cart.itemCount == 0\">\n            <i class=\"fa fa-shopping-cart\"></i>\n        </button>\n    </small>\n</div>"

/***/ }),

/***/ "./src/app/store/cartSummary.component.ts":
/*!************************************************!*\
  !*** ./src/app/store/cartSummary.component.ts ***!
  \************************************************/
/*! exports provided: CartSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartSummaryComponent", function() { return CartSummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_cart_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/cart.model */ "./src/app/model/cart.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartSummaryComponent = /** @class */ (function () {
    function CartSummaryComponent(cart) {
        this.cart = cart;
    }
    CartSummaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "cart-summary",
            template: __webpack_require__(/*! ./cartSummary.component.html */ "./src/app/store/cartSummary.component.html")
        }),
        __metadata("design:paramtypes", [_model_cart_model__WEBPACK_IMPORTED_MODULE_1__["Cart"]])
    ], CartSummaryComponent);
    return CartSummaryComponent;
}());



/***/ }),

/***/ "./src/app/store/checkout.component.html":
/*!***********************************************!*\
  !*** ./src/app/store/checkout.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col bg-dark text-white\">\n            <a class=\"navbar-brand\"> SPORT STORE </a>\n        </div>\n    </div>\n\n    <div *ngIf=\"orderSent\" class=\"m-2 text-center\">\n        <h2>Thanks!</h2>\n        <p>Thanks for placing your order</p>\n        <button class=\"btn btn-primary\" routerLink=\"/store\">Return to Store</button>\n    </div>\n\n    <form *ngIf=\"!orderSent\" #form=\"ngForm\" novalidate (ngSubmit)=\"submitOrder(form)\" class=\"m-2\">\n        <div class=\"form-group\">\n            <label>Name</label>\n            <input class=\"form-control\" #name=\"ngModel\" name=\"name\" [(ngModel)]=\"order.name\" required>\n            <span *ngIf=\"submitted && name.invalid\" class=\"text-danger\">\n                Please enter your name\n            </span>\n        </div>\n        <div class=\"form-group\">\n            <label>Address</label>\n            <input class=\"form-control\" #address=\"ngModel\" name=\"address\" [(ngModel)]=\"order.address\" required />\n            <span *ngIf=\"submitted && address.invalid\" class=\"text-danger\">\n                Please enter your address\n            </span>\n        </div>\n        <div class=\"form-group\">\n            <label>City</label>\n            <input class=\"form-control\" #city=\"ngModel\" name=\"city\" [(ngModel)]=\"order.city\" required />\n            <span *ngIf=\"submitted && city.invalid\" class=\"text-danger\">\n                Please enter your city\n            </span>\n        </div>\n        <div class=\"form-group\">\n            <label>State</label>\n            <input class=\"form-control\" #state=\"ngModel\" name=\"state\" [(ngModel)]=\"order.state\" required />\n            <span *ngIf=\"submitted && state.invalid\" class=\"text-danger\">\n                Please enter your state\n            </span>\n        </div>\n        <div class=\"form-group\">\n            <label>Zip/Postal Code</label>\n            <input class=\"form-control\" #zip=\"ngModel\" name=\"zip\" [(ngModel)]=\"order.zip\" required />\n            <span *ngIf=\"submitted && zip.invalid\" class=\"text-danger\">\n                Please enter your zip/postal code\n            </span>\n        </div>\n        <div class=\"form-group\">\n            <label>Country</label>\n            <input class=\"form-control\" #country=\"ngModel\" name=\"country\" [(ngModel)]=\"order.country\" required />\n            <span *ngIf=\"submitted && country.invalid\" class=\"text-danger\">\n                Please enter your country\n            </span>\n        </div>\n        <div class=\"text-center\">\n            <button class=\"btn btn-secondary m-1\" routerLink=\"/cart\">Back</button>\n            <button class=\"btn btn-primary m-1\" type=\"submit\">Complete Order</button>\n        </div>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/store/checkout.component.ts":
/*!*********************************************!*\
  !*** ./src/app/store/checkout.component.ts ***!
  \*********************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_order_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/order.repository */ "./src/app/model/order.repository.ts");
/* harmony import */ var _model_order_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/order.model */ "./src/app/model/order.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(repository, order) {
        this.repository = repository;
        this.order = order;
        this.orderSent = false;
        this.submitted = false;
    }
    CheckoutComponent.prototype.submitOrder = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            this.repository.saveOrder(this.order).subscribe(function (order) {
                _this.order.clear();
                _this.orderSent = true;
                _this.submitted = false;
            });
        }
    };
    CheckoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./checkout.component.html */ "./src/app/store/checkout.component.html"),
            styles: [__webpack_require__(/*! ./checkout.style.css */ "./src/app/store/checkout.style.css")]
        }),
        __metadata("design:paramtypes", [_model_order_repository__WEBPACK_IMPORTED_MODULE_1__["OrderRepository"],
            _model_order_model__WEBPACK_IMPORTED_MODULE_2__["Order"]])
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "./src/app/store/checkout.style.css":
/*!******************************************!*\
  !*** ./src/app/store/checkout.style.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input.ng-dirty.ng-invalid { border: 2px solid #ff0000 }\ninput.ng-dirty.ng-valid { border: 2px solid #6bc502 }"

/***/ }),

/***/ "./src/app/store/counter.directive.ts":
/*!********************************************!*\
  !*** ./src/app/store/counter.directive.ts ***!
  \********************************************/
/*! exports provided: CounterDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterDirective", function() { return CounterDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CounterDirective = /** @class */ (function () {
    function CounterDirective(container, template) {
        this.container = container;
        this.template = template;
    }
    CounterDirective.prototype.ngOnChanges = function (changes) {
        this.container.clear();
        for (var i = 0; i < this.counter; i++) {
            this.container.createEmbeddedView(this.template, new CounterDirectiveContext(i + 1));
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("counterOf"),
        __metadata("design:type", Number)
    ], CounterDirective.prototype, "counter", void 0);
    CounterDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: "[counterOf]"
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]])
    ], CounterDirective);
    return CounterDirective;
}());

var CounterDirectiveContext = /** @class */ (function () {
    function CounterDirectiveContext($implicit) {
        this.$implicit = $implicit;
    }
    return CounterDirectiveContext;
}());


/***/ }),

/***/ "./src/app/store/store.component.html":
/*!********************************************!*\
  !*** ./src/app/store/store.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col bg-dark text-white\">\n            <a class=\"navbar-brand\">SPORTS STORE</a>\n            <cart-summary></cart-summary>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-3 p-2\">\n            <button class=\"btn btn-block btn-outline-primary\" (click)=\"changeCategory()\">\n                Home\n            </button>\n\n            <button *ngFor=\"let cat of categories\" class=\"btn btn-block btn-outline-primary\"\n                [class.active]=\"cat == selectedCategory\" (click)=\"changeCategory(cat)\">\n                {{cat}}\n            </button>\n        </div>\n        <div class=\"col-9 p-2\">\n            <div *ngFor=\"let product of products\" class=\"card m-1 p-1 bg-light\">\n                <h4>\n                    {{product.name}}\n                    <span\n                        class=\"badge badge-pill badge-primary float-right\">{{product.price | currency:\"USD\":\"symbol\":\"2.2-2\"}}</span>\n                </h4>\n                <div class=\"card-text bg-white p-1\">\n                    {{product.description}}\n                    <button class=\"btn btn-success btn-sm float-right\"\n                        (click)=\"addToCart(product)\">\n                        Add To Cart\n                    </button>\n                </div>\n            </div>\n\n            <div class=\"form-inline float-left mr-1\">\n                <select class=\"form-controle\" [value]=\"productsPerPage\" (change)=\"changePageSize($event.target.value)\">\n                    <option value=\"3\">3 per page</option>\n                    <option value=\"4\">4 per page</option>\n                    <option value=\"6\">6 per page</option>\n                    <option value=\"8\">8 per page</option>\n                </select>\n            </div>\n\n            <div class=\"btn-group float-right\">\n                <button *counter=\"let page of pageCount\" (click)=\"changePage(page)\" class=\"btn btn-outline-primary\"\n                    [class.active]=\"page == selectedPage\">\n                    {{page}}\n                </button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/store/store.component.ts":
/*!******************************************!*\
  !*** ./src/app/store/store.component.ts ***!
  \******************************************/
/*! exports provided: StoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreComponent", function() { return StoreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_product_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/product.repository */ "./src/app/model/product.repository.ts");
/* harmony import */ var _model_cart_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/cart.model */ "./src/app/model/cart.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StoreComponent = /** @class */ (function () {
    function StoreComponent(repository, cart, router) {
        this.repository = repository;
        this.cart = cart;
        this.router = router;
        this.selectedCategory = null;
        this.productsPerPage = 4;
        this.selectedPage = 1;
    } //auto injected
    Object.defineProperty(StoreComponent.prototype, "products", {
        get: function () {
            var pageIndex = (this.selectedPage - 1) * this.productsPerPage;
            return this.repository.findProducts(this.selectedCategory)
                .slice(pageIndex, pageIndex + this.productsPerPage);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StoreComponent.prototype, "categories", {
        get: function () {
            return this.repository.findCategories();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StoreComponent.prototype, "pageCount", {
        get: function () {
            return (Math.ceil(this.repository.findProducts(this.selectedCategory).length / this.productsPerPage));
        },
        enumerable: true,
        configurable: true
    });
    StoreComponent.prototype.changeCategory = function (newCategory) {
        this.selectedCategory = newCategory;
    };
    StoreComponent.prototype.changePage = function (newPage) {
        this.selectedPage = newPage;
    };
    StoreComponent.prototype.changePageSize = function (newPageSize) {
        this.productsPerPage = Number(newPageSize);
        this.changePage(1);
    };
    StoreComponent.prototype.addToCart = function (product) {
        this.cart.addEntry(product, 1);
        this.router.navigateByUrl("/cart");
    };
    StoreComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "store",
            template: __webpack_require__(/*! ./store.component.html */ "./src/app/store/store.component.html"),
        }),
        __metadata("design:paramtypes", [_model_product_repository__WEBPACK_IMPORTED_MODULE_1__["ProductRepository"],
            _model_cart_model__WEBPACK_IMPORTED_MODULE_2__["Cart"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], StoreComponent);
    return StoreComponent;
}());



/***/ }),

/***/ "./src/app/store/store.module.ts":
/*!***************************************!*\
  !*** ./src/app/store/store.module.ts ***!
  \***************************************/
/*! exports provided: StoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreModule", function() { return StoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _model_model_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/model.module */ "./src/app/model/model.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _store_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store.component */ "./src/app/store/store.component.ts");
/* harmony import */ var _counter_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./counter.directive */ "./src/app/store/counter.directive.ts");
/* harmony import */ var _cartSummary_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cartSummary.component */ "./src/app/store/cartSummary.component.ts");
/* harmony import */ var _cartDetail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cartDetail.component */ "./src/app/store/cartDetail.component.ts");
/* harmony import */ var _checkout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./checkout.component */ "./src/app/store/checkout.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var StoreModule = /** @class */ (function () {
    function StoreModule() {
    }
    StoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _model_model_module__WEBPACK_IMPORTED_MODULE_2__["ModelModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"]
            ],
            declarations: [_store_component__WEBPACK_IMPORTED_MODULE_4__["StoreComponent"],
                _counter_directive__WEBPACK_IMPORTED_MODULE_5__["CounterDirective"],
                _cartSummary_component__WEBPACK_IMPORTED_MODULE_6__["CartSummaryComponent"],
                _cartDetail_component__WEBPACK_IMPORTED_MODULE_7__["CartDetailComponent"],
                _checkout_component__WEBPACK_IMPORTED_MODULE_8__["CheckoutComponent"]
            ],
            exports: [_store_component__WEBPACK_IMPORTED_MODULE_4__["StoreComponent"], _cartDetail_component__WEBPACK_IMPORTED_MODULE_7__["CartDetailComponent"], _checkout_component__WEBPACK_IMPORTED_MODULE_8__["CheckoutComponent"]]
        })
    ], StoreModule);
    return StoreModule;
}());



/***/ }),

/***/ "./src/app/storeFirst.guard.ts":
/*!*************************************!*\
  !*** ./src/app/storeFirst.guard.ts ***!
  \*************************************/
/*! exports provided: StoreFirstGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreFirstGuard", function() { return StoreFirstGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _store_store_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/store.component */ "./src/app/store/store.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StoreFirstGuard = /** @class */ (function () {
    function StoreFirstGuard(router) {
        this.router = router;
        this.firstNavigation = true;
    }
    StoreFirstGuard.prototype.canActivate = function (route, state) {
        if (this.firstNavigation) {
            this.firstNavigation = false;
            if (route.component != _store_store_component__WEBPACK_IMPORTED_MODULE_2__["StoreComponent"]) {
                this.router.navigateByUrl("/");
                return false;
            }
        }
        return true;
    };
    StoreFirstGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], StoreFirstGuard);
    return StoreFirstGuard;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/wassim/Documents/learning/Angular/SportsStore/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map