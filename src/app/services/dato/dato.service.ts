import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatoService {

  constructor(
    private http: HttpClient,
  ) { }

  /**
   * @description OBTENER TODOS LOS DATOS
   * @author Andrew Mendoza
   * @returns Observable<any>
  */
   public get(): Observable<any[]>{
    return this.http.get<any>(`https://dev2.wiserteams.com/test1.json`);
    // return this.http.get<any>(`https://dev2.wiserteams.com/test2.json`);
  }
}
