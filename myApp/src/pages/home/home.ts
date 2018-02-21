import { Component, NgModule  } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  entryComponents: [LoginPage]
})
export class HomePage {
 tabBarElement: any;
  constructor(public navController: NavController) {
	this.tabBarElement = document.querySelector('.tabbar');
  this.tabBarElement.style.display = 'none';
  
  }
  
  login(){

	 this.navController.setRoot(LoginPage);
  }
}