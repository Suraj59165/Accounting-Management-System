import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-item-table",
  templateUrl: "./item-table.component.html",
  styleUrls: ["./item-table.component.css"],
})
export class ItemTableComponent implements OnInit {
  @Input() flag: any;
  constructor(private activeRoute: ActivatedRoute) {}
  ngOnInit(): void {}

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

  calculateValue(changedValue: any, index: number) {}
}
