import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  doitAfficherBlocProfil = false;
  lienPhotoProfil = '';
  nomUtilisateur = '';
  errorMessage = '';

  constructor(public authService: AuthServiceService) {}

  ngOnInit() {}

  afficherInfosUtilisateurs(utilisateur: firebase.auth.UserCredential) {
    this.lienPhotoProfil = utilisateur.user.photoURL;
    this.nomUtilisateur = utilisateur.user.displayName;
    this.doitAfficherBlocProfil = true;
  }

  tryFacebookLogin() {
    this.authService
      .doFacebookLogin()
      .then((res: firebase.auth.UserCredential) => {
        console.log('facebook login');
        this.afficherInfosUtilisateurs(res);
      });
  }

  tryTwitterLogin() {
    this.authService
      .doTwitterLogin()
      .then((res: firebase.auth.UserCredential) => {
        console.log('twitter login');

        this.afficherInfosUtilisateurs(res);
      });
  }

  tryGoogleLogin() {
    this.authService
      .doGoogleLogin()
      .then((res: firebase.auth.UserCredential) => {
        console.log('google login');
        this.afficherInfosUtilisateurs(res);
      });
  }
}
