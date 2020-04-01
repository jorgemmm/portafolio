import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';
import { InfoContact } from '../interfaces/info-contact.interface';
//import { InfoEquipo } from '../interfaces/info-equipo.interface';

@Injectable({
  providedIn: 'root'
})
export class InfopaginaService {


 //TS para cargar info de página
 info: InfoPagina = {};

 infocontact:InfoContact={};

 load = false; //Cargada en curso

 //TS para cargar información de firebase
 equipo: any={};
 //equipo : InfoEquipo[] = [];
 loadFirebase=false;


 URLMyFireBase: string = "https://angular-html-4b67b.firebaseio.com";
 URLPaypalFireBase: string = "https://angular-5b3e5.firebaseio.com";

  constructor(private http: HttpClient) { 

    //console.log('Servicio de infoPagina Listo');
    //Leer el archivo json
    
    this.cargarInfo();
    this.cargarEquipo();
    

  }

  private cargarInfo(){

      this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp:InfoPagina ) => {
          
          //console.log(resp);
          //console.log( resp['twitter'] );
          this.load =true;
          this.info = resp;
          //console.log(resp);

      });

      this.http.get('assets/data/data-contacto.json')
      .subscribe( (resp:InfoContact ) => {
          
         // console.log(resp);
          //console.log( resp['facebook'] );
          this.load =true;
          this.infocontact = resp;
          //console.log(resp);

      });

  }

  private cargarEquipo(){

    this.http.get(`${this.URLPaypalFireBase}/equipo.json`) 
    //https://angular-5b3e5.firebaseio.com/equipo.json')
    //this.http.get('https://angular-5b3e5.firebaseio.com/equipo.json')
    .subscribe(  //(resp: any[]) => { 

        (resp: InfoPagina[]) =>{
        //this.loadFirebase=true;
        this.equipo=resp;
        // console.log(resp);
      });
    }



}
