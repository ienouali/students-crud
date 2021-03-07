import {Directive} from "@angular/core";

@Directive({
    selector : '[IsGreatThanTen]'
  })
export class IsGreatThanTenDirective {
  constructor() {
    console.log('Directive instanced');
  }
}
