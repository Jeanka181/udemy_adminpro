import { Component, OnInit } from '@angular/core';
import { UsuarioService, SharedService } from '../services/service.index';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Usuarios } from '../models/usuario.model';


import { Router } from '@angular/router';
declare function intitPuginsMenu();

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

  formaUsuario: FormGroup;

  constructor(
// tslint:disable: variable-name
    public _usuarioService: UsuarioService,
    public _sharedService: SharedService,
    public router: Router
  ) { }

  ngOnInit() {
    intitPuginsMenu();
    this.formaUsuario = new FormGroup({
      // los parametros, (<valor por deferto '-'>, <validaciones, una sola o mas pero en vector>)
      nombres: new FormControl( null, Validators.required ),
      apellidos: new FormControl(null, [ Validators.required ] ),
      correo: new FormControl( null, [ Validators.required, Validators.email ] ),
      contrasena: new FormControl( null, Validators.required ),
      contrasena2: new FormControl( null, Validators.required ),
      condiciones: new FormControl( false )
    }, // Validaciones personalidadas para todo el formulario / tb las puedo hacer para cietos campos
     { validators: this.sonIguales( 'contrasena', 'contrasena2' ) } );
    // esto se debe quietas OJO!!
    // Simplemente lo lleno por defecto, para no tener que estar ingresando a cada rato para probar
    this.formaUsuario.setValue({
      nombres: 'Nombres Completos ',
      apellidos: 'Apellidos Completos ',
      correo: 'test-app1@test.com',
      contrasena: '123456',
      contrasena2: '123456',
      condiciones: true
    });
  }

  // ==========================================================================================================================
  // Funcion generica para validar los campos del formulario que sean necesarios
  // ==========================================================================================================================
  sonIguales( campo1: string, campo2: string ) {
    return ( group: FormGroup ) => {
      const pass1 = group.controls[campo1].value;
      const pass2 = group.controls[campo2].value;

      // devuelve null si la validacion es correcta
      if ( pass1 === pass2 ) {
        return null;
      }

      // devuelve true si la validacion falla
      return {
        sonIguales: true
      };
    };
  }

  // ==========================================================================================================================
  // Funcion que controla el submit del formulario
  // ==========================================================================================================================
  registrarUsuarios() {

    if ( this.formaUsuario.invalid ) {
      return;
    }

    if ( !this.formaUsuario.value.condiciones ) {
      this._sharedService.mostrarMensaje('Iportante!', 'Debe aceptar los terminos y condiciones de uso', 'error', 'Aceptar');
      return;
    }
    const usuarioNew = new Usuarios(
      this.formaUsuario.value.nombres,
      this.formaUsuario.value.apellidos,
      this.formaUsuario.value.correo,
      this.formaUsuario.value.contrasena
      // el resto de campos son opcionales, mejor asi
      );

    this._usuarioService.crearUsuarios(usuarioNew).subscribe(
      resp => {
        console.log(resp);
        // const userName = 'Usuario: ' + resp.Usuarios.correo;
        const userName = `<p class="txt-pie-alert">Usuario:&nbsp;&nbsp;</p> ${ resp.Usuarios.correo }`;
        this._sharedService.mostrarMensaje('Aviso!', 'Registro exitoso', 'success', 'Aceptar', userName);
        this.router.navigate(['/login']);
      },
      err => {
        console.log(':::::::::::: Error al crear el usuario');
        console.log(err);
      });
  }



}
