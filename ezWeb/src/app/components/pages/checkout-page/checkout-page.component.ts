import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product';
import { AdminService } from 'src/app/services/admin.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
    selector: 'app-checkout-page',
    templateUrl: './checkout-page.component.html',
    styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {

    cartProducts: Product[] = [];
	subTotal: number = 0;
	shipValue: number = 0;
	taxValue: number = 0;
	grandTotal: number = 0;
	checkoutForm: FormGroup;
	submitted = false;

	constructor(private adminService: AdminService,
		private cartService: CartService,
		private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.adminService.allLocations('Bangalore').subscribe(response => { this.options = response; });
		this.resetOption = [this.options[0]];
		this.cartProducts = this.cartService.getAllItems();
        console.log(JSON.stringify(this.cartProducts));
		this.subTotal = 0;
		this.shipValue = 0;
		this.taxValue = 0;
		this.grandTotal = 0;
		for (let i = 0; i < this.cartProducts.length; i++) {
			this.subTotal = this.subTotal + this.cartProducts[i].newPrice * this.cartProducts[i].quantity;
		}
		this.shipValue = this.subTotal * 0.02;
		this.taxValue = this.subTotal * 0.18;
		this.grandTotal = this.subTotal + (this.shipValue + this.taxValue);
		this.checkoutForm = this.formBuilder.group({
			country: ['India'],
			firstName: ['', Validators.required ],
			middleName: [''],
			lastName: ['', Validators.required ],
			companyName: ['', Validators.required ],
			addrValue1: ['', Validators.required ],
			addrValue2: ['', Validators.required ],
			addrValue3: [''],
			state: ['Karnataka'],
			city: ['Bangalore'],
			location: ['', Validators.required ],
			pin: ['', Validators.required ],
			email: ['', Validators.required ],
			phone: ['', Validators.required ],
			createAnAccount: [true],
			shipToDifferent: [true],
			cartTotal: [this.subTotal],
			shipValue: [this.shipValue],
			taxValue: [this.taxValue],
			payment: ['cashOnDelivery', Validators.required],
			cartProducts: this.cartProducts,
			notes: ''
		});
    }

    pageTitle = [
		{
			bgImage: 'assets/img/page-title-bg.jpg',
			title: 'Checkout'
		}
	]

	// Location Select
	singleSelect: any = [];
	multiSelect: any = [];
	stringArray: any = [];
	objectsArray: any = [];
	resetOption: any;
	config = {
		displayKey: "name",
		search: true
	};
	options = [];
	searchChange($event) {
	}
	reset() {
		this.resetOption = [];
	}

	placeOrder(): void {
		// console.log(JSON.stringify(this.checkoutForm.value));
	}

}