"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var session_list_component_1 = require("./session-list.component");
var session_detail_component_1 = require("./session-detail.component");
var session_guard_service_1 = require("./session-guard.service");
var session_filter_pipe_1 = require("./session-filter.pipe");
var session_service_1 = require("./session.service");
var shared_module_1 = require("../shared/shared.module");
var sessionModule = (function () {
    function sessionModule() {
    }
    return sessionModule;
}());
sessionModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_module_1.SharedModule,
            router_1.RouterModule.forChild([
                { path: 'sessions', component: session_list_component_1.sessionListComponent },
                { path: 'session/:id',
                    canActivate: [session_guard_service_1.sessionDetailGuard],
                    component: session_detail_component_1.sessionDetailComponent
                }
            ])
        ],
        declarations: [
            session_list_component_1.sessionListComponent,
            session_detail_component_1.sessionDetailComponent,
            session_filter_pipe_1.sessionFilterPipe
        ],
        providers: [
            session_service_1.sessionService,
            session_guard_service_1.sessionDetailGuard
        ]
    })
], sessionModule);
exports.sessionModule = sessionModule;
//# sourceMappingURL=product.module.js.map