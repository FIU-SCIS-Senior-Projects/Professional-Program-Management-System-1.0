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
var router_2 = require("@angular/router");
var ticket_service_1 = require("./ticket.service");
var AddTicketComponent = (function () {
    function AddTicketComponent(router, ticketService) {
        this.router = router;
        this.ticketService = ticketService;
        this.loading = false;
        this.model = {};
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    AddTicketComponent.prototype.addTicket = function (UsernamePortal) {
        var _this = this;
        this.loading = true;
        UsernamePortal = (this.currentUser[0].Username);
        this.model.UsernamePortal = UsernamePortal;
        this.ticketService.addTicket(this.model)
            .subscribe(function () { return _this.goBack(); });
    };
    AddTicketComponent.prototype.goBack = function () {
        this.router.navigate(['/guestPage']);
    };
    return AddTicketComponent;
}());
AddTicketComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'addTicket.component.html'
    }),
    __metadata("design:paramtypes", [router_2.Router,
        ticket_service_1.TicketService])
], AddTicketComponent);
exports.AddTicketComponent = AddTicketComponent;
//# sourceMappingURL=addTicket.component.js.map