import { Component, Input, TemplateRef, ViewChild } from '@angular/core';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomerService } from 'src/ApiServices/CustomerService';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css'],
})
export class AddCustomerComponent {
  @ViewChild('customerModal') customerModalTemplate!: TemplateRef<any>;
  customerData: any;

  constructor(
    private modalService: NgbModal,
    private customerService: CustomerService,
    private snackBar:MatSnackBar
  ) {}

  @Input()
  set dataInaddCustomer(data: any) {
    this.customerData = data
    
    if (data != null && data.id != null) {
      this.openModal(this.customerModalTemplate)
    }
    if (data.id == null && data.key == null) {
      this.openModal(this.customerModalTemplate)
    }
  }

  openModal(template: TemplateRef<any>) {
    this.modalService.open(template);
  }

  submitForm(formData: any) {
    this.customerService
      .addCustomer(JSON.stringify(formData))
      .subscribe((res) => {
        this.customerData.name=''
        this.customerData.email=''
        this.customerData.phone=''
        this.customerData.address=''
        this.customerData.notes=''
        this.snackBar.open("customer created successfully",'cancel')
        
        
        

      });
  }

  trackInputChanges()
  {
  
  }
}
