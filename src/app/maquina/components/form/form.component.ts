import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Maquina } from '../../models/maquina.model';
import { Transicion } from '../../models/transicion.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  // Formulario para la entrada de los datos y velocidad de la cinta.
  formGroup!: FormGroup;

  // Con la siguiente expresion regular solo dejamos ingresar el lenguaje definido a y b
  regExpAB: RegExp = /[ab]/;

  // Array que se utilizara para el reccorrido de la Maquina de turing (convertidor de la letra a la letra a)
  arrayEntrada!: string[];

  maquina!: Maquina;

  // Secuencia de los estados, entrada y salida del texto, convirtiendo las b en a;
  secuencia!: Transicion[];

  // Activa la cinta
  enabled: boolean = false;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      entrada: ['', [Validators.required]],
      velocidad: [50, [Validators.required]]
    });
  }

  get velocidad() {
    return this.formGroup.get('velocidad');
  }

  comenzar(): void {
    let { entrada, velocidad }: {entrada: string, velocidad: number} = this.formGroup.value;

    entrada = '_' + entrada + '_';
    this.arrayEntrada = entrada.split('');

    this.maquina = new Maquina(this.arrayEntrada);
    this.maquina.rrecorrer('Q0');
    this.secuencia = this.maquina.transicion;

    this.enabled = true;
    
  }



}
