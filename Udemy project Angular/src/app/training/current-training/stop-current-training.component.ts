import { Component, Inject } from "@angular/core";
import {MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
    selector: 'app-stop-training',
    template: `<h1 mat-dialog-title> Are U sure? </h1>
        <mat-dialog-actions>
            <p>U alreay got {{passedData.progress}}%</p>     
        </mat-dialog-actions>
        <mat-dialog-content> 
            <button mat-button [mat-dialog-close]="true">Yes</button>
            <button mat-button [mat-dialog-close]="false">No</button>
        </mat-dialog-content>`
})
export class StopTrainingComponent {
    constructor (@Inject(MAT_DIALOG_DATA) public passedData: any ){}
}