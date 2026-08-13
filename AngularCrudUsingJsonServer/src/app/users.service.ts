import { inject, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class UsersService {
url='http://localhost:3000/Users'
 
 http= inject (HttpClient)


  constructor() { }
  

  getusers(){
    return this.http.get(this.url);
  }
  adduser(data:any){
  return this.http.post(this.url,data)
  }
  deleteusers(id:number){
   return this.http.delete(`${this.url}/${id}`)
  }
  updateuser(id:number,data:any){
   return this.http.put(`${this.url}/${id}`, data)
  }
}
