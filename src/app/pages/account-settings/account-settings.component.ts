import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( public _ajustes: SettingsService ) { }

  ngOnInit() {
    // revisa que thema debe tener el check, para ello busca en el servicio de ajustes
    this.setearChechTheme();
  }

  changeTheme(color: string, link: any){
    this.aplicarCheckTheme(link);
    this._ajustes.aplicarTema(color);
  }

  // solo de prueba, no es la final
  aplicarCheckTheme(url: any){
    let selectores: any = document.getElementsByClassName('selector');
    for(let ref of selectores){
      ref.classList.remove('working');
    }
    url.classList.add('working');
  }

  setearChechTheme(){
    let selectores: any = document.getElementsByClassName('selector');
    let tema = this._ajustes.ajustes.tema;
    for(let ref of selectores){
      ref.classList.remove('working');
      if(ref.getAttribute('data-theme')===tema){
        ref.classList.add('working');
        break;
      }
    }

  }

}
