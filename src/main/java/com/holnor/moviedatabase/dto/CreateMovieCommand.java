package com.holnor.moviedatabase.dto;

public class CreateMovieCommand {

    private String title;

    private String director;

    private String year;

    public CreateMovieCommand() {
    }

    public CreateMovieCommand(String title, String director, String year) {
        this.title = title;
        this.director = director;
        this.year = year;
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
