import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup
  
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router, private authService: AuthService) { }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  // employeeLogin: boolean;
  // employerLogin: boolean;

  // employeeLogin(){
  // if (this.employeeLogin){
  //     this.http.get<any>("http://localhost:3000/users")
  //     .subscribe(res=>{
  //       const user = res.find((a:any)=>{
  //         return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password && a.user_type==="Employee";
  //       });
  //       if (user){
  //         // alert("You have logged in Successfully!!");
  //         alert("You have successfully logged in as a Employee!!");
  //       this.authService.employeeLogin();
  //         this.loginForm.reset();
  //         this.router.navigate(['about'])
  //       }
  //       else {
  //         alert('Invalid Email or Password');
  //       }
  //     }, error=>{
  //       alert("Something went wrong!!")
  //     })
  //   }
  // }
  // employerLogin(){
  // if (this.employerLogin){
  //     this.http.get<any>("http://localhost:3000/users")
  //     .subscribe(res=>{
  //       const user = res.find((a:any)=>{
  //         return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password && a.user_type==="Employer";
  //       });
  //       if (user){
  //         // alert("You have logged in Successfully!!");
  //         alert("You have successfully logged in as a Employer!!");
  //       this.authService.employerLogin();
  //         this.loginForm.reset();
  //         this.router.navigate(['about'])
  //       }
  //       else {
  //         alert('Invalid Email or Password');
  //       }
  //     }, error=>{
  //       alert("Something went wrong!!")
  //     })
  //   }
  // }
// }



  login(){
    this.http.get<any>("http://localhost:3000/users")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password ;
      });
      if (user){
        // alert("You have logged in Successfully!!");
        alert("You have successfully logged in as a Employee!!");
        this.authService.login();
        this.loginForm.reset();
        this.router.navigate(['about'])
      }
      else {
        alert('Invalid Email or Password');
      }
    }, error=>{
      alert("Something went wrong!!")
    })
  }
}
