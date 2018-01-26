import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tabProjectRoot: any
  tabContactRoot: any
  tabChatRoot: any

  constructor(public navCtrl: NavController) {
  }
}
