import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BuyPage } from '../Buy/Buy';

@Component({
  selector: 'page-myportfolio',
  templateUrl: 'myportfolio.html',
   entryComponents: [BuyPage]
})
export class MyPortfolioPage {
  tabBarElement: any;

  constructor(public navController: NavController) {
    this.tabBarElement = document.querySelector('.tabbar');
    this.tabBarElement.style.display = '';
    
    this.tabBarElement = document.querySelector("#tab-t0-0");
    this.tabBarElement.style.display = "none";
  }
  
Buy(){
	 this.navController.setRoot(BuyPage);
  }
}
 