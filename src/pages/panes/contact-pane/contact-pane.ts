import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-contact-pane',
  templateUrl: 'contact-pane.html',
})
export class ContactPanePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
}
