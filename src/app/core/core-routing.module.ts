import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvoicesComponent } from './pages/invoices/invoices.component';
import { InitComponent } from './pages/init/init.component';


const routes: Routes = [

  {
    path: '',
    component: InitComponent,
    children: [
      // {  path: '', component: InvoicesComponent },
      {  path: '', redirectTo: 'invoices', pathMatch: 'full' },
      {  path: 'invoices', component: InvoicesComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
