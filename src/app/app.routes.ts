import { Routes } from '@angular/router';

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
		path: 'auth/register',
		loadComponent: () =>
			import('./auth/registration/registration.component').then(
				(c) => c.RegistrationComponent
			),
	},
	{
		path: 'listing',
		loadComponent: () =>
			import('./product/product-listing/product-listing.component').then(
				(c) => c.ProductListingComponent
			),
		canActivate: [() => !!localStorage.getItem('auth_token')],
	},
	{
		path: 'details/:id',
		loadComponent: () =>
			import('./product/product-detail/product-detail.component').then(
				(c) => c.ProductDetailComponent
			),
		canActivate: [() => !!localStorage.getItem('auth_token')],
	},
	{
		path: '**',
		redirectTo: 'auth/login',
		pathMatch: 'full',
	},
];
