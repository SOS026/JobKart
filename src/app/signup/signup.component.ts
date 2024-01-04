import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }
  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      fullname: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      education: ['', Validators.required],
      experience: ['', Validators.required],
      skills: ['', Validators.required]
    })

  }
  signUp() {
    this.http.post<any>("http://localhost:3000/users", this.signupForm.value)
      .subscribe(res => {
        alert("Singup Successfull");
        this.signupForm.reset();
        this.router.navigate(['login']);
      }, error => {
        alert("Something went wrong")
      })
  }
}
