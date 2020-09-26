import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ShortcutsComponent } from './shortcuts/shortcuts.component';
import { AccountsummaryComponent } from './accountsummary/accountsummary.component';
import { MinistatementComponent } from './ministatement/ministatement.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { DashboardhomeComponent } from './dashboardhome/dashboardhome.component';
import { InvalidDateModalComponent, TransactionhistoryComponent } from './transactionhistory/transactionhistory.component';
import { PopoverModule, BsDatepickerModule, PaginationModule, ModalModule } from 'ngx-bootstrap';
import { DefaultComponent } from './default/default.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';




@NgModule({
  declarations: [DashboardComponent, ShortcutsComponent, AccountsummaryComponent, MinistatementComponent, DashboardhomeComponent, TransactionhistoryComponent,InvalidDateModalComponent, DefaultComponent, UpdatepasswordComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,FormsModule,
    HttpClientModule,
    PopoverModule,
    BsDatepickerModule,
    PaginationModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule
  ],
  entryComponents:[InvalidDateModalComponent]
})
export class DashboardModule { }
