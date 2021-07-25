import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaquinaRoutingModule } from './maquina-routing.module';
import { FormComponent } from './components/form/form.component';
import { CintaComponent } from './components/cinta/cinta.component';
import { GrafoComponent } from './components/grafo/grafo.component';
import { PrimgNgModule } from '../primg-ng/primg-ng.module';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormComponent,
    CintaComponent,
    GrafoComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    MaquinaRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    PrimgNgModule
  ]
})
export class MaquinaModule { }
