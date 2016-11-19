
import {Component} from 'angular2/core'

import {AuthorService} from './authors.service'

@Component({
    selector: 'authors',
    template: `
        <h2>Authors</h2>
        <h3>{{title}}</h3>
        <ul>
            <li *ngFor="#author of authors">
                {{ author }}
            </li>
        </ul>
    `,
    providers: [AuthorService]
})
export class AuthorComponent {
    title = "The title of the authors page";
    authors: string[];

    constructor(authorService: AuthorService){
        this.authors = authorService.getAuthors();
    }
}