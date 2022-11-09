import { NgModule        } from '@angular/core';
import { CommonModule    } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSnackBar,MatSnackBarModule    } from '@angular/material/snack-bar';
import { MatIconModule                    } from '@angular/material/icon';

import { MatCheckboxModule                } from '@angular/material/checkbox';
import { MatSidenav, MatSidenavModule     } from '@angular/material/sidenav';
import { MatToolbarModule                 } from '@angular/material/toolbar';
import { MatListModule                    } from '@angular/material/list';
import { MatTabsModule                    } from '@angular/material/tabs';
import { MatRadioModule                   } from '@angular/material/radio';
import { MatSlideToggleModule             } from '@angular/material/slide-toggle';
import { MatCardModule                    } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule                   } from '@angular/material/chips';
import { MatProgressBarModule             } from '@angular/material/progress-bar';
import { MatDividerModule                 } from '@angular/material/divider';




const componets = [
  CommonModule,
  MatButtonModule,
  MatFormFieldModule,
  MatSnackBarModule,
  MatIconModule,
  MatToolbarModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatListModule,
  MatTabsModule,
  MatRadioModule,
  MatSlideToggleModule,
  FormsModule,
  ReactiveFormsModule,
  MatChipsModule,
  MatCardModule,
  MatProgressBarModule,
  MatDividerModule
]

@NgModule({
  declarations: [],
  imports: [componets],
  exports: [componets]
})
export class MaterialModule { }
