import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  private token: string;

  constructor(private router: Router) {
  }

  signupUser(email: string, password: string) {
    firebase.auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(error => console.log(error));
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email, password)
    .then(response => {
      firebase.auth().currentUser.getIdToken()
      .then((token: string) => this.token = token);

      this.router.navigate(['/']);
    })
    .catch(error => console.log(error));
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
    .then((token: string) => this.token = token);

    return this.token;
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
  }

  isAuthenticated() {
    return this.token != null;
  }
}
