import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjectPanePage } from './project-pane';

@NgModule({
  declarations: [
    ProjectPanePage,
  ],
  imports: [
    IonicPageModule.forChild(ProjectPanePage),
  ],
})
export class ProjectPanePageModule {}
