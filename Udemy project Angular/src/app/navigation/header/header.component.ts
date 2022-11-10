import { OverlayContainer } from '@angular/cdk/overlay';
import { MatSlideToggleChange, MatSlideToggleRequiredValidator } from '@angular/material/slide-toggle';

import { Component, OnInit, EventEmitter, Output, OnDestroy, HostBinding } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from 'src/app/auth/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  isChecked:boolean = false;
  mode:String = "nightlight_round";

  @Output() sidenavToggle = new EventEmitter<void>();
  isAuth = false;
  authSubscription: Subscription | any;

  constructor(private authService: AuthService, private overlayContainer: OverlayContainer) {
    const darkTheme = 'dark-theme';
const container = this.overlayContainer.getContainerElement().classList;
   }

  ngOnInit() {
    this.authSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    });
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  onLogout() {
    this.authService.logout();
  }
  

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

  changed(event:MatSlideToggleChange):void{
    this.mode = event.checked ? "nightlight_round" : "light_mode";
    document.body.classList.toggle('dark-theme');
      }
}


