
import { Injectable } from '@angular/core';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@Injectable({
   providedIn: 'root',
})

export class notiferService { 
    constructor( private alert: MatSnackBarModule){ }

    showAlert( displayMessaje: String, button: String){
       
     }
    
}
 
