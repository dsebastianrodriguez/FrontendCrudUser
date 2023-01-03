import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { LoginService } from './_services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontendCrudUser';

  public flagNabvar: boolean = true;

  constructor(public loginService: LoginService, private router: Router){}

  ngOnInit(): void{
    if(this.loginService.estaLogueado() == true){
      this.flagNabvar = false;
    } else {
      this.flagNabvar = true;
    }

    
    this.loginService.nabvarReactivo.subscribe(data => {
      this.flagNabvar = data;

      const helper = new JwtHelperService();
      localStorage.getItem(environment.TOKEN);
      if (!helper.isTokenExpired(environment.TOKEN)){
        const decodedToken = helper.decodeToken(environment.TOKEN);
      }

    });
  }

  onLogout(){
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }

  public refresh(): void {window.location.reload(); }
}
