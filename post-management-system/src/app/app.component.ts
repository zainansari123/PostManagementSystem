import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  is_admin: boolean = true
  is_login: boolean = false
  title = 'post-management-system';

  constructor(private route: Router) {
    this.routeEvent(this.route);
  }
  routeEvent(router: Router) {
    router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        if (e.url == '/admin') {
          this.is_admin = true
        }
        if (e.url == '/user') {
          this.is_admin = false
        }
        if(e.url!='/admin' && e.url !='/user') {
          this.is_login = true
        }
      }
    });
  }

  ngOnInit(): void {
    // if(window.location.pathname == '/admin'){
    //   this.is_admin=true
    // }else{
    //   this.is_admin=false
    // }
  }
  logout() {
    localStorage.removeItem('currentUser')
    this.is_login = false
    if (this.is_admin) {
      this.route.navigate(['/admin'])
    } else {
      this.route.navigate(['/user'])
    }
    // location.reload()
  }
}
