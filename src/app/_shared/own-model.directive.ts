import {Directive, ElementRef, EventEmitter, Input, OnInit, Output} from "@angular/core";

@Directive({
  selector : '[ownModel]'
})
export class OwnModelDirective implements OnInit{

  @Input() ownModel;
  @Output() ownModelChange: EventEmitter<string> = new EventEmitter<string>();

  constructor(private element: ElementRef) {
    console.log(element.nativeElement)
    console.log("on constructor: ",this.ownModel);
  }

  ngOnInit() {
    console.log("on ngOnInit: ", this.ownModel);
    this.element.nativeElement.value = this.ownModel;
    this.element.nativeElement.addEventListener('keyup', (event) => {
      console.log('send : ', event.target.value);
      this.ownModelChange.emit(event.target.value)
    })
  }

}
