import { Component, OnInit } from '@angular/core';
import { User } from '../users.model';
import { UserService } from '../services/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-userprofiles',
  templateUrl: './userprofiles.component.html',
  styleUrls: ['./userprofiles.component.css']
})
export class UserprofilesComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService, private http: HttpClient) { }

  ngOnInit() {
    this.loadUsers();
  }

  // private loadUsers() {
  //   this.userService.getUsers().subscribe((data) => {
  //     this.users = data;
  //   });
  // }

  loadUsers(){
    this.http.get<any>('http://localhost:3000/users')
    .subscribe(res=>{
      this.users = res;
    })
  }
}
