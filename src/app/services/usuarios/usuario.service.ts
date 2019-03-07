import { Injectable } from '@angular/core';
import { Usuarios } from '../../models/usuario.model';

// cuando se usa el httpCliente es necesario importarlo en el modulo padre service.module imports: [aki]
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConstGobales } from '../../config/config';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public url = ConstGobales.url;
  public gapi = ConstGobales.gapi;


  usuario: Usuarios;
  token: string;
  loginUp: boolean;


  constructor(
// tslint:disable: variable-name
    public _http: HttpClient,
    public router: Router
  ) {
    // console.log('Servicio usuario listo...');
    this.cargarStorage();
  }

  // ==========================================================================================================================
  // Cerrar sesión
  // ==========================================================================================================================
  logOut() {
    this.usuario = null;
    this.token = '';

    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    this.router.navigate(['/login']);
  }

  // ==========================================================================================================================
  // Login Normal por credenciales app http://localhost:3700/api/login
  // ==========================================================================================================================
  login( usuario: Usuarios) {
    const params = JSON.stringify(usuario);
    const miHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.url + '/login', params, { headers: miHeaders });
  }
  // ==========================================================================================================================
  // Login por api de google, signin
  // ==========================================================================================================================
  loginToGoogle(token: string) {
    return this._http.post(this.url + '/google', { token } );
  }
  // ==========================================================================================================================
  // Servicio para consumir el API de crer sservicio BACKEND-SERVER
  // ==========================================================================================================================
  crearUsuarios( usuario: Usuarios ): Observable<any> {
    const params = JSON.stringify(usuario);
    const miHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.url + '/usuario', params, { headers: miHeaders });
  }
  // ==========================================================================================================================
  // Funcion para activar el guard del login
  // ==========================================================================================================================
  estaLogeado() {
    this.cargarStorage();
    if ( this.token.length > 5 ) {
      this.loginUp = true;
    } else {
      this.loginUp = false;
    }
  }

  cargarStorage() {
    if ( localStorage.getItem('token') ) {
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
    } else {
      this.token = '';
      this.usuario = null;
    }
  }

}
