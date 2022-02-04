import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguradServiceService } from './authgurad-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private Authguardservice: AuthguradServiceService, private router: Router) {}  
  
  canActivate(): boolean {  

    debugger
    if (!this.Authguardservice.gettoken()) {  
        this.router.navigateByUrl("/login");  
    }  
    return this.Authguardservice.gettoken();  
} 
  
}
