import { Injectable } from "@angular/core";
import { Product } from "./product.model";


@Injectable()
export class Cart {
    public entries: CartEntry[] = [];
    public itemCount: number = 0;
    public cartTotal: number = 0;

    addEntry(product: Product, quantity: number = 1): void {
        let entry = this.entries.find(entry => entry.product.id == product.id);
        if (entry != undefined) {
            entry.quantity += quantity;
        } else {
            this.entries.push(new CartEntry(product, quantity));
        }

        this.recalculate();
    }

    updateQuantity(product: Product, quantity: number) {
        let entry: CartEntry = this.entries.find(entry => entry.product.id == product.id);
        if (entry != undefined) {
            entry.quantity = Number(quantity);
            entry.entryTotal = product.price * quantity;
        }
        this.recalculate();
    }

    removeEntry(entry: CartEntry): void {
        let index = this.entries.findIndex(e => e.product.id == entry.product.id);
        if (index != undefined) {
            this.entries.splice(index, 1);
            this.recalculate();
        }
    }

    clear() {
        this.entries = [];
        this.itemCount = 0;
        this.cartTotal = 0;
    }
    private recalculate() {
        this.itemCount = 0;
        this.cartTotal = 0;
        this.entries.forEach(e => {
            this.itemCount += e.quantity;
            this.cartTotal += e.entryTotal;
        })
    }

}

export class CartEntry {
    public entryTotal: number = 0;

    constructor(public product: Product, public quantity: number) {
        this.entryTotal = this.product.price * this.quantity;
    }
}