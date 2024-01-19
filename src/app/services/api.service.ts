import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  postJob (data: any){
    return this.http.post<any>("http://localhost:3000/jobs", data)
  }
  getJob (){
    return this.http.get<any>("http://localhost:3000/jobs")
  }
  updateJob(data: any, id: number){
    return this.http.put<any>("http://localhost:3000/jobs/"+id, data)
  }
  deleteJob(id:number){
    return this.http.delete<any>("http://localhost:3000/jobs/"+id)
  }

}
