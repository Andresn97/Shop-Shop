import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  productos:Producto[];
  logueo: boolean;
  id_cliente:number;

  constructor() { }

  setProductos( productos:Producto[] ){

      this.productos = productos;
    
    console.log("servicio",this.productos);
    
  }

  getProductos(){
    return this.productos;
  }

  setLogueo( logueo:boolean ){
    this.logueo = logueo;
  }

  getLogueo(){
    return this.logueo;
  }

  setIdCliente( idCliente:number ){
    // this.id_cliente = idCliente;
    localStorage.removeItem("id");
    localStorage.setItem("id", idCliente.toString());
  }

  getIdCliente(){
    // return this.id_cliente;
    return Number.parseInt(localStorage.getItem("id"));
  }

}
