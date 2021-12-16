import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { userRoutes } from './user.routes';

@NgModule({
  imports: [
    CommonModule, // BrowserModule in app.module.ts
    RouterModule.forChild(userRoutes) // .forRoot() in app.module.ts
  ],
  declarations: [
    ProfileComponent
  ],
  providers: [],
})
export class UserModule { }
