import { Component } from '@angular/core';
import { NavParams, NavController, App, ModalController, IonicPage } from 'ionic-angular';
import {Postime} from '../../assets/energjia'

@IonicPage()
@Component({
  selector: 'page-energjia',
  templateUrl: 'energjia.html'

})
export class EnergjiaPage {

  rootNavCtrl: NavController;
  myInput: any;
  id: any;
  name: any;
  page: any;
  energjia = Postime;

  constructor(  
    public app: App,
    public modalCtrl: ModalController,
    public params: NavParams
  ) {
    this.myInput = "";
    this.page = 1;
    this.id = params.data.id;
    this.name = params.data.title;
    this.rootNavCtrl = params.get('rootNavCtrl');
  this.energjia = Postime;
}
}
