import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {
  products = [];
  backPacks = [
    {imgSrc: '/assets/products/backpacks/back1.jpg', mrp: 'Rs.750', title: 'Back 1', barnd: 'Brand'},
    {imgSrc: '/assets/products/backpacks/back2.jpg', mrp: 'Rs.750', title: 'Back 1', barnd: 'Brand'},
    {imgSrc: '/assets/products/backpacks/back3.jpg', mrp: 'Rs.750', title: 'Back 1', barnd: 'Brand'},
    {imgSrc: '/assets/products/backpacks/back4.jpg', mrp: 'Rs.750', title: 'Back 1', barnd: 'Brand'},
    {imgSrc: '/assets/products/backpacks/back5.jpg', mrp: 'Rs.750', title: 'Back 1', barnd: 'Brand'},
  ];
  watchesList = [
    {imgSrc: '/assets/products/backpacks/back1.jpg', mrp: 'Rs.750', title: 'Back 1', barnd: 'Brand'},
    {imgSrc: '/assets/products/backpacks/back2.jpg', mrp: 'Rs.750', title: 'Back 1', barnd: 'Brand'},
    {imgSrc: '/assets/products/backpacks/back3.jpg', mrp: 'Rs.750', title: 'Back 1', barnd: 'Brand'},
    {imgSrc: '/assets/products/backpacks/back4.jpg', mrp: 'Rs.750', title: 'Back 1', barnd: 'Brand'},
    {imgSrc: '/assets/products/backpacks/back5.jpg', mrp: 'Rs.750', title: 'Back 1', barnd: 'Brand'},
  ];
  cosmoticsBeauty = [
    {imgSrc: '/assets/products/backpacks/back1.jpg', mrp: 'Rs.750', title: 'Back 1', barnd: 'Brand'},
    {imgSrc: '/assets/products/backpacks/back2.jpg', mrp: 'Rs.750', title: 'Back 1', barnd: 'Brand'},
    {imgSrc: '/assets/products/backpacks/back3.jpg', mrp: 'Rs.750', title: 'Back 1', barnd: 'Brand'},
    {imgSrc: '/assets/products/backpacks/back4.jpg', mrp: 'Rs.750', title: 'Back 1', barnd: 'Brand'},
    {imgSrc: '/assets/products/backpacks/back5.jpg', mrp: 'Rs.750', title: 'Back 1', barnd: 'Brand'},
  ];
  handBags = [
    {imgSrc: '/assets/products/backpacks/back1.jpg', mrp: 'Rs.750', title: 'Back 1', barnd: 'Brand'},
    {imgSrc: '/assets/products/backpacks/back2.jpg', mrp: 'Rs.750', title: 'Back 1', barnd: 'Brand'},
    {imgSrc: '/assets/products/backpacks/back3.jpg', mrp: 'Rs.750', title: 'Back 1', barnd: 'Brand'},
    {imgSrc: '/assets/products/backpacks/back4.jpg', mrp: 'Rs.750', title: 'Back 1', barnd: 'Brand'},
    {imgSrc: '/assets/products/backpacks/back5.jpg', mrp: 'Rs.750', title: 'Back 1', barnd: 'Brand'},
  ];
  productTitle: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.productTitle = this.activatedRoute.snapshot.params.categoryTitle;
    if (this.activatedRoute.snapshot.params.categoryTitle === 'Backpacks') {
      this.products = this.backPacks;
    }
    if (this.activatedRoute.snapshot.params.categoryTitle === 'Beauty') {
      this.products = this.backPacks;
    }
    if (this.activatedRoute.snapshot.params.categoryTitle === 'Watches') {
      this.products = this.watchesList;
    }
    if (this.activatedRoute.snapshot.params.categoryTitle === 'Beauty') {
      this.products = this.cosmoticsBeauty;
    }
    if (this.activatedRoute.snapshot.params.categoryTitle === 'Hand Bags') {
      this.products = this.handBags;
    }
  }
  openProductDetail = (productData) => {
    this.router.navigate(['product-detail', {productDetails: productData.imgSrc, title: productData.title, price: productData.mrp}]);
  }
}
