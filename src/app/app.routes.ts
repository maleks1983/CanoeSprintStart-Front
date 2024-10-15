import { Routes } from '@angular/router';
import {TableAthleteComponent} from './component/main/table-athlete/table-athlete.component';
import {TableTrainerComponent} from './component/main/table-trainer/table-trainer.component';

export const routes: Routes = [
  { path: 'athletes', component: TableAthleteComponent },
  { path: 'trainer/:id', component: TableTrainerComponent },
];
