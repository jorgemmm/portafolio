import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product }  from  '../interfaces/info-product.interface';
import { ProductDescription } from '../interfaces/info-productDescrption';
import { promise } from 'protractor';
import { resolve } from 'dns';
import { rejects } from 'assert';


export const NUM_MAX_PROD:number=11;

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  
  
  numMaxProductos:number=NUM_MAX_PROD;
  cargando= true;
  searching=true;
  productos: Product[]= [];
  productoFiltrado: Product[] = [];
  price: string[] = [];
  
  //productoSelected: string = {};

  URLMyFireBase: string = "https://angular-html-4b67b.firebaseio.com";
  URLPaypalFireBase: string = "https://angular-5b3e5.firebaseio.com/";

  constructor(private http: HttpClient) { 

    this.cargarProductos();
  }

//private inicialmente
  private cargarProductos() {

      return new Promise ( (resolve, rejects)  =>{
                    
         this.http.get('https://angular-5b3e5.firebaseio.com/productos_idx.json')            
        //this.http.get('https://angular-html-4b67b.firebaseio.com/productos_idx.json')
        //this.http.get('{{URLPaypalFireBase}}/productos_idx.json')
                .subscribe(    //(resp: any[] ) =>{
                              (resp: Product[] ) =>{              

                              //console.log(resp);
                              this.productos=resp;
                              this.cargando=false;

                              resolve();
                  });
      });

     
  }



 //get product details descriptions
  getProducto(id: string){
   
    //return this.http.get(`https://angular-html-4b67b.firebaseio.com/productos/${id}.json`)
    return this.http.get(`${this.URLPaypalFireBase}/productos/${id}.json`)
  }

 // get product 
  getProducto_Idx(id: string){
   
    //return this.http.get(`https://angular-html-4b67b.firebaseio.com/productos/${id}.json`)
    return this.http.get(`${this.URLPaypalFireBase}/productos_idx/${id}.json`)
  }

   
  
 public searchProduct( termino:string){ 

   if(this.productos.length===0)
    {
      this.cargarProductos().then( ()=>{
          //Ejecutar después de cargar productos
          //Aplicar filtro
         this.filtrarProductos(termino );
      });
    }
   else
    {
        //Aplicar filtro
        this.filtrarProductos(termino );
    }
      
  }

 
private filtrarProductos(termino: string){

  // this.productoFiltrado = this.productos.filter( productos => {
  //   return true;
  // });
  this.productoFiltrado=[];

  termino = termino.toLocaleLowerCase();

  this.productos.forEach( prod => {

        const tituloLower = prod.titulo.toLocaleLowerCase(); 
        const catLower = prod.categoria.toLocaleLowerCase();


         if( catLower.indexOf(termino) >=0 || tituloLower.indexOf(termino) >=0 ){
            this.productoFiltrado.push( prod );
         }

         this.searching=false;

  });
}



}
