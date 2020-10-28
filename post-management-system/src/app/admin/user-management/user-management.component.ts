import { Component, OnInit, } from '@angular/core';
import { ApiService} from '../api.service'
declare var $:any;
import { environment} from 'src/environments/environment'
import {FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms'
import {ToastrService } from 'ngx-toastr'
@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css'],
  providers:[ApiService,ToastrService]
})
export class UserManagementComponent implements OnInit {
  userForm: FormGroup
  submitted:boolean=false
  edit_mode:boolean=false
  user_list
  baseurl=environment.baseurl
  profile_img
  user_id
  constructor(private fb:FormBuilder,private api:ApiService, private toastr:ToastrService) { }  
 

  ngOnInit(): void {
    this.userForm = this.fb.group({
      username:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required),
      first_name:new FormControl('',Validators.required),
      last_name:new FormControl('',Validators.required),
      email:new FormControl('',[Validators.required,Validators.email]),
      gender:new FormControl('',Validators.required),
      country_code:new FormControl('',Validators.required),
      mobile:new FormControl('',Validators.required),
      address:new FormControl('',Validators.required),
      profile_img:new FormControl('',Validators.required)
    })
    $('#example').DataTable();
  this.api.user_list().subscribe(res=>{
    console.log(res);
    this.user_list = res['data']
  },err=>{
    console.log(err);
  })
  }
  get f() { return this.userForm.controls; }

openModal(u,v){
  console.log(v);
  console.log(u);
  
  $('#user-modal').modal('show')
  if(v==2){
    this.edit_mode=true
    this.user_id = u.id
    this.userForm.patchValue({
      username:u.username,
      password:u.password,
      first_name:u.first_name,
      last_name:u.last_name,
      email:u.email,
      gender:u.gender,
      country_code:u.country_code,
      mobile:u.mobile,
      address:u.address
    })
  }else{
    this.edit_mode=true
  }
}
singleFile(e){
console.log(e.target.files[0]);
this.profile_img =e.target.files[0]
}
submit(){
  this.submitted=true
  if(this.userForm.invalid){
    return
  }
  var dataToSave=new FormData;
  var i=0
  for(var d in this.userForm.value){
    if(i<9){
    dataToSave.append(d,this.userForm.value[d])
    }
    i=i+1
  }
  if(this.profile_img){
    dataToSave.append('profile_img',this.profile_img)
  }
  console.log(this.userForm.value);
  if(this.edit_mode){
    // dataToSave.delete('username')
    this.api.edit_user(this.user_id,dataToSave).subscribe(res=>{
      console.log(res);
      this.toastr.success(res['message'])
      $('#user-modal').modal('hide')
      location.reload()
    },err=>{
      console.log(err);
      this.toastr.warning(err['error'].message)
    })
  }else{
    this.api.create_user(dataToSave).subscribe(res=>{
      console.log(res);
      this.toastr.success(res['message'])
      $('#user-modal').modal('hide')
      location.reload()
    },err=>{
      console.log(err);
      this.toastr.warning(err['error'].message)
    })
  }  
}
}

