import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { AuthService } from './services/auth.service';
import { NgIf } from '@angular/common';
import { ListProductComponent } from './pages/list-product/list-product.component';
import { RouterLink } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ShopService } from './services/shop.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    CardComponent,
    NgIf,
    ListProductComponent,
    RouterLink,
    HomeComponent,
    NavbarComponent,
    ProductDetailComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'buoi9';

  constructor(
    public authService: AuthService,
    public shopService: ShopService,
  ) {}

  get userInfo() {
    return this.authService.login();
  }
}
