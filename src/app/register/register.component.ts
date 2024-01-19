import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {}
  ngOnInit(): void {
      this.registerForm = this.formBuilder.group({
        fullname: ['', Validators.required],
        mobile: ['', Validators.required],
        email: ['', Validators.required],
        education: ['', Validators.required],
        experience: ['', Validators.required],
        skills: ['', Validators.required],
      })
  }

  register(){
    this.http.post<any>("http://localhost:3000/registrations", this.registerForm.value)
    .subscribe(res =>{
      alert("You have registered successfully")
      this.registerForm.reset();
      this.router.navigate(['Home']);
    }, error =>{
      alert("Something went wrong")
    })
  }

}
