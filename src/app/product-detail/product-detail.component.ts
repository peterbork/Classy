import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../Product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  productId: string;
  product: Product;
  constructor(private route: ActivatedRoute, private ProductService: ProductService) { }

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id');
    this.product = this.ProductService.productById(this.productId);
  }

}
