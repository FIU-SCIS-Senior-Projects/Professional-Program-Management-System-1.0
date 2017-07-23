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
var EnrollmentListComponent = (function () {
    function EnrollmentListComponent(router, route, scheduleService) {
        this.router = router;
        this.route = route;
        this.scheduleService = scheduleService;
        this.pageTitle = 'Enrolled Students';
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.showImage = false;
        this.PantherCourseNumber = this.route.snapshot.params['PantherCourseNumber'];
    }
    EnrollmentListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.scheduleService.getEnrollment(this.PantherCourseNumber)
            .subscribe(function (enrollments) { return _this.enrollments = enrollments; }, function (error) { return _this.errorMessage = error; });
    };
    return EnrollmentListComponent;
}());
EnrollmentListComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/schedule/enrollment.component.html',
    }),
    __metadata("design:paramtypes", [router_2.Router,
        router_2.ActivatedRoute,
        schedule_service_1.ScheduleService])
], EnrollmentListComponent);
exports.EnrollmentListComponent = EnrollmentListComponent;
//# sourceMappingURL=enrollment.component.js.map