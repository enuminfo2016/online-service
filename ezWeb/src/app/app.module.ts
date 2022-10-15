import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { SelectDropDownModule } from 'ngx-select-dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryPageComponent } from './components/pages/gallery-page/gallery-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { HomeDemoTwoComponent } from './components/pages/home-demo-two/home-demo-two.component';
import { NavbarStyleTwoComponent } from './components/common/navbar-style-two/navbar-style-two.component';
import { PartnerComponent } from './components/common/partner/partner.component';
import { TestimonialsComponent } from './components/common/testimonials/testimonials.component';
import { DealInThisWeekComponent } from './components/common/deal-in-this-week/deal-in-this-week.component';
import { FacilityStyleTwoComponent } from './components/common/facility-style-two/facility-style-two.component';
import { SubscribeComponent } from './components/common/subscribe/subscribe.component';
import { HometwoBannerComponent } from './components/pages/home-demo-two/hometwo-banner/hometwo-banner.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { NotFoundPageComponent } from './components/pages/not-found-page/not-found-page.component';
import { ComingSoonPageComponent } from './components/pages/coming-soon-page/coming-soon-page.component';
import { FaqPageComponent } from './components/pages/faq-page/faq-page.component';
import { OrderTrackingPageComponent } from './components/pages/order-tracking-page/order-tracking-page.component';
import { MyAccountPageComponent } from './components/pages/my-account-page/my-account-page.component';
import { CustomerServicePageComponent } from './components/pages/customer-service-page/customer-service-page.component';
import { UpcomingProductsComponent } from './components/common/upcoming-products/upcoming-products.component';
import { TrendingProductsComponent } from './components/common/trending-products/trending-products.component';
import { PopularProductsComponent } from './components/common/popular-products/popular-products.component';
import { NewProductsComponent } from './components/common/new-products/new-products.component';
import { DiscountComponent } from './components/common/discount/discount.component';
import { SimpleProductPageComponent } from './components/pages/simple-product-page/simple-product-page.component';
import { SliderProductPageComponent } from './components/pages/slider-product-page/slider-product-page.component';
import { StickyProductPageComponent } from './components/pages/sticky-product-page/sticky-product-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { WishlistPageComponent } from './components/pages/wishlist-page/wishlist-page.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { VideoComponent } from './components/common/video/video.component';
import { WhyChooseUsComponent } from './components/common/why-choose-us/why-choose-us.component';
import { ShopFullWidthPageTwoComponent } from './components/pages/shop-full-width-page-two/shop-full-width-page-two.component';
import { ShopLeftSidebarPageTwoComponent } from './components/pages/shop-left-sidebar-page-two/shop-left-sidebar-page-two.component';
import { ShopRightSidebarPageTwoComponent } from './components/pages/shop-right-sidebar-page-two/shop-right-sidebar-page-two.component';
import { AdminService } from './services/admin.service';
import { HttpClientModule } from '@angular/common/http';
import { CartService } from './services/cart.service';
import { AuthenticationService } from './services/authentication.service';
import { AuthGuard } from './services/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    GalleryPageComponent,
    ContactPageComponent,
    HomeDemoTwoComponent,
    NavbarStyleTwoComponent,
    PartnerComponent,
    TestimonialsComponent,
    DealInThisWeekComponent,
    FacilityStyleTwoComponent,
    SubscribeComponent,
    HometwoBannerComponent,
    FooterComponent,
    NotFoundPageComponent,
    ComingSoonPageComponent,
    FaqPageComponent,
    OrderTrackingPageComponent,
    MyAccountPageComponent,
    CustomerServicePageComponent,
    UpcomingProductsComponent,
    TrendingProductsComponent,
    PopularProductsComponent,
    NewProductsComponent,
    DiscountComponent,
    SimpleProductPageComponent,
    SliderProductPageComponent,
    StickyProductPageComponent,
    CartPageComponent,
    CheckoutPageComponent,
    WishlistPageComponent,
    AboutPageComponent,
    VideoComponent,
    WhyChooseUsComponent,
    ShopFullWidthPageTwoComponent,
    ShopLeftSidebarPageTwoComponent,
    ShopRightSidebarPageTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    NgxScrollTopModule,
    FormsModule,
    NgxPaginationModule,
    SelectDropDownModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AdminService, CartService, AuthenticationService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
