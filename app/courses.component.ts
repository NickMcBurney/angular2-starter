
import {Component} from 'angular2/core'
// angular final - changed to ->    import {Component} from '@angular/core'

import {CourseService} from './course.service'
import {AutoGrowDirective} from './auto-grow.directive'

@Component({
    selector: 'courses',
    template: `
        <h2>Courses</h2>
        <h3>{{title}}</h3>
        <input type="text" autoGrow />
        <ul>
            <li *ngFor="#course of courses">
                {{ course }}
            </li>
        </ul>
    `,
    providers: [CourseService],
    directives: [AutoGrowDirective]
})
export class CoursesComponent {
    title = "The title of the courses page";
    courses;

    constructor(courseService: CourseService){
        this.courses = courseService.getCourses();
    }
}