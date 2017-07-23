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
var ScheduleService = (function () {
    function ScheduleService(http) {
        this.http = http;
        this.baseUrl = 'http://104.236.52.204/';
    }
    ScheduleService.prototype.getTerms = function () {
        var _this = this;
        return this.http.get(this.baseUrl + 'selectAllTerms.php')
            .map(function (res) {
            _this.checkMe = res;
            if (_this.checkMe._body !== "0") {
                return res.json();
            }
        });
    };
    ScheduleService.prototype.getCourses = function () {
        var _this = this;
        return this.http.get(this.baseUrl + 'selectAllCourses.php')
            .map(function (res) {
            _this.checkMe = res;
            if (_this.checkMe._body !== "0") {
                return res.json();
            }
        });
    };
    ScheduleService.prototype.getOffering = function () {
        var _this = this;
        return this.http.get(this.baseUrl + 'selectAllOffering.php')
            .map(function (res) {
            _this.checkMe = res;
            if (_this.checkMe._body !== "0") {
                return res.json();
            }
        });
    };
    ScheduleService.prototype.getTextbook = function (PantherCourseNumber) {
        var _this = this;
        return this.http.post(this.baseUrl + 'selectTextbook.php', { 'PantherCourseNumber': PantherCourseNumber })
            .map(function (res) {
            _this.checkMe = res;
            if (_this.checkMe._body !== "0") {
                return res.json();
            }
        });
    };
    ScheduleService.prototype.addCourse = function (info) {
        return this.http.post(this.baseUrl + 'addCourse.php', info)
            .map(function () { return ""; });
    };
    ScheduleService.prototype.getEnrollment = function (PantherCourseNumber) {
        var _this = this;
        return this.http.post(this.baseUrl + 'selectAllEnrolled.php', { 'PantherCourseNumber': PantherCourseNumber })
            .map(function (res) {
            _this.checkMe = res;
            if (_this.checkMe._body !== "0") {
                return res.json();
            }
        });
    };
    return ScheduleService;
}());
ScheduleService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ScheduleService);
exports.ScheduleService = ScheduleService;
//# sourceMappingURL=schedule.service.js.map