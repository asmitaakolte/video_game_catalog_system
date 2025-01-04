import { Component } from '@angular/core';
import { GameService } from '../game.service';
import { Game } from '../game';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-games',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-games.component.html',
  styleUrl: './list-games.component.css'
})
export class ListGamesComponent {

  games: Game[];

  constructor(private service: GameService) {

  }

  ngOnInit() {
    this.service.getAllGames().subscribe(data => {
      this.games = data;
    });
  }
    
}
