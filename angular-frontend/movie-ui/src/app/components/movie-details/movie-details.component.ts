import { Component } from '@angular/core';
import {Movie} from "../../models/movie";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {
movie: Movie = {
  id: 1,
  title: "Bélabá",
  director: "Sanyi",
  year: 2000
};

}

