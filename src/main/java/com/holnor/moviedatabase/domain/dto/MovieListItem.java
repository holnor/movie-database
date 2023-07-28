package com.holnor.moviedatabase.domain.dto;

import com.holnor.moviedatabase.domain.Movie;

public class MovieListItem {
    private Long id;

    private String title;

    private String director;

    private String year;

    public MovieListItem(Movie movie) {
        this.id = movie.getId();
        this.title = movie.getTitle();
        this.director = movie.getDirector();
        this.year = movie.getYear();
    }
}
