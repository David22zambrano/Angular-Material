import { Directive, ElementRef, HostListener, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: 'botton[size]'
})
export class SmallBottonDirective {



constructor(private elRef: ElementRef) { 

}
@Input() size: String | any;
createComponent(){

}
}
