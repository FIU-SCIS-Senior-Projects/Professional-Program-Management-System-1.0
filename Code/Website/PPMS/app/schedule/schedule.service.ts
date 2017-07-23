import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { ITerm } from '../_models/term';
import { ICourse } from '../_models/course';
import {IOffering} from '../_models/offering';
import { IEnrollment } from '../_models/enrollment';
import {ITextbook} from '../_models/textbook';



@Injectable()
export class ScheduleService {
    private baseUrl = 'http://104.236.52.204/';

    constructor(private http: Http) { }

checkMe:any;



    getTerms(): Observable<ITerm[]> {
        return this.http.get(this.baseUrl+'selectAllTerms.php')
            .map(res=>{
        this.checkMe = res;
       
        if(this.checkMe._body !== "0"){
           return res.json();
        }
       });
    }

    getCourses(): Observable<ICourse[]> {
        return this.http.get(this.baseUrl+'selectAllCourses.php')
            .map(res=>{
        this.checkMe = res;
       
        if(this.checkMe._body !== "0"){
           return res.json();
        }
       });
    }

    getOffering(): Observable<IOffering[]> {
        return this.http.get(this.baseUrl+'selectAllOffering.php')
            .map(res=>{
        this.checkMe = res;
       
        if(this.checkMe._body !== "0"){
           return res.json();
        }
       });
    }

    getTextbook(PantherCourseNumber:number): Observable<ITextbook[]> {
        return this.http.post(this.baseUrl+'selectTextbook.php',{'PantherCourseNumber':PantherCourseNumber})
            .map(res=>{
        this.checkMe = res;
       
        if(this.checkMe._body !== "0"){
           return res.json();
        }
       });
    }

    addCourse(info:any){
    return this.http.post(this.baseUrl+'addCourse.php', info)
      .map(()=>"");
    }

     getEnrollment(PantherCourseNumber:number): Observable<IEnrollment[]> {

        return this.http.post(this.baseUrl+'selectAllEnrolled.php', {'PantherCourseNumber':PantherCourseNumber})
            .map(res=>{
        this.checkMe = res;
       
        if(this.checkMe._body !== "0"){
           return res.json();
        }
       });
    }

}
