import { Component, OnInit } from '@angular/core';
import { FullLayoutComponent } from '../../components/Layouts/full-layout/full-layout.component';

@Component({
  selector: 'app-products-page',
  imports: [FullLayoutComponent],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css',
})
export class ProductsPageComponent implements OnInit {
  products: any[] = [];
  pagination: any = {};

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(url: string = '/api/products'): void {
    fetch(url)
      .then((res) => res.json())
      .then((response) => {
        this.pagination = response;
        this.products = this.pagination.data;
        console.log(response);

      })
      .catch((error) => console.error(error));

    window.scrollTo(0, 0);
    window.history.pushState(null, '', url);
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
