import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from '../interfaces/producto';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo: Producto[], texto:string): Producto[] {

    // arreglo = [];

    if( texto === '' ){
      return arreglo;
    }

    // texto = texto.toLowerCase();

    return arreglo.filter(
      item => {
        // texto = texto.toLowerCase();
        return item.prod_nombre.toLowerCase().includes(texto);
      }
    );
  }

}
