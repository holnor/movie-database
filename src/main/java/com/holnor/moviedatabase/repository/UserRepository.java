package com.holnor.moviedatabase.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.holnor.moviedatabase.domain.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
}
