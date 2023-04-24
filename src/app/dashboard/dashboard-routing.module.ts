import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { DashboardhomeComponent } from './dashboardhome/dashboardhome.component';
import { TransactionhistoryComponent } from './transactionhistory/transactionhistory.component';
import { DefaultComponent } from './default/default.component';
//import { AuthGuard } from '../auth/auth.guard';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';

const routes: Routes = [{
  path: '', component: DashboardComponent, children: [
    {
      path: '', component: DashboardhomeComponent
    },
    {
      path: 'transactionhistory',
      component: TransactionhistoryComponent
    },
    {
      path: 'changepassword',
      component: UpdatepasswordComponent
    },
    {
      path: 'default',
      component: DefaultComponent
    },
    {
      path: 'request-cash',
      component: DefaultComponent
    },
    {
      path: 'payment-calendar',
      component: DefaultComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
