import { Component } from "@angular/core";
import { ProductRepository } from "../model/product.repository";
import { Product } from "../model/product.model";
import { Cart } from "../model/cart.model";
import { Router } from "@angular/router";

@Component({
    selector: "store",
    templateUrl: "store.component.html",
})

export class StoreComponent {
    public selectedCategory: string = null;

    public productsPerPage = 4;
    public selectedPage = 1;

    constructor(private repository: ProductRepository,
        private cart: Cart,
        private router: Router) { } //auto injected

    get products(): Product[] {
        let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
        return this.repository.findProducts(this.selectedCategory)
            .slice(pageIndex, pageIndex + this.productsPerPage);
    }

    get categories(): string[] {
        return this.repository.findCategories();
    }

    get pageCount(): number {
        return (Math.ceil(this.repository.findProducts(this.selectedCategory).length / this.productsPerPage));
    }

    changeCategory(newCategory?: string) {
        this.selectedCategory = newCategory;
    }

    changePage(newPage: number) {
        this.selectedPage = newPage;
    }

    changePageSize(newPageSize: number) {
        this.productsPerPage = Number(newPageSize);
        this.changePage(1);
    }

    addToCart(product: Product) {
        this.cart.addEntry(product, 1);
        this.router.navigateByUrl("/cart");
    }
}