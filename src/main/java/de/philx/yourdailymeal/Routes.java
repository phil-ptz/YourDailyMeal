package de.philx.yourdailymeal;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class Routes {

    @RequestMapping(value = {"/", "/history"})
    public String redirect() {
        return "forward:/index.html";
    }
}
