import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Carrito } from '../interfaces/carrito';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  ruta:string = "http://192.168.0.104:8080/api/v1/venta";

  constructor( private http:HttpClient ) { }

  guardarPedido( carrito:Carrito ){
    return this.http.post(this.ruta + "/guardar", carrito);
  }

}
