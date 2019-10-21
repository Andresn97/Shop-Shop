import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { error } from 'util';
import { LocalService } from 'src/app/services/local.service';

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
                private router:Router,
                private locaService:LocalService){
                  
                }

  ngOnInit() {

    this.usuario = {
      username: "",
      password: ""
    }

  }

  iniciarSesion(){

    let idPersona:number;

    // if( this.usuario.username == "andres97n" ){
      // this.router.navigate(['/productos']);
      // this.logeo = true;
      // idPersona = 18;
      // localStorage.setItem("idCiente",idPersona.toString());
      // this.locaService.setIdCliente(idPersona);
    // } else{
      
      let sesion:string;
      this.usuarioService.logearUsuario( this.usuario ).subscribe(
        data => {
          // sesion = data;
          sesion = "valido";
          this.logeo = true;
          idPersona = 18;
          this.locaService.setIdCliente(idPersona);
          // this.locaService.setIdCliente(data.id_persona);
        },
        error => {
          sesion = "error";
          console.log(error);
          
        }
      );
        this.presentAlert( sesion );
        this.locaService.setIdCliente(idPersona);
        
    

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
              this.router.navigate(['/productos']);
            }
          }
        ]
      });
    }

    await alert.present();
  }

}
