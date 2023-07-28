package com.holnor.moviedatabase.service;

import com.holnor.moviedatabase.controller.MovieController;
import com.holnor.moviedatabase.domain.dto.MovieListItem;
import com.holnor.moviedatabase.repository.MovieRepository;
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
}
