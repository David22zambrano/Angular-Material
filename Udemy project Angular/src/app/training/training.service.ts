import { Exercise} from './current-training/exercise.module';
export class TrainingService {

    avaliableExercises: Exercise[] = [
        { id: 'crunches' ,name: 'Crunches', duration: 30, calories: 8 },
        { id: 'touch-toes' ,name: 'Touch Toes', duration:180, calories: 10 },
        { id: 'side-lunges' ,name: 'side Lunges', duration: 120, calories: 18 },
        { id: 'burpees' ,name: 'Burpees', duration: 60, calories: 8 }
    ]
    getAvaliableExercises(){
        return this.avaliableExercises.slice();
    }
}