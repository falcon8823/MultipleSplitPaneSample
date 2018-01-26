import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactPanePage } from './contact-pane';

import { MasterDetailPaneModule } from '../../../libs/master-detail-pane';

@NgModule({
  declarations: [
    ContactPanePage,
  ],
  imports: [
    IonicPageModule.forChild(ContactPanePage),
    MasterDetailPaneModule,
  ],
})
export class ContactPanePageModule {}
