import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
	FormControl,
	FormGroup,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms';
import { ErrorMsgComponent } from '../../shared/error-msg/error-msg.component';

import { Router, RouterModule } from '@angular/router';
import { CustomValidators } from '../../shared/custom-validators';
@Component({
	selector: 'app-registration',
	standalone: true,
	imports: [ReactiveFormsModule, RouterModule, CommonModule, ErrorMsgComponent],
	templateUrl: './registration.component.html',
	styleUrl: './registration.component.scss',
})
export class RegistrationComponent {
	router = inject(Router);
	toggle: boolean = false;

	SigninForm: FormGroup = new FormGroup(
		{
			username: new FormControl<string>('', Validators.required),
			email: new FormControl<string>('', [
				Validators.email,
				Validators.required,
			]),
			password: new FormControl<string>('', [
				Validators.required,
				Validators.minLength(8),
			]),
			cnfpassword: new FormControl<string>('', [
				Validators.required,
				Validators.minLength(8),
			]),
		},
		CustomValidators.PatternMatch('password', 'cnfpassword')
	);

	toggleVisual() {
		this.toggle = !this.toggle;
	}

	onSubmit() {
		this.SigninForm.markAllAsTouched();
		console.log(this.SigninForm);
		if (this.SigninForm.valid) {
			console.log(this.SigninForm);

			this.router.navigate(['/auth/login']);
		}
	}

	get FieldControlUser() {
		return this.SigninForm.get('username') as FormControl;
	}

	get FieldControlPass() {
		return this.SigninForm.get('password') as FormControl;
	}

	get FieldControlEmail() {
		return this.SigninForm.get('email') as FormControl;
	}
}
