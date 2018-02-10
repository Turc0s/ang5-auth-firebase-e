import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { Observable } from "rxjs/Observable";
import * as firebase from "firebase/app";

@Injectable()
export class AuthService {

  user: Observable<firebase.User>;

  constructor(private _afAuth: AngularFireAuth) { 
    this.user = _afAuth.authState;
   }

   loginWithGoogle() {
     const provider = new firebase.auth.GoogleAuthProvider();
     this._afAuth.auth.signInWithPopup(provider);

   }

   logOut() {
     this._afAuth.auth.signOut();
   }

}
