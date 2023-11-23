import { Component, OnInit } from '@angular/core';
import { InvoiceData } from 'src/models/InvoiceData';
import { ListingServices } from 'src/ApiServices/ListingServices';
import { InvoiceService } from 'src/ApiServices/InvoiceService';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})


export class TableComponent implements OnInit {

  actualData: InvoiceData[] = [];
  displayedColumns: string[] = ['invoiceNumber', 'customerName', 'createdAt', 'itemQuantity', 'itemFinalPrice','Action'];
  pageNumber: number = 0;
  pageSize: number = 10;
  sortBy: string = "invoiceNumber";
  sortDirection: string = "asc";
  dataToChild:any;


  constructor(private service: ListingServices,private invoiceService:InvoiceService) {}
  ngOnInit(): void {
    this.loadAllInvoices(this.pageNumber, this.pageSize, this.sortBy, this.sortDirection);
  }

  loadAllInvoices(pageNumber: number, pageSize: number, sortBy: string, sortDirection: string) {
    this.service.loadAllInvoices(pageNumber, pageSize, sortBy, sortDirection).subscribe((res => {
      this.actualData=res.content;
      console.log(this.actualData)

    }))
  }

  countTotal(invoiceItems: any[],fieldName:string): number {
    
    if (!invoiceItems) {
      return 0;
    }
    if(fieldName=="itemQuantity")
    {
      return invoiceItems.reduce((total, item) => total + item.itemQuantity, 0);
    }
    if(fieldName=="itemFinalPrice")
    {
      return invoiceItems.reduce((total, item) => total + item.itemFinalPrice, 0);
    }
    return 0;

    
  }

  viewData(viewData : InvoiceData)
  {
    
    alert("available soon")
  }

  DeleteData(deleteData : InvoiceData)
  {
    this.invoiceService.deleteInvoice(deleteData.id).subscribe((res)=>{
      this.loadAllInvoices(this.pageNumber, this.pageSize, this.sortBy, this.sortDirection)
      
    })

  }

  EditData(editData : InvoiceData)
  {
   
    
    this.dataToChild={...editData}

  }


}
