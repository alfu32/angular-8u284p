import { Injectable } from '@angular/core';
import { Movie } from '../store/movie';

@Injectable()
export class MoviesService {

  constructor() { }

  public getAll(): Movie[]{
    return [];
  }
}