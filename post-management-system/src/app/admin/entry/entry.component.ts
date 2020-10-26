import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('#example').DataTable();
  }

}
