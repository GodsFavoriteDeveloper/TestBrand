import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, filter, timeout } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  key = 'ck_d66707083c81827ab5d13ba8024913e2611df389';
  secret = 'cs_6751e90680e97e92106645b648974ca22d996553';
  url = 'https://testbrand.cloudaccess.host/wp-json/wc/v2/';

  constructor(public http: HttpClient) { }

  getProducts(count, order) {
    // tslint:disable-next-line: max-line-length
    return this.http.get(this.url + 'products?' + 'consumer_key=' + this.key + '&consumer_secret=' + this.secret + '&per_page=' + count + '&order=' + order).pipe(
      map((data: any) => {
        console.log('before mapping' + data);
        return data;
      }),
      filter((data: any) => {
        return true;
      }),
      timeout(10000)
    );
  }

  getProductCategories() {
    // tslint:disable-next-line: max-line-length
    return this.http.get(this.url + 'products/categories?' + 'consumer_key=' + this.key + '&consumer_secret=' + this.secret).pipe(
      map((data: any) => {
        console.log('before mapping' + data);
        return data;
      }),
      filter((data: any) => {
        return true;
      }),
      timeout(10000)
    );
  }

  getCategory(id) {
    // tslint:disable-next-line: max-line-length
    return this.http.get(this.url + 'products?' + 'consumer_key=' + this.key + '&consumer_secret=' + this.secret + '&category=' + id).pipe(
      map((data: any) => {
        console.log('before mapping' + data);
        return data;
      }),
      filter((data: any) => {
        return true;
      }),
      timeout(10000)
    );
  }

  getProductAttributes() {
    // tslint:disable-next-line: max-line-length
    return this.http.get(this.url + 'products/attributes?' + 'consumer_key=' + this.key + '&consumer_secret=' + this.secret).pipe(
      map((data: any) => {
        console.log('before mapping' + data);
        return data;
      }),
      filter((data: any) => {
        return true;
      }),
      timeout(10000)
    );
  }

  getByAttribute(count, attr) {
    // tslint:disable-next-line: max-line-length
    return this.http.get(this.url + 'products?' + 'consumer_key=' + this.key + '&consumer_secret=' + this.secret + '&per_page=' + count + '&attribute_term=' + attr).pipe(
      map((data: any) => {
        console.log('before mapping' + data);
        return data;
      }),
      filter((data: any) => {
        return true;
      }),
      timeout(10000)
    );
  }


  getProduct(id) {
    // tslint:disable-next-line: max-line-length
    return this.http.get(this.url + 'products/' + id + '?' + 'consumer_key=' + this.key + '&consumer_secret=' + this.secret).pipe(
      map((data: any) => {
        console.log('before mapping' + data);
        return data;
      }),
      filter((data: any) => {
        return true;
      }),
      timeout(10000)
    );
  }

  getStuff() {
    this.http.get('https://example.com/wp-json/wc/v3/products/');
  }

  getPosts() {
    return this.http.get('https://testbrand.cloudaccess.host/api/get_recent_posts').pipe(
      map((data: any) => {
        console.log(data);
        return data.posts;
      }),
      timeout(10000)
    );
  }

  getPost(postId) {
    return this.http.get('https://testbrand.cloudaccess.host/api/get_post/?id=' + postId).pipe(
      map((data: any) => {
        console.log(data);
        return data;
      }),
      timeout(10000)
    );
  }
}
