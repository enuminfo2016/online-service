import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Product } from 'src/app/models/product';
import { AdminService } from 'src/app/services/admin.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
    selector: 'app-slider-product-page',
    templateUrl: './slider-product-page.component.html',
    styleUrls: ['./slider-product-page.component.scss']
})
export class SliderProductPageComponent implements OnInit {

	constructor(private route: ActivatedRoute,
        private adminService: AdminService,
        private cartService: CartService) {
        this.adminService.productDetailByProduct(this.route.snapshot.paramMap.get('id')).subscribe(response => {
            this.singleProductsItem = response;
            this.pageTitle = [
                {
                    bgImage: 'assets/img/page-title-bg.jpg',
                    title: this.singleProductsItem.fullName
                }
            ]
        });
    }

    ngOnInit(): void {
    }

    pageTitle = [];
    singleProductsItem: Product = new Product();

    productsDetailsImageSlidesOptions: OwlOptions = {
		loop: true,
		nav: true,
		dots: false,
		autoplayHoverPause: true,
		autoplay: true,
		margin: 30,
		navText: [
			"<i class='bx bx-left-arrow-alt'></i>",
			"<i class='bx bx-right-arrow-alt'></i>"
		],
		responsive: {
			0: {
				items: 1,
			},
			576: {
				items: 2,
			},
			768: {
				items: 2,
			},
			1200: {
				items: 3,
			}
		}
    }

	addToCart(item: Product): void { this.cartService.saveItem(item, 'init', 1); }
}