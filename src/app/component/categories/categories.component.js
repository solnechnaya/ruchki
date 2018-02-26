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
var router_1 = require("@angular/router");
// Компонент управляет отображением представления на экране
var CategoriesComponent = (function () {
    function CategoriesComponent(ruchkiService, route, router) {
        var _this = this;
        this.ruchkiService = ruchkiService;
        this.route = route;
        this.router = router;
        this.categories = [];
        this.products = [];
        router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
                _this.getCategories();
                _this.getProducts();
                _this.getCategory();
            }
        });
    }
    CategoriesComponent.prototype.getCategories = function () {
        var _this = this;
        this.ruchkiService.getCategories().subscribe(function (categories) { return _this.categories = categories; });
    };
    CategoriesComponent.prototype.getProducts = function () {
        var _this = this;
        this.products = []; //обнуление массива продуктов
        this.ruchkiService.getProducts().subscribe(//subscribe -подписка, благодаря ему метод getProducts выполниться, когда уже все продукты будут получены от BE, означает, что в лябду прилетят продукты, полученные с BE
        function (//subscribe -подписка, благодаря ему метод getProducts выполниться, когда уже все продукты будут получены от BE, означает, что в лябду прилетят продукты, полученные с BE
            products) {
            products.forEach(function (element) {
                //element - новая переменная лямбды
                if (element.categoriesId == +_this.route.snapshot.paramMap.get('id')) {
                    _this.products.push(element); //через push помещаем element в член класса; .push(element) - в JS таким образом добавляется массив
                }
            });
        });
    };
    CategoriesComponent.prototype.getCategory = function () {
        var _this = this;
        this.ruchkiService.getCategory(+this.route.snapshot.paramMap.get('id')).subscribe(//"+" перед строкой преобразует строку в число
        function (//"+" перед строкой преобразует строку в число
            category) { return _this.categoryName = category.name; });
    };
    // выполнение методов при запуске страницы
    CategoriesComponent.prototype.ngOnInit = function () {
        this.getCategories();
        //this.getProducts();
        //this.getCategory();
    };
    CategoriesComponent = __decorate([
        core_1.Component({
            selector: 'categories',
            templateUrl: './categories.component.html',
            styleUrls: ['./categories.component.css']
        }),
        __metadata("design:paramtypes", [ruchkiService_1.RuchkiService, router_1.ActivatedRoute, router_1.Router])
    ], CategoriesComponent);
    return CategoriesComponent;
}());
exports.CategoriesComponent = CategoriesComponent;
//# sourceMappingURL=categories.component.js.map