import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { InputTextModule } from 'primeng/inputtext';
import { KeyFilterModule } from 'primeng/keyfilter';
import { SliderModule } from 'primeng/slider';



@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    ChipModule,
    InputTextModule,
    KeyFilterModule,
    SliderModule
  ]
})
export class PrimgNgModule { }
