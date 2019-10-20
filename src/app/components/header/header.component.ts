import { Component, OnInit, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() titulo;

  constructor( private alertCtrl:AlertController,
                private route:Router){}

  ngOnInit() {}

  cerrarSesion(){
    this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Aviso',
      message: '¿Está seguro que desea salir?',
      buttons: [
         {
          text: 'Sí',
          handler: () => {
            console.log('Se seleccionó Sí');
            this.route.navigate(['/'])
          }
        },
        {
          text: 'No',
          handler: () => {
            console.log('Se seleccionó No');
          }
        }
      ]
    });

    await alert.present();
  }

}
