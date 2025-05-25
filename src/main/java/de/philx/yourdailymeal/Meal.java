package de.philx.yourdailymeal;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDate;


@Data
@Entity
public class Meal {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String strMeal;
    private String strCategory;
    private String strArea;
    @Column(length = 5000) // weil Instructions lang sind
    private String strInstructions;
    private String strMealThumb;
    private String strYoutube;

    private LocalDate createdAt;
}