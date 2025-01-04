import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from './game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private gamesURL: string;

  constructor(private http: HttpClient) {
    this.gamesURL = "http://localhost:8888/";

   }

  public getAllGames(): Observable<any> {
    //get all students sorted by SID
    return this.http.get<Game[]>(this.gamesURL + "games");
  }

  public getAGameByGID(gid: string): Observable<any> {
    //get all students sorted by SID
    return this.http.get<Game>(this.gamesURL + "game/" + gid);
  }

  public addGame(game: Game): Observable<any> {
    return this.http.post<Game>(this.gamesURL + "game", game);
  }

  public editGame(game: Game): Observable<any> {
    return this.http.put<Game>(this.gamesURL + "game", game);
  }

  public deleteGame(gid: string): Observable<any> {
    return this.http.delete<Game>(this.gamesURL + "game/" + gid);
  }

}
