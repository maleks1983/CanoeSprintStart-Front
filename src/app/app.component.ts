import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {TableAthleteComponent} from './component/main/table-athlete/table-athlete.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TableAthleteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CanoeSprintStartFront';
}
