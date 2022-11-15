import { NgModule         } from '@angular/core';
import { BrowserModule    } from '@angular/platform-browser';
import { materialModule   } from './material.module'
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule      } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService      } from './auth/auth.service'; 

import { AppComponent          } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SingupComponent       } from './auth/singup/singup.component';
import { LoginComponent        } from './auth/login/login.component';
import { TrainingComponent     } from './training/training.component';
import { CurrentTrainingComponent } from './training/current-training/current-training.component';
import { NewTrainingComponent  } from './training/new-training/new-training.component';
import { PastTrainingsComponent} from './training/past-trainings/past-trainings.component';
import { WelcomeComponent      } from './welcome/welcome.component';
import { AppRoutingModule      } from './app.routing.module';
import { HeaderComponent       } from './navigation/header/header.component';
import { SidenavListComponent  } from './navigation/sidenav-list/sidenav-list.component';
import { StopTrainingComponent } from './training/current-training/stop-current-training.component';


import { SnackbarComponent } from './app/Components/snackbar.component';
import { MatSnackBarModule     } from '@angular/material/snack-bar';
import {MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';
import { DirectivasDirective } from './directivas/directivas.directive';


@NgModule({
  declarations: [
    AppComponent,
    SingupComponent,
    LoginComponent,
    TrainingComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingsComponent,
    WelcomeComponent,
    HeaderComponent,
    SidenavListComponent,
    StopTrainingComponent,
    SnackbarComponent,
    DirectivasDirective,
  

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    materialModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule
    
  ],
  providers: [AuthService, { provide: MAT_SNACK_BAR_DATA, useValue: {} }],
  bootstrap: [AppComponent],
  entryComponents: [StopTrainingComponent]
})
export class AppModule { }
