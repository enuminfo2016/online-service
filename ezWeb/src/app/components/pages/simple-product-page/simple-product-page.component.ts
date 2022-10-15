import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { AdminService } from 'src/app/services/admin.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
    selector: 'app-simple-product-page',
    templateUrl: './simple-product-page.component.html',
    styleUrls: ['./simple-product-page.component.scss']
})
export class SimpleProductPageComponent implements OnInit {

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

    addToCart(item: Product): void { this.cartService.saveItem(item, 'init', 1); }
}