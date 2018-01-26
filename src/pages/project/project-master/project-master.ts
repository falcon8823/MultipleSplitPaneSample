import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MasterDetailPane, MasterPageBase } from '../../../libs/master-detail-pane';

@IonicPage()
@Component({
  selector: 'page-project-master',
  templateUrl: 'project-master.html',
})
export class ProjectMasterPage extends MasterPageBase {
  items = ['foo', 'bar', 'baz']

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private mdPane: MasterDetailPane,
  ) {
    super()
  }

  openDetail(item) {
    this.mdPane.setRootToDetail('ProjectDetailPage', { item })
  }
}
