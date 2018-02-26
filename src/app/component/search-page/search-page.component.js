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
var SearchPageComponent = (function () {
    function SearchPageComponent(ruchkiService, route, router) {
        this.ruchkiService = ruchkiService;
        this.route = route;
        this.router = router;
        this.categories = [];
        this.products = [];
    }
    SearchPageComponent.prototype.getCategories = function () {
        var _this = this;
        this.ruchkiService.getCategories().subscribe(function (categories) { return _this.categories = categories; });
    };
    SearchPageComponent.prototype.searchProducts = function (search) {
        var _this = this;
        this.products = []; //обнуление массива продуктов
        this.ruchkiService.search({ value: search }).subscribe(//в вызываемом методе в параметре создается объект-модель:({...})в поле модели - строка поиска
        function (//в вызываемом методе в параметре создается объект-модель:({...})в поле модели - строка поиска
            products) {
            products.forEach(function (element) {
                //element - новая переменная лямбды
                console.log(element); //выводит на консоль, что мы получаем с BE
                _this.products.push(element); //через push помещаем element в член класса; .push(element) - в JS таким образом добавляется массив
            });
        });
    };
    SearchPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        //запускается один раз при инициализации класса, благодаря subscribe(подписке на роут) передастся при переходе
        this.sub = this.route.params.subscribe(function (params) {
            _this.search = params['search']; //'search' - переменная в search.component(слово, написанное с строке поиска)
            console.log("пришло - " + _this.search);
            _this.searchProducts(_this.search); //вызов метода получения продуктов по результату поиска
        });
        this.getCategories();
    };
    SearchPageComponent = __decorate([
        core_1.Component({
            selector: 'search-page',
            templateUrl: './search-page.component.html',
            styleUrls: ['./search-page.component.css']
        }),
        __metadata("design:paramtypes", [ruchkiService_1.RuchkiService, router_1.ActivatedRoute, router_1.Router])
    ], SearchPageComponent);
    return SearchPageComponent;
}());
exports.SearchPageComponent = SearchPageComponent;
//# sourceMappingURL=search-page.component.js.map