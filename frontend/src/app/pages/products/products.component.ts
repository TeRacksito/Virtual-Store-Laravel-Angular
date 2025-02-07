import { Component, OnInit } from '@angular/core';
import { FullLayoutComponent } from '../../Layouts/components/full-layout/full-layout.component';

@Component({
  selector: 'app-products-page',
  imports: [FullLayoutComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsPageComponent implements OnInit {
  products: any[] = [];
  pagination: any = {};

  ngOnInit(): void {
    this.fetchProducts();
  }

  nextPage(): void {
    if (this.pagination.next_page_url) {
      this.fetchProducts(this.pagination.next_page_url);
    }
  }

  previousPage(): void {
    if (this.pagination.prev_page_url) {
      this.fetchProducts(this.pagination.prev_page_url);
    }
  }
}
