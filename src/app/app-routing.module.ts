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
  {
    path: 'end-run',
    loadChildren: () => import('./pages/end-run/end-run.module').then((mod) => mod.EndRunModule),
    data: { state: 'End-run' },
  },
  {
    path: 'new-level',
    loadChildren: () => import('./pages/new-level/new-level.module').then((mod) => mod.NewLevelModule),
    data: { state: 'New-level' },
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then((mod) => mod.ProfileModule),
    data: { state: 'Profile' },
  },
  {
    path: 'banxter',
    loadChildren: () => import('./pages/banxter/banxter.module').then((mod) => mod.BanxterModule),
    data: { state: 'Banxter' },
  },
  {
    path: 'academy',
    loadChildren: () => import('./pages/academy/academy.module').then((mod) => mod.AcademyModule),
    data: { state: 'Academy' },
  },
  {
    path: 'add',
    loadChildren: () => import('./pages/add/add.module').then((mod) => mod.AddModule),
    data: { state: 'Add' },
  },
  {
    path: 'marketplace',
    loadChildren: () => import('./pages/marketplace/marketplace.module').then((mod) => mod.MarketplaceModule),
    data: { state: 'Marketplace' },
  },
  {
    path: 'angar',
    loadChildren: () => import('./pages/angar/angar.module').then((mod) => mod.AngarModule),
    data: { state: 'Angar' },
  },
  {
    path: 'mining',
    loadChildren: () => import('./pages/mining/mining.module').then((mod) => mod.MiningModule),
    data: { state: 'Mining' },
  },
  {
    path: 'rent',
    loadChildren: () => import('./pages/rent/rent.module').then((mod) => mod.RentModule),
    data: { state: 'Rent' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
