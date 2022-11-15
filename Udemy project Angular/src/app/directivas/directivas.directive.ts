import { Directive, ElementRef, HostListener, ViewContainerRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[size]'
})
export class DirectivasDirective {

  
  small: String  = '1.2rem';
  paddingSmall: String = '.1rem .1rem'
  
  medium: String = '1.2rem';
  paddingMedium: String = '.8rem. 8rem';
  
  long: String = '1.4rem';
  paddingLong: String = '1rem 1rem';
  
  constructor(private el: ElementRef) {
  el.nativeElement.style.customProperty = true;
}

@Input() size: String | any ;

ngOnChanges() {
  
  switch(this.size) {
    case 'small':
      this.el.nativeElement.style.paddingInline = this.paddingSmall,
      this.el.nativeElement.style.fontSize = this.small;
      return
      
    case 'medium':
      this.el.nativeElement.style.paddingInline = this.paddingMedium,
      this.el.nativeElement.style.fontSize = this.medium ;
      return 
  
  
    case 'long':
      this.el.nativeElement.style.paddingInline = this.paddingLong,
      this.el.nativeElement.style.fontSize = this.long ;
      return ;
  
    default:
      break;
  }
}

}