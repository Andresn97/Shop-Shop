import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { Producto } from 'src/app/interfaces/producto';

@Component({
  selector: 'app-buscar-producto',
  templateUrl: './buscar-producto.page.html',
  styleUrls: ['./buscar-producto.page.scss'],
})
export class BuscarProductoPage implements OnInit {

  productos:Producto[];
  aguja:string;

  constructor( private productoService:ProductosService ) { }

  ngOnInit() {

    this.productoService.getAllProductos().subscribe(
      data => {
        this.productos = data;
      }
    );
  }

  buscarProducto( evento ){
    console.log(evento);
    this.aguja = evento.deatil.value;
  }

}
