import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor(
    private http:HttpClient
  ) { }
  getAll(){
    return this.http.get('http://localhost:8080/apiJace/empleados');
  }
  create(data:any){
    return this.http.get('http://localhost:8080/apiJace/empleadoAdd', data);

  }
}
