import { Component, Input, OnInit } from '@angular/core';
import { Transicion } from '../../models/transicion.model';

@Component({
  selector: 'app-cinta',
  templateUrl: './cinta.component.html',
  styleUrls: ['./cinta.component.scss']
})
export class CintaComponent implements OnInit {

  @Input() arrayEntrada: string[] = [];
  @Input() secuencias: Transicion[] = [];
  @Input() enabled = false;

  constructor() { }

  ngOnInit(): void {
  }

}
