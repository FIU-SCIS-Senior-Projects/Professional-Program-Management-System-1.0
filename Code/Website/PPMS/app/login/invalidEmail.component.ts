import { Component } from '@angular/core';

@Component({
    templateUrl: 'app/login/invalidEmail.component.html'
})
export class InvalidEmailComponent {
    public pageTitle: string = 'Invalid Email!';
    public pageSubtitle: string = 'Please try again.';

}
