import { Component } from '@angular/core';

import { User } from '../_models/index';
import { UserService } from '../_services/index';
import { Router, ActivatedRoute } from '@angular/router';
import {ITicket} from '../_models/ticket';
import {TicketService} from '../tickets/ticket.service';


@Component({
    templateUrl: 'app/users/adminPage.component.html'
})

export class AdminPageComponent {
    currentUser: User;
    users: User[] = [];
    tickets: ITicket[];
    errorMessage: string;

    constructor(
            private userService: UserService,
            private router: Router,
            private ticketService: TicketService
        ) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

        if(this.currentUser == null){

            this.router.navigate(['/loginFail']);
        }
    }

    ngOnInit(): void {
        this.ticketService.getTickets()
                .subscribe(
                    tickets => this.tickets = tickets,
                           error => this.errorMessage = <any>error);
    }
    

}