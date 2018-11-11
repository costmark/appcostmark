import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController} from 'ionic-angular';
import { StorageLocalProvider, UsuarioProvider } from '../../providers/index.providers';
import { ReferenciasPage } from '../index.pages';


@IonicPage()
@Component({
  selector: 'page-perfilusuario',
  templateUrl: 'perfilusuario.html',
})
export class PerfilusuarioPage {

  referencias = ReferenciasPage;

  nombre:string;
  correo:string;
  contrasena:string = "";
  confcontrasena:string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public _storage:StorageLocalProvider, public _usr:UsuarioProvider,
              public loading:LoadingController, public alert:AlertController) {
    this.cargarCorreo();
    

  }
  actualizar(){
    let datos = {};
    if(this.contrasena === "" && this.confcontrasena === ""){
        datos = {
          nombre_usuario:this.nombre
        };
        this._usr.actualizaUsuario(this.correo,datos).then(res =>{
          if(res['response']){
            this.alerta("Bien !", "Sus datos fueron actualizados correctamente");
          }
          
        })

    }else{
      if (this.contrasena === this.confcontrasena) {
        datos = {
          nombre_usuario:this.nombre,
          contrasena_usuario:this.contrasena
        };
        this._usr.actualizaUsuario(this.correo,datos).then(res =>{
          if(res['response']){
            this.alerta("Bien !", "Sus datos fueron actualizados correctamente");
          }
          
        })
      
      
      } else {
        this.alerta("Error", "Las contraseñas no coinciden, verifique y vuelva a intentar.");
      }
    }

  }
  cargarCorreo(){
    
    this._storage.consultarStorage("mail").then(res =>{
      
      this.obtenerInfo(res);
      
           
    })
    
  }

  obtenerInfo(correo){
    this._usr.obtenerUsuario(correo).then(res=>{
      
      this.nombre = res['nombre_usuario'];
      this.correo = res['correo_usuario'];
      
    })  
    
  }

  load(){
    return this.loading.create({
      content:"Estamos obteniendo sus datos..."
    })
  }
  alerta(titulo:string,mensaje:string){
    this.alert.create({
      title:titulo,
      message:mensaje,
      buttons:['Entendido']
    }).present();
  }

  ionViewDidLoad() {
    
    
    //este evento se ejecuta por una unica vez al momento de cargar la pagina,
    // es usado para cargar las configuraciónes.

     
  }
  

}
