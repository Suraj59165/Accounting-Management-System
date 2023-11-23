import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ListingServices } from 'src/services/ListingServices';
import { MatSnackBar } from '@angular/material/snack-bar';
import { animate } from '@angular/animations';

@Component({
  selector: 'app-common-modal',
  templateUrl: './common-modal.component.html',
  styleUrls: ['./common-modal.component.css'],
})
export class CommonModalComponent {
  @ViewChild('openPopUp') openPopUp!: TemplateRef<any>;
  invoiceData: any;
  tempData:any;
  modalRef:any;

  constructor(private modalService: NgbModal,private apiService:ListingServices) {}

 
  trackInputChanges(changedValue: any, index: number) {
    const SaleOrQuantityTotal=this.invoiceData.invoiceItems[index].itemQuantity *
    this.invoiceData.invoiceItems[index].itemSalesPrice;

    const itemOfferPrice=
    this.invoiceData.invoiceItems[index].itemOffer*SaleOrQuantityTotal/100

   const priceAfterOffer= SaleOrQuantityTotal-itemOfferPrice

   const includingTax=priceAfterOffer*this.invoiceData.invoiceItems[index].itemTax/100;
   this.invoiceData.invoiceItems[index].itemFinalPrice=includingTax+priceAfterOffer
    

  }

  @Input()
  set dataFromParent(data: any) {
    this.invoiceData = data;
    this.tempData=data;
    if (this.invoiceData != null && this.invoiceData.id != null) {
      this.openModal(this.openPopUp);
    }
    if (data.id == null && data.invoiceNumber == null) {
       this.openModal(this.openPopUp);
    }
  }
  updateData()
  {
 
   this.apiService.updateInvoice(this.invoiceData.invoiceNumber,JSON.stringify(this.invoiceData)).subscribe((res)=>{
   
      this.modalRef.close()
      window.location.reload()
      //this.openSnackBar("successfullly updated data",'close')
    
   })
  }

  deleteItem(invoiceItemId:any)
  {
    console.log(invoiceItemId)
    this.apiService.deleteInvoiceItems(invoiceItemId).subscribe((res)=>{
      this.dataFromParent(this.tempData)
      
    })
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef= this.modalService.open(template, { size: 'lg' });
  }

 
}
