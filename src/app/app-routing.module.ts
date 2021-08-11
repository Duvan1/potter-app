import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component'
import { EstudiantesComponent } from './pages/estudiantes/estudiantes.component'
import { ProfesoresComponent } from './pages/profesores/profesores.component'
import { PersonajesComponent } from './pages/personajes/personajes.component'
import { SolicitudesComponent } from './pages/solicitudes/solicitudes.component'

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'estudiantes', component: EstudiantesComponent },
  { path: 'profesores', component: ProfesoresComponent },
  { path: 'personajes', component: PersonajesComponent },
  { path: 'solicitudes', component: SolicitudesComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
