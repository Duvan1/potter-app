import { Injectable } from '@angular/core';
import { Personaje } from "../modelos/personaje";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  private url = 'http://hp-api.herokuapp.com/api/characters/students'

  constructor(private http: HttpClient) { }

  public getEstudiantes(): Observable<Personaje[]> {
    return this.http.get<Personaje[]>(this.url);
  }

  public guardarSolicitudes(solicitudes : any){
    return new Promise<void>((resolve, reject) => {
      localStorage.setItem("solicitudes", JSON.stringify(solicitudes))
      resolve()
    })
  }
}
