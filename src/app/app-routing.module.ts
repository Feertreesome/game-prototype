import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then((mod) => mod.LoginModule),
    data: { state: 'Login' },
  },
  {
    path: 'create-account',
    loadChildren: () => import('./pages/create-account/create-account.module').then((mod) => mod.CreateAccountModule),
    data: { state: 'CreateAccount' },
  },
  {
    path: 'investment-runs',
    loadChildren: () =>
      import('./pages/investment-runs/investment-runs.module').then((mod) => mod.InvestmentRunsModule),
    data: { state: 'InvestmentRuns' },
  },
  {
    path: 'garage',
    loadChildren: () => import('./pages/garage/garage.module').then((mod) => mod.GarageModule),
    data: { state: 'Garage' },
  },
  {
    path: 'run',
    loadChildren: () => import('./pages/run/run.module').then((mod) => mod.RunModule),
    data: { state: 'Run' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
