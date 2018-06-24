import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnergjiaPage } from './energjia';
import { SharedModule } from '../../app/shared.module';


@NgModule({
  declarations: [
    EnergjiaPage,
  
  ],
  imports: [
    IonicPageModule.forChild(EnergjiaPage),
    SharedModule
  ],
})
export class Module {}
