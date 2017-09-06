import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products;
  currentPath;
  constructor(private router: Router, private ProductService: ProductService) { }

  ngOnInit() {

    this.currentPath = this.router.url;
    console.log(this.currentPath);
    this.products = this.ProductService.products((this.router.url === '/collection') ? 12 : 4)
  }

}
