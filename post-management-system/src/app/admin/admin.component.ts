import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'
import { Router} from '@angular/router'
import { ApiService} from '../admin/api.service';
import { ToastrService} from 'ngx-toastr'
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers:[ApiService,ToastrService]
})
export class AdminComponent implements OnInit {
  loginForm: FormGroup
  submittedd:boolean=false
  constructor(private fb:FormBuilder,private api:ApiService, private toastr:ToastrService, private route:Router) { }

  ngOnInit(): void {
this.loginForm = this.fb.group({
  username:new FormControl('',Validators.required),
  password:new FormControl('',Validators.required)
})
  }
  
  get f() { return this.loginForm.controls; }
 
  onSubmit(){
    var data ={'usertype':1,'username':this.loginForm.value.username,'password':this.loginForm.value.password}
    console.log(data);
    this.api.login(data).subscribe(res=>{
      console.log(res);
      localStorage.setItem('currentUser',JSON.stringify(res['data']))
      this.toastr.success(res['message'])
      this.route.navigate(['/admin/user-management']);
    },err=>{
      console.log(err);
      this.toastr.warning(err['error'].message)
    })
  }
}
