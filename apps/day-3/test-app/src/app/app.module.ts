import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserDetail1Component } from './user-detail1/user-detail1.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailComponent,
    UserDetail1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
