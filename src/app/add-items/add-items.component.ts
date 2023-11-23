import { Component, Input, TemplateRef, ViewChild } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ItemTableComponent } from "../item-table/item-table.component";
import { InvoiceService } from "src/ApiServices/InvoiceService";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-add-items",
  templateUrl: "./add-items.component.html",
  styleUrls: ["./add-items.component.css"],
})
export class AddItemsComponent {
  @ViewChild("openPopUp") openPopUp!: TemplateRef<any>;
  @ViewChild(ItemTableComponent, { static: false })
  itemTable!: ItemTableComponent;

  constructor(private modalService: NgbModal,private invoiceService:InvoiceService,private snackBar:MatSnackBar) {}


  openModal(template: TemplateRef<any>) {
    this.modalService.open(template, { size: "lg" });
  }

  addInvoiceItems()
  {
    const tableData = this.itemTable.getTableData();
    console.log("this.itemTable.getTableData")
    console.log(tableData)
    this.invoiceService.createInvoiceItems(JSON.stringify(tableData)).subscribe((response)=>{
      this.snackBar.open("Data added Successfully")
      window.location.reload()
      
    })
   
  }
}
