import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'maquina',
    loadChildren: () => import('./maquina/maquina.module').then( m => m.MaquinaModule)
  },
  {
    path: '**',
    redirectTo: 'maquina'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
