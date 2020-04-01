import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms'
import { InfopaginaService } from 'src/app/services/infopagina.service';
import { customerbook } from '../../interfaces/info-customerbook-interface'
import { Product } from 'src/app/interfaces/info-product.interface';
//import { join } from '.git/';

//import {Form, FormBuilder } from '@angular/forms';


const ESP:string = "%20";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
  
})

export class ContactComponent implements OnInit {

  @Input() product:Product={};
  @Input() hike:any={};
  usuario:customerbook ={
    nombre: 'Yasinayda',
    apellido:'López',
    correo: 'yasinayda@hotmail.com',
    date :  new Date()
  }

  user:any={}

  mailto:string;
  asunto:string;
  mensaje:string;


  ready=false;
 
  fecha:string;
  constructor(public _services: InfopaginaService) 
  { 

  }

    ngOnInit(): void {
    }


  guardar(formulario:NgForm ){

    
      console.log('Submit disparado');

      //falta validar fechas de hike: mejor un selector?¿
      if( formulario.invalid ){
      Object.values( formulario.controls ).forEach( control =>{

                control.markAsTouched()
               

          });
      }

        console.log(formulario);
        //habría que llamar a un servicio tipo firebase
        console.log(formulario.value);

        //this.enviarEmail()
        this.usuario=formulario.value;
        this.fecha = formulario.value.Fecha;
        
        this.usuario.apellido=formulario.value.Apellido;
        this.usuario.date= formulario.value.Fecha;

        console.log(this.usuario.nombre);
        console.log(formulario.value.Apellido);
        console.log(this.usuario.apellido);
        console.log(this.fecha);
        console.log(this.usuario.date);

        //mailTo:{{ _services.infocontact.email }}&subject=Reserva&body=hola
        

        this.asunto=`Reserva${ ESP }de${ ESP }${this.usuario.nombre}${ ESP }para${ ESP }${this.fecha}`;

        //this.mensaje=`Cuerpo${ ESP }del${ ESP }mensaje`;

        // let arr = new Array(this.usuario.nombre,formulario.value.Apellido,this.usuario.date,this.product.titulo); 
        // this.mensaje=arr.join(ESP);

        this.mensaje=`${this.usuario.nombre}${ ESP }${ formulario.value.Apellido }${ ESP }reservó${ ESP }una${ ESP }ruta${ ESP }para${ ESP }la${ ESP }fecha${ ESP }${this.fecha}
        ${ ESP }${this.product.titulo}`;

        
         
        console.log( this.asunto);
        console.log( this.mensaje);

                                        //`mailTo:${ this._services.infocontact.email }&subject=Reserva&body=${this.mensaje}`;
        this.mailto= `mailTo:${ this._services.infocontact.email }?subject=${ this.asunto }&body=${ this.mensaje }`;

        

        if(this.mailto.length>0){this.ready=true;} 
        //window.location.href=" mailTo: this._services.infocontact.email?subject={{ asunto }}&body={{ mensaje }}";
        //window.location.href=this.mailto;
  }


 enviarSiGuardado(formulario:NgForm){
  
      if( formulario.invalid ){
        Object.values( formulario.controls ).forEach( control =>{

                  control.markAsTouched()
                  window.alert("rellena todos los campos")
                  return;

            });
        }

        if(this.ready) window.location.href=this.mailto;

    
    }


 }

