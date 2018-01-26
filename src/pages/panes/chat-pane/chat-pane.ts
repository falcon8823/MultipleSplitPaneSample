import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-chat-pane',
  templateUrl: 'chat-pane.html',
})
export class ChatPanePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
}
