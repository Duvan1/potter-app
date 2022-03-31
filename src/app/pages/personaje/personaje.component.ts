import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personaje } from 'src/app/modelos/personaje';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.scss']
})
export class PersonajeComponent implements OnInit {
  public data!: Personaje;
  routeState: any;

  constructor(private router: Router) { 
    if (this.router.getCurrentNavigation()?.extras.state) {
      this.routeState = this.router.getCurrentNavigation()?.extras.state;
      if (this.routeState) {
        this.data = this.routeState.personaje; 
        console.log(this.data);              
      }
    }
  }

  ngOnInit(): void {
  }

}
