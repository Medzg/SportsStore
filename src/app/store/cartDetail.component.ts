import { Component } from "@angular/core";
import { Cart } from "../model/cart.model";

@Component({
    selector: "cartdetail",
    templateUrl: "cartDetail.component.html",
})

export class CartDetailComponent {
    constructor(public cart: Cart) {

    }
}