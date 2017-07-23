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
var SessionService = (function () {
    function SessionService(http) {
        this.http = http;
        this.baseUrl = 'http://104.236.52.204/';
    }
    SessionService.prototype.getSessions = function () {
        var _this = this;
        return this.http.get(this.baseUrl + 'selectAllSessions.php')
            .map(function (res) {
            _this.checkMe = res;
            if (_this.checkMe._body !== "0") {
                return res.json();
            }
        });
    };
    //NOT USING
    SessionService.prototype.getSession = function (id) {
        return this.http.post("http://104.236.52.204/selectSession.php", { 'id': id })
            .map(function (res) { return res.json(); });
    };
    SessionService.prototype.deleteSession = function (id) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var url = this.baseUrl + "/" + id;
        return this.http.delete(url, options)
            .do(function (data) { return console.log('deleteSession: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    SessionService.prototype.saveSession = function (session) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        if (session.id === 0) {
            return this.createSession(session, options);
        }
        return this.updateSession(session, options);
    };
    SessionService.prototype.createSession = function (session, options) {
        session.id = undefined;
        return this.http.post(this.baseUrl, session, options)
            .map(this.extractData)
            .do(function (data) { return console.log('createSession: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    SessionService.prototype.updateSession = function (session, options) {
        var url = this.baseUrl + "/" + session.id;
        return this.http.put(url, session, options)
            .map(function () { return session; })
            .do(function (data) { return console.log('updateSession: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    SessionService.prototype.extractData = function (response) {
        var body = response.json();
        return body.data || {};
    };
    SessionService.prototype.handleError = function (error) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    SessionService.prototype.initializeSession = function () {
        // Return an initialized object
        return {
            id: 0,
            sessionName: null,
            sessionCode: null,
            sessionDate: null,
            description: null,
        };
    };
    return SessionService;
}());
SessionService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], SessionService);
exports.SessionService = SessionService;
//# sourceMappingURL=session.service.js.map