import { Pipe, PipeTransform } from '@angular/core';
import { ConstGobales } from '../config/config';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, tipo: string= 'usuarios'): any {
    let url = ConstGobales.url;
    
    if ( img.indexOf('https') >= 0 ) {
      return img;
    }

    if ( !img ) {
      return url + '/usuarios/xxx';
    }

    switch (tipo) {
      case 'usuarios':
        url += '/usuarios/' + img;
        break;
      case 'medicos':
        url += '/medicos/' + img;
        break;
      case 'hospitales':
        url += '/hospitales/' + img;
        break;
      default:
        console.log('Pipe-Image: tipo de imagen no existe, usuarios,mediocs, hospitales');
        url += '/usuarios/xxx';
      }

    return url;
  }

}
