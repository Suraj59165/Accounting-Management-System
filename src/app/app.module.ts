import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { CommonModalComponent } from './common-modal/common-modal.component';
import { CreateBillComponent } from './create-bill/create-bill.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddItemsComponent } from './add-items/add-items.component';
import { InvoiceTableComponent } from './invoice-table/invoice-table.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ChooseCustomerComponent } from './choose-customer/choose-customer.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { ViewDataComponent } from './view-data/view-data.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    HeaderComponent,
    CommonModalComponent,
    CreateBillComponent,
    AddCustomerComponent,
    AddItemsComponent,
    InvoiceTableComponent,
    ChooseCustomerComponent,
    ViewDataComponent
  ],
  imports: [
    MatSnackBarModule,
    MatInputModule,
    MatAutocompleteModule,
    HttpClientModule,
    DataTablesModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxUiLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
