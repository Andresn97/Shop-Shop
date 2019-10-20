import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopinfoComponent } from 'src/app/components/popinfo/popinfo.component';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  constructor( private popoverCtrl:PopoverController ) { }

  ngOnInit() {
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

}
