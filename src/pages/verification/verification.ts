import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomePage } from "../home/home";

import * as firebase from "firebase";


/**
 * Generated class for the VerificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-verification',
  templateUrl: 'verification.html',
})
export class VerificationPage {

  numero: number;
  verificationId: any;
  code:string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.numero = navParams.get('numero');

    console.log(this.numero)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerificationPage');
  }

  PushPage(){
    this.navCtrl.push(HomePage,{
      code: this.code
    });


  }


  verify(){


    let signIncredential = firebase.auth.PhoneAuthProvider.credential(this.verificationId , this.code);

    firebase.auth().signInWithCredential(signIncredential).then((info)=>{
      console.log(info);

    },
      (error)=>{
        console.log(error)
      })

  }



}
