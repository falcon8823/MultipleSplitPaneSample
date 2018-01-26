import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatMasterPage } from './chat-master';

@NgModule({
  declarations: [
    ChatMasterPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatMasterPage),
  ],
})
export class ChatMasterPageModule {}
