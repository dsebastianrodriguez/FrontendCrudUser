import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { Persona } from 'src/app/_models/Persona';
import { TipoDocumento } from 'src/app/_models/TipoDocumento';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private url: string = `${environment.HOST}/api`;

  private _refresh$ = new Subject<void>();

  constructor(private http: HttpClient) { }

  get refresh(){
    return this._refresh$;
  }

  public listar(dto: any = null): Observable<Persona[]>{
    return this.http.get<Persona[]>(`${this.url}/Persona`);
  }

  public listarTipoIdentificacion(): Observable<any>{
    return this.http.get<TipoDocumento>(`${this.url}/TipoIdentificacion`);
  }

  getPersona(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}/Persona/${id}`);
  }

  public registrarPersona(registro: Persona){
    return this.http.post(`${this.url}/Persona`, registro).pipe(tap(() => {this._refresh$.next();}));
  }

  public eliminar(idU: number){
    return this.http.delete(`${this.url}/Persona/${idU}`)
    .pipe(
      tap(()=>{
        this._refresh$.next();
      })
    );
  }
}
