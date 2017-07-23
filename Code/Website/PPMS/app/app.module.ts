import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';




import { AppComponent }  from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { AboutUsComponent } from './home/aboutUs.component';
import { SessionModule } from './sessions/session.module';
import {RegistrationFailComponent} from './register/registrationFail.component';
import {RegistrationSuccessComponent} from './register/registrationSuccess.component';
import {EnrollmentListComponent} from './schedule/enrollment.component';




//Coppied
import { FormsModule }    from '@angular/forms';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

//import { routing }        from './app.routing';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import {TicketService } from './tickets/ticket.service';
import {ScheduleService } from './schedule/schedule.service';
import { LoginComponent } from './login/index';
import {LoginFailComponent} from './login/loginFail.component';
import {GuestPageComponent} from './users/guestPage.component';
import {StudentPageComponent} from './users/studentPage.component';
import {AdminPageComponent} from './users/adminPage.component';
import {AddTicketComponent} from './tickets/addTicket.component';
import {TicketDetailComponent} from './tickets/detail-ticket.component';
import {ForgotPasswordComponent} from './login/forgotPassword.component';
import {InvalidEmailComponent} from './login/invalidEmail.component';
import {ValidEmailComponent} from './login/validEmail.component';
import {ResetPasswordComponent} from './login/resetPassword.component';
import {RespondTicketComponent} from './tickets/respond-ticket.component';
import {ScheduleComponent} from './schedule/schedule.component';
import {TextbookComponent} from './schedule/textbook.component';
import {AddCourseComponent} from './schedule/add-schedule.component';
import {DuplicateUserEmailComponent} from './register/duplicate.component';
import {VerificationFailComponent} from './login/verificationFail.component';


 


import { RegisterComponent } from './register/index';

//EndCoppied

@NgModule({
  imports: [
    //Coppied
    FormsModule,
    //routing,
    FormsModule,
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'aboutUs', component: AboutUsComponent },
      { path: 'login/register', component: LoginComponent },  
      { path: 'register', component: RegisterComponent },
      { path: 'registrationFail', component: RegistrationFailComponent},
      { path: 'registrationSuccess', component: RegistrationSuccessComponent},
      { path: 'welcome', component: WelcomeComponent },
      { path: 'login', component: LoginComponent },
      { path:'loginFail', component: LoginFailComponent},
      { path: 'guestPage', component: GuestPageComponent},
      { path: 'studentPage', component: StudentPageComponent},
      { path: 'adminPage', component: AdminPageComponent},
      { path: 'detail/:TicketID', component: TicketDetailComponent},
      { path: 'respond/:TicketID', component: RespondTicketComponent},
      { path: 'addTicket', component: AddTicketComponent},
      { path: 'forgotPassword', component: ForgotPasswordComponent},
      { path: 'invalidEmail', component: InvalidEmailComponent},
      { path: 'verificationFail', component: VerificationFailComponent},
      { path: 'validEmail', component: ValidEmailComponent},
      { path : 'reset', component: ResetPasswordComponent},
      { path : 'schedule', component: ScheduleComponent},
      { path : 'addCourse', component: AddCourseComponent},
      { path : 'duplicate', component: DuplicateUserEmailComponent},
      { path : 'textbook/:PantherCourseNumber', component: TextbookComponent},
      { path : 'enrollment/:PantherCourseNumber', component: EnrollmentListComponent},
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: 'respond/:TicketID', component: RespondTicketComponent},
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    SessionModule
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    AboutUsComponent,
    RegistrationFailComponent,
    RegistrationSuccessComponent,
    LoginComponent,
    LoginFailComponent,
    GuestPageComponent,
    StudentPageComponent,
    AdminPageComponent,
    RegisterComponent,
    AddTicketComponent,
    ForgotPasswordComponent,
    TicketDetailComponent,
    InvalidEmailComponent,
    ValidEmailComponent,
    ResetPasswordComponent,
    RespondTicketComponent,
    ScheduleComponent,
    TextbookComponent,
    AddCourseComponent,
    DuplicateUserEmailComponent,
    EnrollmentListComponent,
    VerificationFailComponent
  ],
  providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        ScheduleService,
        BaseRequestOptions,
        TicketService
    ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
