import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto';
import { LocalService } from 'src/app/services/local.service';
import { Carrito } from 'src/app/interfaces/carrito';
import { ActivatedRoute, Router } from '@angular/router';
import { VentasService } from 'src/app/services/ventas.service';
import { AlertController } from '@ionic/angular';
import { error } from 'util';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {

  productos:Producto[] = [];
  carrito:Carrito;
  total:number = 0;
  idCliente:number = null;

  constructor( private localService:LocalService,
              private router:Router,
              private ventasService:VentasService,
              private alertCtrl:AlertController ) { }

  ngOnInit() {

      this.productos = this.localService.getProductos();
      // this.productos.find
      console.log("pagina",this.productos);
  
      this.productos.forEach(
        producto => {
          this.total += producto.prod_precio_venta;
        }
      );

      this.carrito = {
        id_cliente : null,
        detalle : [{
          id_producto: null,
          deve_num_producto: null}
        ]
      }
    
   
      this.idCliente = this.localService.getIdCliente();
      console.log("cliente",this.idCliente);
      

  }

  enviarPedido(){

    this.carrito.id_cliente = this.localService.getIdCliente();
    console.log(this.carrito.id_cliente);
    

    this.productos.forEach(
      producto => {
        this.carrito.detalle.push({
          id_producto: producto.id_producto,
          deve_num_producto: producto.prod_precio_venta
        })
          
      }
    );

    this.ventasService.guardarPedido( this.carrito ).subscribe(
      data => {
        this.presentAlert("/");
      }, error =>{
        this.presentAlert("error");
      }
    );
    
  }

  async presentAlert( info:string ) {

    let alert;
    if( info=="error" ){
      alert = await this.alertCtrl.create({
        header: 'Mensaje',
        message: 'No se pudo realizar el pedido',
        buttons: [
           {
            text: 'Entendido',
            handler: () => {
              console.log('Se seleccionó Ok');
            }
          }
        ]
      });
    } else{
      alert = await this.alertCtrl.create({
        header: 'Mensaje',
        message: 'Se realizó correctamente el pedido',
        buttons: [
           {
            text: 'Entendido',
            handler: () => {
              this.productos.splice(0,this.productos.length);
              this.router.navigate(["/productos"]);
            }
          }
        ]
      });
    }

    await alert.present();
  }

}
