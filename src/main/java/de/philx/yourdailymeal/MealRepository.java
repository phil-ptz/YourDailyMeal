package de.philx.yourdailymeal;

import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.Optional;

public interface MealRepository extends JpaRepository<Meal, Long> {
    Optional<Meal> findTopByOrderByCreatedAtDesc();
    Optional<Meal> findTopByCreatedAt(LocalDate date);
}
