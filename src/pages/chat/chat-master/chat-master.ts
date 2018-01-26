import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MasterPageBase } from '../../../libs/master-detail-pane';

/**
 * Generated class for the ChatMasterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat-master',
  templateUrl: 'chat-master.html',
})
export class ChatMasterPage extends MasterPageBase {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    super()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatMasterPage');
  }

}
