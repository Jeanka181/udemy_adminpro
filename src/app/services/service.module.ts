import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// importo todos los servicios de una sola, no importa si luego estos
// se eliminar, renombran o se cambian de directorio,
// el service.index se encarga de gestionar eso
import {
  SettingsService,
  SidevarService,
  SharedService,
  UsuarioService,
  LoginGuardGuard
} from './service.index';



@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SettingsService,
    SidevarService,
    SharedService,
    UsuarioService,
    LoginGuardGuard
  ],
  declarations: []
})
export class ServiceModule { }
