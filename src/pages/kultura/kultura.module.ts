import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KulturaPage } from './kultura';

@NgModule({
  declarations: [
    KulturaPage,
  ],
  imports: [
    IonicPageModule.forChild(KulturaPage),
  ],
})
export class Module {}
