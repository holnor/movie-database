import {Component} from '@angular/core';
import {FormGroup, FormControl} from "@angular/forms";
import {Movie} from "../../models/movie";
import {MovieService} from "../../services/movie.service";
import {Validators} from "@angular/forms";

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent {

  constructor(private movieService: MovieService) {
  }

  get title() {
    return this.movieForm.get('title');
  }

  movieForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(5)]),
    director: new FormControl(''),
    year: new FormControl('')
  })

  createMovie() {
    // console.log(this.movieForm.value.title);
    let movie: Movie = {
      title: this.movieForm.value.title as string,
      director: this.movieForm.value.director as string,
      year: Number.parseInt(this.movieForm.value.year as string)
    }


    this.movieService.addMovie(movie).subscribe(response => {
      console.log(response)
    });
  }


}
