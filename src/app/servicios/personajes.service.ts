import { Injectable } from "@angular/core";
import { Personaje } from "../modelos/personaje";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  private url = 'http://hp-api.herokuapp.com/api/characters/house/'

  constructor(private http: HttpClient) { }

  public getPersonajesPorCasa(casa : string): Observable<Personaje[]> {
    return this.http.get<Personaje[]>(this.url+casa);
  }
}
