import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PhoneLoginComponent } from './containers/phone-login/phone-login.component';
import { SocialLoginComponent } from './containers/social-login/social-login.component';
import { LoginRoutingModule } from './login-routing.module';
import { PageLoginComponent } from './pages/page-login/page-login.component';

@NgModule({
  declarations: [PageLoginComponent, PhoneLoginComponent, SocialLoginComponent],
  imports: [CommonModule, LoginRoutingModule, FormsModule]
})
export class LoginModule {}
