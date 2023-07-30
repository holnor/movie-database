import {Component} from '@angular/core';
import {Movie} from "../../models/movie";
import {MovieService} from "../../services/movie.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  movies: Movie[] = [];
  isFetching = false;

  constructor(private movieService: MovieService, private router: Router) {}

  ngOnInit() {
    this.isFetching = true;
    this.movieService.getAllMovies().subscribe(response => {
      this.movies = response;
      this.isFetching = false;
    });
  }

  openMovieDetails(movieId: number | undefined) { //Ilyet ne csináljunk! Helyette Partial<T> a ? helyette a modellben
    this.router.navigate(['/movie-details', movieId]);
  }

  deleteMovie(id: number | undefined) {
    this.movieService.deleteMovie(id).subscribe(response =>{
      console.log(response)
    })
  }
}
