/*import { Component, OnInit, AfterViewInit, OnDestroy, ViewChildren, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators, FormControlName } from '@angular/forms';
import { ActivatedRoute, Router  } from '@angular/router';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { ISignUp } from './signUp';
import { SignUpService} from './signUp.service';
import { NumberValidators } from '../shared/number.validator';
import { GenericValidator } from '../shared/generic-validator';

@Component({
    templateUrl: 'app/sessions/session-edit.component.html'
})
export class SignUpComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

    pageTitle: string = 'Sign Up';
    errorMessage: string;
    signUpForm: FormGroup;
    signUp: ISignUp;
    private sub: Subscription;

    // Use with the generic validation message class
    displayMessage: { [key: string]: string } = {};
    private validationMessages: { [key: string]: { [key: string]: string } };
    private genericValidator: GenericValidator;

    constructor(private fb: FormBuilder,
                private route: ActivatedRoute,
                private router: Router,
                private SignUpService: SignUpService) {

        // Defines all of the validation messages for the form.
        // These could instead be retrieved from a file or database.
        this.validationMessages = {
            SignUpName: {
                required: 'SignUp name is required.',
                minlength: 'SignUp name must be at least three characters.',
                maxlength: 'SignUp name cannot exceed 50 characters.'
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
        this.signUpForm = this.fb.group({
            sessionName: ['', [Validators.required,
                               Validators.minLength(3),
                               Validators.maxLength(50)]],
            sessionCode: ['', Validators.required],
            description: ''
        });

        // Read the session Id from the route parameter
        this.sub = this.route.params.subscribe(
            params => {
                let username: = +params['username'];
                this.getSignUp(username);
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
        Observable.merge(this.signUpForm.valueChanges, ...controlBlurs).debounceTime(800).subscribe(value => {
            this.displayMessage = this.genericValidator.processMessages(this.signUpForm);
        });
    }



    getSignUp(username: string): void {
        this.SignUpService.getSignUp(username)
            .subscribe(
                (session: ISignUp) => this.onSignUpRetrieved(session),
                (error: any) => this.errorMessage = <any>error
            );
    }

    onSignUpRetrieved(session: ISignUp): void {
        if (this.signUpForm) {
            this.signUpForm.reset();
        }
        this.signUp = session;

        if (this.signUp.username === '') {
            this.pageTitle = 'Add Session';
        } else {
            this.pageTitle = `Edit Session: ${this.signUp.username}`;
        }

        // Update the data on the form
        this.signUpForm.patchValue({
            firstName:  this.signUp.firstName,
            lastName:   this.signUp.lastName,
            middleInitial: this.signUp.middleInitial,
            email:      this.signUp.email,
            password:   this.signUp.password,
            phone:      this.signUp.phone,
            gender:     this.signUp.gender,
            genderType: this.signUp.genderType,
            street1:    this.signUp.street1,
            street2:    this.signUp.street2,
            city:       this.signUp.city,
            state:      this.signUp.state,
            country:    this.signUp.country,
        });
    }

    deleteSession(): void {
        if (this.signUp.username === '') {
            // Don't delete, it was never saved.
            this.onSaveComplete();
       } else {
            if (confirm(`Really delete the session: ${this.signUp.firstName}?`)) {
                this.SignUpService.deleteSignUp(this.signUp.username)
                    .subscribe(
                        () => this.onSaveComplete(),
                        (error: any) => this.errorMessage = <any>error
                    );
            }
        }
    }

    saveSession(): void {
        if (this.signUpForm.dirty && this.signUpForm.valid) {
            // Copy the form values over the session object values
            let p = Object.assign({}, this.signUp, this.signUpForm.value);

            this.SignUpService.saveSignUp(p)
                .subscribe(
                    () => this.onSaveComplete(),
                    (error: any) => this.errorMessage = <any>error
                );
        } else if (!this.signUpForm.dirty) {
            this.onSaveComplete();
        }
    }

    onSaveComplete(): void {
        // Reset the form to clear the flags
        this.signUpForm.reset();
        this.router.navigate(['/sessions']);
    }
}*/
//# sourceMappingURL=signUp.component.js.map