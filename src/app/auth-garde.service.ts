import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AdminParking } from './model/adminParking';
import { AuthServiceService } from './auth-service.service';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGardeService implements CanActivate{

  [x: string]: any;
  adminconect: AdminParking;
  constructor(private authService: AuthServiceService,
    private router: Router){
      this.adminconect = JSON.parse(localStorage.getItem('adminParking'));

  }

  private updateEvent = new Subject<void>();

  update$ = this.updateEvent.asObservable();

  canActivate(
    route: ActivatedRouteSnapshot,
     state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      if(this.adminconect != null) {
        return true;
      }else{
        return this.router.navigate(['/login']);
      }
  }
}
