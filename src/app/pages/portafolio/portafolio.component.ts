import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  Num_Max_Prod:number=11; //semicte

  masonry=false;
  bootstrap:boolean;

  constructor( public _productosServices: ProductosService) { 

    this.bootstrap= this.masonry;
  }

  ngOnInit(): void {
    this.Num_Max_Prod = this._productosServices.numMaxProductos;
  }

}
