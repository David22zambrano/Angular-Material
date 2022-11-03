import { Component } from '@angular/core';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { SnackbarComponent } from './app/Components/snackbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title= 'angular practices'
constructor(private snackBar: MatSnackBar){}

  onToggle(){ }
  // pizzaParty() {
  //   this.openSnackBar(this.message, 'pizza-party');
  // }

  // openSnackBar(message: string, panelClass: string) {
  // this.snackBar.openFromComponent(SnackbarComponent, {
  //   data: message,
  //   panelClass: panelClass,
  //   duration: 10000
  // });
// }

}
