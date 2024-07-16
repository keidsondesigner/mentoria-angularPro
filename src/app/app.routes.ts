import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () => import('@ecommerce/home').then(m => m.homeRoutes)
  },
  {
    path: 'product',
    loadChildren: () => import('@ecommerce/product-detail').then(m => m.productDetailRoutes)
  },
  {
    path: 'auth',
    loadComponent: () => import('@ecommerce/auth-form').then(m => m.AuthFormComponent)
  }
];
