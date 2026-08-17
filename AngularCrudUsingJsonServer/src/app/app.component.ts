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
  students:any;
  filteredUsers: any[] = [];
  _id=''
  name=''
  email=''
  gender=''
  password=''
  age=''
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
      age:['',Validators.required],
      phone:['',Validators.required],
     })
     this.getallstudents();
    
    }
    
  getallstudents(){
    this.user.getstudents().subscribe((res)=>{
      this.students=res;
      console.log(this.students)
     }) 
  }
  addstudents(data:any){
    this.user.addstudents(data).subscribe((res)=>{
      alert('student Added ')
     this.getallstudents();
     this.RegForm.reset();
    })
  }
 
  delete(_id:string){
    this.user.deletestudents(_id).subscribe((res)=>{
      console.log(res)
      alert("Student Deleted")
      this.getallstudents()
      
    })
  }

  onEdit(user:any){
    this._id=user._id;
    this.RegForm.controls['name'].setValue(user.name)
    this.RegForm.controls['email'].setValue(user.email)
    this.RegForm.controls['gender'].setValue(user.gender)
    this.RegForm.controls['password'].setValue(user.password)
    this.RegForm.controls['age'].setValue(user.age)
    this.RegForm.controls['phone'].setValue(user.phone)
  }
  updatestudents(data:any){
    this.user.updatestudents(this._id,data).subscribe((res)=>{
     alert('student Updated');
     this.getallstudents();
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
 