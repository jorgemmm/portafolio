import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { productPayme } from '../interfaces/info-productpayme.interface';

//Pagina de ayuda para configurar paypal
declare var paypal;

@Component({
  selector: 'app-payme',
  templateUrl: './payme.component.html',
  styleUrls: ['./payme.component.css']
})
export class PaymeComponent implements OnInit {
    
    @ViewChild('paypal', {static: true}) paypayElement: ElementRef

paidFor=false;

 product: productPayme=

 //product=
  {
    price: 80.0,
    description:'here goes the date and hour',
    img:'asset/pic-1'

  };

  constructor() { }

  ngOnInit(): void {

    paypal.
       Buttons({
       createOrder: function(data, actions) {
        // This function sets up the details of the transaction, including the amount and line item details.
        return actions.order.create({
          purchase_units: [{
            description: this.product.description,
            amount: {
              currency_code:'EUR',
              value: this.product.price
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

        },
       );

      },
      onError: function (err) {
        // Show an error page here, when an error occurs
        console.log(err);
      }
    })
    .render(this.paypayElement.nativeElement);
  }

}
