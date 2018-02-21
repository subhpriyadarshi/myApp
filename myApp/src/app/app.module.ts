import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AutoCompleteModule } from 'ionic2-auto-complete';
import { HttpClientModule } from '@angular/common/http';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { MyPortfolioPage } from '../pages/myportfolio/myportfolio';
import { BuyPage } from '../pages/Buy/Buy';

import { ListedStocksService } from '../providers/ListedStocksService';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
	LoginPage,
	MyPortfolioPage,
	BuyPage
  ],
  imports: [
    BrowserModule,
    AutoCompleteModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
	LoginPage,
	MyPortfolioPage,
	BuyPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ListedStocksService,
    HttpClientModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
