import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../services/service.index';
import { Usuarios } from '../models/usuario.model';

declare function intitPuginsMenu();
declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  public recuerdame: boolean = false;
  auth2: any;


// tslint:disable: variable-name
  constructor(
    public _router: Router,
    public _usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    intitPuginsMenu();
    this.googleInit();
    this.email = localStorage.getItem('email') || '';
    if ( this.email.length > 1 ) {
      this.recuerdame = true;
    }
  }

  googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: this._usuarioService.gapi,
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });
      this.attachSignin( document.getElementById('btnGoogle') );
    });
  }


  attachSignin( element ) {
    this.auth2.attachClickHandler( element, {}, (googleUser) => {
      // let profile = googleUser.getBasicProfile();
      const  token = googleUser.getAuthResponse().id_token;
      // console.log(token);
      this._usuarioService.loginToGoogle(token).subscribe(
        ( resp: any )  => {
          // hacer esto en un servio mejor, para repetir a cada rato
          localStorage.setItem('id', resp.User._id );
          localStorage.setItem('token', resp.Token );
          localStorage.setItem('usuario', JSON.stringify(resp.User));

          this._usuarioService.estaLogeado();

          // Si la pantalla no carga bien, estilos y javacript mejor hacer la redireccion manual
          // windows.location.href = '#/dashboard'
          this._router.navigate(['/dashboard']);
        },
        err => {
          console.log(':::::::::::: Error SERVICE Funcion API GOOGLE');
          console.log(err);
        }
      );

    });
  }

  ingresar(forma: NgForm) {

    if ( forma.invalid ) {
      return;
    }

    const usuario = new Usuarios(null, null, forma.value.email, forma.value.pass);

    if ( forma.value.recuerdame ) {
      localStorage.setItem('email', usuario.correo);
    } else {
      localStorage.removeItem('email');
    }
    this._usuarioService.login(usuario).subscribe(
      (resp: any) => {
        // console.log(resp);
        localStorage.setItem('id', resp.User._id );
        localStorage.setItem('token', resp.Token );
        localStorage.setItem('usuario', JSON.stringify(resp.User));
        this._router.navigate(['/dashboard']);
      },
      err => {
        console.log(':::::::::::: Error al crear el usuario');
        console.log(err);
      });
    // console.log(forma.valid);
    // console.log(forma.value);
    // this._router.navigate(['/dashboard']);
  }

}
