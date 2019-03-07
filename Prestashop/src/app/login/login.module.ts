import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PhoneLoginComponent } from './components/phone-login/phone-login.component';
import { LoginComponent } from './containers/login/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { PageLoginComponent } from './pages/page-login/page-login.component';

@NgModule({
  declarations: [PageLoginComponent, PhoneLoginComponent, LoginComponent],
  imports: [CommonModule, LoginRoutingModule, FormsModule]
})
export class LoginModule {}
