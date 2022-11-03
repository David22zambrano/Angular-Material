import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';

const components = [
  CommonModule,
  MatButtonModule,
  MatSelectModule,
  MatDividerModule,
  MatIconModule
]

@NgModule({
  declarations: [],
  imports: [components],
  exports: [components]
})
export class MaterialModule { }
