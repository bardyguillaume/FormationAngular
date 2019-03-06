import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFireDatabase } from "@angular/fire/database";
import * as firebase from "firebase/app";

@Injectable({
  providedIn: "root"
})
export class AuthServiceService {
  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase //
  ) {}

  // Returns true if user is logged in
  get authenticated(): boolean {
    return this.afAuth.auth !== null;
  }

  // Returns current user
  get currentUser(): any {
    return this.authenticated ? this.afAuth.auth.currentUser : null;
  }

  // Returns current user UID
  get currentUserId(): string {
    return this.authenticated ? this.afAuth.auth.currentUser.uid : "";
  }

  private updateUserData(): void {
    const path = `users/${this.currentUserId}`; // Endpoint on firebase
    const data = {
      name: this.currentUser.displayName,
      email: this.currentUser.email
    };
    console.log("update user data");

    this.db
      .object(path)
      .update(data)
      .catch(error => console.log(error));
  }

  // signOut(): void {
  //   this.afAuth.auth.logout();
  //   this.router.navigate(["/"]);
  // }

  doFacebookLogin() {
    return new Promise<any>((resolve, reject) => {
      const provider = new firebase.auth.FacebookAuthProvider();
      this.afAuth.auth.signInWithPopup(provider).then(
        res => {
          this.updateUserData();
          resolve(res);
        },
        err => {
          console.log(err);
          reject(err);
        }
      );
    });
  }

  doTwitterLogin() {
    return new Promise<any>((resolve, reject) => {
      const provider = new firebase.auth.TwitterAuthProvider();
      this.afAuth.auth.signInWithPopup(provider).then(
        res => {
          this.updateUserData();

          resolve(res);
        },
        err => {
          console.log(err);
          reject(err);
        }
      );
    });
  }

  doGoogleLogin() {
    return new Promise<any>((resolve, reject) => {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope("profile");
      provider.addScope("email");
      this.afAuth.auth.signInWithPopup(provider).then(
        res => {
          this.updateUserData();

          resolve(res);
        },
        err => {
          console.log(err);
          reject(err);
        }
      );
    });
  }
}
