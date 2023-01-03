import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/_services/login.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  form!: FormGroup;

  ValidarFormulario() {
    this.form = this.fb.group({
      usuario: this.fb.control(null,[Validators.required]),
      pass: this.fb.control(null,[Validators.required])
    });
  }

  // usuario: FormControl = new FormControl('',
  //   [
  //     Validators.required,
  //     Validators.maxLength(50)
  //   ]
  // );

  // pass: FormControl = new FormControl('',
  //   [
  //     Validators.required,
  //     Validators.maxLength(50), 
  //     Validators.pattern(/[a-zA-Z0-9]/)
  //   ]
  // );
  constructor(private loginService: LoginService, 
    public fb: FormBuilder, 
    private router: Router, 
    public route : ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.ValidarFormulario();
  }

  login(){
    console.log(this.form.value)
    this.loginService.login(this.form.value).subscribe(data => {
      console.log("data");
      console.log(data);
      localStorage.setItem(environment.TOKEN, data.token);
      this.router.navigate(['/persona']);
    });
  }

}
