"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var home_1 = require("./component/home/home");
var categories_component_1 = require("./component/categories/categories.component");
var aboutMe_component_1 = require("./component/aboutMe/aboutMe.component");
var contacts_component_1 = require("./component/contacts/contacts.component");
var products_component_1 = require("./component/products/products.component");
var search_page_component_1 = require("./component/search-page/search-page.component");
var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: home_1.HomeComponent },
    { path: 'category/:id', component: categories_component_1.CategoriesComponent },
    { path: 'product/:id', component: products_component_1.ProductsComponent },
    { path: 'aboutMe', component: aboutMe_component_1.AboutMeComponent },
    { path: 'contacts', component: contacts_component_1.ContactsComponent },
    { path: 'search-page', component: search_page_component_1.SearchPageComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map