import { Component, OnInit } from '@angular/core';
import { EstudiantesService } from "../../servicios/estudiantes.service"
import { Personaje } from 'src/app/modelos/personaje';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.sass']
})
export class EstudiantesComponent implements OnInit {

  public data : Personaje[] = [];
  public solicitudes:any[] = [];
  public estudianteForm!: FormGroup;
  public enviado = false;

  constructor(private estudiantesService: EstudiantesService, private formBuilder: FormBuilder) { }

  private buildForm(){
    this.estudianteForm = this.formBuilder.group(
      {
        name: ["", Validators.required],
        house: ["", Validators.required],
        patronous: ["", Validators.required],
      }
    );
  }

  get form(){
    return this.estudianteForm.controls;
  }

  onSubmit(){
    this.enviado = true;

    if (this.estudianteForm.invalid) {
      return
    }

    this.solicitudes.push(this.estudianteForm.value)

    this.estudiantesService.guardarSolicitudes(this.solicitudes).then(()=>{
      alert("Solicitud almacenada con exito.");
      this.onReset();
    })
  }

  onReset(){
    this.enviado=false;
    this.estudianteForm.reset();
  }

  ngOnInit(): void {
    if (localStorage.getItem("solicitudes")) {
      this.solicitudes = JSON.parse(""+localStorage.getItem("solicitudes"));
    }
    this.buildForm();
    this.estudiantesService.getEstudiantes().subscribe(
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
