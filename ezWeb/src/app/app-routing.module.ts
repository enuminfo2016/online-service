import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { ComingSoonPageComponent } from './components/pages/coming-soon-page/coming-soon-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { CustomerServicePageComponent } from './components/pages/customer-service-page/customer-service-page.component';
import { FaqPageComponent } from './components/pages/faq-page/faq-page.component';
import { GalleryPageComponent } from './components/pages/gallery-page/gallery-page.component';
import { HomeDemoTwoComponent } from './components/pages/home-demo-two/home-demo-two.component';
import { MyAccountPageComponent } from './components/pages/my-account-page/my-account-page.component';
import { NotFoundPageComponent } from './components/pages/not-found-page/not-found-page.component';
import { OrderTrackingPageComponent } from './components/pages/order-tracking-page/order-tracking-page.component';
import { ShopFullWidthPageTwoComponent } from './components/pages/shop-full-width-page-two/shop-full-width-page-two.component';
import { ShopLeftSidebarPageTwoComponent } from './components/pages/shop-left-sidebar-page-two/shop-left-sidebar-page-two.component';
import { ShopRightSidebarPageTwoComponent } from './components/pages/shop-right-sidebar-page-two/shop-right-sidebar-page-two.component';
import { SimpleProductPageComponent } from './components/pages/simple-product-page/simple-product-page.component';
import { SliderProductPageComponent } from './components/pages/slider-product-page/slider-product-page.component';
import { StickyProductPageComponent } from './components/pages/sticky-product-page/sticky-product-page.component';
import { WishlistPageComponent } from './components/pages/wishlist-page/wishlist-page.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
    { path: '', component: HomeDemoTwoComponent },
    { path: 'about', component: AboutPageComponent },
    { path: 'shop-full-width-2/:id', component: ShopFullWidthPageTwoComponent },
    { path: 'shop-left-sidebar-2', component: ShopLeftSidebarPageTwoComponent },
    { path: 'shop-right-sidebar-2', component: ShopRightSidebarPageTwoComponent },
    { path: 'simple-product/:id', component: SimpleProductPageComponent },
    { path: 'slider-product/:id', component: SliderProductPageComponent },
    { path: 'sticky-product/:id', component: StickyProductPageComponent },
    { path: 'customer-service', component: CustomerServicePageComponent },
    { path: 'profile-authentication', component: MyAccountPageComponent },
    { path: 'order-tracking', component: OrderTrackingPageComponent, canActivate: [] },
    { path: 'gallery', component: GalleryPageComponent },
    { path: 'cart', component: CartPageComponent },
    { path: 'checkout', component: CheckoutPageComponent, canActivate: [] },
    { path: 'wishlist', component: WishlistPageComponent, canActivate: [] },
    { path: 'faq', component: FaqPageComponent },
    { path: 'coming-soon', component: ComingSoonPageComponent },
    { path: 'contact', component: ContactPageComponent },
    // Here add new pages component

    { path: '**', component: NotFoundPageComponent } // This line will remain down from the whole pages component list
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }