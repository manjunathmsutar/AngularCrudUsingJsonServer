import { inject, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class UsersService {
url='https://nodejs-code-hahzg4b6ffg4dhgp.canadaeast-01.azurewebsites.net'
 
 http= inject (HttpClient)


  constructor() { }
  

  getstudents(){
    return this.http.get(`${this.url}/get`);
  }
  addstudents(data:any){
  return this.http.post(`${this.url}/post`,data)
  }
  deletestudents(_id:string){
   return this.http.delete(`${this.url}/${_id}`)
  }
  updatestudents(_id:string,data:any){
   return this.http.put(`${this.url}/${_id}`,data)
  }
}
