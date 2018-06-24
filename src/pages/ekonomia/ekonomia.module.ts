import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EkonomiaPage } from './ekonomia';

@NgModule({
  declarations: [
    EkonomiaPage,
  ],
  imports: [
    IonicPageModule.forChild(EkonomiaPage),
  ],
})
export class Module {}
