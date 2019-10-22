import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  rutaProducto:string = "http://192.168.100.126:6060/api/v1/producto";

  constructor( private http:HttpClient ) { }

  getAllProductos(){
    return this.http.get<Producto[]>(this.rutaProducto + "/home/all");
  }

  filtrarByCategoria( idCategoria:number ){
    return this.http.get(this.rutaProducto + `/categoria/${idCategoria}`);
  }

  filtrarByMarca( idMarca:number ){
    return this.http.get(this.rutaProducto + `/marca/${idMarca}`);
  }

  filtrarByLinea( idLinea:number ){
    return this.http.get(this.rutaProducto + `/linea/${idLinea}`);
  }

  buscarProducto( aguja:string ){
    return this.http.get(this.rutaProducto + `/buscar/`);
  }

  buscarVendedor( idVendedor:number ){
    return this.http.get(this.rutaProducto + `/vendedor/${idVendedor}`);
  }

}
