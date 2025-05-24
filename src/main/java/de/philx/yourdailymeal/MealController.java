package de.philx.yourdailymeal;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@RestController
@RequestMapping("/api/recipes")
public class MealController {

    private final MealRepository mealRepository;
    private final RestTemplate restTemplate = new RestTemplate();

    public MealController(MealRepository mealRepository) {
        this.mealRepository = mealRepository;
    }

    @GetMapping("/random")
    public ResponseEntity<String> randomRecipe() {
        String url = "https://www.themealdb.com/api/json/v1/1/random.php";
        String json = restTemplate.getForObject(url, String.class);

        // Aus JSON den ersten Meal-Eintrag extrahieren
        try {
            ObjectMapper mapper = new ObjectMapper();
            JsonNode root = mapper.readTree(json);
            JsonNode mealNode = root.get("meals").get(0);

            Meal meal = new Meal();
            meal.setStrMeal(mealNode.get("strMeal").asText());
            meal.setStrCategory(mealNode.get("strCategory").asText());
            meal.setStrArea(mealNode.get("strArea").asText());
            meal.setStrInstructions(mealNode.get("strInstructions").asText());
            meal.setStrMealThumb(mealNode.get("strMealThumb").asText());
            meal.setStrYoutube(mealNode.get("strYoutube").asText());

            mealRepository.save(meal);

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Parsing error");
        }

        return ResponseEntity.ok(json);
    }

    @GetMapping("/all")
    public List<Meal> allRecipes() {
        return mealRepository.findAll();
    }
}

