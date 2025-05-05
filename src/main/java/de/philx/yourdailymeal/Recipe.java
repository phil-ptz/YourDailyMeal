package de.philx.yourdailymeal;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.client.RestTemplate;

@Controller
public class Recipe {

    @GetMapping("/")
    public String index() {
        return "forward:/index.html";
    }

    @GetMapping("/api/recipes/random")
    @ResponseBody
    public String randomRecipe() {
        RestTemplate restTemplate = new RestTemplate();
        String url = "https://www.themealdb.com/api/json/v1/1/random.php";

        ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);
        return response.getBody();
    }

}
