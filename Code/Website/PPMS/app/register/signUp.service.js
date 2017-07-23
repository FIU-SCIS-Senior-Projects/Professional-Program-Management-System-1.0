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
var http_1 = require("@angular/http");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
require("rxjs/add/operator/map");
require("rxjs/add/observable/of");
var SignUpService = (function () {
    function SignUpService(http) {
        this.http = http;
        this.baseUrl = 'http://104.236.52.204/';
    }
    SignUpService.prototype.getUsers = function () {
        var _this = this;
        return this.http.get(this.baseUrl + 'selectAllSignUps.php')
            .map(function (res) {
            _this.checkMe = res;
            if (_this.checkMe._body !== "0") {
                return res.json();
            }
        });
    };
    SignUpService.prototype.create = function (info) {
        return this.http.post(this.baseUrl + 'insertUser.php', info)
            .map(function () { return ""; });
    };
    // private helper methods
    SignUpService.prototype.jwt = function () {
        // create authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new http_1.RequestOptions({ headers: headers });
        }
    };
    SignUpService.prototype.getUser = function (username) {
        return this.http.post("http://localhost/api/selectone.php/", { 'username': username })
            .map(function (res) { return res.json(); });
    };
    SignUpService.prototype.deleteUser = function (username) {
        var _this = this;
        return this.http.post("http://localhost/api/delete.php/", { 'username': username })
            .map(function () { return _this.getUsers(); });
    };
    SignUpService.prototype.updateUser = function (info) {
        var _this = this;
        return this.http.post("http://localhost/api/update.php/", info)
            .map(function (res) {
            _this.checkMe = res;
            if (_this.checkMe._body == !"duplicate username or password") {
                return res.json();
            }
            else {
                return "duplicate username or password";
            }
        });
    };
    return SignUpService;
}());
SignUpService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], SignUpService);
exports.SignUpService = SignUpService;
//# sourceMappingURL=signUp.service.js.map