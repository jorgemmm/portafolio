import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.inyterface';
import { InfoEquipo } from '../interfaces/info-equipo.interface';

@Injectable({
  providedIn: 'root'
})
export class InfopaginaService {


 //TS para cargar info de página
 info: InfoPagina = {} ;
 load = false; //Cargada en curso

 //TS para cargar información de firebase
 equipo: any={};
 //equipo : InfoEquipo[] = [];
 loadFirebase=false;

  constructor(private http: HttpClient) { 

    //console.log('Servicio de infoPagina Listo');
    //Leer el archivo json
    
    this.cargarInfo();
    this.cargarEquipo();
    

  }

  private cargarInfo(){

      this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp: InfoPagina) => {
          
          //console.log(resp);
          //console.log( resp['twitter'] );
          this.load =true;
          this.info = resp;
          //console.log(resp);

      });
  }

  private cargarEquipo(){

    
    this.http.get('https://angular-html-4b67b.firebaseio.com/equipo.json')
    .subscribe(  (resp: any[]) => { 
                 //(resp: InfoEquipo[]) =>{

      //this.loadFirebase=true;
      this.equipo=resp;
      console.log(resp);
      });
    }



}
