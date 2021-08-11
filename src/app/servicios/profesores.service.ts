import { Injectable } from '@angular/core';
import { Personaje } from "../modelos/personaje";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProfesoresService {

  private url = 'http://hp-api.herokuapp.com/api/characters/staff'

  constructor(private http: HttpClient) { }

  public getProfesores(): Observable<Personaje[]> {
    return this.http.get<Personaje[]>(this.url);
  }
}
