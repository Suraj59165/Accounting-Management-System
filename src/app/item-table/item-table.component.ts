import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { InvoiceService } from "src/ApiServices/InvoiceService";

@Component({
  selector: "app-item-table",
  templateUrl: "./item-table.component.html",
  styleUrls: ["./item-table.component.css"],
})
export class ItemTableComponent implements OnInit {
  @Input() flag: any;
  constructor(private activeRoute: ActivatedRoute,private invoiceService:InvoiceService) {}
  ngOnInit(): void {
    this.loadInvoiceItems()
    console.log(this.loadInvoiceItems)
  }
  invoiceItemsData:any;
  tempInvoiceItemData:any;
  tempItem:any;

  invoiceItems: any[] = [
    {
      itemName: "",
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

  trackChanges(index:any)
  {
    for (let i = 0; i < this.tempInvoiceItemData.content.length; i++) {
      this.tempItem = this.tempInvoiceItemData.content[i];
      console.log(this.tempItem)
      console.log(this.invoiceItemsData.id)
      if (this.invoiceItemsData.id === this.tempItem.id) {
        console.log("matched")
        this.invoiceItems[index].itemName= this.tempItem.itemName;
        this.invoiceItems[index].itemTax= this.tempItem.itemTax;
        this.invoiceItems[index].itemOffer= this.tempItem.itemOffer;
        this.invoiceItems[index].itemSalesPrice= this.tempItem.itemSalesPrice;
        this.invoiceItems[index].itemQuantity= this.tempItem.itemQuantity;
        this.invoiceItems[index].itemFinalPrice= this.tempItem.itemFinalPrice;
        
        
        break;
      }
    }
   
  }

  loadInvoiceItems()
  {
    this.invoiceService.getAllItems().subscribe((response)=>{
      console.log(response)
      this.invoiceItemsData=response;
      this.tempInvoiceItemData=response
      
    })

  }
  addRow() {
    this.invoiceItems.push({
      itemName: "",
      itemSalesPrice: null,
      itemQuantity: null,
      itemOffer: null,
      itemTax: null,
      itemFinalPrice: null,
    });
  }

  getTableData() {
    return this.invoiceItems;
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
