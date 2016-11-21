
//////////////////////////////////////////
// COMPONENT WILL ADD/REMOVE CLASS ON CLICK
//////////////////////////////////////////

import {Component} from 'angular2/core'

@Component({
    selector: 'star-icon',
    template: `
        <i class="glyphicon" style="font-size: 3em; padding: 20px;"
        [class.glyphicon-star-empty]="!isFavourite"
        [class.glyphicon-star]="isFavourite"
        (click)="onClick()"
        ></i>
    `,
})
export class StarIcon {
    isFavourite = false;

    onClick(){
        this.isFavourite = !this.isFavourite;
    }


    constructor(){}
}