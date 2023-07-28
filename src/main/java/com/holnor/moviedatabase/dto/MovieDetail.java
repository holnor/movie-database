package com.holnor.moviedatabase.dto;

import com.holnor.moviedatabase.domain.Movie;

public class MovieDetail {
    private String title;

    private String director;

    private String year;

    public MovieDetail() {
    }

    public MovieDetail(Movie movie) {
        this.title = movie.getTitle();
        this.director = movie.getDirector();
        this.year = movie.getYear();
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDirector() {
        return director;
    }

    public void setDirector(String director) {
        this.director = director;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }
}
