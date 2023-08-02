import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';

// console.warn('admin Module Loaded');
@NgModule({
  declarations: [LoginComponent, AdminComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
