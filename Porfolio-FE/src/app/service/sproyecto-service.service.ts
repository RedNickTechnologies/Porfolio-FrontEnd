import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Proyecto } from '../model/proyecto';

@Injectable({
  providedIn: 'root'
})
export class SProyectoServiceService {
  //ProURL ='http://localhost:8080/proyectos/'
  
  proURL = environment.URL + 'proyectos/';
  constructor(private httpClient: HttpClient) { }
  
  public lista(): Observable<Proyecto[]>{
    return this.httpClient.get<Proyecto[]>(this.proURL + 'traer')
  }

  public detail (id: number) : Observable<Proyecto>{
    return this.httpClient.get<Proyecto>(this.proURL + `${id}`);
  }

  public save(Proyecto: Proyecto): Observable<any>{
    return this.httpClient.post<any>(this.proURL + `crear`, Proyecto );
  }

  public update(id: number, Proyecto: Proyecto) : Observable<any>{
    return this.httpClient.put<any>(this.proURL + `editar/${id}`, Proyecto);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.proURL + `borrar/${id}`)
  }

}
