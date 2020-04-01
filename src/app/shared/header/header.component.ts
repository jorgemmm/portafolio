import { Component, OnInit } from '@angular/core';
import { InfopaginaService } from 'src/app/services/infopagina.service';
import { Router } from '@angular/router';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  masonry=false;
  bootstrap:boolean;
  alert:string='Please write 3 letter min';

  constructor(public _services: InfopaginaService,
                private router: Router  ) { 

                  this.bootstrap=this.masonry;
                }

  ngOnInit(): void {
  }


  buscarProduct(termino: string){


    if( termino.length < 3){      
      window.alert( this.alert );      
      return;
    }
    this.router.navigate(['/search', termino]);
    //this.router.navigate(['search', termino]);
    //console.log(termino);



  }



}
