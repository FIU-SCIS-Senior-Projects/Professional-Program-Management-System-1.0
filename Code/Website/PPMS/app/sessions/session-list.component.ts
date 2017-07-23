import { Component, OnInit }  from '@angular/core';

import { Isession } from './session';
import { SessionService } from './session.service';

@Component({
    templateUrl: 'app/sessions/session-list.component.html',
    styleUrls: ['app/sessions/session-list.component.css']
})
export class sessionListComponent implements OnInit {
    pageTitle: string = 'Session List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    errorMessage: string;

    sessions: Isession[];

    constructor(private _sessionService: SessionService) {

    }

    ngOnInit(): void {
        this._sessionService.getSessions()
                .subscribe(sessions => this.sessions = sessions,
                           error => this.errorMessage = <any>error);
    }


}
