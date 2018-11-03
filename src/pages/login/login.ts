import { Component } from '@angular/core';
import {  IonicPage, 
          NavController, 
          NavParams, 
          LoadingController,
          AlertController
} from 'ionic-angular';

import { TabsPage } from "../index.pages";
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
              public _storage:StorageLocalProvider
              ) {
  }
  
  //Metodo para autenticar usuarios en la aplicación
  ingresar(){
    //Instanciamos el loading para poder hacer un uso personalizado
    let loader = this.loading();
    //mostramos el loading
    loader.present();
    
    
    //nos conectamos con el servicio de Login y usamos el metodo autenticar, pasamos 
    //por parametro la data del usuario y como nos regresa una promesa,
    //evaluamos la promesa con el then en el cual obtenemos un resultado
    this._auth.autenticar(this.userData).then((result)=>{
      //Una vez se resuelve la consulta, cerramos el loading
      loader.dismiss();
      
      //evaluamos si la respuesta fue verdadera o falsa
      if(result['response']){
        //Si se autentico definimos la pagina principal como la siguiente a mostrar
        // this.navCtrl.setRoot(PrincipalPage);
        this._storage.guardarStorage("logueado",true);
        this._storage.guardarStorage("key",result['result']);
        this.navCtrl.setRoot(TabsPage);

      }else{
        //si presento un problema cargamos en el atributo mensaje el error que regreso el servicio
        this.msg = result['message'];
        //Mostramos el error en un mensaje de alerta
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
