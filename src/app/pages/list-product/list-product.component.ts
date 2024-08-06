import { Component } from '@angular/core';
import { ShopService } from '../../services/shop.service';
import { RouterLink } from '@angular/router';
import { CardComponent } from '../../components/card/card.component';
import { ProductModel } from '../../models/sanpham.model';
import { NgForOf } from '@angular/common';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-list-product',
  standalone: true,
  imports: [RouterLink, CardComponent, NgForOf, ProductDetailComponent],
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.scss',
})
export class ListProductComponent {
  constructor(public shopService: ShopService) {}
}
