"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/common/http");
var app_component_1 = require("./app.component");
var app_routing_module_1 = require("./app-routing.module");
var message_service_1 = require("./message.service");
var messages_component_1 = require("./component/messages/messages.component");
var forms_1 = require("@angular/forms");
var home_1 = require("./component/home/home");
var toys_component_1 = require("./component/toys/toys.component");
var mobils_component_1 = require("./component/mobils/mobils.component");
var accessory_component_1 = require("./component/accessory/accessory.component");
var other_component_1 = require("./component/other/other.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule
            ],
            declarations: [
                app_component_1.AppComponent,
                home_1.HomeComponent,
                messages_component_1.MessagesComponent,
                toys_component_1.ToysComponent,
                mobils_component_1.MobilsComponent,
                accessory_component_1.AccessoryComponent,
                other_component_1.OtherComponent
            ],
            providers: [message_service_1.MessageService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map