
//////////////////////////////////////////
// COMPONENT WILL FORMAT VAlUE ON INPUT
//////////////////////////////////////////

import {Component, Input} from 'angular2/core'
// angular final - changed to ->    import {Component} from '@angular/core'

@Component({
    selector: 'currencyInput',
    template: `
        <label>{{label}}</label>
        <input type="text" autoGrow [value]="value" (input)="value = formatCurrency($event.target.value)" />
        <p>Value: {{ value }}</p>
    `
})
export class CurrencyInput {
    @Input('label') label: string;
    //label = "Currency";
    value = "£0";

    formatCurrency(value){
        var v = value.replace('£', '');
        v = v.replace(',', '');

        v = v.split('.');
		
        var v1 = v[0];
		var v2 = v.length > 1 ? '.' + v[1] : '';
		var rgx = /(\d+)(\d{3})/;

		while (rgx.test(v1)) {
			v1 = v1.replace(rgx, '$1' + ',' + '$2');
		}

        return "£" + v1 + v2
    }

    constructor(){}
}