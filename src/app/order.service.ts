import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {PRODUCTS} from './data';
import {Product} from './product';
import {Order} from './order';

@Injectable()
export class OrderService {

  private  orders: Order[];
  constructor() {
    this.orders  =  new Array<Order>() ;
  }

  getData(): Order[] {
    return this.orders;
  }
   addOrder(order: Order) {
    this.orders.push(order);
  }
  deleteOrder(order: Order) {
    const index = this.orders.indexOf(order);
    this.orders.splice(index, 1);
  }
 getValue(): any {
   let cost = 0;
   const orders = this.getData();

   for ( const o of orders) {
     cost = cost + (o.product.price * o.amount);
   }
   return cost;
  }
  deleteAll() {
    this.orders.splice(0, this.orders.length);
  }

}
