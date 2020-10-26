import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  loginForm: FormGroup
  submittedd:boolean=false
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
this.loginForm = this.fb.group({
  username:new FormControl('',Validators.required),
  password:new FormControl('',Validators.required)
})
  }
  
  get f() { return this.loginForm.controls; }
 
  onSubmit(){
    console.log(this.loginForm.value);
    
  }
}
