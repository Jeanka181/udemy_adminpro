import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/service.index';
import { Usuarios } from '../../models/usuario.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  usuario: Usuarios;

  constructor(
// tslint:disable-next-line: variable-name
    public _usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    this._usuarioService.cargarStorage();
    this.usuario = this._usuarioService.usuario;
  }

}
