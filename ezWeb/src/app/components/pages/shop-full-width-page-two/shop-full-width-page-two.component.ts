import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { AdminService } from 'src/app/services/admin.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
    selector: 'app-shop-full-width-page-two',
    templateUrl: './shop-full-width-page-two.component.html',
    styleUrls: ['./shop-full-width-page-two.component.scss']
})
export class ShopFullWidthPageTwoComponent implements OnInit {
    singleProductsItem: Product[] = [];
    category: Category = new Category();

    constructor(private route: ActivatedRoute,
        private adminService: AdminService,
        private cartService: CartService) { }

    ngOnInit(): void {
        this.resetOption = [this.options[0]];
        let categoryId = this.route.snapshot.paramMap.get('id');
        this.adminService.categoryById(categoryId).pipe(first()).subscribe(response => { this.category = response; });
        this.adminService.allProductsByCategory(categoryId).pipe(first()).subscribe(response => {
            this.singleProductsItem = response;
        });
    }

    pageTitle = [
        {
            bgImage: 'assets/img/page-title-bg.jpg',
            title: 'Quality assured'
        }
    ]

    // For Pagination
    shopFullWidth: number = 1;

    // Category Select
    singleSelect: any = [];
    multiSelect: any = [];
    stringArray: any = [];
    objectsArray: any = [];
    resetOption: any;
    config = {
        displayKey: "name",
        search: true
    };
    options = [
        {
            name: "Default",
        },
        {
            name: "Popularity",
        },
        {
            name: "Latest",
        },
        {
            name: "Price: low to high",
        },
        {
            name: "Price: high to low",
        }
    ];
    searchChange($event) {
        console.log($event);
    }
    reset() {
        this.resetOption = [];
    }

    addToCart(item: Product): void { this.cartService.saveItem(item, 'init', 1); }

}