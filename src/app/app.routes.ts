import { Routes } from '@angular/router';
import { authGuard } from '../app/auth.guard';

export const routes: Routes = [
	{
		path: '',
		redirectTo: 'auth/login',
		pathMatch: 'full',
	},
	{
		path: 'auth/login',
		loadComponent: () =>
			import('./auth/login/login.component').then((c) => c.LoginComponent),
	},
	{
		path: 'listing',
		loadComponent: () =>
			import('./product/product-listing/product-listing.component').then(
				(c) => c.ProductListingComponent
			),
		canActivate: [authGuard],
	},
	{
		path: 'details/:id',
		loadComponent: () =>
			import('./product/product-detail/product-detail.component').then(
				(c) => c.ProductDetailComponent
			),
		canActivate: [authGuard],
	},
];
