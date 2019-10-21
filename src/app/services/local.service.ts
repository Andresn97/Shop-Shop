import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  productos:Producto[];
  logueo: boolean;

  constructor() { }

  setProductos( productos:Producto[] ){
    this.productos = productos;
  }

  getProducto(){
    return this.productos;
  }

  setLogueo( logueo:boolean ){
    this.logueo = logueo;
  }

  getLogueo(){
    return this.logueo;
  }

}
