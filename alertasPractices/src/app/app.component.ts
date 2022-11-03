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

    showAlert() {
      this.success();
    }

    primary() {
    this.snackBar.open('Primary Alert', '' ,{
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: 'primary',
      duration: 10000
    });
     }
    accent() {
      this.snackBar.open('Accent Alert',' ', {
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
        panelClass: 'accent',
        duration: 10000
      });
    }
    warm() {
        this.snackBar.open('Warm Alert', 'Close', {
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
          panelClass: 'warm',
          duration: 10000,
        });
     }
   success() {
    this.snackBar.open('Succes Alert', 'Close',{
      panelClass: 'primary',
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 10000
    });
    }
}




