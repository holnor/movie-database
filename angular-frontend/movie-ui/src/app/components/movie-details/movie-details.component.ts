import {Component} from '@angular/core';
import {Movie} from "../../models/movie";
import {MovieService} from "../../services/movie.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {
  movieId: number | undefined
  movie:Movie | undefined;

  constructor(private movieService: MovieService, private route: ActivatedRoute) {
    this.route.params.subscribe(params=>{
      this.movieId = params['id'];
    })
  }

  ngOnInit(){
    this.movieService.getMovieDetails(this.movieId).subscribe(response =>{
      this.movie = response;
    })

}
}

