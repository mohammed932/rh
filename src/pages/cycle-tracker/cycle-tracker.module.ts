import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CycleTrackerPage } from './cycle-tracker';

@NgModule({
  declarations: [
    CycleTrackerPage,
  ],
  imports: [
    IonicPageModule.forChild(CycleTrackerPage),
  ],
})
export class CycleTrackerPageModule {}
