import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar2/sidebar2.component';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.scss']
})
export class Navbar2Component implements OnInit {


  private listTitles: { path: string, title: string }[];
  location: Location;
    mobile_menu_visible: any = 0;
  private toggleButton: any;
  private sidebar2Visible: boolean;

  isInscription: boolean = false;
  isBlankPage: boolean = false
  isLoginPage:boolean = false;
  constructor(location: Location,  private element: ElementRef, private router: Router) {
    this.location = location;
        this.sidebar2Visible = false;
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
               this.isBlankPage = event.url === '/';
               this.isLoginPage = event.url.endsWith('login-page') || event.url === '/login';
               this.isInscription = event.url.endsWith('inscription') || event.url === '/isInscription';
            }
          });
  }

  ngOnInit(){
    this.listTitles = ROUTES.filter(listTitle => listTitle);
    const navbar2: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar2.getElementsByClassName('navbar-toggler')[0];
    this.router.events.subscribe((event) => {
      this.sidebar2Close();
       var $layer: any = document.getElementsByClassName('close-layer')[0];
       if ($layer) {
         $layer.remove();
         this.mobile_menu_visible = 0;
       }
   });
  }

  sidebar2Open() {
      const toggleButton = this.toggleButton;
      const body = document.getElementsByTagName('body')[0];
      setTimeout(function(){
          toggleButton.classList.add('toggled');
      }, 500);

      body.classList.add('nav-open');

      this.sidebar2Visible = true;
  };
  sidebar2Close() {
    //   const body = document.getElementsByTagName('body')[0];
    //   this.toggleButton.classList.remove('toggled');
    //   this.sidebar2Visible = false;
    //   body.classList.remove('nav-open');
    const body = document.getElementsByTagName('body')[0];
    if (this.toggleButton) {
        this.toggleButton.classList.remove('toggled');
    }
    this.sidebar2Visible = false;
    body.classList.remove('nav-open');
  };
  sidebar2Toggle() {
      // const toggleButton = this.toggleButton;
      // const body = document.getElementsByTagName('body')[0];
      var $toggle = document.getElementsByClassName('navbar-toggler')[0];

      if (this.sidebar2Visible === false) {
          this.sidebar2Open();
      } else {
          this.sidebar2Close();
      }
      const body = document.getElementsByTagName('body')[0];

      if (this.mobile_menu_visible == 1) {
          // $('html').removeClass('nav-open');
          body.classList.remove('nav-open');
          if ($layer) {
              $layer.remove();
          }
          setTimeout(function() {
              $toggle.classList.remove('toggled');
          }, 400);

          this.mobile_menu_visible = 0;
      } else {
          setTimeout(function() {
              $toggle.classList.add('toggled');
          }, 430);

          var $layer = document.createElement('div');
          $layer.setAttribute('class', 'close-layer');


          if (body.querySelectorAll('.main-panel')) {
              document.getElementsByClassName('main-panel')[0].appendChild($layer);
          }else if (body.classList.contains('off-canvas-sidebar2')) {
              document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
          }

          setTimeout(function() {
              $layer.classList.add('visible');
          }, 100);

          $layer.onclick = function() { //asign a function
            body.classList.remove('nav-open');
            this.mobile_menu_visible = 0;
            $layer.classList.remove('visible');
            setTimeout(function() {
                $layer.remove();
                $toggle.classList.remove('toggled');
            }, 400);
          }.bind(this);

          body.classList.add('nav-open');
          this.mobile_menu_visible = 1;

      }
  };

  getTitle(){
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '#'){
        titlee = titlee.slice( 1 );
    }

    for(var item = 0; item < this.listTitles.length; item++){
        if(this.listTitles[item].path === titlee){
            return this.listTitles[item].title;
        }
    }
    return 'Dashboard SuperAdmin';
  }

}
