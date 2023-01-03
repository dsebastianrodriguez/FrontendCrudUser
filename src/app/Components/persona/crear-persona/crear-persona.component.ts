import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoDocumento } from 'src/app/_models/TipoDocumento';
import { PersonaService } from '../services/persona.service';

@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona.component.html',
  styleUrls: ['./crear-persona.component.css']
})
export class CrearPersonaComponent implements OnInit {

  listaTipoDocumento: TipoDocumento[] = [];
  form!: FormGroup;
  

  constructor(private personaService: PersonaService, private fb: FormBuilder, route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getTipoDocumento();
    this.ValidarFormulario();
  }

  get f(){
    return this.form.controls;
  }
  
  submit(){
    console.log(this.form.value);
    this.personaService.registrarPersona(this.form.value).subscribe(res => {
      console.log('Persona creado satisfactoriamente');
      this.router.navigateByUrl('/persona');
    })
  }

  getTipoDocumento(){
    this.personaService.listarTipoIdentificacion().subscribe(data =>{
      this.listaTipoDocumento = data;
    });
  }

  ValidarFormulario() {
    this.form = this.fb.group({
      nombres: this.fb.control(null,[Validators.required]),
      apellidos: this.fb.control(null,[Validators.required]),
      id_Tipo_Identificacion: this.fb.control(null,[Validators.required]),
      numero_Identificacion: this.fb.control(null,[Validators.required]),
      email: this.fb.control(null,[Validators.required])     
    });
  }

 

  get nombres() {
    return this.form.get('nombres');
  }
  get apellidos() {
    return this.form.get('apellidos');
  }
  get TipoDocumento() {
    return this.form.get('id_Tipo_Identificacion');
  }
  get numero_Identificacion() {
    return this.form.get('numero_Identificacion');
  }
  get email() {
    return this.form.get('email');
  }

}
