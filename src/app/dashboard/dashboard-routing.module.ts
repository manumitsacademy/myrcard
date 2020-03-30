import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { DashboardhomeComponent } from './dashboardhome/dashboardhome.component';
import { TransactionhistoryComponent } from './transactionhistory/transactionhistory.component';
import { DefaultComponent } from './default/default.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [{ path: '', component: DashboardComponent,children:[
        {
          path:'',component:DashboardhomeComponent,canActivate:[AuthGuard]
        },
        {
          path:'transactionhistory',
          component:TransactionhistoryComponent,canActivate:[AuthGuard]
        },
        {
          path:'default',
          component:DefaultComponent,canActivate:[AuthGuard]
        }
      ]
     }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
