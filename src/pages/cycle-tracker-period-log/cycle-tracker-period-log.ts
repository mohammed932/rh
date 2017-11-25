import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CycleTrackerPeriodLogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cycle-tracker-period-log',
  templateUrl: 'cycle-tracker-period-log.html',
})
export class CycleTrackerPeriodLogPage {
  list:any = 'periodLog';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CycleTrackerPeriodLogPage');
  }

}
