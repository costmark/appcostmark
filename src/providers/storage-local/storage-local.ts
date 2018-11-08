import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';


@Injectable()
export class StorageLocalProvider {

  constructor(private str:Storage, private platform:Platform) {
    
  }

  guardarStorage(key:string, data:any){

    if (this.platform.is('cordova') || this.platform.is('android')) {

      return new Promise((resolve)=>{

        this.str.ready().then(()=>{

            this.str.set(key,data).then(()=>{
              resolve();
            }).catch((err)=>{
              console.log(err);
              
            })
  
        })
        
      })

      
    } else {

      localStorage.setItem(key,JSON.stringify(data));
      
    }

  }
  
  consultarStorage(key:string){

    if (this.platform.is('cordova') || this.platform.is('android')) {
      
      return new Promise((resolve)=>{

        this.str.ready().then(()=>{
          
            this.str.get(key).then((result)=>{
              resolve(result);
            }).catch((err)=>{
              console.log(err);
              
            })
  
        })
        
      })



    } else {

      localStorage.getItem(key);
      
    }

  }

  eliminarStorage(key:string){

    if (this.platform.is('cordova') || this.platform.is('android')) {
        
      return new Promise((resolve)=>{

        this.str.ready().then(()=>{
          
            this.str.remove(key).then(()=>{
              resolve();
            }).catch((err)=>{
              console.log(err);
              
            })
  
        })
        
      })



    } else {

      localStorage.removeItem(key);
      
    }

  }

}
