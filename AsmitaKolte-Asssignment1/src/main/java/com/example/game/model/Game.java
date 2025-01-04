package com.example.game.model;

public class Game {
    private int gid;
    private String name;
    private String system;
    private String genre;
    private double price;

    public Game(int gid, String name, String system, String genre, double price) {
        this.gid = gid;
        this.name = name;
        this.system = system;
        this.genre = genre;
        this.price = price;
    }

    // Getters and setters
    public int getGid() { return gid; }
    public void setGid(int gid) { this.gid = gid; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getSystem() { return system; }
    public void setSystem(String system) { this.system = system; }

    public String getGenre() { return genre; }
    public void setGenre(String genre) { this.genre = genre; }

    public double getPrice() { return price; }
    public void setPrice(double price) { this.price = price; }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        Game game = (Game) obj;
        return gid == game.gid;
    }

    @Override
    public int hashCode() {
        return Integer.hashCode(gid);
    }
}
