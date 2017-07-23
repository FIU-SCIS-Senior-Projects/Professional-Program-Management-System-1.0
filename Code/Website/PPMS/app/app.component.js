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
var index_5 = require("./_services/index");
var router_2 = require("@angular/router");
var AppComponent = (function () {
    function AppComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.pageTitle = 'Professional Program Management System';
        this.users = [];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    AppComponent.prototype.isActive = function () {
        if (this.currentUser == null) {
            return "inactive";
        }
        else {
            return "active";
        }
    };
    AppComponent.prototype.getLink = function () {
        // if(this.currentUser.username == undefined){
        //     return '/loginFail' ;
        // }
        // else 
        if ((this.currentUser[0].UserType) == "Student") {
            return '/studentPage';
        }
        else if ((this.currentUser[0].UserType) == "Administrator") {
            return '/adminPage';
        }
        else {
            return '/guestPage';
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'pm-app',
        template: "\n    <div>\n        <nav class='navbar navbar-default'>\n            <div class='container-fluid'>\n                <a class='navbar-brand'>{{pageTitle}}</a>\n                <ul class='nav navbar-nav'>\n                     <li><a [routerLink]=\"['/welcome']\">Home</a></li>\n                     <li><a [routerLink]=\"['/aboutUs']\">About Us</a></li>\n                     <li><a [routerLink]=\"['/session']\">Information Sessions</a></li>\n                          <li [ngSwitch]=\"isActive()\">\n                            <a *ngSwitchCase=\"'active'\" [routerLink]=\"getLink()\">My Account</a>\n                            <a *ngSwitchCase=\"'inactive'\" [routerLink]=\"['/login/register']\">Login/Register</a>\n                          </li>\n                </ul>\n            </div>\n        </nav>\n        <div class='container'>\n            <router-outlet></router-outlet>\n        </div>\n     </div>\n     "
    }),
    __metadata("design:paramtypes", [index_5.UserService,
        router_2.Router])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map