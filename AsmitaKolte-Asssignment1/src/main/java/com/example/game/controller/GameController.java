package com.example.game.controller;

import com.example.game.model.Game;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/games")
public class GameController {

    private List<Game> gameList = new ArrayList<>();

    public GameController() {
        // Initialize 30 games
        for (int i = 1; i <= 30; i++) {
            gameList.add(new Game(
                i, 
                "Game" + i, 
                "System" + (i % 3), 
                "Genre" + (i % 4), 
                10.0 + i
            ));
        }
    }

    @GetMapping
    public List<Game> getAllGames() {
        return gameList;
    }

    @GetMapping("/{gid}")
    public Game getGameByGid(@PathVariable int gid) {
        return gameList.stream()
                .filter(game -> game.getGid() == gid)
                .findFirst()
                .orElseThrow(() -> new RuntimeException("Game not found"));
    }

    @GetMapping("/system/{system}")
    public List<Game> getGamesBySystem(@PathVariable String system) {
        return gameList.stream()
                .filter(game -> game.getSystem().equalsIgnoreCase(system))
                .collect(Collectors.toList());
    }

    @GetMapping("/genre/{genre}")
    public List<Game> getGamesByGenre(@PathVariable String genre) {
        return gameList.stream()
                .filter(game -> game.getGenre().equalsIgnoreCase(genre))
                .collect(Collectors.toList());
    }

    @GetMapping("/price/{low}/{high}")
    public List<Game> getGamesByPriceRange(@PathVariable double low, @PathVariable double high) {
        return gameList.stream()
                .filter(game -> game.getPrice() >= low && game.getPrice() <= high)
                .collect(Collectors.toList());
    }

    @PostMapping
    public String addGame(@RequestBody Game game) {
        if (gameList.contains(game)) {
            return "Game already exists!";
        }
        gameList.add(game);
        return "Game added successfully!";
    }

    @PutMapping
    public String updateGame(@RequestBody Game game) {
        for (int i = 0; i < gameList.size(); i++) {
            if (gameList.get(i).getGid() == game.getGid()) {
                gameList.set(i, game);
                return "Game updated successfully!";
            }
        }
        return "Game not found!";
    }

    @DeleteMapping("/{gid}")
    public String deleteGame(@PathVariable int gid) {
        return gameList.removeIf(game -> game.getGid() == gid) 
                ? "Game deleted successfully!" 
                : "Game not found!";
    }
}
