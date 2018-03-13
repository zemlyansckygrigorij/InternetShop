import { Component, OnInit } from '@angular/core';
import {OrderService} from '../order.service';
import {Order} from '../order';
import { Router } from '@angular/router';
import {DataService} from '../data.service';
import {Product} from '../product';

@Component({
  selector: 'app-basket-page',
  templateUrl: './basket-page.component.html',
  styleUrls: ['./basket-page.component.css']
})
export class BasketPageComponent implements OnInit {
  private  orders: Order[];
  cost: number ;

  constructor(private orderService: OrderService, private dataService: DataService) { }

  ngOnInit() {
    this.getData();
  }
  buy() {
    const productList = new Array<Product>();
    this.orders.forEach((o: Order) => {
      o.product.amount = o.amount;
      productList.push(o.product);
    });

    // Http send update
    this.dataService.updateData( productList);

  }
  cancel() {
    this.orderService.deleteAll();
  }
  deleteOrder(order: Order) {
    this.orderService.deleteOrder(order);
    this.getData();
  }

  getData() {
    this.orders = this.orderService.getData();
    this.cost = this.orderService.getValue();
  }
}
