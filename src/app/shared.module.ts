import { NgModule } from '@angular/core';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { TruncatePipe } from 'angular-pipes';



@NgModule({
 declarations: [TruncatePipe],
exports: [
    SuperTabsModule,
    TruncatePipe
]
})
export class SharedModule {}
