import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Joke } from './modules/joke.interface';

@Injectable({
  providedIn: 'root'
})
export class JokeService {
  private http = inject(HttpClient);
  private _url: string = 'https://v2.jokeapi.dev/joke/Programming';
  
  getJoke(): Observable<Joke[]> {
    return this.http.get<Joke[]>(this._url).pipe(
      map((response: any) => {
        return response.jokes || [response];
      })
    );
  }
}
