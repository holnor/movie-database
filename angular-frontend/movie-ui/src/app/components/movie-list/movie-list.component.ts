import { Component } from '@angular/core';
import {Movie} from "../../models/movie";
import {MovieService} from "../../services/movie.service";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  movies!: Movie[];
  constructor(private movieService: MovieService) {}
}
