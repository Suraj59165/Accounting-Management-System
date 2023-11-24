import { Component, OnInit, ViewChild } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { CommonModalComponent } from "../common-modal/common-modal.component";
import { CustomerData } from "src/models/CustomerData";
import { CustomerService } from "src/ApiServices/CustomerService";
import { InvoiceTableComponent } from "../invoice-table/invoice-table.component";
import { InvoiceData } from "src/models/InvoiceData";
import { InvoiceService } from "src/ApiServices/InvoiceService";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ChooseCustomerComponent } from "../choose-customer/choose-customer.component";

@Component({
  selector: "app-create-bill",
  templateUrl: "./create-bill.component.html",
  styleUrls: ["./create-bill.component.css"],
})
export class CreateBillComponent implements OnInit {
  dataToChild: any;
  customerData: any;
  invoiceData:any
  tempData: any;
  tempItem: any;
 

  @ViewChild(InvoiceTableComponent, { static: false })
  itemTable!: InvoiceTableComponent;


  constructor(private customerService: CustomerService,private invoiceService:InvoiceService,private snackBar :MatSnackBar) {}
  ngOnInit(): void {
    this.customerService.getAllCustomers().subscribe((res) => {
      this.customerData = res;
      this.tempData = res;
    });
  }

  

  createInvoiceOfCustomer() {
  const invoiceItems=this.itemTable.getTableItems()
    this.invoiceData.invoiceItems=invoiceItems
    console.log(invoiceItems)
    
  }

  removeItem() {
    this.customerData.name = "";
    this.customerData.email = "";
    this.customerData.city = "";
    this.customerData.address = "";
    this.customerData.notes = "";
    this.customerService.getAllCustomers().subscribe((res) => {
      this.customerData = res;
    });
  }

  showAddCustomerDialog() {
    this.dataToChild = { ...this };
  }

  
}
