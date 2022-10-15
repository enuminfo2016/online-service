import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { Product } from '../models/product';

@Injectable({
	providedIn: 'root'
})
export class AdminService {
	// tslint:disable-next-line: no-inferrable-types
	private apiUrl: string = 'http://localhost:8080/api';

	constructor(private http: HttpClient) { }

	allCategories(): Observable<Category[]> {
		return this.http.get<Category[]>(this.apiUrl + '/category');
	}

	allProductsByCategory(value: string): Observable<Product[]> {
		return this.http.get<Product[]>(this.apiUrl + '/catalogProductsByCategory/' + value);
	}

	productDetailByProduct(value: string): Observable<Product> {
		return this.http.get<Product>(this.apiUrl + '/catalogProductDetailByProduct/' + value);
	}

	allLocations(value: string): Observable<Location[]> {
		return this.http.get<Location[]>(this.apiUrl + '/locationsByCity/' + value);
	}
	
	saveUserOrder(object: any) {
		this.http.post(this.apiUrl + '', object);
	}

	categoryById(value: string): Observable<Category> {
		return this.http.get<Category>(this.apiUrl + '/categoryById/' + value);
	}
}