import { Component, inject } from '@angular/core';
import { ErrorMsgComponent } from '../../shared/error-msg/error-msg.component';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import {
	FormControl,
	FormGroup,
	Validators,
	ReactiveFormsModule,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
	selector: 'app-login',
	standalone: true,
	imports: [ErrorMsgComponent, ReactiveFormsModule, CommonModule, RouterModule],
	templateUrl: './login.component.html',
	styleUrl: './login.component.scss',
})
export class LoginComponent {
	router = inject(Router);
	toggle: boolean = false;

	loginform: FormGroup = new FormGroup({
		email: new FormControl('', [Validators.email, Validators.required]),
		password: new FormControl('', Validators.required),
	});

	toggleVisual() {
		this.toggle = !this.toggle;
	}

	get FieldControlPass() {
		return this.loginform.get('password') as FormControl;
	}

	get FieldControlEmail() {
		return this.loginform.get('email') as FormControl;
	}

	onSubmit() {
		this.loginform.markAllAsTouched();
		if (this.loginform.valid) {
			localStorage.setItem('auth_token', '' + Math.random());
			this.router.navigate(['/listing']);
		}
	}
}
