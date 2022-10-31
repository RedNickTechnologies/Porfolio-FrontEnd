import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contacto } from '../model/contacto';

@Injectable({
  providedIn: 'root'
})
export class SContactoService { 
  //URL= 'http://localhost:8080/estudios/'
  URL = environment.URL + 'contactos/';

  constructor(private httpClient : HttpClient) { }

  public lista (): Observable<Contacto[]>{
    return this.httpClient.get<Contacto[]>(this.URL + 'traer');
  }

  public details (id: number): Observable<Contacto>{
    return this.httpClient.get<Contacto>(this.URL + id);
  }

  public save(contacto : Contacto): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'crear', contacto);
  }

  public update(id: number, contacto: Contacto): Observable<any>{
    return this.httpClient.put<any>(this.URL + `editar/${id}`, contacto);
  }

  public delete(id:number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `borrar/${id}`);
  }

}
