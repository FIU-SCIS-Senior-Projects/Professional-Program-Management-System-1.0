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
var sessionDetailGuard = (function () {
    function sessionDetailGuard(_router) {
        this._router = _router;
    }
    sessionDetailGuard.prototype.canActivate = function (route) {
        var id = +route.url[1].path;
        if (isNaN(id) || id < 0) {
            alert('Invalid session Id');
            // start a new navigation to redirect to list page
            this._router.navigate(['/sessions']);
            // abort current navigation
            return false;
        }
        ;
        return true;
    };
    return sessionDetailGuard;
}());
sessionDetailGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_2.Router])
], sessionDetailGuard);
exports.sessionDetailGuard = sessionDetailGuard;
var SessionEditGuard = (function () {
    function SessionEditGuard() {
    }
    SessionEditGuard.prototype.canDeactivate = function (component) {
        if (component.sessionForm.dirty) {
            var productName = component.sessionForm.get('productName').value || 'New Product';
            return confirm("Navigate away and lose all changes to " + productName + "?");
        }
        return true;
    };
    return SessionEditGuard;
}());
SessionEditGuard = __decorate([
    core_1.Injectable()
], SessionEditGuard);
exports.SessionEditGuard = SessionEditGuard;
//# sourceMappingURL=session-guard.service.js.map