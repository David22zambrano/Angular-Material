import { Subject } from 'rxjs';
import { Injectable } from '@angular/core'
import { Router } from '@angular/router';

import { User } from './user.module';
import { AuthData } from './auth-data.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../app/Components/snackbar.component'

@Injectable()
export class  AuthService {
message = 'Exit component'
authChange = new Subject<boolean>()
private user: User | any;

constructor( private router: Router,private snackBar: MatSnackBar ){

}
registerUser(authData: AuthData){


this.user = {
    email: authData.email,
    userId: Math.round(Math.random() * 10000).toString() 
        };
        this.authSuccessfully()
    }
login(authData: AuthData){
    this.user = {
        email: authData.email,
        userId: Math.round(Math.random() * 10000).toString() 
            };
            this.authSuccessfully()
        }
        logout(){
            this.user = null
            this.authChange.next(false);
            this.router.navigate(['/login'])
        }
getUser(){
return this.user
    }
isAuth(){
      return  this.user != null
    }

private authSuccessfully(){
    this.authChange.next(true);
    this.router.navigate(['/training'])
    this.success();

}

success() {
  this.snackBar.openFromComponent(SnackbarComponent, {
    data: 'Sucess',
    panelClass: 'primary',
    duration: 1000
  });
}
primary() {
    this.snackBar.openFromComponent(SnackbarComponent, {
      data: 'Sucess',
      panelClass: 'primary',
      duration: 1000
    });
  }
  accent() {
    this.snackBar.openFromComponent(SnackbarComponent, {
      data: 'Sucess',
      panelClass: 'accent',
      duration: 1000
    });
  }
  warm() {
    this.snackBar.openFromComponent(SnackbarComponent, {
      data: 'Sucess',
      panelClass: 'warm',
      duration: 1000
    });
  }
}