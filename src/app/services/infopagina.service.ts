import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.inyterface';

@Injectable({
  providedIn: 'root'
})
export class InfopaginaService {

 info: InfoPagina = {} ;
 load = false; //Cargada en curso

  constructor(private http: HttpClient) { 

    //console.log('Servicio de infoPagina Listo');

    //Leer el archivo json
    
    
    this.http.get('assets/data/data-pagina.json')
              .subscribe( (resp: InfoPagina) => {
                  
                   //console.log(resp);
                  //console.log( resp['twitter'] );
                  this.load =true;
                  this.info = resp;
                  console.log(resp);

              });

  }
}
