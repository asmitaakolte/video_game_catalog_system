import { Component } from '@angular/core';
import { GameService } from '../game.service';
import { Router } from '@angular/router';
import { Game } from '../game';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IntegerDirective } from '../integer.directive';

@Component({
  selector: 'app-add-game',
  standalone: true,
  imports: [FormsModule, CommonModule, IntegerDirective],
  templateUrl: './add-game.component.html',
  styleUrl: './add-game.component.css'
})
export class AddGameComponent {
  game: Game

  gidAlreadyExists: boolean;

  constructor(private service: GameService, private router: Router) {
    this.game = new Game();
    this.gidAlreadyExists = false;
  }

  onSubmit(form: NgForm) {
    console.log(this.game);
    this.service.addGame(this.game).subscribe(
   
      data => {
        //it worked!
        //go to detail for student
        this.router.navigate(['/game',this.game.gid]);
      }, error => {
        if (error.status == '302') {
          this.gidAlreadyExists = true;
          this.game.gid = 0;
          form.controls['GID'].reset();
        } else {
          //some other error happened,
          //so we'll bug out
          console.error("Error Occurred Adding Game:");
          console.error(error);
          //this.router.navigateByUrl("/list");
        }



      }
    );
  }





}
