import {  CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router }from "@angular/router"
import { Injectable } from '@angular/core'

import { AuthService } from 'src/app/auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate{

constructor(private authService: AuthService, private route: Router){ }

        canActivate(route: ActivatedRouteSnapshot ,state: RouterStateSnapshot): any{
        if(this.authService.isAuth()){
            return true;
        } else {
            this.route.navigate(['/login/']);
        }
    }
}
