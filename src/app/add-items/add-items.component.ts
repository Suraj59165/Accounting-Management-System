import { Component, Input, TemplateRef, ViewChild } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { InvoiceTableComponent } from "../invoice-table/invoice-table.component";
import { InvoiceService } from "src/ApiServices/InvoiceService";
import { MatSnackBar } from "@angular/material/snack-bar";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-add-items",
  templateUrl: "./add-items.component.html",
  styleUrls: ["./add-items.component.css"],
})
export class AddItemsComponent {
  @ViewChild("addItemModal") addItemModal!: TemplateRef<any>;

  items:any;

  constructor(private modalService: NgbModal,private invoiceService:InvoiceService,private snackBar:MatSnackBar) {}


  @Input()
  set dataInAddItems(data: any) {
   
    this.items = data
    if (data != null && data.id != null) {
     
      this.openModal(this.addItemModal)
    }
    if (data.id == null && data.key == null) {
    
      this.openModal(this.addItemModal)
    }
  }

  openModal(template: TemplateRef<any>) {
    this.modalService.open(template);
  }
 
  addItems(formValue:NgForm)
  {
   this.invoiceService.createInvoiceItems(JSON.stringify(formValue)).subscribe((response)=>{
    this.items.itemName=''
    this.items.itemTax=''
    this.items.itemOffer=''
    this.items.itemSalesPrice=''
    this.items.itemFinalPrice=''
   
    this.snackBar.open("items created successfully",'cancel')
   })
  }

  trackInputChanges()
  {
    const SaleOrQuantityTotal =
        1*
        this.items.itemSalesPrice;

        console.log(SaleOrQuantityTotal)
      const itemOfferPrice =
        (this.items.itemOffer * SaleOrQuantityTotal) / 100;

      const priceAfterOffer = SaleOrQuantityTotal - itemOfferPrice;

      const includingTax =
        (priceAfterOffer * this.items.itemTax) / 100;
      this.items.itemFinalPrice = includingTax + priceAfterOffer;
  }
}
