import {ITerm} from './term';
/* Defines the offering entity */
export interface IOffering {
    PantherCourseNumber: number;
    Section: string;
    Classroom: string;
    Schedule: string;
    EnrollmentCap: number;
    EvaluationResponseCount: number;
    InstructorID: number;
    TermID: number;
    CourseNumber: number;
    courses: any;
    terms: ITerm[];
    users: any;
    textbooks: any;
    employees: any;


}