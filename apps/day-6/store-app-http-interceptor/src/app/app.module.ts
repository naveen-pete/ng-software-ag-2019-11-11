import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppNavComponent } from './app-nav/app-nav.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { HomeComponent } from './home/home.component';

import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductFormComponent } from './product-form/product-form.component';

import { ProductsService } from './services/products.service';
import { AuthInterceptor } from './interceptors/auth-interceptor';

const appRoutes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'products/new', component: ProductFormComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'products/:id/edit', component: ProductFormComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    NotFoundComponent,

    HomeComponent,

    ProductsComponent,
    ProductFormComponent,
    ProductDetailComponent
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes), HttpClientModule],
  providers: [
    ProductsService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
