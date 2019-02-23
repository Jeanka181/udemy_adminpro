import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';



@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @Input('titulo') leyenda: string;
  @Input() progreso: number;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();


  @ViewChild('txtProgress') txtProgress: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  updateProgressBar(p: number){

    if(this.progreso >= 100 && p > 0 ){
      this.progreso = 100;
      return;
    }
    if(this.progreso <= 0 && p < 0){
      this.progreso = 0;
      return;     
    }
    this.progreso = this.progreso + p;
    this.cambioValor.emit( this.progreso );
    this.txtProgress.nativeElement.focus();
  }

  onChanges(newValue: number){

    if (newValue >=100){
      this.progreso = 100;
    }else if (newValue <= 0){
      this.progreso = 0;
    }else{
      this.progreso = newValue;
    }

    this.txtProgress.nativeElement.value = this.progreso;

    this.cambioValor.emit(this.progreso);
  }
}
