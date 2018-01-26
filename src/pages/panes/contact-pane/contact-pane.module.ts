import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactPanePage } from './contact-pane';

@NgModule({
  declarations: [
    ContactPanePage,
  ],
  imports: [
    IonicPageModule.forChild(ContactPanePage),
  ],
})
export class ContactPanePageModule {}
