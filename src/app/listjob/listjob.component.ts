import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Job } from '../job.model'; 
import { ApiService } from '../services/api.service';
import { Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-listjob',
  templateUrl: './listjob.component.html',
  styleUrls: ['./listjob.component.css']
})
export class ListjobComponent implements OnInit {

  formValue : FormGroup;
  jobModelObj: Job = new Job();
  // Bldel:any = new User();
  jobData : any;
  showAdd : boolean;
  showUpdate : boolean;
  // searchText: any;

  // public searchTerm !: any;    //The ! indicates that the variable will be initialized later.

  constructor(private formbuilder: FormBuilder, private api: ApiService,private auth : AuthService,private router : Router) {}
  
  ngOnInit(): void {
    this.formValue = this.formbuilder.group({        //initializing the form, formbuilder will group
      id: ['',Validators.required],
      title : ['',Validators.required],
      business_email : ['',Validators.required],
      description : ['',Validators.required],
      qualification : ['',Validators.required],
      salary_range : ['',Validators.required]
    })
    this.getAllJob();
  }

  clickAddJob(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  postJobDetails(){
    // this.jobModelObj.id = this.formValue.value.id;
    this.jobModelObj.title = this.formValue.value.title;
    this.jobModelObj.description = this.formValue.value.description;
    this.jobModelObj.business_email = this.formValue.value.business_email;
    this.jobModelObj.qualification = this.formValue.value.qualification;
    this.jobModelObj.salary_range = this.formValue.value.salary_range;

    this.api.postJob(this.jobModelObj)
    .subscribe(res=>{
      // console.log("Successfully added the job details");
      console.log(res);
      alert("Job added successfully")
      let ref = document.getElementById('close')
      ref?.click();
      this.formValue.reset();
      this.getAllJob();
    },
    err=>{
      alert("Something went wrong");
      console.error(err)
    })
  }
  getAllJob(){
    this.api.getJob()
    .subscribe(res=>{
      this.jobData = res;
    })
  }
  deleteJob(row: any){
    this.api.deleteJob(row.id)
    .subscribe(res=>{
      alert("Deleted Successfully");
      this.getAllJob();
    })
  }
  onEdit(ro: any){
    this.showAdd = false;
    this.showUpdate = true;
    this.jobModelObj.id = ro.id;
    console.log(ro.id)
    this.formValue.controls['title'].setValue(ro.title);
    this.formValue.controls['business_email'].setValue(ro.business_email);
    this.formValue.controls['description'].setValue(ro.description);
    this.formValue.controls['qualification'].setValue(ro.qualification);
    this.formValue.controls['salary_range'].setValue(ro.salary_range);
  }
  updateJobDetails(){
    this.jobModelObj.title = this.formValue.value.title;
    this.jobModelObj.business_email = this.formValue.value.business_email;
    this.jobModelObj.description = this.formValue.value.description;
    this.jobModelObj.qualification = this.formValue.value.qualification;
    this.jobModelObj.salary_range = this.formValue.value.salary_range;

    this.api.updateJob(this.jobModelObj,this.jobModelObj.id)
    .subscribe(res=>{
      alert("Updated Successfully");
      let ref = document.getElementById('close')   // Attempts to get a reference to an HTML element with the id 'close'. The variable ref will be null if no such element is found.
      ref?.click();   // If the reference ref is not null (i.e., the element with id 'close' was found), this line triggers a click event on that element.
      this.formValue.reset();
      this.getAllJob();
    })
  }


  logout(){

    this.auth.logout();
    this.router.navigate(["/login"])

  }

  // employeeLogout(){
  //   this.auth.employeeLogout();
  //   this.router.navigate(["/login"])
  // }
  // employerLogout(){
  //   this.auth.employerLogout();
  //   this.router.navigate(["/login"])
  // }
  
  
}