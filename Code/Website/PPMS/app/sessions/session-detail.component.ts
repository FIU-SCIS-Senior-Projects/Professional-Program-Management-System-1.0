import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription }       from 'rxjs/Subscription';

import { Isession } from './session';
import { SessionService } from './session.service';

@Component({
    templateUrl: 'app/sessions/session-detail.component.html'
})
export class sessionDetailComponent implements OnInit, OnDestroy {
    pageTitle: string = 'Session Detail';
    session: Isession;
    errorMessage: string;
    private sub: Subscription;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private sessionService: SessionService) {
    }

    ngOnInit(): void {
        this.sub = this.route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getsession(id);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getsession(id: number) {
        this.sessionService.getSession(id).subscribe(
            session => this.session = session,
            error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this.router.navigate(['/sessions']);
    }

}
