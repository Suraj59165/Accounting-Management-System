import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent {
  @ViewChild('openPopUp') openPopUp!: TemplateRef<any>;
  constructor(private modalService:NgbModal){}
  itemData:any;



 
 openModal(template: TemplateRef<any>) {
  this.modalService.open(template, { size: 'lg' });
}

}
