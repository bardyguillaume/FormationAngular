import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  constructor() {}

  doFacebookLogin() {
    return new Promise<any>((resolve, reject) => {
      const provider = new firebase.auth.FacebookAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(
          res => {
            resolve(res);
          },
          err => {
            console.log(err);
            reject(err);
          }
        );
    });
  }

  loginWithGoogle() {
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(function() {
        const provider = new firebase.auth.GoogleAuthProvider();
        // In memory persistence will be applied to the signed in Google user
        // even though the persistence was set to 'none' and a page redirect
        // occurred.
        return firebase.auth().signInWithPopup(provider);
      })
      .catch(function(error) {
        // Handle Errors here.
        console.log(error);
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }
}
