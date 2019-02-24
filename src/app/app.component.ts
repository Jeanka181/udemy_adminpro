import { Component } from '@angular/core';


// Servicios
import { SettingsService } from './services/service.index';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public tituloPage: string;
  constructor( public ajustes: SettingsService,
               public router: Router,
               private titleWindows: Title,
               private meta: Meta) {
    this.getDataRoute(router)
    .subscribe( data => {
      // console.log(data);
      this.tituloPage = data.titulo;
      this.titleWindows.setTitle(this.tituloPage);

      const metaTag: MetaDefinition = {
        name: 'description',
        content: data.descripcion
      };

      this.meta.updateTag(metaTag);
    });
  }

  getDataRoute(ruta: Router) {
    return ruta.events.pipe(
      filter( eventos => eventos instanceof ActivationEnd ),
      filter( (eventos: ActivationEnd) => eventos.snapshot.firstChild === null ),
      // ingresa un evento a la funcion y sale, solo el argumento data, para recuperar el titulo
      map( (eventos: ActivationEnd) => eventos.snapshot.data )
    );
  }
}
