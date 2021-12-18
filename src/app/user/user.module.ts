import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProfileComponent } from './profile.component';
import { userRoutes } from './user.routes';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule, // BrowserModule in app.module.ts
    RouterModule.forChild(userRoutes), // .forRoot() in app.module.ts
    FormsModule, // gives access to a number of different template-based form features
    ReactiveFormsModule, // gives access to a number of different reactive form features
  ],
  declarations: [
    ProfileComponent,
    LoginComponent
  ],
  providers: [],
})
export class UserModule { }
