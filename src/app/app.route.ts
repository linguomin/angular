import { Demo14Component } from './demo14/demo14.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Demo12Component } from './demo12/demo12.component';
import { Demo13Component } from './demo13/demo13.component';
import { NotFoundComponent } from './404/404.component';

const routes: Routes = [
  { path: '', component: Demo12Component },
  { path: 'demo12', component: Demo12Component },
  { path: 'demo13', component: Demo13Component },
  { path: 'demo14/:uname', component: Demo14Component }
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }


//export const routedComponents = [Demo12Component,Demo13Component];