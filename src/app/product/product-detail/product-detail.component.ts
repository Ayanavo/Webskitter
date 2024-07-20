import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Product } from '../product-listing/product.model';
import { MatButton } from '@angular/material/button';

@Component({
	selector: 'app-product-detail',
	standalone: true,
	imports: [CommonModule, MatButton],
	templateUrl: './product-detail.component.html',
	styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {
	router = inject(Router);
	detailData: Product;
	constructor() {
		const state = this.router.getCurrentNavigation()!.extras.state as {
			data: Product;
		};
		this.detailData = state.data;
	}

	previousPage() {
		this.router.navigate(['/listing']);
	}

	onError(htmlElement: HTMLImageElement) {
		// htmlElement.src = 'assets/images/fallback.jpeg';
	}
}
