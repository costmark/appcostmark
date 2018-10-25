import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageLocalProvider } from '../storage-local/storage-local';


@Injectable()
export class UsuarioProvider {

  constructor(public http: HttpClient, private _storage:StorageLocalProvider) {
    console.log('Hello UsuarioProvider Provider');
  }

  cerrarSesion(){
    this._storage.eliminarStorage("logueado").then(()=>{
      
    })
  }

}
