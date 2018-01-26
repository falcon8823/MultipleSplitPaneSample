import { NgModule } from '@angular/core'
import { IonicPageModule } from 'ionic-angular'
import { MasterDetailPane } from './master-detail-pane.component'

@NgModule({
  declarations: [
    MasterDetailPane,
  ],
  imports: [
    IonicPageModule.forChild(MasterDetailPane),
  ],
  providers: [
  ],
  exports: [
    MasterDetailPane,
  ]
})
export class MasterDetailPaneModule { }
