import { Component, inject } from '@angular/core';
import { UsersService } from './users.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularPractice';
  RegForm!:FormGroup;
  users:any;
  filteredUsers: any[] = [];
  id:number=0;
  name=''
  email=''
  gender=''
  password=''
  phone=''
  user=inject(UsersService)
  fb=inject(FormBuilder)
  constructor(){}
  ngOnInit(): void {
     this.RegForm=this.fb.group({
      name:['',Validators.required],
      email:['',Validators.required],
      gender:['',Validators.required],
      password:['',Validators.required],
      phone:['',Validators.required],
     })
     this.getallusers();
    
    }
    
  getallusers(){
    this.user.getusers().subscribe((res)=>{
      this.users=res;
     }) 
  }
  addusers(data:any){
    this.user.adduser(data).subscribe((res)=>{
      alert('User Added ')
     this.getallusers();
     this.RegForm.reset();
    })
  }
  delete(id:number):void{
    this.user.deleteusers(id).subscribe((res)=>{
    alert('User Deleted ')
    this.getallusers();
    })
  }
  onEdit(user:any):void{
    this.id=user.id;
    this.RegForm.controls['name'].setValue(user.name)
    this.RegForm.controls['email'].setValue(user.email)
    this.RegForm.controls['gender'].setValue(user.gender)
    this.RegForm.controls['password'].setValue(user.password)
    this.RegForm.controls['phone'].setValue(user.phone)
  }
  updateusers(data:any){
    this.user.updateuser(this.id,data).subscribe((res)=>{
     alert('User Updated');
     this.getallusers();
     this.RegForm.reset();
    })
  }

  //  onSearch(searchText: string) {
  //   searchText = searchText.toLowerCase();

  //   this.filteredUsers = this.users.filter(user =>
  //     user.name.toLowerCase().includes(searchText) ||
  //     user.email.toLowerCase().includes(searchText)
  //   );
  // }
  
}
 