import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '../ui/ui.module';

import { SidenavComponent } from './components/sidenav/sidenav.component';
import { InitComponent } from './pages/init/init.component';

import { InvoicesComponent } from './pages/invoices/invoices.component';

import { CoreRoutingModule } from './core-routing.module';


@NgModule({
  declarations: [
    SidenavComponent,
    InitComponent,
    InvoicesComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    UiModule
  ]
})
export class CoreModule { }
