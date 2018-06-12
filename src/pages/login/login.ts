import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as firebase from "firebase";

//import { VerificationPage } from "../verification/verification";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  numero: number;
  params: Object;
  verificationId : any;

  code : string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  // pushPage(){
  //   this.navCtrl.push(VerificationPage,{
  //     numero : this.numero
  //
  //   });
  //
  //   console.log(this.numero);
  // }


  send(){

    (<any>window).FirebasePlugin.verifyPhoneNumber("47251474", 60, function(credential) {
      console.log(credential);

      alert("sms suucessfuly");

      // ask user to input verificationCode:
      //var code = inputField.value.toString();

       this.verificationId = credential.verificationId;

      var signInCredential = firebase.auth.PhoneAuthProvider.credential(this.verificationId, this.code);
      firebase.auth().signInWithCredential(signInCredential);
    }, (error) => {
      console.error(error);
    });
  }

}
