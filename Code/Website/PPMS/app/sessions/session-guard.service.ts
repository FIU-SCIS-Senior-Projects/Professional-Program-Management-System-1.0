import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, CanDeactivate } from '@angular/router';

import { SessionEditComponent } from './session-edit.component';

@Injectable()
export class sessionDetailGuard implements CanActivate {

    constructor(private _router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        let id = +route.url[1].path;
        if (isNaN(id) || id < 0) {
            alert('Invalid session Id');
            // start a new navigation to redirect to list page
            this._router.navigate(['/sessions']);
            // abort current navigation
            return false;
        };
        return true;
    }
}

@Injectable()
export  class SessionEditGuard implements CanDeactivate<SessionEditComponent> {

    canDeactivate(component: SessionEditComponent): boolean {
        if (component.sessionForm.dirty) {
            let productName = component.sessionForm.get('productName').value || 'New Product';
            return confirm(`Navigate away and lose all changes to ${productName}?`);
        }
        return true;
    }
}
