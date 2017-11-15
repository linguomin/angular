
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './404/404.component';
import { ParentComponent } from './demo18/parent.component';
import { MainComponent } from './demo19/mymain.component';
import { IndexComponent } from './demo20/index.component';
import { CartComponent } from './demo21/cart.component';
import { OrderConfirmComponent } from './demo21/orderconfiirm.component';
import { Step1Component } from './demo21/step1.component';
import { Step2Component } from './demo21/step2.component';
import { Demo22Component } from './demo22/demo22.component';
import { Demo23Component } from './demo23/demo23.component';
import { Demo24Component } from './demo24/demo24.component';
import { Demo25Component } from './demo25/demo25.component';
import { Demo26Component } from './demo26_http/demo26.component';
import { Demo28Component } from './demo28_customdirective/demo28.component';
import { Demo29Component } from './demo29_service/demo29.component';
import { Demo30Component } from './demo29_service/demo30.component';
import { Demo31Component } from './demo31_guard/demo31.component';
import { MyGuard } from './demo31_guard/myguard.service';

const routes: Routes = [

  { path: '', redirectTo: '/demo31', pathMatch: 'full' },
  { path: 'demo31', component: Demo31Component ,canActivate:[MyGuard] },
  { path: 'demo29', component: Demo29Component },
  { path: 'demo30', component: Demo30Component },
  { path: 'demo28', component: Demo28Component },
  { path: 'demo26', component: Demo26Component },
  { path: 'demo25', component: Demo25Component },
  { path: 'demo24', component: Demo24Component },
  { path: 'demo23', component: Demo23Component },
  { path: 'demo22', component: Demo22Component },
  {
    path: 'orderConfirm', component: OrderConfirmComponent, children: [
      { path: '', component: Step1Component },
      { path: 'step1', component: Step1Component },
      { path: 'step2', component: Step2Component },
    ]
  },
  { path: 'index', component: IndexComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }


//export const routedComponents = [Demo12Component,Demo13Component];