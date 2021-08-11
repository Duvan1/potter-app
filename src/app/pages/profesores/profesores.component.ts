import { Component, OnInit } from '@angular/core';
import { ProfesoresService } from "../../servicios/profesores.service"
import { Personaje } from 'src/app/modelos/personaje';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.sass']
})
export class ProfesoresComponent implements OnInit {

  public data : Personaje[] = [];

  constructor(private profesoresService: ProfesoresService) { }

  ngOnInit(): void {
    this.profesoresService.getProfesores().subscribe(
      (res)=>{
        this.data = res;
      },
      err=>{
        console.error(err);
        this.data = []
      }
    )
  }

}
