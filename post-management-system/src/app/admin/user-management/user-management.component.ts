import { Component, OnInit, } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    $('#example').DataTable();
  }

}

