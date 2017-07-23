import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { ScheduleService } from './schedule.service';
import { ITextbook } from '../_models/textbook';

@Component({
  selector: 'app-show',
  templateUrl: 'app/schedule/textbook.component.html'
})
export class TextbookComponent implements OnInit {

   constructor(
    private router: Router,
    private route: ActivatedRoute,
    private scheduleService: ScheduleService) { }

  textbook: ITextbook;
  PantherCourseNumber = this.route.snapshot.params['PantherCourseNumber'];

  ngOnInit() {
      this.getTextbook();
  }


  getTextbook(){
    this.scheduleService
      .getTextbook(this.PantherCourseNumber)
      .subscribe(textbook =>{
            this.textbook = textbook[0];
        })   
  };
 
}