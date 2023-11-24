import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/ApiServices/CustomerService';
import { InvoiceService } from 'src/ApiServices/InvoiceService';

@Component({
  selector: 'app-choose-customer',
  templateUrl: './choose-customer.component.html',
  styleUrls: ['./choose-customer.component.css']
})
export class ChooseCustomerComponent {
  customerData:any;
  customerId:any
  tempData:any;
  tempCustomer:any

  constructor(private apiServie:CustomerService )
  {
    apiServie.getAllCustomers().subscribe((response)=>{
      this.customerData=response;
      this.tempData=response;
      
    })
  }

  getData()
  {
    return this.customerData;
  }

  trackInputChanges()
  {
    
      for (let i = 0; i < this.tempData.content.length; i++) {
        this.tempCustomer = this.tempData.content[i];
  
        if (this.customerData.id === this.tempCustomer.id) {
          this.customerData.name = this.tempCustomer.name;
          this.customerData.address = this.tempCustomer.address;
          this.customerData.email = this.tempCustomer.email;
          this.customerData.city = this.tempCustomer.city;
          this.customerData.phone = this.tempCustomer.phone;
          this.customerData.notes = this.tempCustomer.notes;
          break;
        
      }
    }
  }




}