import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { AuthGuard } from './guards/auth.guard';
import { CanDeactivateGuard } from './guards/can-deactivate.guard';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/new', canActivate: [AuthGuard], canDeactivate: [CanDeactivateGuard], component: ProductFormComponent },
  { path: 'products/:id', canActivate: [AuthGuard], component: ProductDetailComponent },
  { path: 'products/:id/edit', canActivate: [AuthGuard], canDeactivate: [CanDeactivateGuard], component: ProductFormComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
