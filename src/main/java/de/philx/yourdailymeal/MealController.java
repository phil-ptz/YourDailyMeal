package de.philx.yourdailymeal;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import java.time.LocalDate;

import java.util.List;

// Controller für Laden und Speicherung der Meals

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
        LocalDate today = LocalDate.now();

        return mealRepository.findTopByCreatedAt(today)
                .map(meal -> {
                    try {
                        ObjectMapper mapper = new ObjectMapper();
                        mapper.registerModule(new JavaTimeModule());
                        mapper.disable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS);
                        ObjectNode root = mapper.createObjectNode();
                        ArrayNode mealsArray = mapper.createArrayNode();

                        ObjectNode mealNode = mapper.valueToTree(meal);
                        mealsArray.add(mealNode);
                        root.set("meals", mealsArray);

                        return ResponseEntity.ok(mapper.writeValueAsString(root));

                    } catch (Exception e) {
                        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                                .body("Serialization error");
                    }
                })
                .orElseGet(() -> {
                    // Kein Rezept für heute -> Neues holen und speichern
                    String url = "https://www.themealdb.com/api/json/v1/1/random.php";
                    String json = restTemplate.getForObject(url, String.class);

                    try {
                        ObjectMapper mapper = new ObjectMapper();
                        var root = mapper.readTree(json);
                        var mealNode = root.get("meals").get(0);

                        Meal meal = new Meal();
                        meal.setStrMeal(mealNode.get("strMeal").asText());
                        meal.setStrCategory(mealNode.get("strCategory").asText());
                        meal.setStrArea(mealNode.get("strArea").asText());
                        meal.setStrInstructions(mealNode.get("strInstructions").asText());
                        meal.setStrMealThumb(mealNode.get("strMealThumb").asText());
                        meal.setStrYoutube(mealNode.get("strYoutube").asText());
                        meal.setCreatedAt(today);

                        mealRepository.save(meal);
                        return ResponseEntity.ok(json);

                    } catch (Exception e) {
                        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                                .body("Parsing error");
                    }
                });
    }

    @GetMapping("/all")
    public List<Meal> allRecipes() {
        return mealRepository.findAll();
    }
}

