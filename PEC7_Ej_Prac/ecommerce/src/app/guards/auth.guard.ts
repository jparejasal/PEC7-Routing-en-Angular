import { CanActivateFn, Router } from '@angular/router';
import {inject} from '@angular/core';
import { UserStoreService } from '../services/user-store.service';

export const authGuard: CanActivateFn = () => {

  const loggedUserService = inject(UserStoreService);
  const router = inject(Router);

  if (loggedUserService.usuarioLogeado) {
    return true;
  }
  else {
    router.navigate(['login']);
    return false;  
  }  
};
