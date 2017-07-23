import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../_services/user.service';

@Component({
    templateUrl: 'app/login/forgotPassword.component.html'
})
export class ForgotPasswordComponent {
    model: any = {};
    public pageTitle: string = 'Password Reset';
    loading = false;
    response: string;




 constructor(
        private router: Router,
        private userService: UserService) { 
        }

    resetPassword() {
        this.loading = true;
        this.userService.resetPassword(this.model)
            .subscribe( 
                mail => {

                    if(mail == true){
                        this.router.navigate(['/validEmail']);
                    }
                    else if (mail == 0){
                        this.router.navigate(['/invalidEmail']);
                    }
                    else{
                        console.log("Error Ocurred");
                        this.router.navigate(['/invalidEmail']);
                    }
                });
    }

}
