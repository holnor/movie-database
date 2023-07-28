package com.holnor.moviedatabase.repository;

import com.holnor.moviedatabase.domain.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieRepository extends JpaRepository<Movie, Long> {
}
