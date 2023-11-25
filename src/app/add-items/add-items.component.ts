import { Component, Input, TemplateRef, ViewChild } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { InvoiceTableComponent } from "../invoice-table/invoice-table.component";
import { InvoiceService } from "src/ApiServices/InvoiceService";
import { MatSnackBar } from "@angular/material/snack-bar";
import { NgForm } from "@angular/forms";
import { NgxUiLoaderService } from "ngx-ui-loader";

@Component({
  selector: "app-add-items",
  templateUrl: "./add-items.component.html",
  styleUrls: ["./add-items.component.css"],
})
export class AddItemsComponent {
  @ViewChild("addItemModal") addItemModal!: TemplateRef<any>;

  items: any;

  constructor(
    private modalService: NgbModal,
    private invoiceService: InvoiceService,
    private snackBar: MatSnackBar,
    private loader: NgxUiLoaderService
  ) {}

  @Input()
  set dataInAddItems(data: any) {
    this.items = data;
    if (data != null && data.id != null) {
      this.openModal(this.addItemModal);
    }
    if (data.id == null && data.key == null) {
      this.openModal(this.addItemModal);
    }
  }

  openModal(template: TemplateRef<any>) {
    this.modalService.open(template);
  }

  addItems(formData: NgForm, form: NgForm) {
    if (form.valid) {
      if (formData != null) {
        this.loader.start();
        this.invoiceService
          .createInvoiceItems(JSON.stringify(formData))
          .subscribe((response) => {
            form.reset();
            this.loader.stop();
            this.snackBar.open("items created successfully", "cancel");
          });
      } else {
        Object.keys(form.controls).forEach((controlName) => {
          const control = form.controls[controlName];
          control.markAsTouched();
        });
      }
    }
  }

  trackInputChanges() {
    const SaleOrQuantityTotal = 1 * this.items.itemSalesPrice;

    console.log(SaleOrQuantityTotal);
    const itemOfferPrice = (this.items.itemOffer * SaleOrQuantityTotal) / 100;

    const priceAfterOffer = SaleOrQuantityTotal - itemOfferPrice;

    const includingTax = (priceAfterOffer * this.items.itemTax) / 100;
    if (this.items.itemTax == null && this.items.itemOffer == null) {
      this.items.itemFinalPrice = SaleOrQuantityTotal;
    } else {
      this.items.itemFinalPrice = includingTax + priceAfterOffer;
    }
  }
}
