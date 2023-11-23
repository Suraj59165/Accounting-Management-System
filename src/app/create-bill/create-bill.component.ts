import { Component, OnInit, ViewChild } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { CommonModalComponent } from "../common-modal/common-modal.component";
import { CustomerData } from "src/models/CustomerData";
import { CustomerService } from "src/ApiServices/CustomerService";
import { ItemTableComponent } from "../item-table/item-table.component";
import { InvoiceData } from "src/models/InvoiceData";

@Component({
  selector: "app-create-bill",
  templateUrl: "./create-bill.component.html",
  styleUrls: ["./create-bill.component.css"],
})
export class CreateBillComponent implements OnInit {
  dataToAddCustomerComponent: any;
  customerData: any;
  tempData: any;
  tempItem: any;
 

  @ViewChild(ItemTableComponent, { static: false })
  itemTable!: ItemTableComponent;

  constructor(private customerService: CustomerService) {}
  ngOnInit(): void {
    this.customerService.getAllCustomers().subscribe((res) => {
      this.customerData = res;
      console.log(this.customerData);
      this.tempData = res;
    });
  }

  trackInputChanges() {
    for (let i = 0; i < this.tempData.content.length; i++) {
      this.tempItem = this.tempData.content[i];

      if (this.customerData.id === this.tempItem.id) {
        this.customerData.name = this.tempItem.name;
        this.customerData.address = this.tempItem.address;
        this.customerData.email = this.tempItem.email;
        this.customerData.city = this.tempItem.city;
        this.customerData.phone = this.tempItem.phone;
        this.customerData.notes = this.tempItem.notes;
        console.log(this.customerData);
        break;
      }
    }
  }

  submit(customerData: any, invoiceData: any) {
    const tableData = this.itemTable.getTableData();
    console.log("Invoice items Data:", tableData);
    console.log("invoice Data:", invoiceData);
    console.log("Customer Data:", customerData);
    console.log('final data')
    invoiceData=new InvoiceData('null',invoiceData.invoiceNumber,invoiceData.date,customerData.name,tableData,customerData.id)
    console.log(invoiceData)
    
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
    this.dataToAddCustomerComponent = { ...this };
  }
}
