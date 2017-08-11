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
var authservice_1 = require("./Services/authservice");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var LoginComponent = (function () {
    function LoginComponent(_service, _router) {
        this._service = _service;
        this._router = _router;
        this.localUser = {
            username: '',
            password: ''
        };
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        console.log('login');
        this._service.loginfn(this.localUser).then(function (res) {
            if (res) {
                console.log('login succeed');
                _this._router.navigate(['Home']);
            }
            else
                console.log(res);
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app/login.html',
        providers: [authservice_1.AuthService]
    }),
    __metadata("design:paramtypes", [authservice_1.AuthService, router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map