import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { ProductDescription } from 'src/app/interfaces/info-productDescrption';
import { Product } from 'src/app/interfaces/info-product.interface';
import { productPayme } from 'src/app/interfaces/info-productpayme.interface';

declare var paypal;
const NUM_MAX_PROD:number=11;

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  
  @ViewChild('paypal', {static: true}) paypayElement: ElementRef


  

  paidFor=false;

  productDetail: ProductDescription;

  product: Product ={
    categoria: 'libros',
    cod: "prod-1",
    precio: '0.1',
    titulo: '',
    url: 'pic-1'    
  };

  id     :string;
  ProdID :string;
 // precio:string = "";
  
  precioCargado = false;
 //productPayme: productPayme=
  ProductPaypal:productPayme= {
    price: 80.0,
    description: 'here goes the date and hour',
    img: 'asset/pic-1'
  };
 

 fecha=new Date();


  constructor(private route: ActivatedRoute, 
             public _productServices: ProductosService) { }

  
  
 

  ngOnInit(): void {

    

    this.route.params
          .subscribe(parametros=>{

            //  console.log(parametros);
                  // console.log(parametros['id']);
                  // console.log(parametros['id'].charAt(0));
                  // console.log(parametros['id'].charAt( parametros['id'].length -1));
                    this._productServices.getProducto(parametros['id'])
                        .subscribe( (productDetail:ProductDescription ) => {
                              
                          console.log(productDetail);
                          this.id=parametros['id'];
                          this.ProdID=parametros['id'].charAt( parametros['id'].length -1);
                          this.productDetail=productDetail;
                         
                        

                        }                       
                        );  
                        
            
          });



      this.route.params
          .subscribe(parametros=>{
            //console.log(parametros);
             let myIdx:number  =  parametros['id'].charAt( parametros['id'].length -1);
            
            console.log(parametros['id']);
            //myIdx=(myIdx)/1 -1;
            
            myIdx--;

            if (myIdx<=0) myIdx=0;
            if (myIdx>=NUM_MAX_PROD) myIdx=NUM_MAX_PROD;

            console.log(myIdx.toString());
             this._productServices.getProducto_Idx(myIdx.toString())
              .subscribe( (productidx:Product ) => {
                    
               console.log(productidx);
             
                this.product = productidx;
                this.precioCargado=true;
                console.log(this.product.precio);

               });                 
                 
                

          });
          
          

          paypal.Buttons({
            style: {
            layout:  'vertical',
            color:   'gold',
            shape:   'pill',
            label:   'paypal'
          },
          createOrder:// function( data , actions) {
             (data, actions): Product => {
            // This function sets up the details of the transaction, including the amount and line item details.
            return actions.order.create({
              purchase_units: [{
                //description: this.productPayme.description, //'here goes the date and hour', //
                amount: {
                  //currency_code:'EUR',
                  value: this.product.precio //this.productPayme.price
                }
              }]
            });
          },
          onApprove: function(data, actions) {
            // This function captures the funds from the transaction.
            return actions.order.capture().then(function(details) {
              // This function shows a transaction success message to your buyer.
              alert('Transaction completed by ' + details.payer.name.given_name);
              this.paidFor=true;
              console.log(actions.order);
            });
          },
          onError: function (err) {
            // Show an error page here, when an error occurs
            console.log(err);
          }
        }).render(this.paypayElement.nativeElement);
                        
  }

}
