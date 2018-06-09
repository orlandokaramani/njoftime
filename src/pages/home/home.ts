
import {Component, ViewChild} from '@angular/core';
import {App, ModalController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {SuperTabsController} from "ionic2-super-tabs";
import {SuperTabs} from "ionic2-super-tabs/";

@IonicPage({
  segment: 'home/:type'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild(SuperTabs) superTabs: SuperTabs;

  page1: any = 'EnergjiaPage';
  page2: any = 'EnergjiaPage';
  page3: any = 'EnergjiaPage';
  page4: any = 'EnergjiaPage';
  page5: any = 'EnergjiaPage';
  page6: any = 'EnergjiaPage';
 
  showIcons: boolean = true;
  showTitles: boolean = true;
  pageTitle: string = 'Full Height';
  topStories: any;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public superTabsCtrl: SuperTabsController,
    public modalCtrl: ModalController,
    public app: App,
  ) {
    const type = navParams.get('type');
    switch (type) {
      case 'icons-only':
        this.showTitles = false;
        this.pageTitle += ' - Icons only';
        break;

      case 'titles-only':
        this.showIcons = false;
        this.pageTitle += ' - Titles only';
        break;
    }
  }
  ionViewDidLoad() {
 
   
  }
  ngAfterViewInit() {
    //this.superTabsCtrl.increaseBadge('page1', 10);
     //this.superTabsCtrl.enableTabSwipe('page3', true);
     //this.superTabsCtrl.enableTabsSwipe(true);

    // Test issue #122
    // setTimeout(() => {
    //   this.superTabs.slideTo(4);
    // }, 2000);
  }
  presentFilter() {

  }

  updateSchedule() {

  
  }

  onTabSelect(tab: { index: number; id: string; }) {
    console.log(`Selected tab: `, tab);
  }

}
