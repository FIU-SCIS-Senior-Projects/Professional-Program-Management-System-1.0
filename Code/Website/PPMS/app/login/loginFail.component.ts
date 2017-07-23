import { Component } from '@angular/core';

@Component({
    templateUrl: 'app/login/loginFail.component.html'
})
export class LoginFailComponent {
    public pageTitle: string = 'Username and password are incorrect.';
    public pageSubtitle: string = 'Please try again.';

}
