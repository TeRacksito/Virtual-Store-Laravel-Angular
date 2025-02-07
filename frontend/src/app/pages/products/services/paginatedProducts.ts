import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PaginatedProductsService {
  products: any[] = [];
  pagination: any = {};

  constructor(private http: HttpClient) {}

  fetchProducts(url: string = '/api/products'): void {
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((response) => {
    //     this.pagination = response;
    //     this.products = this.pagination.data;
    //     console.log(response);
    //   })
    //   .catch((error) => console.error(error));

    this.http.get(url).subscribe((response) => {
      this.pagination = response;
      this.products = this.pagination;
    });

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
