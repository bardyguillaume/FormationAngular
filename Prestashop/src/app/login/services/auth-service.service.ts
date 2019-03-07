import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";
import * as firebase from "firebase/app";

@Injectable({
  providedIn: "root"
})
export class AuthServiceService {
  constructor(
    private afAuth: AngularFireAuth,
    private cloudDb: AngularFirestore //
  ) {}

  // Returns true if user is logged in
  get authenticated(): boolean {
    return this.afAuth.auth !== null;
  }

  // Returns current user
  get currentUser(): firebase.User {
    return this.authenticated ? this.afAuth.auth.currentUser : null;
  }

  // Returns current user UID
  get currentUserId(): string {
    return this.authenticated ? this.afAuth.auth.currentUser.uid : "";
  }

  private updateUserData(): void {
    const data = {
      name: this.currentUser.displayName,
      email: this.currentUser.email,
      photoURL: this.currentUser.photoURL
    };
    console.log("update user data");

    this.cloudDb
      .collection("users")
      .doc(this.currentUserId)
      .set(Object.assign({}, data))
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
