import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactMasterPage } from './contact-master';

@NgModule({
  declarations: [
    ContactMasterPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactMasterPage),
  ],
})
export class ContactMasterPageModule {}
