import { CommonModule } from "@angular/common";
import { Component, OnInit, inject } from "@angular/core";
import { JokeService } from "../jokes.service";
import { Joke } from "../modules/joke.interface";

@Component({
  selector: 'app-joke',
  standalone: true,
  templateUrl: './app-joke.component.html',
  styleUrls: ['./app-joke.component.css'],
  imports: [CommonModule]
})
export class JokeListComponent implements OnInit {
  data: Joke[] = [];

  private jokeService = inject(JokeService);

  ngOnInit(): void {
    this.jokeService.getJoke().subscribe((data) => {
      this.data = data;
      console.log(this.data);
    });
  }

  trackByIndex(index: number, item: Joke): number {
    return index;
  }
}
