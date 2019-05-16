import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  imgSrc: any;
  title: any;
  price: any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.imgSrc = this.activatedRoute.snapshot.params.productDetails;
    this.title = this.activatedRoute.snapshot.params.title;
    this.price = this.activatedRoute.snapshot.params.price;
  }

}
