import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Category } from 'src/app/models/category';
import { AdminService } from 'src/app/services/admin.service';

@Component({
    selector: 'app-navbar-style-two',
    templateUrl: './navbar-style-two.component.html',
    styleUrls: ['./navbar-style-two.component.scss']
})
export class NavbarStyleTwoComponent implements OnInit {
    categories: Category[] = [];
    cartCount = new Subject<number>();

    constructor(private adminService: AdminService) { }

    getCartCount(): Observable<number> {
        return this.cartCount.asObservable();
    }

    ngOnInit(): void {
        this.adminService.allCategories().subscribe(response => { this.categories = response; });
    }

    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }

}