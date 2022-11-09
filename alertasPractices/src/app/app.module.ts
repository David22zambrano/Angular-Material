import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import { SnackbarComponent } from '../assets/componentes-material/snackbar/snackbar.component';
import {MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';

import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatTabComponent } from '../assets/componentes-material/mat-tab/mat-tab.component';
import { HeaderComponent } from '../assets/componentes-material/header/header.component';

  




@NgModule({
  declarations: [
    AppComponent,
    SnackbarComponent,
    MatTabComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSidenavModule,
  ],
  providers: [{ provide: MAT_SNACK_BAR_DATA, useValue: {} }],
  bootstrap: [AppComponent]
})
export class AppModule { }
