import { Component } from '@angular/core';
import { User } from './_models/index';
import { UserService } from './_services/index';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
    selector: 'pm-app',
    template: `
    <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand'>{{pageTitle}}</a>
                <ul class='nav navbar-nav'>
                     <li><a [routerLink]="['/welcome']">Home</a></li>
                     <li><a [routerLink]="['/aboutUs']">About Us</a></li>
                     <li><a [routerLink]="['/session']">Information Sessions</a></li>
                          <li [ngSwitch]="isActive()">
                            <a *ngSwitchCase="'active'" [routerLink]="getLink()">My Account</a>
                            <a *ngSwitchCase="'inactive'" [routerLink]="['/login/register']">Login/Register</a>
                          </li>
                </ul>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
     </div>
     `
})
    
export class AppComponent {
    pageTitle: string = 'Professional Program Management System';
    currentUser: User;
    users: User[] = [];

        constructor(
            private userService: UserService,
            private router: Router
            ) {

            this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        }

    isActive():string{
        
        if(this.currentUser ==null){
            return "inactive";
        }
        else{
            return "active";
        }
    }

    getLink(){
        
            // if(this.currentUser.username == undefined){
            //     return '/loginFail' ;
            // }
            // else 
            if ((this.currentUser[0].UserType)=="Student"){

                return '/studentPage' ;

            }
            else if ((this.currentUser[0].UserType)=="Administrator"){
                return '/adminPage' ;

            }
            else{
                return '/guestPage' ;
            }

    }

       
}




