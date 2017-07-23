import { Component } from '@angular/core';

@Component({
    templateUrl: 'app/login/verificationFail.component.html'
})
export class VerificationFailComponent {
    public pageTitle: string = 'Verification Failed.';
    public pageSubtitle: string = 'Plase verify your private code or request a new one.';

}
