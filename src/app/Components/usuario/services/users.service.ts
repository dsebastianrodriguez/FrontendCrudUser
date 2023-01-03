import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, tap } from 'rxjs';
import { Users } from 'src/app/_models/users';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url: string = `${environment.HOST}/api`;

  private _refresh$ = new Subject<void>();

  constructor(private http: HttpClient) { }

  get refresh(){
    return this._refresh$;
  }

  public registrarUsuario(registro: Users){
    return this.http.post(`${this.url}/Usuarios`, registro).pipe(tap(() => {this._refresh$.next();}));
  }
}
