import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormControl, FormGroup } from '@angular/forms';

@Component({
	selector: 'error-msg',
	standalone: true,
	templateUrl: './error-msg.component.html',
	styleUrls: ['./error-msg.component.scss'],
})
export class ErrorMsgComponent implements OnInit {
	FormControl!: FormControl;
	@Input() control!: string;
	errorType!: Object;
	constructor(public controlContainer: ControlContainer) {}

	ngOnInit() {
		this.FormControl = (this.controlContainer.control as FormGroup).get(
			this.control
		) as FormControl;
	}
}
