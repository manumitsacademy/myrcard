import { Injectable } from '@angular/core';
import * as auth0 from 'auth0-js';
import { environment } from './../../environments/environment';
import { Router } from '@angular/router';

(window as any).global = window;

@Injectable()
export class AuthService {
  // Create Auth0 web auth instance
  
  // Store authentication data
  expiresAt: number;
  userProfile: any;
  accessToken: string;
  authenticated: boolean;

  constructor(private router: Router) {
  }

  




  private _setSession(authResult, profile) {
    // Save authentication data and update login status subject
    this.expiresAt = authResult.expiresIn * 1000 + Date.now();
    this.accessToken = authResult.accessToken;
    this.userProfile = profile;
    this.authenticated = true;
  }

 

  get isLoggedIn(): boolean {
    // Check if current date is before token
    // expiration and user is signed in locally
    //return Date.now() < this.expiresAt && this.authenticated;
    return window.localStorage.getItem('token')!=null
  }
 
}