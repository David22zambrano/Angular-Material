import {Component, Inject,OnInit } from '@angular/core';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import { SnackbarComponent } from './components/snackbar/snackbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Alertas Practices';
  constructor(
    public snackBar: MatSnackBar
  ) {}

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
        duration: 10000
      });
      }

    primary() {
    this.snackBar.open('Primary Alert', ' X ' ,{
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: 'primary',
      duration: 10000
    });
     }
    accent() {
      this.snackBar.open('Accent Alert',' CLOSE', {
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
        panelClass: 'accent',
        duration: 10000
      });
    }
    warm() {
        this.snackBar.open('Warm Alert', 'OK', {
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
          panelClass: 'warm',
          duration: 10000,
        });
     }

}




