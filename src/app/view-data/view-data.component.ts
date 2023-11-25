import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.css']
})
export class ViewDataComponent {

  @ViewChild('openPopUp') openPopUp!: TemplateRef<any>;

  invoiceData:any;
  tempData:any;
  modelRef:any;

  constructor(private modelService:NgbModal){}

  @Input()
  set dataToView(data: any) {
    this.invoiceData = data;
    this.tempData=data;
    if (this.invoiceData != null && this.invoiceData.id != null) {
      this.openModal(this.openPopUp);
    }
    if (data.id == null && data.invoiceNumber == null) {
       this.openModal(this.openPopUp);
    }
  }
 

  openModal(template: TemplateRef<any>) {
    this.modelRef= this.modelService.open(template, { size: 'lg' });
  }

}
