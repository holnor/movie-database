import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Movie} from "../models/movie";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) {
  }

  getAllMovies() {
    return this.http.get<Movie[]>('http://localhost:8080/api/movies');
  }

  addMovie(movie: Movie) {
    return this.http.post<Movie>('http://localhost:8080/api/movies', movie, {observe: 'response'});
  }

  getMovieDetails(id: number | undefined) {
    return this.http.get<Movie>(`http://localhost:8080/api/movies/${id}`)
  }

  deleteMovie(id: number | undefined) {
    return this.http.delete<Movie>(`http://localhost:8080/api/movies/${id}`)
  }
}
