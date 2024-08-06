import { Injectable } from '@angular/core';
import { Auth, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth) {}

  information = 'Hello';
  user!: any;

  async login() {
    const credential = await signInWithPopup(
      this.auth,
      new GoogleAuthProvider(),
    );
    console.log(credential);
    const token = await credential.user.getIdToken();
    console.log(token);
    this.user = credential.user;
  }

  async logout() {
    await this.auth.signOut();
    console.log('logged out');
    this.user = null;
  }

  async isLoggedIn(): Promise<boolean> {
    return this.user != null;
  }
}
