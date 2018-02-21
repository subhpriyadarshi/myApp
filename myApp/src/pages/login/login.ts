import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MyPortfolioPage } from '../myportfolio/myportfolio';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  entryComponents:[MyPortfolioPage]
})
export class LoginPage {
tabBarElement: any;
  constructor(public navCtrl: NavController) {
	this.tabBarElement = document.querySelector('.tabbar');
	this.tabBarElement.style.display = 'none';
  }
  ShowPortfolio(){
	 this.navCtrl.setRoot(MyPortfolioPage);
  }
}
