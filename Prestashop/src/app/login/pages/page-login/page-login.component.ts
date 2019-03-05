import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent implements OnInit {

  lienPhotoProfil = '';
  errorMessage = '';

  constructor(
    public authService: AuthServiceService,
  ) {
  }

  ngOnInit() {
  }


  tryFacebookLogin() {
    this.authService.doFacebookLogin()
    .then((res: firebase.auth.UserCredential) => {
      console.log('facebook login');
      console.log(res);
      this.lienPhotoProfil = res.user.photoURL;
    });
  }

  tryTwitterLogin() {
    this.authService.doTwitterLogin()
    .then(res => {
      console.log('twitter login');
    });
  }

  tryGoogleLogin() {
    this.authService.doGoogleLogin()
    .then(res => {
      console.log('google login');
    });
  }

}
