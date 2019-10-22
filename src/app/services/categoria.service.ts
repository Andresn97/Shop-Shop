import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../interfaces/categoria';
import { Linea } from '../interfaces/linea';
import { Marca } from '../interfaces/marca';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  rutaCategoria:string = "http://192.168.137.222:6060/api/v1/categoria";
  rutaLinea:string = "http://192.168.137.222:6060/api/v1/linea"
  rutaMarca:string = "http://192.168.137.222:6060/api/v1/marca"
  ruta:string = "http://192.168.137.222:6060/api/v1/producto";

  constructor( private http:HttpClient ) { }

  getCategorias(){
    return this.http.get<Categoria[]>(this.rutaCategoria + "/home");
  }

  getLineas(){
    return this.http.get<Linea[]>(this.rutaLinea + "/");
  }

  getMarcas(){
    return this.http.get<Marca[]>(this.rutaMarca + "/");
  }

  filtrarCategoria( idCategoria:number ){
    console.log(idCategoria);
    
    return this.http.get<Producto[]>(this.ruta + `/categoria/${idCategoria}`);
  }

  filtrarMarca( idMarca:number ){
    return this.http.get<Producto>(this.ruta + `/marca/${idMarca}`)
  }

  filtrarLinea( idLinea:number ){
    return this.http.get<Producto[]>(this.ruta + `/linea/${idLinea}`);
  }

}
