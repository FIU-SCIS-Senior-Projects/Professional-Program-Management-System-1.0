"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_2 = require("@angular/router");
var forms_1 = require("@angular/forms");
var session_list_component_1 = require("./session-list.component");
var session_detail_component_1 = require("./session-detail.component");
var session_guard_service_1 = require("./session-guard.service");
var session_edit_component_1 = require("./session-edit.component");
var session_filter_pipe_1 = require("./session-filter.pipe");
var session_service_1 = require("./session.service");
var shared_module_1 = require("../shared/shared.module");
var SessionModule = (function () {
    function SessionModule() {
    }
    return SessionModule;
}());
SessionModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_module_1.SharedModule,
            forms_1.ReactiveFormsModule,
            router_2.RouterModule.forChild([
                { path: 'session', component: session_list_component_1.sessionListComponent },
                { path: 'session/:id',
                    canActivate: [session_guard_service_1.sessionDetailGuard],
                    component: session_detail_component_1.sessionDetailComponent
                },
                { path: 'sessionEdit/:id',
                    canDeactivate: [session_guard_service_1.SessionEditGuard],
                    component: session_edit_component_1.SessionEditComponent },
            ])
        ],
        declarations: [
            session_list_component_1.sessionListComponent,
            session_detail_component_1.sessionDetailComponent,
            session_edit_component_1.SessionEditComponent,
            session_filter_pipe_1.sessionFilterPipe
        ],
        providers: [
            session_service_1.SessionService,
            session_guard_service_1.sessionDetailGuard,
            session_guard_service_1.SessionEditGuard
        ]
    })
], SessionModule);
exports.SessionModule = SessionModule;
//# sourceMappingURL=session.module.js.map