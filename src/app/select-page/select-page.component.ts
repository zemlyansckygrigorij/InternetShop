import {Component, Input, OnInit, Output} from '@angular/core';
import {DataService} from '../data.service';
import {Product} from '../product';
import {OrderService} from '../order.service';
import {Order} from '../order';
import { NgClass } from '@angular/common';



@Component({
  selector: 'app-select-page',
  templateUrl: './select-page.component.html',
  styleUrls: ['./select-page.component.css']
})
export class SelectPageComponent implements OnInit {
  @Input() products: Product[];
  @Input() selectedProduct:  Product;
  @Input() isSelected: boolean;
  @Input() cardSelected: string;
  @Input() labelError: string;
  @Input()   count: number;

  private orders: Order[];

  constructor(private dataService: DataService, private orderService: OrderService) { }

  ngOnInit() {
    this.getProducts();
    this.isSelected = false;
    this.cardSelected = '';
    this.orders = new Array<Order>() ;
    this.labelError = '';
    this.count = 0;
  }
  getProducts() {
    // json
  //   this.products  = this.dataService.getData();
// HttpClient
     this.dataService.getData().subscribe(products => this.products = products);

  }

  selectProduct(product: Product) {
    this.cardSelected = 'mat-card-selected';
    this.selectedProduct = product;

  }

  buyProduct(product: Product, count: number) {

    if (count > product.amount) {
      this.labelError = 'Вы превысили допустимое значение';
    } else if (count === 0) {
      this.labelError = 'Введите количество товара';
    } else {
      const order = new Order();
      order.product = product;
      order.amount = count;
      this.orderService.addOrder(order);
      this.selectedProduct = null;
      this.count = 0;
    }
  }
  cancel() {
    this.count = 0;
    this.labelError = '';
    this.selectedProduct = null;
  }
}
