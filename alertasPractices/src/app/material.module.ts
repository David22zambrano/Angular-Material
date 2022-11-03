import { NgModule        } from '@angular/core';
import { CommonModule    } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSnackBar,MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';

import { MatCheckboxModule   } from '@angular/material/checkbox';
import { MatSidenav, MatSidenavModule    } from '@angular/material/sidenav';
import { MatToolbarModule    } from '@angular/material/toolbar';
import { MatListModule       } from '@angular/material/list';
import { MatTabsModule       } from '@angular/material/tabs';
import { MatRadioModule      } from '@angular/material/radio';


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
  MatRadioModule

]

@NgModule({
  declarations: [],
  imports: [componets],
  exports: [componets]
})
export class MaterialModule { }
