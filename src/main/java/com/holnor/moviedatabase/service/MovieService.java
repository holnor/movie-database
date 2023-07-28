package com.holnor.moviedatabase.service;

import com.holnor.moviedatabase.domain.Movie;
import com.holnor.moviedatabase.dto.CreateMovieCommand;
import com.holnor.moviedatabase.dto.MovieDetail;
import com.holnor.moviedatabase.dto.MovieListItem;
import com.holnor.moviedatabase.repository.MovieRepository;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class MovieService {
    private MovieRepository movieRepository;

    public MovieService(MovieRepository movieRepository) {
        this.movieRepository = movieRepository;
    }


    public List<MovieListItem> getAllMovies() {
        return movieRepository.findAll().stream()
                .map(MovieListItem::new).collect(Collectors.toList());
    }

    public Movie createMovie(CreateMovieCommand movie) {
        Movie movieToSave = new Movie(
                movie.getTitle(),
                movie.getDirector(),
                movie.getYear()
        );
        return movieRepository.save(movieToSave);
    }

    public MovieDetail getMovieDetail(Long id) {
        Movie movie = movieRepository.findById(id).orElseThrow(()-> new EntityNotFoundException());
        return new MovieDetail(movie);


    }
}
