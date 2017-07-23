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
var index_5 = require("../_services/index");
var router_2 = require("@angular/router");
var ticket_service_1 = require("../tickets/ticket.service");
var GuestPageComponent = (function () {
    function GuestPageComponent(userService, router, ticketService) {
        this.userService = userService;
        this.router = router;
        this.ticketService = ticketService;
        this.loading = false;
        this.users = [];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (this.currentUser == null) {
            this.router.navigate(['/loginFail']);
        }
        else if ((this.currentUser[0].UserType) == "Student") {
            this.router.navigate(['/studentPage']);
        }
        else if ((this.currentUser[0].UserType) == "Administrator") {
            this.router.navigate(['/adminPage']);
        }
        else {
            this.router.navigate(['/guestPage']);
        }
    }
    GuestPageComponent.prototype.ngOnInit = function (UsernamePortal) {
        var _this = this;
        UsernamePortal = (this.currentUser[0].Username);
        this.ticketService.getUserTickets(UsernamePortal)
            .subscribe(function (tickets) { return _this.tickets = tickets; }, function (error) { return _this.errorMessage = error; });
    };
    GuestPageComponent.prototype.closeTicket = function (TicketID) {
        var _this = this;
        this.ticketService
            .closeTicket(TicketID)
            .subscribe(function () {
            _this.ngOnInit(_this.UsernamePortal);
        });
    };
    GuestPageComponent.prototype.alert = function (TicketID) {
        if (confirm("Are you sure you want to close this ticket?") == true) {
            this.closeTicket(TicketID);
        }
        var timeout = setTimeout("location.reload(true);", 800);
    };
    return GuestPageComponent;
}());
GuestPageComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/users/guestPage.component.html'
    }),
    __metadata("design:paramtypes", [index_5.UserService,
        router_2.Router,
        ticket_service_1.TicketService])
], GuestPageComponent);
exports.GuestPageComponent = GuestPageComponent;
//# sourceMappingURL=guestPage.component.js.map