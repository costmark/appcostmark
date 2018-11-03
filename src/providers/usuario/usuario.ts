import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageLocalProvider } from '../storage-local/storage-local';
import { URL_SERVICIOS } from '../../config/url.service';


@Injectable()
export class UsuarioProvider {

  constructor(public http: HttpClient, private _storage:StorageLocalProvider) {
    
  }
  
  crearCuenta(data){
    let url = URL_SERVICIOS + "usuario/registrar";
    this.http.post(url,data).subscribe(res => {
      console.log(res);      
    })
  }

  cerrarSesion(){
    this._storage.eliminarStorage("logueado").then(()=>{
      
    })
  }

}
