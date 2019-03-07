import { Injectable } from '@angular/core';


import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }


  mostrarMensaje(titutlo, subtitulo, swaType, textbutton, textPie?) {
    Swal.fire({
      title: titutlo,
      text: subtitulo,
      type: swaType,
      confirmButtonText: textbutton,
      footer: textPie || 'adminPro - JErraez'
    });
  }
}
