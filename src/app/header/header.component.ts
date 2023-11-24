import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  dataFromHeader:any;
  dataFromHeaderComponent:any;
  constructor(private router:Router){}
  ngOnInit(): void {
    
  }
  openCreateBillComponent()
  {
    const flag=true;
    console.log("invoked create bill")
   this.router.navigateByUrl('/create-bill')
  }

  openAddItemPopUp()
  {
    this.dataFromHeaderComponent={...this}
  }
  
  openAddCustomerPopUp()
  {
    this.dataFromHeader={...this}
    
  }

}
