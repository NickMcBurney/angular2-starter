import {Component} from 'angular2/core';

import {CoursesComponent} from './courses.component';
import {AuthorComponent} from './authors.component';
import {CurrencyInput} from './currencyInput.component';
import {StarIcon} from './star.component'

@Component({
    selector: 'my-app',
    template: `<div [style.padding]="80">
        <h1>My First Angular 2 App</h1>
        <courses></courses>
        <authors></authors>
        <currencyInput></currencyInput>
        <star-icon></star-icon>
      </div>
    `
    directives: [CoursesComponent, AuthorComponent, CurrencyInput, StarIcon]
})
export class AppComponent { }