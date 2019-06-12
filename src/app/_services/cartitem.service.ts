import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { IProduct } from '../_interfaces/productModel';
@Injectable({
    providedIn: 'root'
})
export class CartItemServices {
    public cartItem = new Subject<any>();
    public products: IProduct[] = [];
    addProductToCart = (product: IProduct) => {
        // if (this.products.length > 0) {
        //     this.products.map((item: any) => {
        //         if (item.includes(product.id)) {
        //             this.products = this.products;
        //         } else {
        //             this.products.push(product);
        //         }
        //     });
        // } else {
        //     this.products.push(product);
        // }
        this.products.push(product);
        this.cartItem.next(this.products);
    }
    getProdcutFromCart = (): Observable<IProduct> => {
        return this.cartItem.asObservable();
    }
    removeProductFromCart = (productId) => {
        this.products = this.products.filter((item) => item.id !== productId);
        this.cartItem.next(this.products);
    }
}
