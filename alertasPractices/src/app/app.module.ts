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
import { ToolbarComponent } from '../assets/componentes-material/toolbar/toolbar.component';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTabComponent } from '../assets/componentes-material/mat-tab/mat-tab.component'



@NgModule({
  declarations: [
    AppComponent,
    SnackbarComponent,
    ToolbarComponent,
    MatTabComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    MatDialogModule,
    MatSnackBarModule,
    

  ],
  providers: [{ provide: MAT_SNACK_BAR_DATA, useValue: {} }],
  bootstrap: [AppComponent]
})
export class AppModule { }
