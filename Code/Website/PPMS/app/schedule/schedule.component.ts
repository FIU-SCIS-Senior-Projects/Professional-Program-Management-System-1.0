import { Component } from '@angular/core';

import { User } from '../_models/index';
import { UserService } from '../_services/index';
import { Router, ActivatedRoute } from '@angular/router';
import {ITicket} from '../_models/ticket';
import {ITerm} from '../_models/term';
import {ICourse} from '../_models/course';
import {IOffering} from '../_models/offering';

import {ScheduleService} from '../schedule/schedule.service';

@Component({
    templateUrl: 'app/schedule/schedule.component.html'
})

export class ScheduleComponent {
    currentUser: User;
    users: User[] = [];
    terms: any[];
    courses: any[] ;
    offerings: IOffering[];
    offering :any;
    model: any = {};



    errorMessage: string;

    constructor(
            private scheduleService: ScheduleService,
            private router: Router,
        ) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

        if(this.currentUser == null){

            this.router.navigate(['/loginFail']);
        }
    }

    ngOnInit(): void {
        this.getOffering();
    }

        getOffering(){
            this.scheduleService
                    .getOffering()
                    .subscribe(offerings => {
                    this.offerings = offerings;
                });
        }

        isAdmin(){
             this.currentUser[0].userType == "Administrator";
        }

}