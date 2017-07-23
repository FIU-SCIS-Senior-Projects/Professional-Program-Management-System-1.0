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
var TicketDetailComponent = (function () {
    function TicketDetailComponent(router, route, ticketService) {
        this.router = router;
        this.route = route;
        this.ticketService = ticketService;
    }
    TicketDetailComponent.prototype.ngOnInit = function () {
        this.getSingleTicket();
    };
    TicketDetailComponent.prototype.getSingleTicket = function () {
        var _this = this;
        var TicketID = this.route.snapshot.params['TicketID'];
        this.ticketService
            .getTicket(TicketID)
            .subscribe(function (ticket) {
            _this.ticket = ticket[0];
        }),
            this.ticketService
                .getResponses(TicketID)
                .subscribe(function (responses) {
                _this.responses = responses;
            });
    };
    ;
    return TicketDetailComponent;
}());
TicketDetailComponent = __decorate([
    core_1.Component({
        selector: 'app-show',
        templateUrl: 'app/tickets/detail-ticket.component.html'
    }),
    __metadata("design:paramtypes", [router_2.Router,
        router_2.ActivatedRoute,
        ticket_service_1.TicketService])
], TicketDetailComponent);
exports.TicketDetailComponent = TicketDetailComponent;
//# sourceMappingURL=detail-ticket.component.js.map