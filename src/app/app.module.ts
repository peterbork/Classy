import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';
import { SliderComponent } from './slider/slider.component';
import { SocialLinksComponent } from './social-links/social-links.component';
import { FooterComponent } from './footer/footer.component';
import { CollectionComponent } from './collection/collection.component';
import { TabsComponent } from './tabs/tabs.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { ProductService } from './product.service';

@NgModule({
  declarations: [
    AppComponent,
    FrontpageComponent,
    ProductDetailComponent,
    ProductsComponent,
    SliderComponent,
    SocialLinksComponent,
    FooterComponent,
    CollectionComponent,
    TabsComponent,
    HeaderComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
      RouterModule.forRoot([
          {path: '', component: FrontpageComponent},
          {path: 'collection', component: CollectionComponent},
          {path: 'product/:id', component: ProductDetailComponent},
          {path: 'contact', component: ContactComponent},
      ])
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
