import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomerService } from 'src/ApiServices/CustomerService';
import { InvoiceService } from 'src/ApiServices/InvoiceService';

@Component({
  selector: 'app-choose-customer',
  templateUrl: './choose-customer.component.html',
  styleUrls: ['./choose-customer.component.css']
})
export class ChooseCustomerComponent implements OnInit {
  customerData:any;
  customerId:any
  tempData:any;
  tempCustomer:any;
  tempCustomerData:any;

  constructor(private apiService:CustomerService,private snackBar:MatSnackBar )
  {
   
  }
  ngOnInit(): void {
    this.apiService.getAllCustomers().subscribe((response)=>{
      this.customerData=response;
      this.tempData=response;
      
    })
  }

  getData()
  {

    if(this.tempCustomerData==null)
    {
      this.snackBar.open("please choose customer")
    }
    else{
      return this.tempCustomerData;
    }
    

  }

  removeCustomer()
  {
    this.tempCustomerData=null
    this.customerData.name = null;
    this.customerData.email = null;
    this.customerData.city = null;
    this.customerData.address = null;
    this.customerData.notes = null;
    this.apiService.getAllCustomers().subscribe((res) => {
      this.customerData = res;
    });
  }

  trackInputChanges()
  {
    
      for (let i = 0; i < this.tempData.content.length; i++) {
        this.tempCustomer = this.tempData.content[i];
        if (this.customerData.id === this.tempCustomer.id) {
          this.tempCustomerData=this.tempCustomer
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
