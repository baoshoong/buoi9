import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShopService } from '../../services/shop.service';
import { ProductModel } from '../../models/sanpham.model';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {
  detailProduct!: ProductModel;
  @Input() product!: ProductModel;

  constructor(
    public shopService: ShopService,
    public activatedRoute: ActivatedRoute,
  ) {
    const { id } = this.activatedRoute.snapshot.params;
    this.detailProduct = this.shopService.products.find(
      (product) => product.id == id,
    ) as ProductModel;
  }
}
