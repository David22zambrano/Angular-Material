import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { StopTrainingComponent } from './stop-current-training.component';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.scss']
})
export class CurrentTrainingComponent implements OnInit {
  @Output() trainingExit =  new EventEmitter()
progress = 0;
timer: Number | any;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.startResumeTimer();
  }

  startResumeTimer(){
    this.timer = setInterval(()=>{
        this.progress = this.progress + 5;
        if( this.progress >= 100){
    clearInterval(this.timer);
        }
    }, 1000);

  }
  onStop(){
    clearInterval(this.timer);  
    const dialogRef = this.dialog.open(StopTrainingComponent, { data : {
    progress: this.progress 
  }});
  dialogRef.afterClosed().subscribe(result =>{
    if(result){
      this.trainingExit.emit();
    } else {
      this.startResumeTimer()
    }
  })
  }
}
