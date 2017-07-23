"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var router_2 = require("@angular/router");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var welcome_component_1 = require("./home/welcome.component");
var aboutUs_component_1 = require("./home/aboutUs.component");
var session_module_1 = require("./sessions/session.module");
var registrationFail_component_1 = require("./register/registrationFail.component");
var registrationSuccess_component_1 = require("./register/registrationSuccess.component");
var enrollment_component_1 = require("./schedule/enrollment.component");
//Coppied
var forms_2 = require("@angular/forms");
var http_2 = require("@angular/http");
var index_5 = require("./_guards/index");
var index_6 = require("./_services/index");
var ticket_service_1 = require("./tickets/ticket.service");
var schedule_service_1 = require("./schedule/schedule.service");
var index_7 = require("./login/index");
var loginFail_component_1 = require("./login/loginFail.component");
var guestPage_component_1 = require("./users/guestPage.component");
var studentPage_component_1 = require("./users/studentPage.component");
var adminPage_component_1 = require("./users/adminPage.component");
var addTicket_component_1 = require("./tickets/addTicket.component");
var detail_ticket_component_1 = require("./tickets/detail-ticket.component");
var forgotPassword_component_1 = require("./login/forgotPassword.component");
var invalidEmail_component_1 = require("./login/invalidEmail.component");
var validEmail_component_1 = require("./login/validEmail.component");
var resetPassword_component_1 = require("./login/resetPassword.component");
var respond_ticket_component_1 = require("./tickets/respond-ticket.component");
var schedule_component_1 = require("./schedule/schedule.component");
var textbook_component_1 = require("./schedule/textbook.component");
var add_schedule_component_1 = require("./schedule/add-schedule.component");
var duplicate_component_1 = require("./register/duplicate.component");
var verificationFail_component_1 = require("./login/verificationFail.component");
var index_8 = require("./register/index");
//EndCoppied
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            //Coppied
            forms_2.FormsModule,
            //routing,
            forms_2.FormsModule,
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            forms_1.ReactiveFormsModule,
            http_1.HttpModule,
            router_2.RouterModule.forRoot([
                { path: 'aboutUs', component: aboutUs_component_1.AboutUsComponent },
                { path: 'login/register', component: index_7.LoginComponent },
                { path: 'register', component: index_8.RegisterComponent },
                { path: 'registrationFail', component: registrationFail_component_1.RegistrationFailComponent },
                { path: 'registrationSuccess', component: registrationSuccess_component_1.RegistrationSuccessComponent },
                { path: 'welcome', component: welcome_component_1.WelcomeComponent },
                { path: 'login', component: index_7.LoginComponent },
                { path: 'loginFail', component: loginFail_component_1.LoginFailComponent },
                { path: 'guestPage', component: guestPage_component_1.GuestPageComponent },
                { path: 'studentPage', component: studentPage_component_1.StudentPageComponent },
                { path: 'adminPage', component: adminPage_component_1.AdminPageComponent },
                { path: 'detail/:TicketID', component: detail_ticket_component_1.TicketDetailComponent },
                { path: 'respond/:TicketID', component: respond_ticket_component_1.RespondTicketComponent },
                { path: 'addTicket', component: addTicket_component_1.AddTicketComponent },
                { path: 'forgotPassword', component: forgotPassword_component_1.ForgotPasswordComponent },
                { path: 'invalidEmail', component: invalidEmail_component_1.InvalidEmailComponent },
                { path: 'verificationFail', component: verificationFail_component_1.VerificationFailComponent },
                { path: 'validEmail', component: validEmail_component_1.ValidEmailComponent },
                { path: 'reset', component: resetPassword_component_1.ResetPasswordComponent },
                { path: 'schedule', component: schedule_component_1.ScheduleComponent },
                { path: 'addCourse', component: add_schedule_component_1.AddCourseComponent },
                { path: 'duplicate', component: duplicate_component_1.DuplicateUserEmailComponent },
                { path: 'textbook/:PantherCourseNumber', component: textbook_component_1.TextbookComponent },
                { path: 'enrollment/:PantherCourseNumber', component: enrollment_component_1.EnrollmentListComponent },
                { path: '', redirectTo: 'welcome', pathMatch: 'full' },
                { path: 'respond/:TicketID', component: respond_ticket_component_1.RespondTicketComponent },
                { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
            ]),
            session_module_1.SessionModule
        ],
        declarations: [
            app_component_1.AppComponent,
            welcome_component_1.WelcomeComponent,
            aboutUs_component_1.AboutUsComponent,
            registrationFail_component_1.RegistrationFailComponent,
            registrationSuccess_component_1.RegistrationSuccessComponent,
            index_7.LoginComponent,
            loginFail_component_1.LoginFailComponent,
            guestPage_component_1.GuestPageComponent,
            studentPage_component_1.StudentPageComponent,
            adminPage_component_1.AdminPageComponent,
            index_8.RegisterComponent,
            addTicket_component_1.AddTicketComponent,
            forgotPassword_component_1.ForgotPasswordComponent,
            detail_ticket_component_1.TicketDetailComponent,
            invalidEmail_component_1.InvalidEmailComponent,
            validEmail_component_1.ValidEmailComponent,
            resetPassword_component_1.ResetPasswordComponent,
            respond_ticket_component_1.RespondTicketComponent,
            schedule_component_1.ScheduleComponent,
            textbook_component_1.TextbookComponent,
            add_schedule_component_1.AddCourseComponent,
            duplicate_component_1.DuplicateUserEmailComponent,
            enrollment_component_1.EnrollmentListComponent,
            verificationFail_component_1.VerificationFailComponent
        ],
        providers: [
            index_5.AuthGuard,
            index_6.AlertService,
            index_6.AuthenticationService,
            index_6.UserService,
            schedule_service_1.ScheduleService,
            http_2.BaseRequestOptions,
            ticket_service_1.TicketService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map