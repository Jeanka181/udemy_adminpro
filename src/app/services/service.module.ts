import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  SettingsService,
  SidevarService,
  SharedService
} from './service.index';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    SettingsService,
    SidevarService,
    SharedService
  ]
})
export class ServiceModule { }
