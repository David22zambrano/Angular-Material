import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';

const components = [
  CommonModule,
  MatButtonModule,
  MatIconModule,
  MatDividerModule

]
@NgModule({
  imports: [components],
   exports: [components]
})
export class MaterialModule { }
