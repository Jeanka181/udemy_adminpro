import { Component, OnInit } from '@angular/core';
import { SidevarService, UsuarioService } from '../../services/service.index';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  // con esto se inicialida el servio automaticamente, y ya tengo acceso a el desde el constructor
  constructor(
// tslint:disable: variable-name
    public _sidebar: SidevarService,
    public _usuarioService: UsuarioService
    ) { }

  ngOnInit() {

  }

}
