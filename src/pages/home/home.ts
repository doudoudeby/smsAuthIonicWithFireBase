import { Component } from '@angular/core';
import { NavController , NavParams} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  code: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

      this.code = navParams.get('code');

  }






}
