import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopinfoComponent } from 'src/app/components/popinfo/popinfo.component';
import { ProductosService } from 'src/app/services/productos.service';
import { Producto } from 'src/app/interfaces/producto';
import { LocalService } from 'src/app/services/local.service';
import { CategoriaService } from 'src/app/services/categoria.service';
import { Linea } from 'src/app/interfaces/linea';
import { Categoria } from 'src/app/interfaces/categoria';
import { Marca } from 'src/app/interfaces/marca';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  productos:Producto[];
  carro:Producto[] = [];
  num:number = 0;
  linea:Linea[];
  categoria:Categoria[];
  marca:Marca[];
  l:Linea;
  m:Marca;
  c:Categoria;

  customAlertOptions: any = {
    header: 'Pizza Toppings',
    subHeader: 'Select your toppings',
    message: '$1.00 per topping',
    translucent: true
  };

  constructor(  private popoverCtrl:PopoverController,
                private productoService:ProductosService,
                private localService:LocalService,
                private categoriaService:CategoriaService ) {

                 }

  ngOnInit() {

    this.l = {
      id_linea: null,
      lin_nombre : ""
    }

    this.m = {
      id_marca: null,
      marc_nombre: ""
    }

    this.c = {
      id_categoria: null,
      cat_nombre: ""
    }

    this.productoService.getAllProductos().subscribe(
      data => {
        this.productos = data;
        
        
      }
    );

    this.categoriaService.getLineas().subscribe(
      linea => {
        this.linea = linea;
        // console.log(linea);
      }
    );

    this.categoriaService.getCategorias().subscribe(
      categoria => {
        this.categoria = categoria;
        // console.log(this.categoria);
        
      }
    );

    this.categoriaService.getMarcas().subscribe(
      marca => {
        this.marca = marca;
        // console.log(marca);
        
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

  filtrarCategoria( evento ){
    console.log(evento);

  
    
    // this.categoriaService.filtrarCategoria( categoria.id_categoria ).subscribe(
    //   producto => {
    //     this.productos = producto;
    //   }
    // );
    
  }



}
