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
import { NgxUiLoaderService } from "ngx-ui-loader";
import { error } from "jquery";

@Component({
  selector: "app-create-bill",
  templateUrl: "./create-bill.component.html",
  styleUrls: ["./create-bill.component.css"],
})
export class CreateBillComponent implements OnInit {
  dataToChild: any;
  customerData: any;
  invoiceData: any;
  tempData: any;
  tempItem: any;

  @ViewChild(InvoiceTableComponent, { static: false })
  itemTable!: InvoiceTableComponent;

  constructor(
    private customerService: CustomerService,
    private invoiceService: InvoiceService,
    private snackBar: MatSnackBar,
    private loader: NgxUiLoaderService
  ) {}
  ngOnInit(): void {
    this.customerService.getAllCustomers().subscribe((res) => {
      this.customerData = res;
      this.tempData = res;
    });
  }

  createInvoiceOfCustomer() {
    //this.loader.start()
    const invoiceItems = this.itemTable.getTableItems();
    console.log(invoiceItems);
    this.invoiceData = this.itemTable.getTableData();
    this.invoiceData.invoiceItems = invoiceItems;
    console.log(invoiceItems.length);
    if (invoiceItems.length == 0) {
      this.snackBar.open("please add atleast one row to add item");
      return;
    }
    if (invoiceItems[0].id == null) {
      this.snackBar.open("please choose atleast one item");
      return;
    }

    let result = false;
    invoiceItems.forEach((items) => {
      if (items.itemQuantity === undefined) {
        this.snackBar.open("atleast choose one quantity")
      
      }
      else
      { result=true

      }
     
    });

    if (result) {
      this.loader.start();
      this.invoiceService
        .createInvoiceOfCustomer(JSON.stringify(this.invoiceData))
        .subscribe((response) => {
          
          this.loader.stop();
          this.snackBar.open("invoice created successfully", "cancel");
          window.location.href = "";
        },(error)=>{
          this.loader.stop();
          this.snackBar.open("invoice number already exists")

        });
    }
    else
    {
      this.snackBar.open("quantity required")
    }
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
