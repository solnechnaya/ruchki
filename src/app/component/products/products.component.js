"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ruchkiService_1 = require("../../service/ruchkiService");
var product_1 = require("../../model/product");
var router_1 = require("@angular/router");
// Компонент управляет отображением представления на экране
var ProductsComponent = (function () {
    function ProductsComponent(ruchkiService, route, router) {
        var _this = this;
        this.ruchkiService = ruchkiService;
        this.route = route;
        this.router = router;
        this.categories = [];
        this.products = [];
        this.categoryName = "";
        this.product = new product_1.Product;
        router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
                _this.getCategories();
                _this.getCategory();
                _this.getProduct();
            }
        });
    }
    ProductsComponent.prototype.getCategories = function () {
        var _this = this;
        this.ruchkiService.getCategories().subscribe(function (categories) { return _this.categories = categories; });
    };
    ProductsComponent.prototype.getCategory = function () {
        var _this = this;
        this.ruchkiService.getCategory(+this.route.snapshot.paramMap.get('id')).subscribe(//"+" перед строкой преобразует строку в число
        function (//"+" перед строкой преобразует строку в число
            category) { return _this.categoryName = category.name; });
    };
    ProductsComponent.prototype.getProduct = function () {
        var _this = this;
        this.ruchkiService.getProduct(+this.route.snapshot.paramMap.get('id')).subscribe(//"+" перед строкой преобразует строку в число
        function (//"+" перед строкой преобразует строку в число
            product) { return _this.product = product; });
    };
    // выполнение методов при запуске страницы
    ProductsComponent.prototype.ngOnInit = function () {
        this.getCategories();
        this.getCategory();
        this.getProduct();
    };
    ProductsComponent = __decorate([
        core_1.Component({
            selector: 'product',
            templateUrl: './products.component.html',
            styleUrls: ['./products.component.css']
        }),
        __metadata("design:paramtypes", [ruchkiService_1.RuchkiService, router_1.ActivatedRoute, router_1.Router])
    ], ProductsComponent);
    return ProductsComponent;
}());
exports.ProductsComponent = ProductsComponent;
//# sourceMappingURL=products.component.js.map