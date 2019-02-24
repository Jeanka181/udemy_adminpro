import { Component, OnInit } from '@angular/core';
import { SidevarService } from '../../services/service.index';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  // con esto se inicialida el servio automaticamente, y ya tengo acceso a el desde el constructor
  constructor( public _sidebar: SidevarService) { }

  ngOnInit() {

  }

}
