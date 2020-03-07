import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { ProductDescription } from 'src/app/interfaces/info-productDescrption';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  productDetail: ProductDescription;
  id:String;
  

  constructor(private route: ActivatedRoute, 
             public _productServices: ProductosService) { }

  ngOnInit(): void {

    this.route.params
          .subscribe(parametros=>{

             // console.log(parametros);
              console.log(parametros['id']);
              this._productServices.getProducto(parametros['id'])
                   .subscribe( (producto:ProductDescription) => {
                        
                    //console.log(producto);
                    this.id=parametros['id'];
                    this.productDetail=producto;


                   });

          });
  }

}
