import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjectMasterPage } from './project-master';

@NgModule({
  declarations: [
    ProjectMasterPage,
  ],
  imports: [
    IonicPageModule.forChild(ProjectMasterPage),
  ],
})
export class ProjectMasterPageModule {}
