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
var user_service_1 = require("../_services/user.service");
var ResetPasswordComponent = (function () {
    function ResetPasswordComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.loading = false;
        this.model = {};
    }
    ResetPasswordComponent.prototype.resetPassword = function () {
        var _this = this;
        this.loading = true;
        this.userService.reset(this.model)
            .subscribe(function (data) {
            if (data === "Verification failed.") {
                _this.router.navigate(['/verificationFail']);
            }
            else {
                _this.goBack();
            }
        });
    };
    ResetPasswordComponent.prototype.goBack = function () {
        this.router.navigate(['/login']);
    };
    return ResetPasswordComponent;
}());
ResetPasswordComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'resetPassword.component.html'
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        router_2.Router])
], ResetPasswordComponent);
exports.ResetPasswordComponent = ResetPasswordComponent;
//# sourceMappingURL=resetPassword.component.js.map