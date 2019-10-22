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
  sesion:string = "";

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

    // let idPersona:number;

    // if( this.usuario.username == "andres97n" ){
      // this.router.navigate(['/productos']);
      // this.logeo = true;
      // idPersona = 18;
      // localStorage.setItem("idCiente",idPersona.toString());
      // this.locaService.setIdCliente(idPersona);
    // } else{
      
      
      this.usuarioService.logearUsuario( this.usuario ).subscribe(
        data => {

          console.log(data.user_tipo);
          
          if( data.user_tipo = "C" ){
            this.sesion = "valido";
            this.logeo = true;
            // idPersona = 18;
            // this.locaService.setIdCliente(idPersona);
            this.locaService.setIdCliente(data.id_persona);
          } else{
            this.sesion= "invalido"
          }

         
        },
        error => {
          this.sesion = "error";
          console.log(error);
          
        }
      );
        this.presentAlert( this.sesion );
        // this.locaService.setIdCliente(idPersona);
        
    

  }

  async presentAlert( info:string ) {

    let alert;
    if( info.includes("error" )){
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
    } else if( info=="invalido" ){
      alert = await this.alertCtrl.create({
        header: 'Aviso',
        message: 'El usuario correcto debe ser un Cliente',
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
    } else{
      alert = await this.alertCtrl.create({
        header: 'Mensaje',
        message: 'Usuario Correcto \n Acceso concedido',
        buttons: [
           {
            text: 'Entendido',
            handler: () => {
              console.log('Se seleccionó Ok');
              this.usuario = {
                username: "",
                password: ""
              }
              this.router.navigate(['/productos']);
            }
          }
        ]
      });
    }

    await alert.present();
  }

}
