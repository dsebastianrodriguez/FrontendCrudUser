import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public nabvarReactivo = new Subject<boolean>();

  public usuarioReactivo = new Subject<boolean>();
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  private url: string = `${environment.HOST}/api`;

  private _refresh$ = new Subject<void>();

  constructor(private http: HttpClient, private router: Router) { }

  get refresh(){
    return this._refresh$;
  }

  public login(auth: any){
    this.loggedIn.next(true);
    this.usuarioReactivo.next(true);
    return this.http.post<any>(`${this.url}/Login`, auth);
  }

  public estaLogueado(): boolean{
    const tk = localStorage.getItem(environment.TOKEN);
    return tk != null;
  }

  

}
