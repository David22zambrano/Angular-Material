export interface Exercise {

    id: string;
    name: String;
    duration: Number;
    calories: Number;
    date?: Date;
    state?: 'completede' | 'canceled' | null;

}