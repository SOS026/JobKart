import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  loggedIn: boolean = false;

  login(){
    this.loggedIn = true;
  }
  logout(){
    this.loggedIn = false;
  }
  IsAuthenticated(){ 
    return this.loggedIn;
  }

  // employeeLoggedIn: boolean = false;
  // employerLoggedIn: boolean = false;

  // employeeLogin(){
  //   this.employeeLoggedIn = true;
  // }
  // employeeLogout(){
  //   this.employeeLoggedIn = false;
  // }
  // employerLogin(){
  //   this.employerLoggedIn = true;
  // }
  // employerLogout(){
  //   this.employerLoggedIn = false;
  // }
}
