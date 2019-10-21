import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popinfo',
  templateUrl: './popinfo.component.html',
  styleUrls: ['./popinfo.component.scss'],
})
export class PopinfoComponent implements OnInit {

  listas = ["Categoría","Linea","Marca"];

  constructor( private popoverCtrl:PopoverController,
              private router:Router ) { }

  ngOnInit() {}

  onClick( texto:string ){
    // this.popoverCtrl.dismiss();
    // if(  ){

    // }
    // this.router.navigate([""]);
  }

}
