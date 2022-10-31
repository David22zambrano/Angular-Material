import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { TrainingService } from '../training.service';
import { Exercise } from '../current-training/exercise.module';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss']
})
export class NewTrainingComponent implements OnInit {

@Output() TrainingStart = new EventEmitter<void>();
exercises: Exercise[] = [
  
];
  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.exercises = this.trainingService.avaliableExercises;
  }
  onStartTraining(){
    this.TrainingStart.emit()
  }
}
