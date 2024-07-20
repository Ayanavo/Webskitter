import {
	ActivatedRouteSnapshot,
	CanActivateFn,
	RouterStateSnapshot,
} from '@angular/router';

export const authGuard: CanActivateFn = (
	route: ActivatedRouteSnapshot,
	state: RouterStateSnapshot
) => {
	return !!localStorage.getItem('auth_token');
};