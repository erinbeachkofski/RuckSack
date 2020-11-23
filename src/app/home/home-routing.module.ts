import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'search',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/search/search.module').then(m => m.SearchPageModule)
          }
        ]
      },
      {
        path: 'explore',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/explore/explore.module').then(m => m.ExplorePageModule)
          }
        ]
      },
      {
        path: 'create',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/create/create.module').then(m => m.CreatePageModule)
          }
        ]
      },
      {
        path: 'account',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/account/account.module').then(m => m.AccountPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '../pages/search',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '',
    redirectTo: '../pages/search',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
