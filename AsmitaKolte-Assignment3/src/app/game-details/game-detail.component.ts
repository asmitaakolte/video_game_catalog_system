import { Component } from '@angular/core';
import { Game } from '../game';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from '../game.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-detail.component.html',
  styleUrl: './game-detail.component.css'
})
export class GameDetailComponent {
  
  gid: string = "1";

  game: Game;

  constructor(private route: ActivatedRoute, private service: GameService, private router: Router) {
    
  }

  ngOnInit() : void {
    


    this.route.paramMap.subscribe(params => {
      this.gid = params.get('gid')!;
      console.log(this.gid);
      this.service.getAGameByGID(this.gid).subscribe(
        data => {
          this.game = data;
          
        }, error => {
          if (error.status = '404') {
            console.error("Game Does Not Exist");
          } else {
            console.error("Other issue");
            console.error(error);
          }
          this.router.navigateByUrl('/list');
          

        }
      );


    });
    


  }

  delete(gid: number) {
    console.log(gid);
    this.service.deleteGame(gid + "").subscribe( data => {
      //it worked!
      this.router.navigateByUrl('/list');
    });
  }




}
