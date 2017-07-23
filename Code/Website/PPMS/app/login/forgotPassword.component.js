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
var ForgotPasswordComponent = (function () {
    function ForgotPasswordComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.model = {};
        this.pageTitle = 'Password Reset';
        this.loading = false;
    }
    ForgotPasswordComponent.prototype.resetPassword = function () {
        var _this = this;
        this.loading = true;
        this.userService.resetPassword(this.model)
            .subscribe(function (mail) {
            if (mail == true) {
                _this.router.navigate(['/validEmail']);
            }
            else if (mail == 0) {
                _this.router.navigate(['/invalidEmail']);
            }
            else {
                console.log("Error Ocurred");
                _this.router.navigate(['/invalidEmail']);
            }
        });
    };
    return ForgotPasswordComponent;
}());
ForgotPasswordComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/login/forgotPassword.component.html'
    }),
    __metadata("design:paramtypes", [router_2.Router,
        user_service_1.UserService])
], ForgotPasswordComponent);
exports.ForgotPasswordComponent = ForgotPasswordComponent;
//# sourceMappingURL=forgotPassword.component.js.map