import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path:'', loadChildren: ()=> import('./dashboard/dashboard.module').then(module => module.DashboardModule)},
{path:'import', loadChildren: ()=> import('./import/import.module').then(module => module.ImportModule)}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
