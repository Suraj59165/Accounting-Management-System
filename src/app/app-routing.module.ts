import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBillComponent } from './create-bill/create-bill.component';
import { TableComponent } from './table/table.component';
import { AddItemsComponent } from './add-items/add-items.component';

const routes: Routes = [
  {
    path:'create-invoice',
    component:CreateBillComponent
  },

  {
    path:'',
    component:TableComponent
  },
  {
    path:'add-items',
    component:AddItemsComponent
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
