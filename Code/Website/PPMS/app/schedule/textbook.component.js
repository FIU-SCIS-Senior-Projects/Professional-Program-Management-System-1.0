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
var schedule_service_1 = require("./schedule.service");
var TextbookComponent = (function () {
    function TextbookComponent(router, route, scheduleService) {
        this.router = router;
        this.route = route;
        this.scheduleService = scheduleService;
        this.PantherCourseNumber = this.route.snapshot.params['PantherCourseNumber'];
    }
    TextbookComponent.prototype.ngOnInit = function () {
        this.getTextbook();
    };
    TextbookComponent.prototype.getTextbook = function () {
        var _this = this;
        this.scheduleService
            .getTextbook(this.PantherCourseNumber)
            .subscribe(function (textbook) {
            _this.textbook = textbook[0];
        });
    };
    ;
    return TextbookComponent;
}());
TextbookComponent = __decorate([
    core_1.Component({
        selector: 'app-show',
        templateUrl: 'app/schedule/textbook.component.html'
    }),
    __metadata("design:paramtypes", [router_2.Router,
        router_2.ActivatedRoute,
        schedule_service_1.ScheduleService])
], TextbookComponent);
exports.TextbookComponent = TextbookComponent;
//# sourceMappingURL=textbook.component.js.map