import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidevarService {

  menu: any =[
    {
      descripcion: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        {descripcion: 'Dashboard', url: '/dashboard'},
        {descripcion: 'ProgressBar', url: '/progress'},
        {descripcion: 'Gráficas', url: '/graphics1'},
      ]
    }
  ]
  constructor() { }
}
