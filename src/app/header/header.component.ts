import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private router:Router){}
  ngOnInit(): void {
    
  }
  openCreateBillComponent()
  {
    console.log("invoked create bill")
   this.router.navigateByUrl('/create-bill')
  }

  addItems()
  {
    this.router.navigateByUrl('/add-items')
  }
  

}
