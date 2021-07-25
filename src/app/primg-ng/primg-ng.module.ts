import { NgModule } from '@angular/core';

import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextModule } from 'primeng/inputtext';
import { KeyFilterModule } from 'primeng/keyfilter';
import { SliderModule } from 'primeng/slider';



@NgModule({
  exports: [
    AvatarModule,
    ButtonModule,
    CardModule,
    ChipModule,
    FieldsetModule,
    InputTextModule,
    KeyFilterModule,
    SliderModule
  ]
})
export class PrimgNgModule { }
