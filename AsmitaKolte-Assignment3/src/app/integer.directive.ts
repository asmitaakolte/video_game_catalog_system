import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[mustbeint]',
  providers: [{provide: NG_VALIDATORS, useExisting: IntegerDirective, multi: true }],
  standalone: true
})
export class IntegerDirective implements Validator{

  
  constructor() { }

  //@Input("mustbeint") variable: string;
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    //get the value from the form
    let v = +control.value;
    //check to see if NaN
    if (isNaN(v)) {
      return { 'notint': true, 'message': 'Must Be An Integer'};
    }

    //is int?
    if (v % 1 != 0) {
      return { 'notint': true, 'message': 'Must Be An Integer'};
    }

    //no errors, return null  
    return null;



  }
  

}