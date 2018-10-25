import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {  PerfilusuarioPage,
          PrincipalPage, 
          LoginPage,
          BusquedaPage 
} from "../index.pages";
import { UsuarioProvider } from '../../providers/usuario/usuario';




@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1 = PrincipalPage;
  tab2 = PerfilusuarioPage;
  tab3 = BusquedaPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _usrProvider:UsuarioProvider) {
     

  }

  salir(){
    this._usrProvider.cerrarSesion();
    this.navCtrl.setRoot(LoginPage)
    
  }  

}
