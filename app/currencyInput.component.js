//////////////////////////////////////////
// COMPONENT WILL FORMAT VAlUE ON INPUT
//////////////////////////////////////////
System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var CurrencyInput;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            // angular final - changed to ->    import {Component} from '@angular/core'
            CurrencyInput = (function () {
                function CurrencyInput() {
                    //label = "Currency";
                    this.value = "£0";
                }
                CurrencyInput.prototype.formatCurrency = function (value) {
                    var v = value.replace('£', '');
                    v = v.replace(',', '');
                    v = v.split('.');
                    var v1 = v[0];
                    var v2 = v.length > 1 ? '.' + v[1] : '';
                    var rgx = /(\d+)(\d{3})/;
                    while (rgx.test(v1)) {
                        v1 = v1.replace(rgx, '$1' + ',' + '$2');
                    }
                    return "£" + v1 + v2;
                };
                __decorate([
                    core_1.Input('label'), 
                    __metadata('design:type', String)
                ], CurrencyInput.prototype, "label", void 0);
                CurrencyInput = __decorate([
                    core_1.Component({
                        selector: 'currencyInput',
                        template: "\n        <label>{{label}}</label>\n        <input type=\"text\" autoGrow [value]=\"value\" (input)=\"value = formatCurrency($event.target.value)\" />\n        <p>Value: {{ value }}</p>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], CurrencyInput);
                return CurrencyInput;
            }());
            exports_1("CurrencyInput", CurrencyInput);
        }
    }
});
//# sourceMappingURL=currencyInput.component.js.map