export type Product = {
	id: string;
	title: string;
	description: string;
	category: string;
	price: number;
	discountPercentage: number;
	rating: number;
	stock: number;
	tags: Array<string>;
	brand: string;
	sku: string;
	weight: number;
	dimensions: { width: number; height: number; depth: number };
	warrantyInformation: string;
	shippingInformation: string;
	availabilityStatus: string;
	returnPolicy: string;
	minimumOrderQuantity: number;
	meta: {
		createdAt: string;
		updatedAt: string;
		barcode: string;
		qrCode: string;
	};
	images: Array<string>;
	thumbnail: Array<string>;
};
