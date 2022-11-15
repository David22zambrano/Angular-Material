
import { Component, OnInit } from '@angular/core';
import { SnackbarComponent } from '../snackbar/snackbar.component';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import {FormBuilder, Validators} from '@angular/forms';

export interface Vegetable {
  name: string;
}
@Component({
  selector: 'app-mat-tab',
  templateUrl: './mat-tab.component.html',
  styleUrls: ['./mat-tab.component.scss']
})
export class MatTabComponent implements OnInit {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;
  constructor(public snackBar: MatSnackBar, private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  successAlert() {
    this.success();
  }
  infoAlert(){
    this.primary();
  }
  warningAlert(){
    this.accent()
  }
  errorAlert(){
    this.warm()
  }
  success() {
    this.snackBar.openFromComponent(SnackbarComponent,{
      panelClass: 'success',
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 3000
    });
    }

  primary() {
  this.snackBar.open('Primary Alert', ' X ' ,{
    horizontalPosition: 'center',
    verticalPosition: 'bottom',
    panelClass: 'primary',
    duration: 3000
  });
   }
  accent() {
    this.snackBar.open('Accent Alert',' CLOSE', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: 'accent',
      duration: 3000
    });
  }
  warm() {
      this.snackBar.open('Warm Alert', 'OK', {
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
        panelClass: 'warm',
        duration: 3000,
      });
   }

}
