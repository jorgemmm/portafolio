import { Component, OnInit,Input, ViewChild, ElementRef } from '@angular/core';
import { Product } from 'src/app/interfaces/info-product.interface';


//Pagina de ayuda para configurar paypal
declare var paypal;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html'
 
})
export class CheckoutComponent implements OnInit {

  @ViewChild('paypalcheckout', {static: true}) paypayElement: ElementRef

  paidFor=false;

  @Input() product:Product={};
  @Input() hike:any={};
  @Input() price:any={};
  @Input() days:any={};

  constructor() { }

  ngOnInit(): void {


  // se renderiza´ra como el formulario en otro componente
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
