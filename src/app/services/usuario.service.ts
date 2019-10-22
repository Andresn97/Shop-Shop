import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../interfaces/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor( private http:HttpClient){}

  logearUsuario( usuario:Usuario ):Observable<any>{
    return this.http.post("http://192.168.137.222:1313/login", usuario);
  }

}
