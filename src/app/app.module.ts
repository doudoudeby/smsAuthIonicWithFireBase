import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from "../pages/login/login";
import { VerificationPage } from "../pages/verification/verification";

import  * as firebase  from 'firebase';


firebase.initializeApp({
  apiKey: "AIzaSyAHIZfRdUIFDLXIQYHaysTvWL2rZ_9F4-o",
  authDomain: "sms-verification-25c23.firebaseapp.com",
  databaseURL: "https://sms-verification-25c23.firebaseio.com",
  projectId: "sms-verification-25c23",
  storageBucket: "sms-verification-25c23.appspot.com",
  messagingSenderId: "616117325578"
});


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    VerificationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    VerificationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
