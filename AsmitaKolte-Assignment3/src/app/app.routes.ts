import { Routes } from '@angular/router';
import { ListGamesComponent } from './list-games/list-games.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { AddGameComponent } from './add-game/add-game.component';
import { EditGameComponent } from './edit-game/edit-game.component';

export const routes: Routes = [
   
    {
        path: 'list',
        component: ListGamesComponent,
        title: "List of Games"
    },
    {
        path: 'addgame',
        component: AddGameComponent,
        title: "Add A Game"
    },
    {
        path: 'game/:gid',
        component: GameDetailComponent,
        title: "Game Detail"
    },
    {
        path: 'editgame/:gid',
        component: EditGameComponent,
        title: "Edit Game"
    },
    { path: '', redirectTo: '/list', pathMatch: 'full' },
    { path: '**', component: ListGamesComponent }



];
