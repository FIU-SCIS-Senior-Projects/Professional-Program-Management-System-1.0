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
var TicketService = (function () {
    function TicketService(http) {
        this.http = http;
        this.baseUrl = 'http://104.236.52.204/';
    }
    TicketService.prototype.getTickets = function () {
        var _this = this;
        return this.http.get(this.baseUrl + 'selectAllTickets.php')
            .map(function (res) {
            _this.checkMe = res;
            if (_this.checkMe._body !== "0") {
                return res.json();
            }
        });
    };
    TicketService.prototype.getUserTickets = function (UsernamePortal) {
        return this.http.post(this.baseUrl + 'selectUserTickets.php', { 'UsernamePortal': UsernamePortal })
            .map(function (res) { return res.json(); });
    };
    TicketService.prototype.getTicket = function (TicketID) {
        return this.http.post(this.baseUrl + 'selectTicket.php/', { 'TicketID': TicketID })
            .map(function (res) { return res.json(); });
    };
    TicketService.prototype.getResponses = function (TicketID) {
        return this.http.post(this.baseUrl + 'selectResponses.php/', { 'TicketID': TicketID })
            .map(function (res) { return res.json(); });
    };
    TicketService.prototype.closeTicket = function (TicketID) {
        return this.http.post(this.baseUrl + 'closeTicket.php/', { 'TicketID': TicketID })
            .map(function (res) { return res.json(); });
    };
    TicketService.prototype.addTicket = function (info) {
        return this.http.post(this.baseUrl + 'addTicket.php', info)
            .map(function () { return ""; });
    };
    TicketService.prototype.respond = function (info) {
        return this.http.post(this.baseUrl + 'respond.php/', info)
            .map(function () { return ""; });
    };
    return TicketService;
}());
TicketService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], TicketService);
exports.TicketService = TicketService;
//# sourceMappingURL=ticket.service.js.map