import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { InvoiceService } from "src/ApiServices/InvoiceService";
import { ChooseCustomerComponent } from "../choose-customer/choose-customer.component";
import { InvoiceData } from "src/models/InvoiceData";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-invoice-table",
  templateUrl: "./invoice-table.component.html",
  styleUrls: ["./invoice-table.component.css"],
})
export class InvoiceTableComponent implements OnInit {
  invoiceItemsData: any;
  tempInvoiceItemData: any;
  tempItem: any;
  invoiceData: any;
  invoiceDate: any;
  invoiceNumber: any;
  @ViewChild(ChooseCustomerComponent, { static: false })
  getCustomerData!: ChooseCustomerComponent;
  constructor(
    private activeRoute: ActivatedRoute,
    private invoiceService: InvoiceService,
    private snackBar: MatSnackBar
  ) {}
  ngOnInit(): void {
    this.loadInvoiceItems();
    console.log(this.loadInvoiceItems);
  }

  invoiceItems: any[] = [
    {
      id: null,
      itemName: null,
      itemSalesPrice: null,
      itemQuantity: null,
      itemOffer: null,
      itemTax: null,
      itemFinalPrice: null,
    },
  ];

  deleteRow(index: number) {
    this.invoiceItems.splice(index, 1);
  }

  trackChanges(index: any) {
    for (let i = 0; i < this.tempInvoiceItemData.content.length; i++) {
      this.tempItem = this.tempInvoiceItemData.content[i];
      if (this.invoiceItemsData.id === this.tempItem.id) {
        this.invoiceItems[index].id = this.tempItem.id;
        this.invoiceItems[index].itemName = this.tempItem.itemName;
        this.invoiceItems[index].itemTax = this.tempItem.itemTax;
        this.invoiceItems[index].itemOffer = this.tempItem.itemOffer;
        this.invoiceItems[index].itemSalesPrice = this.tempItem.itemSalesPrice;
        this.invoiceItems[index].itemQuantity = this.tempItem.itemQuantity;
        this.invoiceItems[index].itemFinalPrice = this.tempItem.itemFinalPrice;
        break;
      }
    }
  }

  loadInvoiceItems() {
    this.invoiceService.getAllItems().subscribe((response) => {
      this.invoiceItemsData = response;
      this.tempInvoiceItemData = response;
    });
  }
  addRow() {
    this.invoiceItems.push({
      id:null,
      itemName: null,
      itemSalesPrice: null,
      itemQuantity: null,
      itemOffer: null,
      itemTax: null,
      itemFinalPrice: null,
    });
  }

  getTableItems() {
   
      return this.invoiceItems;
    
    
  }

  getTableData(): any {
    const invoiceNumber = this.invoiceNumber;
    const date = this.invoiceDate;
   
    console.log(date)
    if (invoiceNumber == null && date == null) {
      this.snackBar.open("plese fill are required fields");
      return
    } else {
      return new InvoiceData(
        "",
        this.invoiceNumber,
        date,
        this.getCustomerData.getData().name,
        [],
        this.getCustomerData.getData().id
      );
    }
  }

  trackInputChanges(changedValue: any, index: number) {
    if (this.invoiceItems[index].itemQuantity == null) {
      const SaleOrQuantityTotal = 1 * this.invoiceItems[index].itemSalesPrice;

      const itemOfferPrice =
        (this.invoiceItems[index].itemOffer * SaleOrQuantityTotal) / 100;

      const priceAfterOffer = SaleOrQuantityTotal - itemOfferPrice;

      const includingTax =
        (priceAfterOffer * this.invoiceItems[index].itemTax) / 100;
      this.invoiceItems[index].itemFinalPrice = includingTax + priceAfterOffer;
      return;
    } else {
      const SaleOrQuantityTotal =
        this.invoiceItems[index].itemQuantity *
        this.invoiceItems[index].itemSalesPrice;

      const itemOfferPrice =
        (this.invoiceItems[index].itemOffer * SaleOrQuantityTotal) / 100;

      const priceAfterOffer = SaleOrQuantityTotal - itemOfferPrice;

      const includingTax =
        (priceAfterOffer * this.invoiceItems[index].itemTax) / 100;
      this.invoiceItems[index].itemFinalPrice = includingTax + priceAfterOffer;
    }
  }
}
