import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  // public tituloPage: string;

  constructor() {
    // esto va en el const de entrada, private router: Router, private titleWindows: Title
    // this.getDataRoute(router)
    // .subscribe( data => {
    //   // console.log(data);
    //   this.tituloPage = data.titulo;
    //   this.titleWindows.setTitle(this.tituloPage);
    // });
   }

  ngOnInit() {
  }

  /* getDataRoute(ruta: Router) {
    return ruta.events.pipe(
      filter( eventos => eventos instanceof ActivationEnd ),
      filter( (eventos: ActivationEnd) => eventos.snapshot.firstChild === null ),
      // ingresa un evento a la funcion y sale, solo el argumento data, para recuperar el titulo
      map( (eventos: ActivationEnd) => eventos.snapshot.data )
    );
  } */

}
