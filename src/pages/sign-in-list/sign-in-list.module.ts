import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignInListPage } from './sign-in-list';

@NgModule({
  declarations: [
    SignInListPage,
  ],
  imports: [
    IonicPageModule.forChild(SignInListPage),
  ],
})
export class SignInListPageModule {}
