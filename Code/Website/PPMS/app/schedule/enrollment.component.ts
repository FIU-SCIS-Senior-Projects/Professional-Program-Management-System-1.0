import { Component, OnInit }  from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';


import { IEnrollment } from '../_models/enrollment';
import { ScheduleService } from './schedule.service';

@Component({
    templateUrl: 'app/schedule/enrollment.component.html',
})
export class EnrollmentListComponent implements OnInit {

    pageTitle: string = 'Enrolled Students';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    errorMessage: string;


    constructor(private router: Router,
    private route: ActivatedRoute,
    private scheduleService: ScheduleService) { }

    enrollments: IEnrollment[];
    PantherCourseNumber = this.route.snapshot.params['PantherCourseNumber'];


    ngOnInit(): void {
        this.scheduleService.getEnrollment(this.PantherCourseNumber)
                .subscribe(enrollments => this.enrollments = enrollments,
                           error => this.errorMessage = <any>error)
    }


}
