import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  // del Tipo Interfaz, declarado al final del doc
  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default-dark.css',
    tema: 'default-dark'
  }

  constructor( @Inject( DOCUMENT ) private document ) {
    // leer datos del localstored para cargar el tema por defecto
    this.cargarAjustes();
  }

  guargarAjustes() {
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  }

  cargarAjustes() {
    let auxAjustes = localStorage.getItem('ajustes');
    if ( auxAjustes) {
      this.ajustes = JSON.parse(auxAjustes);
      this.aplicarTema(this.ajustes.tema);
    } else {
      this.aplicarTema(this.ajustes.tema);
    }
  }

  aplicarTema(tema: string) {
    let url = `assets/css/colors/${tema}.css`;
    this.document.getElementById('theme_app').setAttribute('href', url);
    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;
    this.guargarAjustes();
  }
}
// para restringir el uso de este servicio, solo tenga estas propiedades
interface Ajustes {
  temaUrl: string;
  tema: string;
}
