import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JokeListComponent } from './app-joke/app-joke.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,JokeListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'joke';
}
