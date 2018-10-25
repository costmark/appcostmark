import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistroPrecioPage } from './registro-precio';

@NgModule({
  declarations: [
    RegistroPrecioPage,
  ],
  imports: [
    IonicPageModule.forChild(RegistroPrecioPage),
  ],
})
export class RegistroPrecioPageModule {}
