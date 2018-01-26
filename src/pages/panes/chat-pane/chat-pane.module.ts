import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatPanePage } from './chat-pane';

import { MasterDetailPaneModule } from '../../../libs/master-detail-pane';

@NgModule({
  declarations: [
    ChatPanePage,
  ],
  imports: [
    IonicPageModule.forChild(ChatPanePage),
    MasterDetailPaneModule,
  ],
})
export class ChatPanePageModule {}
