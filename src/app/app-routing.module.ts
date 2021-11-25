import { DataComponent } from './dash/data/data.component';
import { FormasPrevencaoComponent } from './components/formas-prevencao/formas-prevencao.component';
import { SintomasComponent } from './components/sintomas/sintomas.component';
import { HomeComponent } from './components/home/home.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'sintomas', component: SintomasComponent},
  {path: 'formas-prevencao', component: FormasPrevencaoComponent},
  {path: 'dash-data', component: DataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
