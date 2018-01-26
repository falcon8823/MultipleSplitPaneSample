import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MasterDetailPane, MasterPageBase } from '../../../libs/master-detail-pane';

@IonicPage()
@Component({
  selector: 'page-contact-master',
  templateUrl: 'contact-master.html',
})
export class ContactMasterPage extends MasterPageBase {
  items = ['Apple', 'Banana', 'Orange']

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private mdPane: MasterDetailPane,
  ) {
    super()
  }

  openDetail(item) {
    // master側にpushするサンプル
    this.mdPane.pushMaster('ContactDetailPage', { item })
  }
}
