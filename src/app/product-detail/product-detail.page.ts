import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItemServices } from '../_services/cartitem.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  imgSrc: any;
  title: any;
  price: any;
  relatedImages = [
    { imgSrc: '/assets/products/backpacks/back1.jpg' },
    { imgSrc: '/assets/products/backpacks/back1.jpg' },
    { imgSrc: '/assets/products/backpacks/back1.jpg' },
    { imgSrc: '/assets/products/backpacks/back1.jpg' }
  ];
  slideOpts = {
    initialSlide: 1,
    speed: 400,
  };
  page = 0;
  isHeartFull: boolean;
  productData: { title: any; price: any; id: any};
  constructor(
    private activatedRoute: ActivatedRoute,
    private cartItemService: CartItemServices) { }

  ngOnInit() {
    this.imgSrc = this.activatedRoute.snapshot.params.productDetails;
    this.title = this.activatedRoute.snapshot.params.title;
    this.price = this.activatedRoute.snapshot.params.price;
    this.productData = {title: this.title, price: this.price, id: 1};
  }
  slideChanged = ev => {
    let test = 0;
    test = ev.srcElement.getActiveIndex().then((data: any) => {
      this.page = data;
    }) + 1;
  }
  addToWishList = () => {
    this.isHeartFull = !this.isHeartFull;
  }
  addToCart = () => {
    this.cartItemService.addProductToCart(this.productData);
  }
}
