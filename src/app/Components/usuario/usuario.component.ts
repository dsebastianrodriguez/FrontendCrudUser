import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  form!: FormGroup;

  constructor(private usersService: UsersService, private fb: FormBuilder, route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.ValidarFormulario();
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    this.usersService.registrarUsuario(this.form.value).subscribe(res => {
      this.router.navigateByUrl('/login');
    })
  }

  ValidarFormulario() {
    this.form = this.fb.group({
      usuario: this.fb.control(null,[Validators.required]),
      pass: this.fb.control(null,[Validators.required]),
      confirmarPass: this.fb.control(null,[Validators.required])
    });
  }

  get usuario(){
    return this.form.get('usuario');
  }
  get pass() {
    return this.form.get('pass');
  }
  get confirmarPass() {
    return this.form.get('confirmarPass');
  }

}
