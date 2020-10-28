import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'
import { ApiService} from '../admin/api.service';
import { ToastrService} from 'ngx-toastr'
import { Router} from '@angular/router'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  loginForm: FormGroup
  submittedd:boolean=false
  constructor(private fb:FormBuilder,private api:ApiService, private toastr:ToastrService,private route:Router) { }
  ngOnInit(): void {
this.loginForm = this.fb.group({
  username:new FormControl('',Validators.required),
  password:new FormControl('',Validators.required)
})
  }
  
  get f() { return this.loginForm.controls; }
 

  onSubmit(){
    var data ={'usertype':2,'username':this.loginForm.value.username,'password':this.loginForm.value.password}
    console.log(data);
    this.api.login(data).subscribe(res=>{
      console.log(res);
      this.toastr.success(res['message'])
      this.route.navigate(['/user/tasks']);
    },err=>{
      console.log(err);
      this.toastr.warning(err['error'].message)
    })
  }


}
