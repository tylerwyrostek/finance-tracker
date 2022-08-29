import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', loadChildren: ()=> import('./dashboard/dashboard.module').then(module => module.DashboardModule)},
  {path:'transactions', loadChildren: ()=>import('./transactions/transactions.module').then(module => module.TransactionsModule)},
  {path:'planning', loadChildren: ()=>import('./planning/planning.module').then(module => module.PlanningModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
