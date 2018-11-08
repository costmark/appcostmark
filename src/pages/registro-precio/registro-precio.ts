import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController ,AlertController, LoadingController } from 'ionic-angular';
import { AlmacenesProvider, ProductosProvider, UsuarioProvider, StorageLocalProvider,PrecioventaProvider } from '../../providers/index.providers';


@IonicPage()
@Component({
  selector: 'page-registro-precio',
  templateUrl: 'registro-precio.html',
})
export class RegistroPrecioPage {

  almacen:string = "";
  puntoventa:string = "";
  producto:string = "";
  costo:number = 0;

  usuario:any[] = [];
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public _alm:AlmacenesProvider,
              public _prod:ProductosProvider,
              public _storage:StorageLocalProvider,
              public _usr:UsuarioProvider,
              public alertCtrl:AlertController,
              public loadingCtrl:LoadingController,
              public _pventa:PrecioventaProvider,
              public viewCtrl:ViewController) {   
           
      this.datosUsuario();
  }
  
  datosUsuario(){
    this._storage.consultarStorage("key").then(res => {
      let token = res;
      this.usuario  = this._usr.verficaToken(token);
      
    })

  }

  obtenerPuntoVenta(){  
    this._alm.puntoVenta(this.almacen);
    
  }

  registrar(){

    let datos = {
      fecha_pventa:"",
      costo_pventa:this.costo,
      id_producto:this.producto,
      id_usuario:this.usuario['Idusuario'],
      id_puntoventa:this.puntoventa
    }
        

    this._pventa.registrar(datos).then(res=>{
      if (res['response']) {
        this.viewCtrl.dismiss();
        this.alerta("Bien !", "Se registro el precio para el producto indicado.");
      }
    })
    
    
    
  }

  load(){
    let cargando = this.loadingCtrl.create({
      content:"Estamos registrando la información"
    })

    return cargando;
  }

  alerta(titulo:string,mensaje:string){
    this.alertCtrl.create({
      title:titulo,
      message:mensaje,
      buttons:['Entendido']
    }).present();
  }

  ionViewDidLoad() {
    
  }

}
