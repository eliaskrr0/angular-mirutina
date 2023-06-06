import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotasComponent } from './components/notas/notas.component';
import { CalendarioComponent } from './components/calendario/calendario.component';

const routes: Routes = [
  { path: '', redirectTo: '/notas', pathMatch: 'full'},
  { path: 'notas', component: NotasComponent},
  { path: 'calendario', component: CalendarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
