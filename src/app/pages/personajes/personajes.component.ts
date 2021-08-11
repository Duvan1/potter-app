import { Component, OnDestroy, OnInit } from '@angular/core';
import { PersonajesService } from "../../servicios/personajes.service"
import { Personaje } from 'src/app/modelos/personaje';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.sass']
})
export class PersonajesComponent implements OnDestroy, OnInit {

  public data : Personaje[] = [];

  public casas = [
    {
      nombre: 'slytherin',
      img: '/assets/imgs/slytherin.png',
      selected: false
    },
    {
      nombre: 'gryffindor',
      img: '/assets/imgs/gryffindor.png',
      selected: false
    },
    {
      nombre: 'ravenclaw',
      img: '/assets/imgs/ravenclaw.png',
      selected: false
    },
    {
      nombre: 'hufflepuff',
      img: '/assets/imgs/hufflepuff.png',
      selected: false
    },
  ]

  public casaSeleccionada : string = "";

  constructor(private personajesService: PersonajesService, private router: Router ) { }

  ngOnInit(): void {
  }

  goPersoanje(personaje: Personaje) {
    this.router.navigateByUrl('/personaje', {
      state: { personaje: personaje },
    });
  }

  selectCasa(nombre : string): void {
    this.casas.forEach((casa)=>{
      if (casa.nombre === nombre) {
        casa.selected = true;
        this.casaSeleccionada = nombre
      }else{
        casa.selected = false;
      }
    })

    if (this.casaSeleccionada) {
      this.personajesService.getPersonajesPorCasa(this.casaSeleccionada).subscribe(
        (res)=>{
          this.data = res;    
              
        },
        err=>{
          this.data = [];
          console.error(err)
        })
    }
  }

  ngOnDestroy(): void {
  }

}
