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
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var AuthService = (function () {
    function AuthService(_http) {
        this._http = _http;
    }
    AuthService.prototype.loginfn = function (usercreds) {
        var _this = this;
        this.isLoggedIn = false;
        var headers = new http_1.Headers();
        var creds = 'name=' + usercreds.username + '&password=' + usercreds.password;
        headers.append('Content-Type', 'application/X-www-form-urlencoded');
        return new Promise(function (resolve) {
            console.log(usercreds);
            // this._http.post('', creds, { headers: headers }).subscribe((data) => {
            //     if (data.json().success) {
            //         window.localStorage.setItem('auth_key', data.json().token);
            //         this.isLoggedIn = true;
            //     }
            //     resolve(this.isLoggedIn)
            // })
            _this.isLoggedIn = true;
            resolve(_this.isLoggedIn);
        });
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=authservice.js.map