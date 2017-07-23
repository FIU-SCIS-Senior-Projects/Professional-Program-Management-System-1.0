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
var session_service_1 = require("./session.service");
var sessionListComponent = (function () {
    function sessionListComponent(_sessionService) {
        this._sessionService = _sessionService;
        this.pageTitle = 'session List';
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.showImage = false;
    }
    sessionListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    sessionListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._sessionService.getsessions()
            .subscribe(function (sessions) { return _this.sessions = sessions; }, function (error) { return _this.errorMessage = error; });
    };
    sessionListComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = 'session List: ' + message;
    };
    return sessionListComponent;
}());
sessionListComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/sessions/session-list.component.html',
        styleUrls: ['app/sessions/session-list.component.css']
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof session_service_1.sessionService !== "undefined" && session_service_1.sessionService) === "function" && _a || Object])
], sessionListComponent);
exports.sessionListComponent = sessionListComponent;
var _a;
//# sourceMappingURL=product-list.component.js.map