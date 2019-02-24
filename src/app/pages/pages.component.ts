import { Component, OnInit } from '@angular/core';

// inicializa los puglin del template, cargado el archivo custom.js,
// leda control a los padres/hijos de los script de terceros
declare function intitPuginsMenu();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    intitPuginsMenu();
  }

}
