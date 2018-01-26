import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tabProjectRoot: any = 'ProjectPanePage'
  tabContactRoot: any = 'ContactPanePage'
  tabChatRoot: any = 'ChatPanePage'

  constructor(public navCtrl: NavController) {
  }
}
