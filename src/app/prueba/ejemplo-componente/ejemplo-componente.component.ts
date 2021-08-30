import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo-componente',
  templateUrl: './ejemplo-componente.component.html',
  styleUrls: ['./ejemplo-componente.component.scss'],
})
export class EjemploComponenteComponent implements OnInit {
  variable: string = 'soy una interpolacion';
  binding: string = 'soy el valor inicial del input';
  twoBinding: string;
  ngmodel: string;
  inputs: string;
  cargando: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  sendValue() {
    console.log(this.twoBinding);
  }

  modelChange() {
    console.log(this.ngmodel);
  }

  onChange(event: any) {
    const { value } = event.target;
    console.log(value);
  }
  enviar() {
    this.inputs;
  }
  mostrar() {
    this.cargando = !this.cargando;
  }
}
