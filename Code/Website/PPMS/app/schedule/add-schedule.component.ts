import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_models/index';
import { ScheduleService } from './schedule.service';


@Component({
    moduleId: module.id,
    templateUrl: 'add-schedule.component.html'

})

export class AddCourseComponent {

    loading = false;
    currentUser: User;
    model: any = {};


    constructor(
        private router: Router,
        private scheduleService: ScheduleService) { 

                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        }

    addCourse() {
        this.loading = true;

        this.scheduleService.addCourse(this.model)
            .subscribe(()=> this.goBack());
    }

    goBack(){
    this.router.navigate(['/schedule']);
  }
}
