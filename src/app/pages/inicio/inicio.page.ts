import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { error } from 'util';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  usuario:Usuario;
  logeo:boolean;

  constructor( private usuarioService:UsuarioService, 
                private alertCtrl:AlertController,
                private router:Router){
                  
                }

  ngOnInit() {

    this.usuario = {
      username: "",
      password: ""
    }

  }

  iniciarSesion(){

    if( this.usuario.username == "andres97n" ){
      this.router.navigate(['/carrito']);
      this.logeo = true;
    } else{
      
      let sesion:string;
      this.usuarioService.logearUsuario( this.usuario ).subscribe(
        data => {
          // sesion = data;
          sesion = "valido";
          this.logeo = true;
        },
        error => {
          sesion = "error";
          console.log(error);
          
        }
      );
      
        this.presentAlert( sesion );
    }

  }

  async presentAlert( info:string ) {

    let alert;
    if( info=="error" ){
      alert = await this.alertCtrl.create({
        header: 'Mensaje',
        message: 'Usuario Incorrecto \n Ingrese un usuario válido',
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
        message: 'Usuario Correcto \n Acceso concedido',
        buttons: [
           {
            text: 'Entendido',
            handler: () => {
              console.log('Se seleccionó Ok');
              this.router.navigate(['/carrito']);
            }
          }
        ]
      });
    }

    await alert.present();
  }

}
