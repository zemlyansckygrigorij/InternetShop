import { Injectable } from '@angular/core';

import {PRODUCTS} from './data';
import {Product} from './product';
import {Http, Response, Headers, RequestOptions, RequestMethod} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable()
export class DataService {

  // ---------------------------- Json ----------------------------
  //
  //
  // productList: Product[];
  // dataUrl = 'data.json';
  // private pItems = PRODUCTS;
  // constructor() { }
  // getData(): Product[] {
  //   return this.pItems;
  // }
  // // updateProduct(product: Product) {
  // //   const index = findIndex(this.pItems, (p: Product) => {
  // //     return p.id === product.id;
  // //   });
  // //   this.pItems[index] = product;
  // // }
  //
  // deleteProduct(product: Product) {
  //   this.pItems.splice(this.pItems.indexOf(product), 1);
  // }
  //

  // -------------------------------------- Http ------------------------------------------------
  // productList: Product[];
  // dataUrl = 'http://www.localhost:8080/' ;
  // constructor(private http: Http) { }
  // getData(): Product[] {
  //   this.http.get(this.dataUrl)
  //     .map((data: Response) => {
  //       return data.json() as Product[];
  //     }).toPromise().then(x => {
  //     this.productList = x;
  //     // console.log(x);
  //   });
  //   console.log(this.productList);
  //   return this.productList;
  // }
  //
  // updateData( productList: Product[]) {
  //   const body = JSON.stringify(productList);
  //   console.log(body);
  //   const headerOptions = new Headers({ 'Content-Type': 'application/json' });
  //   const requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
  //   return this.http.put( this.dataUrl,
  //     body,
  //     requestOptions).map(res => res.json());
  // }

  //
  // // --------------------------------------- HttpClient finish editer ------------------------------------


  dataUrl = 'http://www.localhost:8080/' ;
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) {}

  getData(): Observable<Product[]> {
    return this.http.get<Product[]>(this.dataUrl);
  }
  updateData(productList: Product[]) {

    this.http
      .put(this.dataUrl , JSON.stringify( productList), {headers: this.headers})
      .toPromise()

      .catch(this.handleError);
    console.log('update() service ' + JSON.stringify( productList));

  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred: ', error); // for demo only
    return Promise.reject(error.message || error);
  }


//  -------------------------------------------------------------------------------------------------------


}

