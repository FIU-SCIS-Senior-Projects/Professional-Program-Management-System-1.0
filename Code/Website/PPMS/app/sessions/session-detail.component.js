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
var session_service_1 = require("./session.service");
var sessionDetailComponent = (function () {
    function sessionDetailComponent(route, router, sessionService) {
        this.route = route;
        this.router = router;
        this.sessionService = sessionService;
        this.pageTitle = 'Session Detail';
    }
    sessionDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.getsession(id);
        });
    };
    sessionDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    sessionDetailComponent.prototype.getsession = function (id) {
        var _this = this;
        this.sessionService.getSession(id).subscribe(function (session) { return _this.session = session; }, function (error) { return _this.errorMessage = error; });
    };
    sessionDetailComponent.prototype.onBack = function () {
        this.router.navigate(['/sessions']);
    };
    return sessionDetailComponent;
}());
sessionDetailComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/sessions/session-detail.component.html'
    }),
    __metadata("design:paramtypes", [router_2.ActivatedRoute,
        router_2.Router,
        session_service_1.SessionService])
], sessionDetailComponent);
exports.sessionDetailComponent = sessionDetailComponent;
//# sourceMappingURL=session-detail.component.js.map