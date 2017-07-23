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
var Observable_1 = require("rxjs/Observable");
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
    SignUpService.prototype.getSignUps = function () {
        var _this = this;
        return this.http.get(this.baseUrl + 'joanaTest/selectAllSignUps.php')
            .map(function (res) {
            _this.checkMe = res;
            if (_this.checkMe._body !== "0") {
                return res.json();
            }
        });
    };
    SignUpService.prototype.getSignUp1 = function (username) {
        if (username === '') {
            return Observable_1.Observable.of(this.initializeSignUp());
            // return Observable.create((observer: any) => {
            //     observer.next(this.initializeSignUp());
            //     observer.complete();
            // });
        }
        ;
        var url = this.baseUrl + 'joanaTest/selectSignUp.php' + "/" + username;
        return this.http.get(url)
            .map(this.extractData)
            .do(function (data) { return console.log('getSignUp: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    SignUpService.prototype.getSignUp = function (username) {
        return this.http.post("http://104.236.52.204/joanaTest/selectSignUp.php", { 'username': username })
            .map(function (res) { return res.json(); });
    };
    SignUpService.prototype.deleteSignUp = function (username) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var url = this.baseUrl + "/" + username;
        return this.http.delete(url, options)
            .do(function (data) { return console.log('deleteSignUp: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    SignUpService.prototype.saveSignUp = function (SignUp) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        if (SignUp.username === '') {
            return this.createSignUp(SignUp, options);
        }
        return this.updateSignUp(SignUp, options);
    };
    SignUpService.prototype.createSignUp = function (SignUp, options) {
        SignUp.username = undefined;
        return this.http.post(this.baseUrl, SignUp, options)
            .map(this.extractData)
            .do(function (data) { return console.log('createSignUp: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    SignUpService.prototype.updateSignUp = function (SignUp, options) {
        var url = this.baseUrl + "/" + SignUp.username;
        return this.http.put(url, SignUp, options)
            .map(function () { return SignUp; })
            .do(function (data) { return console.log('updateSignUp: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    SignUpService.prototype.extractData = function (response) {
        var body = response.json();
        return body.data || {};
    };
    SignUpService.prototype.handleError = function (error) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    SignUpService.prototype.initializeSignUp = function () {
        // Return an initialized object
        return {
            firstName: null,
            lastName: null,
            middleInitial: null,
            email: null,
            username: '',
            password: null,
            phone: null,
            gender: null,
            genderType: null,
            street1: null,
            street2: null,
            city: null,
            state: null,
            country: null,
        };
    };
    return SignUpService;
}());
SignUpService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], SignUpService);
exports.SignUpService = SignUpService;
//# sourceMappingURL=signUp.service.js.map