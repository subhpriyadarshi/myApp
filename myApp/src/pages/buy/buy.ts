import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ChangeDetectorRef } from '@angular/core';
import { ListedStocksService } from '../../providers/ListedStocksService';



@Component({
  selector: 'page-Buy',
  templateUrl: 'Buy.html'
})
export class BuyPage {
  tabBarElement: any;
  private buyStock : FormGroup;

  constructor(public cdRef : ChangeDetectorRef, private alertCtrl: AlertController, private formBuilder: FormBuilder, public navController: NavController, public listedStocksService: ListedStocksService) {
    this.tabBarElement = document.querySelector('.tabbar');
	this.tabBarElement.style.display = '';
 
  this.tabBarElement = document.querySelector("#tab-t0-0");
  this.tabBarElement.style.display = "none";
    this.buyStock = this.formBuilder.group({
      StockName: [''],
      Quantity: [''],
      Price:['']
    });
  }

  changeQuantity(value){
    console.log(value);
    //manually launch change detection
    this.cdRef.detectChanges();
    if(value.indexOf('.') !== -1)
    {
      this.buyStock.value.Price = value.substr(0, value.indexOf('.')+3);
    } else {
      this.buyStock.value.Price = value.length > 4 ? value.substring(0,4) : value;
    }
 }

  logForm(){
   
    console.log(this.buyStock.value);
	
    let alert = this.alertCtrl.create({
      title: 'Confirm purchase',
      message: 'Do you want to buy '+ this.buyStock.value.StockName,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Buy',
          handler: () => {
            console.log('Buy clicked');
          }
        }
      ]
    });
    alert.present();

  }
 
}