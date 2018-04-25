import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase';
import {AngularFireAuth} from 'angularfire2/auth';
import {User} from '../Models/user';


@Injectable()
export class AuthenticationService {

  private user: Observable<firebase.User>;

  constructor(private fauth: AngularFireAuth) {
    this.user = this.fauth.authState;
  }

  login(user: User) {
    console.log("hi");
    return this.fauth.auth.signInWithEmailAndPassword(user.email, user.password);
  }

  logout() {
    return this.fauth.auth.signOut();
  }

  authUser(){
    return this.user;
  }

}
