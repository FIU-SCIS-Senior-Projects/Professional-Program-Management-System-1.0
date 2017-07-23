import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../_models/index';

import {UserService} from '../_services/user.service';


@Component({
    moduleId: module.id,
    templateUrl: 'resetPassword.component.html'

})



export class ResetPasswordComponent {
    private route: ActivatedRoute;
    loading = false;
    UsernamePortal: string;
    currentUser: User;
    model: any = {};


    constructor(
        private userService: UserService,
        private router: Router,
) { }

    resetPassword() {
        this.loading = true;
        
        this.userService.reset(this.model)
            .subscribe(data=> {
                if(data==="Verification failed."){
                        this.router.navigate(['/verificationFail']);
                }
                    else{
                        this.goBack();
                    }
            });
    }

    goBack(){
        this.router.navigate(['/login']);
  }
}
