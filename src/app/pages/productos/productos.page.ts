import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopinfoComponent } from 'src/app/components/popinfo/popinfo.component';
import { ProductosService } from 'src/app/services/productos.service';
import { Producto } from 'src/app/interfaces/producto';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  productos:Producto[];
  carro = [];

  constructor( private popoverCtrl:PopoverController,
                private productoService:ProductosService ) { }

  ngOnInit() {

    this.productoService.getAllProductos().subscribe(
      data => {
        this.productos = data;
        console.log(data);
        
      }
    );

  }

  async abrirFiltro( evento ){
    const popover = await this.popoverCtrl.create({
      component: PopinfoComponent,
      event: evento,
      mode: "ios",
      backdropDismiss: true
    });

    await popover.present();
  }

  agregarACarro( producto:Producto ){
    this.carro.push(producto);
  }

}
