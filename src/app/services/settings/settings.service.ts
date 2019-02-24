import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  // del Tipo Interfaz, declarado al final del doc
  ajustes: Ajustes = {
    temaUrl: "assets/css/colors/default-dark.css",
    tema: "default-dark"
  }

  constructor(@Inject(DOCUMENT) private _document ) {
    // leer datos del localstored para cargar el tema por defecto
    this.cargarAjustes();
  }

  guargarAjustes(){
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  }

  cargarAjustes(){
    let aux_ajustes = localStorage.getItem('ajustes');
    if( aux_ajustes){
      this.ajustes = JSON.parse(aux_ajustes);
      this.aplicarTema(this.ajustes.tema);
    }else{
      this.aplicarTema(this.ajustes.tema);
    }
  }

  aplicarTema(tema: String){
    let url = `assets/css/colors/${tema}.css`;
    this._document.getElementById('theme_app').setAttribute('href', url);
    this.ajustes.tema= tema;
    this.ajustes.temaUrl= url;
    this.guargarAjustes();
  }
}
// para restringir el uso de este servicio, solo tenga estas propiedades
interface Ajustes {
  temaUrl: String;
  tema: String
}
