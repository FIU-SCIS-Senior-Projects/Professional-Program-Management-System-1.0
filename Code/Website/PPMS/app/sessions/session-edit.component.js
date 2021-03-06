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
var forms_1 = require("@angular/forms");
var router_2 = require("@angular/router");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/observable/fromEvent");
require("rxjs/add/observable/merge");
var Observable_1 = require("rxjs/Observable");
var session_service_1 = require("./session.service");
var generic_validator_1 = require("../shared/generic-validator");
var SessionEditComponent = (function () {
    function SessionEditComponent(fb, route, router, sessionService) {
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.sessionService = sessionService;
        this.pageTitle = 'Session Edit';
        // Use with the generic validation message class
        this.displayMessage = {};
        // Defines all of the validation messages for the form.
        // These could instead be retrieved from a file or database.
        this.validationMessages = {
            sessionName: {
                required: 'Session name is required.',
                minlength: 'Session name must be at least three characters.',
                maxlength: 'Session name cannot exceed 50 characters.'
            },
            sessionCode: {
                required: 'Session code is required.'
            },
        };
        // Define an instance of the validator for use with this form, 
        // passing in this form's set of validation messages.
        this.genericValidator = new generic_validator_1.GenericValidator(this.validationMessages);
    }
    SessionEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sessionForm = this.fb.group({
            sessionName: ['', [forms_1.Validators.required,
                    forms_1.Validators.minLength(3),
                    forms_1.Validators.maxLength(50)]],
            sessionCode: ['', forms_1.Validators.required],
            description: ''
        });
        // Read the session Id from the route parameter
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.getSession(id);
        });
    };
    SessionEditComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    SessionEditComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // Watch for the blur event from any input element on the form.
        var controlBlurs = this.formInputElements
            .map(function (formControl) { return Observable_1.Observable.fromEvent(formControl.nativeElement, 'blur'); });
        // Merge the blur event observable with the valueChanges observable
        Observable_1.Observable.merge.apply(Observable_1.Observable, [this.sessionForm.valueChanges].concat(controlBlurs)).debounceTime(800).subscribe(function (value) {
            _this.displayMessage = _this.genericValidator.processMessages(_this.sessionForm);
        });
    };
    SessionEditComponent.prototype.getSession = function (id) {
        var _this = this;
        this.sessionService.getSession(id)
            .subscribe(function (session) { return _this.onSessionRetrieved(session); }, function (error) { return _this.errorMessage = error; });
    };
    SessionEditComponent.prototype.onSessionRetrieved = function (session) {
        if (this.sessionForm) {
            this.sessionForm.reset();
        }
        this.session = session;
        if (this.session.id === 0) {
            this.pageTitle = 'Add Session';
        }
        else {
            this.pageTitle = "Edit Session: " + this.session.sessionName;
        }
        // Update the data on the form
        this.sessionForm.patchValue({
            sessionName: this.session.sessionName,
            sessionCode: this.session.sessionCode,
            description: this.session.description
        });
    };
    SessionEditComponent.prototype.deleteSession = function () {
        var _this = this;
        if (this.session.id === 0) {
            // Don't delete, it was never saved.
            this.onSaveComplete();
        }
        else {
            if (confirm("Really delete the session: " + this.session.sessionName + "?")) {
                this.sessionService.deleteSession(this.session.id)
                    .subscribe(function () { return _this.onSaveComplete(); }, function (error) { return _this.errorMessage = error; });
            }
        }
    };
    SessionEditComponent.prototype.saveSession = function () {
        var _this = this;
        if (this.sessionForm.dirty && this.sessionForm.valid) {
            // Copy the form values over the session object values
            var p = Object.assign({}, this.session, this.sessionForm.value);
            this.sessionService.saveSession(p)
                .subscribe(function () { return _this.onSaveComplete(); }, function (error) { return _this.errorMessage = error; });
        }
        else if (!this.sessionForm.dirty) {
            this.onSaveComplete();
        }
    };
    SessionEditComponent.prototype.onSaveComplete = function () {
        // Reset the form to clear the flags
        this.sessionForm.reset();
        this.router.navigate(['/sessions']);
    };
    return SessionEditComponent;
}());
__decorate([
    core_1.ViewChildren(forms_1.FormControlName, { read: core_1.ElementRef }),
    __metadata("design:type", Array)
], SessionEditComponent.prototype, "formInputElements", void 0);
SessionEditComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/sessions/session-edit.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        router_2.ActivatedRoute,
        router_2.Router,
        session_service_1.SessionService])
], SessionEditComponent);
exports.SessionEditComponent = SessionEditComponent;
//# sourceMappingURL=session-edit.component.js.map