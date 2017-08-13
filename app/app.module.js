"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var http_1 = require("@angular/http");
var login_component_1 = require("./login.component");
var app_routing_1 = require("./app.routing");
var home_component_1 = require("./home.component");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var ng2_bootstrap_1 = require("ng2-bootstrap");
var app_component_1 = require("./app.component");
var authmanager_1 = require("./authmanager");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [app_component_1.AppComponent, home_component_1.HomeComponent, login_component_1.LoginComponent],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            ng2_bootstrap_1.AlertModule.forRoot(),
            ng2_bootstrap_1.DatepickerModule.forRoot(),
            app_routing_1.routing,
            http_1.HttpModule
        ],
        providers: [authmanager_1.AuthManager],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map