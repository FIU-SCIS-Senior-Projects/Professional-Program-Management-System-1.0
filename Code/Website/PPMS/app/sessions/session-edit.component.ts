import { Component, OnInit, AfterViewInit, OnDestroy, ViewChildren, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators, FormControlName } from '@angular/forms';
import { ActivatedRoute, Router  } from '@angular/router';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { Isession } from './session';
import { SessionService } from './session.service';

import { NumberValidators } from '../shared/number.validator';
import { GenericValidator } from '../shared/generic-validator';

@Component({
    templateUrl: 'app/sessions/session-edit.component.html'
})
export class SessionEditComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

    pageTitle: string = 'Session Edit';
    errorMessage: string;
    sessionForm: FormGroup;

    session: Isession;
    private sub: Subscription;

    // Use with the generic validation message class
    displayMessage: { [key: string]: string } = {};
    private validationMessages: { [key: string]: { [key: string]: string } };
    private genericValidator: GenericValidator;



    constructor(private fb: FormBuilder,
                private route: ActivatedRoute,
                private router: Router,
                private sessionService: SessionService) {

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
        this.genericValidator = new GenericValidator(this.validationMessages);
    }

    ngOnInit(): void {
        this.sessionForm = this.fb.group({
            sessionName: ['', [Validators.required,
                               Validators.minLength(3),
                               Validators.maxLength(50)]],
            sessionCode: ['', Validators.required],
            description: ''
        });

        // Read the session Id from the route parameter
        this.sub = this.route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getSession(id);
            }
        );
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    ngAfterViewInit(): void {
        // Watch for the blur event from any input element on the form.
        let controlBlurs: Observable<any>[] = this.formInputElements
            .map((formControl: ElementRef) => Observable.fromEvent(formControl.nativeElement, 'blur'));

        // Merge the blur event observable with the valueChanges observable
        Observable.merge(this.sessionForm.valueChanges, ...controlBlurs).debounceTime(800).subscribe(value => {
            this.displayMessage = this.genericValidator.processMessages(this.sessionForm);
        });
    }



    getSession(id: number): void {
        this.sessionService.getSession(id)
            .subscribe(
                (session: Isession) => this.onSessionRetrieved(session),
                (error: any) => this.errorMessage = <any>error
            );
    }

    onSessionRetrieved(session: Isession): void {
        if (this.sessionForm) {
            this.sessionForm.reset();
        }
        this.session = session;

        if (this.session.id === 0) {
            this.pageTitle = 'Add Session';
        } else {
            this.pageTitle = `Edit Session: ${this.session.sessionName}`;
        }

        // Update the data on the form
        this.sessionForm.patchValue({
            sessionName: this.session.sessionName,
            sessionCode: this.session.sessionCode,
            description: this.session.description
        });
    }

    deleteSession(): void {
        if (this.session.id === 0) {
            // Don't delete, it was never saved.
            this.onSaveComplete();
       } else {
            if (confirm(`Really delete the session: ${this.session.sessionName}?`)) {
                this.sessionService.deleteSession(this.session.id)
                    .subscribe(
                        () => this.onSaveComplete(),
                        (error: any) => this.errorMessage = <any>error
                    );
            }
        }
    }

    saveSession(): void {
        if (this.sessionForm.dirty && this.sessionForm.valid) {
            // Copy the form values over the session object values
            let p = Object.assign({}, this.session, this.sessionForm.value);

            this.sessionService.saveSession(p)
                .subscribe(
                    () => this.onSaveComplete(),
                    (error: any) => this.errorMessage = <any>error
                );
        } else if (!this.sessionForm.dirty) {
            this.onSaveComplete();
        }
    }

    onSaveComplete(): void {
        // Reset the form to clear the flags
        this.sessionForm.reset();
        this.router.navigate(['/sessions']);
    }
}
