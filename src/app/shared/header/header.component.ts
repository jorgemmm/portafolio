import { Component, OnInit } from '@angular/core';
import { InfopaginaService } from 'src/app/services/infopagina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _services: InfopaginaService,
                private router: Router  ) { }

  ngOnInit(): void {
  }


  buscarProduct(termino: string){


    if( termino.length < 1){
      return;
    }
    this.router.navigate(['/search', termino]);
    //console.log(termino);



  }



}
