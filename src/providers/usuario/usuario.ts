import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageLocalProvider } from '../storage-local/storage-local';
import { URL_SERVICIOS } from '../../config/url.service';


@Injectable()
export class UsuarioProvider {
  
  usuario:any[] = [];

  constructor(public http: HttpClient, private _storage:StorageLocalProvider) {
    
  }

  obtenerUsuario(correo:string){
       
    let url = URL_SERVICIOS + "usuario/obtener/"+correo;
    return new Promise(resolve =>{
      this.http.get(url).subscribe(res =>{
        resolve(res['result']);      
      })

    })
  }
  
  crearCuenta(data){
    let url = URL_SERVICIOS + "usuario/registrar";
    return new Promise((resolve, reject)=>{
      this.http.post(url,data).subscribe(res => {
        resolve(res);  
      },(err)=>{
        reject(err);
      })
    })
  }

  actualizaUsuario(correo:string, data:any){
    let url = URL_SERVICIOS + "usuario/actualizar/"+correo;
    return new Promise(resolve =>{
      this.http.put(url,JSON.stringify(data),{
        headers:new HttpHeaders().set('Content-Type', 'application/json')
      }).subscribe(res => {
          resolve(res);
      })
    })
  }

  verficaToken(token:any){
    try{
      if (token === '') return
      
      let base64Url = token.split('.')[1];
      
      let base64 = base64Url.replace('-', '+').replace('_', '/');

      return JSON.parse(window.atob(base64)).data;
    }catch (err){
      
      console.log(err);
    }
  }

  cerrarSesion(){
    this._storage.eliminarStorage("logueado").then(()=>{
      
    })
  }

}
