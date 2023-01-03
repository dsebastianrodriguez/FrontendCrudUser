import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/_models/Persona';
import { TipoDocumento } from 'src/app/_models/TipoDocumento';
import { PersonaService } from './services/persona.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  public page!: number;
  persona: Persona[] = [];
  listaTipoDocumento: TipoDocumento[] = [];

  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    this.getTipoDocumento();
    this.cargarUsuarios();
  }

  cargarUsuarios(){
    this.personaService.listar().subscribe((data: Persona[])=> {
      this.persona = data;
    });
  }
  getTipoDocumento(){
    this.personaService.listarTipoIdentificacion().subscribe(data =>{
      this.listaTipoDocumento = data;
    });
  }

  deletePersona(idUse: number){
    this.personaService.eliminar(idUse).subscribe(()=>{
      this.cargarUsuarios();
    });
  }

}
