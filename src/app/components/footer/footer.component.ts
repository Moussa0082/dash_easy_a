import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  test : Date = new Date();

  isBlankPage: boolean = false
  isLoginPage:boolean = false;
  
  constructor(private router:Router) { }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
         this.isBlankPage = event.url === '/';
         this.isLoginPage = event.url.endsWith('login-page') || event.url === '/login';
      }
    });
  }

}
