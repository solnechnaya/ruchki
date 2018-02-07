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
var ContactsComponent = (function () {
    function ContactsComponent(ruchkiService) {
        this.ruchkiService = ruchkiService;
        this.categories = [];
    }
    ContactsComponent.prototype.getCategories = function () {
        var _this = this;
        this.ruchkiService.getCategories().subscribe(function (categories) { return _this.categories = categories; });
    };
    ContactsComponent.prototype.ngOnInit = function () {
        this.getCategories();
    };
    ContactsComponent = __decorate([
        core_1.Component({
            selector: 'contacts',
            templateUrl: './contacts.component.html',
            styleUrls: ['./contacts.component.css']
        }),
        __metadata("design:paramtypes", [ruchkiService_1.RuchkiService])
    ], ContactsComponent);
    return ContactsComponent;
}());
exports.ContactsComponent = ContactsComponent;
//# sourceMappingURL=contacts.component.js.map