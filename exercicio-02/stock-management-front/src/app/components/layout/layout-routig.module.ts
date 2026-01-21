import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { FooterOnlyLayoutComponent } from './footer-only-layout/footer-only-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'dashboard',  loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule)},
    ]
  },
  {
    path: '',
    component: FooterOnlyLayoutComponent,
    children: [
      { path: 'login', loadChildren: () => import('../login/login.module').then(m => m.LoginModule) },
    ]
  },
  {
    path: '**',
    redirectTo: '/dashboard'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
