import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { sessionListComponent } from './session-list.component';
import { sessionDetailComponent } from './session-detail.component';
import { sessionDetailGuard, SessionEditGuard } from './session-guard.service';
import { SessionEditComponent } from './session-edit.component';

import { sessionFilterPipe } from './session-filter.pipe';
import { SessionService } from './session.service';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'session', component: sessionListComponent },
      { path: 'session/:id',
        canActivate: [ sessionDetailGuard],
        component: sessionDetailComponent
      },
      { path: 'sessionEdit/:id',
        canDeactivate: [ SessionEditGuard ],
        component: SessionEditComponent },
    ])
  ],
  declarations: [
    sessionListComponent,
    sessionDetailComponent,
    SessionEditComponent,
    sessionFilterPipe
  ],
  providers: [
    SessionService,
    sessionDetailGuard,
    SessionEditGuard
  ]
})
export class SessionModule {}
