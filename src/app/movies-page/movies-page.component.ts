import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../movie';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css']
})
export class MoviesPageComponent {
  movies$: Observable<{}> = this.store.select(state => state.movies);
  constructor(private store: Store<{ movies: Movie[] >}) {}
  ngOnInit() {
    this.store.dispatch({ type: '[Movies Page] Load Movies' });
  }
}