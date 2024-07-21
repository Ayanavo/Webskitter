import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { NavigationExtras, Router } from '@angular/router';
import ProductListjson from '../product-list.json';
import { Product } from './product.model';

@Component({
	selector: 'app-product-listing',
	standalone: true,
	imports: [
		CommonModule,
		MatFormFieldModule,
		MatInputModule,
		MatTableModule,
		MatSortModule,
		MatPaginatorModule,
		MatButton,
	],
	templateUrl: './product-listing.component.html',
	styleUrl: './product-listing.component.scss',
})
export class ProductListingComponent implements AfterViewInit {
	displayedColumns: string[] = [
		'id',
		'title',
		'description',
		'category',
		'price',
		'discountPercentage',
		'rating',
		'stock',
		'brand',
		'sku',
		'weight',
		'warrantyInformation',
		'shippingInformation',
		'availabilityStatus',
		'returnPolicy',
		'minimumOrderQuantity',
		'edit',
	];
	dataSource = new MatTableDataSource(ProductListjson);
	@ViewChild(MatPaginator) paginator!: MatPaginator;
	@ViewChild(MatSort) sort!: MatSort;
	router = inject(Router);
	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	}

	applyFilter(event: KeyboardEvent) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();
		this.dataSource.paginator && this.dataSource.paginator.firstPage();
	}

	openDetails(detailData: Product) {
		const navigationExtras: NavigationExtras = {
			state: { data: detailData },
		};
		this.router.navigate(['./details', detailData.id], navigationExtras);
	}

	Logout() {
		localStorage.clear();
		this.router.navigate(['/auth/login']);
	}
}
