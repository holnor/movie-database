package com.holnor.moviedatabase.controller;

import com.holnor.moviedatabase.domain.Movie;
import com.holnor.moviedatabase.dto.CreateMovieCommand;
import com.holnor.moviedatabase.dto.MovieDetail;
import com.holnor.moviedatabase.dto.MovieListItem;
import com.holnor.moviedatabase.service.MovieService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/movies")
public class MovieController {
    private MovieService movieService;

    public MovieController(MovieService movieService) {
        this.movieService = movieService;
    }

    @GetMapping
    public ResponseEntity<List<MovieListItem>> getAllMovies(){
        return new ResponseEntity<>(movieService.getAllMovies(), HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<MovieDetail> getMovie(@PathVariable Long id){
        return new ResponseEntity<>(movieService.getMovieDetail(id), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Void> createMovie(@RequestBody @Valid CreateMovieCommand movie){
        movieService.createMovie(movie);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }


}
