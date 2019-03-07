import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuarioService } from '../usuarios/usuario.service';



@Injectable()
export class LoginGuardGuard implements CanActivate {

  constructor(
  // tslint:disable: variable-name
    public _usuarioService: UsuarioService,
    public router: Router,
  ) { }


  canActivate(): boolean {

    this._usuarioService.estaLogeado();
    if ( this._usuarioService.loginUp ) {
      console.log('Paso Guard');
      return true;
    } else {
      console.log('Bloqueado por Guard');
      this.router.navigate(['/login']);
      return false;
    }
  }
}

