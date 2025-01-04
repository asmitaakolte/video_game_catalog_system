import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from '../game.service';
import { Game } from '../game';

@Component({
  selector: 'app-edit-game',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-game.component.html',
  styleUrl: './edit-game.component.css'
})
export class EditGameComponent {
  gidAlreadyExists: boolean;

  gameid: string;

  game: Game;

  constructor(private route: ActivatedRoute, private service: GameService, private router: Router) {
    this.gidAlreadyExists = false;
    this.gameid = "3";
  }

  ngOnInit() : void {
    


    this.route.paramMap.subscribe(params => {
      this.gameid = params.get('gid')!;
      console.log("GID:");
      console.log(this.gameid);
      console.log(typeof(this.gameid));
      this.service.getAGameByGID(this.gameid).subscribe(
        data => {
          this.game = data;
          console.log(this.game);
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


  onSubmit(form: NgForm) {
    console.log(this.game);
    this.service.editGame(this.game).subscribe(
   
      data => {
        //it worked!
        //go to detail for student
        this.router.navigate(['/game',this.game.gid]);
      }, error => {
          console.error(error.status);
          //some other error happened,
          //so we'll bug out
          console.error("Error Occurred Edit Game:");
          console.error(error);
          //this.router.navigateByUrl("/list");
        



      }
    );
  }
}
