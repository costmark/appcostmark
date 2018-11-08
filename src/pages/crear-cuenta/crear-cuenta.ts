import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController, LoadingController } from 'ionic-angular';
import { UsuarioProvider } from '../../providers/usuario/usuario';


@IonicPage()
@Component({
  selector: 'page-crear-cuenta',
  templateUrl: 'crear-cuenta.html',
})
export class CrearCuentaPage {

  nombre:string;
  correo:string;
  contrasena:string = "";
  confcontrasena:string = "";

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public viewCtrl:ViewController,
              public alertCtrl:AlertController,
              public loading:LoadingController,
              private _usr:UsuarioProvider) {
  
  }
  registrar(){

    if (this.contrasena === this.confcontrasena) {
      
      let id = this.nombre.substr(0,3) + Math.floor(Math.random() * (10000 - 100)) + 100;;
            
      let datos = {
        id_usuario:id,
        nombre_usuario:this.nombre,
        correo_usuario:this.correo,
        contrasena_usuario:this.contrasena
      }
      this.load().present;
      this._usr.crearCuenta(datos).then(res=>{

        if(res['response']){
          this.load().dismiss;
          this.viewCtrl.dismiss();
          this.alerta("Registro exitoso","Su cuenta se creo de forma exitosa");
        }
        // }else{
        //   console.log(res['error']);
          
        //   this.alerta("Error","Tuvimos un problema para registrar su usuario, intente nuevamente.");
        // }        
        
      },(err)=>{
        let msg:any = err['error'];
        if (msg.correo_usuario) {
          this.alerta("Error", msg.correo_usuario);
        } else {
          this.alerta("Error", msg.contrasena_usuario);
          
        }

        
        
      })
      

    } else {
      this.alerta("Error","Parece que las contraseñas no coinciden!")
    }

    
  }

  alerta(titulo,msg){
    this.alertCtrl.create({
      title:titulo,
      message:msg,
      buttons:['Entendido']
    }).present();
  }

  load(){
    let cargando = this.loading.create({
      content: "Estamos registrando su cuenta, por favor espere ..."
    })
    return cargando;
  }

  cancelar(){
    this.viewCtrl.dismiss();
  }

  

}
