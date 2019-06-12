import { Component, OnInit } from '@angular/core';
import { CartItemServices } from '../_services/cartitem.service';
import { IProduct } from '../_interfaces/productModel';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  newProducts = [
    { imgSrc: '../../assets/products/photo-1544511196-1646449a253b.jpg', title: 'Denim', id: 1, mrp: 'Rs.250' },
    { imgSrc: '../../assets/products/photo-1552965677-8ddf4bdc939f.jpg', title: 'Denim', id: 2, mrp: 'Rs.250' },
    { imgSrc: '../../assets/products/photo-1546367564-ade1880f8921.jpg', title: 'Denim', id: 3, mrp: 'Rs.250' },
    { imgSrc: '../../assets/products/photo-1544511196-1646449a253b.jpg', title: 'Denim', id: 4, mrp: 'Rs.250' },
    { imgSrc: '../../assets/products/photo-1552965677-8ddf4bdc939f.jpg', title: 'Denim', id: 5, mrp: 'Rs.250' },
    { imgSrc: '../../assets/products/photo-1546367564-ade1880f8921.jpg', title: 'Denim', id: 6, mrp: 'Rs.250' },
    { imgSrc: '../../assets/products/photo-1544511196-1646449a253b.jpg', title: 'Denim', id: 7, mrp: 'Rs.250' },
    { imgSrc: '../../assets/products/photo-1544511196-1646449a253b.jpg', title: 'Denim', id: 8, mrp: 'Rs.250' },
  ];
  products = [
    { imgSrc: '/assets/products/pro2.jpg', title: 'Coach slim easton black', id: 1, price: 'Rs.250' },
    { imgSrc: '/assets/products/pro1.jpg', title: 'Denim jacket blue', id: 2, price: 'Rs.250' },
    { imgSrc: '/assets/products/pro2.jpg', title: 'Coach slim easton black', id: 3, price: 'Rs.250' },
    { imgSrc: '/assets/products/pro1.jpg', title: 'Denim jacket blue', id: 4, price: 'Rs.250' },
    { imgSrc: '/assets/products/pro2.jpg', title: 'Coach slim easton black', id: 5, price: 'Rs.250' }
  ];
  categories = [
    { imgSrc: '/assets/products/school2.jpg', tag: 'School Kit', id: 1 },
    { imgSrc: '/assets/products/cosmotic.jpg', tag: 'Cosmotics', id: 1 },
    { imgSrc: '/assets/products/cloth1.jpg', tag: 'Clothing', id: 1 },
    { imgSrc: '/assets/products/backpack1.jpg', tag: 'Back packs', id: 1 },
    { imgSrc: '/assets/products/groceries1.jpg', tag: 'groceries', id: 1 },
    { imgSrc: '/assets/products/cap1.jpg', tag: 'Caps', id: 1 },
  ];
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    autoplay: true,
    slidesPerView: 1,
    effect: 'cube',
  };
  multislideOpts = {
    speed: 400,
    autoplay: true,
    slidesPerView: 3,
    spaceBetween: 10,
  };
  cartData: IProduct;
  constructor(
   private cartItemService: CartItemServices
  ) {}
  ngOnInit() {
    this.getProducts();
  }
  addProdcutToCart = (productdata) => {
    this.cartItemService.addProductToCart(productdata);
  }
  getProducts = () => {
    this.cartItemService.getProdcutFromCart()
      .subscribe(
        data => {
          this.cartData = data;
        }, err => {
          console.log(err);
        }
      );
  }
}

