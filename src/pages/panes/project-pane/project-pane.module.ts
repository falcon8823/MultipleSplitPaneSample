import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjectPanePage } from './project-pane';

import { MasterDetailPaneModule } from '../../../libs/master-detail-pane';

@NgModule({
  declarations: [
    ProjectPanePage,
  ],
  imports: [
    IonicPageModule.forChild(ProjectPanePage),
    MasterDetailPaneModule,
  ],
})
export class ProjectPanePageModule {}
