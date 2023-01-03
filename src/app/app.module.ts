import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { UsuarioComponent } from './Components/usuario/usuario.component';
import { LoginComponent } from './Components/login/login.component';
import { PersonaComponent } from './Components/persona/persona.component';
import { JwtModule } from '@auth0/angular-jwt';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { NgSelectModule } from '@ng-select/ng-select';
import { CrearPersonaComponent } from './Components/persona/crear-persona/crear-persona.component';

export function tokenGetter(){
  let tk = localStorage.getItem(environment.TOKEN);
  return tk != null ? tk : '';
}

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    LoginComponent,
    PersonaComponent,
    CrearPersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgSelectModule,
    FormsModule,
    JwtModule.forRoot({
      config:{
        tokenGetter: tokenGetter,
        allowedDomains: [`${environment.IP_PRINCIPAL}`],
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
