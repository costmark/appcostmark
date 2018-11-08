import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

//Import el http client para que funcionen los servicios

import { HttpClientModule } from '@angular/common/http';

import { IonicStorageModule } from '@ionic/storage';




//Import de todas las paginas 
import { 
  PrincipalPage,
  FiltrosPage,
  PerfilusuarioPage,
  LoginPage,
  TabsPage,
  BusquedaPage,
  ResultadoBusquedaPage,
  RegistroPrecioPage,
  CrearCuentaPage
 } from "../pages/index.pages";

 //Import de todos los providers
 import { 
      LoginProvider,
      ProductosProvider,
      UsuarioProvider,
      StorageLocalProvider ,
      AlmacenesProvider,
      PrecioventaProvider
} from "../providers/index.providers";





@NgModule({
  declarations: [
    MyApp,
    PrincipalPage,
    FiltrosPage,
    PerfilusuarioPage,
    LoginPage,
    TabsPage,
    BusquedaPage,
    ResultadoBusquedaPage,
    RegistroPrecioPage,
    CrearCuentaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PrincipalPage,
    FiltrosPage,
    PerfilusuarioPage,
    LoginPage,
    TabsPage,
    BusquedaPage,
    ResultadoBusquedaPage,
    RegistroPrecioPage,
    CrearCuentaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginProvider,
    UsuarioProvider,
    ProductosProvider,
    StorageLocalProvider,
    AlmacenesProvider,
    PrecioventaProvider
  ]
})
export class AppModule {}
