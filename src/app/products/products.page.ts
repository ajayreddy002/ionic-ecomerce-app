import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  isSubmenu: boolean;
  productCategories = [
    {imgSrc: '/assets/products/cosmotic.jpg', title: 'Beauty'},
    {imgSrc: '/assets/products/backpack1.jpg', title: 'Backpacks'},
    {imgSrc: '/assets/products/photo-1544511196-1646449a253b.jpg', title: 'Hand Bags'},
    {imgSrc: '/assets/products/photo-1546367564-ade1880f8921.jpg', title: 'Shoes'},
    {imgSrc: '/assets/products/pro3.jpg', title: 'Men Dresses'},
    {imgSrc: '/assets/products/pro2.jpg', title: 'Watches'},
  ];
  constructor(private router: Router) { }

  ngOnInit() {
  }
openSubMenu = () => {
  this.isSubmenu = !this.isSubmenu;
}
navigateToCategory = (category) => {
  this.router.navigate(['product-list', {categoryTitle: category.title}]);
}
}
