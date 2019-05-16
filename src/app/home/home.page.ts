import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  newProducts = [
    {imgSrc: '../../assets/products/photo-1544511196-1646449a253b.jpg', tag: 'Denim', id: 1, mrp: 'Rs.250'},
    {imgSrc: '../../assets/products/photo-1552965677-8ddf4bdc939f.jpg', tag: 'Denim', id: 1, mrp: 'Rs.250'},
    {imgSrc: '../../assets/products/photo-1546367564-ade1880f8921.jpg', tag: 'Denim', id: 1, mrp: 'Rs.250'},
    {imgSrc: '../../assets/products/photo-1544511196-1646449a253b.jpg', tag: 'Denim', id: 1, mrp: 'Rs.250'},
    {imgSrc: '../../assets/products/photo-1552965677-8ddf4bdc939f.jpg', tag: 'Denim', id: 1, mrp: 'Rs.250'},
    {imgSrc: '../../assets/products/photo-1546367564-ade1880f8921.jpg', tag: 'Denim', id: 1, mrp: 'Rs.250'},
    {imgSrc: '../../assets/products/photo-1544511196-1646449a253b.jpg', tag: 'Denim', id: 1, mrp: 'Rs.250'},
    {imgSrc: '../../assets/products/photo-1544511196-1646449a253b.jpg', tag: 'Denim', id: 1, mrp: 'Rs.250'},
  ];
  products = [
    {imgSrc: '/assets/products/pro2.jpg', tag: 'Coach slim easton black', id: 1, mrp: 'Rs.250'},
    {imgSrc: '/assets/products/pro1.jpg', tag: 'Denim jacket blue', id: 1, mrp: 'Rs.250'},
    {imgSrc: '/assets/products/pro2.jpg', tag: 'Coach slim easton black', id: 1, mrp: 'Rs.250'},
    {imgSrc: '/assets/products/pro1.jpg', tag: 'Denim jacket blue', id: 1, mrp: 'Rs.250'},
    {imgSrc: '/assets/products/pro2.jpg', tag: 'Coach slim easton black', id: 1, mrp: 'Rs.250'}
  ];
  categories = [
    {imgSrc: '/assets/products/school2.jpg', tag: 'School Kit', id: 1},
    {imgSrc: '/assets/products/cosmotic.jpg', tag: 'Cosmotics', id: 1},
    {imgSrc: '/assets/products/cloth1.jpg', tag: 'Clothing', id: 1},
    {imgSrc: '/assets/products/backpack1.jpg', tag: 'Back packs', id: 1},
    {imgSrc: '/assets/products/groceries1.jpg', tag: 'groceries', id: 1},
    {imgSrc: '/assets/products/cap1.jpg', tag: 'Caps', id: 1},
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
}
