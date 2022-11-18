import { Directive, ElementRef, HostListener, ViewContainerRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[size]'
})
export class DirectivasDirective {
  small: String  = '1rem';
  paddingSmall: String = '.4rem .4rem'
  
  medium: String = '1.2rem';
  paddingMedium: String = '.8rem. 8rem';
  
  long: String = '1.4rem';
  paddingLong: String = '1rem 1rem';

  miniDataTable: String = '40%';
  tableFontSizeSmall: String = '1.2rem';
  tablePaddingSmall: String = '1rem 1rem';

  mediumDataTable: String = '70%';
  tableFontSizeMedium: String = '1,4rem';
  tablePaddingMedium: String = '1.2rem 1.2rem';
  

  longDataTable: String = '100%'
  tableFontSizeLong: String = '1rem';
  tablePaddingLong: String = '1.2rem 1.2rem';

  constructor(private el: ElementRef) {
    el.nativeElement.style.customProperty = true;
  }
  
  @Input() size: String | any ;
  
  ngOnChanges() {
    switch(this.size) {
      case 'small':
        this.el.nativeElement.style.paddingInline = this.paddingSmall,
        this.el.nativeElement.style.fontSize = this.small;
        return ;
        
        case 'medium':
          this.el.nativeElement.style.paddingInline = this.paddingMedium,
          this.el.nativeElement.style.fontSize = this.medium ;
          return ;
          
          
          case 'long':
            this.el.nativeElement.style.paddingInline = this.paddingLong,
            this.el.nativeElement.style.fontSize = this.long ;
            return 
            
          case 'smallDataTable':
          this.el.nativeElement.style.width = this.miniDataTable;
       this.el.nativeElement.style.fontSize = '8px';
        // this.setElement(this.el.nativeElement);
      
      // this.el.nativeElement.style.fontSize = this.tableFontSizeSmall;
      // this.el.nativeElement.style.paddingInline = this.tablePaddingSmall,
      return 

      case 'mediumDataTable' :
        this.el.nativeElement.style.width = this.mediumDataTable,
        this.el.nativeElement.style.fontSize = this.tableFontSizeMedium;
        return 

      case 'longDataTable' :
        this.el.nativeElement.style.width = this.longDataTable;
        return 

      default:
        break;
    }
  }
  setElement(el:HTMLElement){  

    if(el.tagName === "TABLE") {
       el.style.fontSize = "29px";
        }

    }
  }

