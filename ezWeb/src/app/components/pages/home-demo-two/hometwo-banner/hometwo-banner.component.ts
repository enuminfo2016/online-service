import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-hometwo-banner',
    templateUrl: './hometwo-banner.component.html',
    styleUrls: ['./hometwo-banner.component.scss']
})
export class HometwoBannerComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    mainBannerItem = [
        {
            title: 'Fresh Fruits',
            paragraph: '',
            buttonIcon: 'bx bx-shopping-bag',
            buttonText: 'SHOP NOW',
            buttonLink: 'shop-full-width-2',
            image: 'assets/img/banner-img1.png'
        },
        {
            title: 'Fresh Vegetables',
            paragraph: '',
            buttonIcon: 'bx bx-shopping-bag',
            buttonText: 'SHOP NOW',
            buttonLink: 'shop-full-width-2',
            image: 'assets/img/banner-img2.png'
        },
        {
            title: 'Fresh Meat',
            paragraph: '',
            buttonIcon: 'bx bx-shopping-bag',
            buttonText: 'SHOP NOW',
            buttonLink: 'shop-full-width-2',
            image: 'assets/img/banner-img3.png'
        }
    ]

    homeSlidesOptions: OwlOptions = {
		loop: true,
		nav: true,
		margin: 5,
		dots: false,
		autoplay: true,
		autoHeight: true,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut',
		autoplayHoverPause: true,
		navText: [
			"<i class='bx bx-left-arrow-alt'></i>",
			"<i class='bx bx-right-arrow-alt'></i>"
		],
		responsive: {
			0: {
                items: 1
			},
			576: {
                items: 1
			},
			768: {
                items: 1
			},
			992: {
                items: 1
			},
			1200: {
                items: 1
			}
		}
    }

}