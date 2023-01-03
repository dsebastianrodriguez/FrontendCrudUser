import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { CrearPersonaComponent } from './Components/persona/crear-persona/crear-persona.component';
import { PersonaComponent } from './Components/persona/persona.component';
import { UsuarioComponent } from './Components/usuario/usuario.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  { path: 'login', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'persona', component: PersonaComponent },
  { path: 'registrarse', component: UsuarioComponent },
  { path: 'crear-persona', component: CrearPersonaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
