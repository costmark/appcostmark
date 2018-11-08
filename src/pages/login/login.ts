import { Component } from '@angular/core';
import {  IonicPage, 
          NavController, 
          NavParams, 
          LoadingController,
          AlertController,
          ModalController
} from 'ionic-angular';

import { TabsPage, CrearCuentaPage } from "../index.pages";
import { LoginProvider, StorageLocalProvider } from "../../providers/index.providers";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
  //Atributos 
  userData = {"Correo": "","Password": ""};
  msg:string="";

  //Insertamos en el constructor las librerias que vamos a utilizar
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private _auth:LoginProvider,
              public loadingCtrl: LoadingController,
              public alertCtrl: AlertController,
              public _storage:StorageLocalProvider,
              public modalCtrl: ModalController
              ) {
  }
  
  //Metodo para autenticar usuarios en la aplicación
  ingresar(){

    let loader = this.loading();
    loader.present();

    this._auth.autenticar(this.userData).then((result)=>{

      loader.dismiss();

      if(result['response']){

        this._storage.guardarStorage("logueado",true);
        this._storage.guardarStorage("mail", this.userData.Correo);
        this._storage.guardarStorage("key",result['result']);
        this.navCtrl.setRoot(TabsPage);

      }else{

        this.msg = result['message'];
        this.alerta().present();
      }
      

      console.log(result);
        
    })    

  }
  

  loading(){
    let cargando = this.loadingCtrl.create({
      content: 'Autenticando, por favor espere ...'
      
    })
    return cargando;
  }

  alerta(){
    const alert = this.alertCtrl.create({
        title: 'Error!',
        subTitle: this.msg,
        buttons: ['OK']
      });
      return alert;
    
  }

  crearCuenta(){
    let profileModal = this.modalCtrl.create(CrearCuentaPage);

    profileModal.present();
  }

  ionViewDidLoad() {
    
  }

}
