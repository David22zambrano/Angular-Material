import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, OnInit, EventEmitter, HostBinding } from '@angular/core';
import { MatSlideToggleChange, MatSlideToggleRequiredValidator } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {
  isChecked:boolean = false;
  mode:String = "nightlight_round";

constructor(private overlayContainer: OverlayContainer){
const darkTheme = 'dark-theme';
const container = this.overlayContainer.getContainerElement().classList;
}
ngOninit(){

}
  changed(event:MatSlideToggleChange):void{
this.mode = event.checked ? "nightlight_round" : "light_mode";
document.body.classList.toggle('dark-theme');
  }

}
