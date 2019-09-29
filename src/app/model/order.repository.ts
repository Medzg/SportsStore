//import { StaticDataSource } from "./static.datasource";
import { RestDataSource } from "./rest.datasource";
import { Order } from "./order.model";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";


@Injectable()
export class OrderRepository {
    private orders: Order[] = [];
    private loaded: boolean = false;


    constructor(private dataSource: RestDataSource) {

    }

    loadOrders(){
        this.orders = this.dataSource.getOrders();
        this.loaded = true;
    }

    findOrders(): Order[] {
        if(!this.loaded){
            this.loadOrders();
        }
        return this.orders;
    }

    saveOrder(order: Order): Observable<Order> {
        return this.dataSource.saveOrder(order);
    }

    updateOrder(order: Order): Observable<Order>{
        return this.dataSource.updateOrder(order);
    }

    deleteOrder(orderId: number): Observable<Order>{
        return this.dataSource.deleterOrder(orderId);
    }

}