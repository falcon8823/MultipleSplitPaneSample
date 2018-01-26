import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatPanePage } from './chat-pane';

@NgModule({
  declarations: [
    ChatPanePage,
  ],
  imports: [
    IonicPageModule.forChild(ChatPanePage),
  ],
})
export class ChatPanePageModule {}
