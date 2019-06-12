import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CartItemServices } from './_services/cartitem.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public appPages = [
    {
      title: 'Shop',
      url: '/home',
      icon: 'home',
    },
    {
      title: 'Login',
      url: '/login',
      icon: 'lock'
    },
    {
      title: 'Products',
      url: '/products'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private cartItemService: CartItemServices
  ) {
    this.initializeApp();
  }
  ngOnInit() {
    this.getProducts();
  }
  initializeApp() {
    this.splashScreen.show();
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  getProducts = () => {
    this.cartItemService.getProdcutFromCart()
      .subscribe(
        data => {
          console.log(data);
        }, err => {
          console.log(err);
        }
      );
  }
}
