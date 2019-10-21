import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopinfoComponent } from 'src/app/components/popinfo/popinfo.component';
import { ProductosService } from 'src/app/services/productos.service';
import { Producto } from 'src/app/interfaces/producto';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  productos:Producto[];
  carro:Producto[] = [];
  num:number = 0;

  constructor(  private popoverCtrl:PopoverController,
                private productoService:ProductosService,
                private localService:LocalService ) { }

  ngOnInit() {

    this.productoService.getAllProductos().subscribe(
      data => {
        this.productos = data;
        console.log(data);
        
      }
    );

    this.num = 0;

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
    this.num++;
    this.localService.setProductos(this.carro);
    
  }

}
