import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment } from 'src/environments/environment'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {

   }
   login(data){
    return this.http.post(environment.baseurl+'/accounts/api/login',data)
   }
   create_user(data){
    return this.http.post(environment.baseurl+'/accounts/api/create_user',data)
  }
  edit_user(id,data){
    return this.http.put(environment.baseurl+'/accounts/api/edit_user/'+id,data)
  }
  user_list(){
    return this.http.get(environment.baseurl+'/accounts/api/user_list')
  }
  block_unblock_user(id){
    return this.http.get(environment.baseurl+'/accounts/api/block_unblock_user'+id)
  }
}
