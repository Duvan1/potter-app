import { Component, OnInit } from '@angular/core';
import { ProfesoresService } from "../../servicios/profesores.service"
import { Personaje } from 'src/app/modelos/personaje';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.scss']
})
export class ProfesoresComponent implements OnInit {

  public data : Personaje[] = [];

  constructor(private profesoresService: ProfesoresService, private router: Router) { }

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

  goPersoanje(personaje: Personaje) {
    this.router.navigateByUrl('/personaje', {
      state: { personaje: personaje },
    });
  }

}
