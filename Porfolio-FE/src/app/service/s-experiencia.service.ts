import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class SExperienciaService {
  expURL ='http://localhost:8080/experiencias/'

  constructor(private httpClient: HttpClient) { }
  
  public lista(): Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.expURL + 'traer')
  }

  public detail (id: number) : Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.expURL + `detail/${id}`);
  }

  /*public save(experiencia: Experiencia): Observable<any>{
    return this.httpClient.post<any>(this.expURL + `crear`, experiencia );
  }*/

  public save(experiencia: Experiencia, token: string): Observable<any> {
    let headers = new HttpHeaders({ 'Authorization': 'Bearer ' + token });
    return this.httpClient.post<any>(this.expURL + `crear`, experiencia, { headers: headers });
  }


  public update(id: number, experiencia: Experiencia) : Observable<any>{
    return this.httpClient.put<any>(this.expURL + `editar/${id}`, experiencia);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.expURL + `borrar/{id}`)
  }
}
