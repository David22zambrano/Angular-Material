import { Directive, ElementRef, HostListener, ViewContainerRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector:  '[size]'
})
export class directivas implements OnChanges{

  small: String  = '1rem';
  paddingSmall: String = '.5rem .5rem'
  
  medium: String = '1.4rem';
  paddingMedium: String = '1.5rem 1.5rem';
  
  long: String = '2rem';
  paddingLong: String = '2rem 2rem';
  
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
