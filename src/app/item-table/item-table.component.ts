import { Component } from '@angular/core';

@Component({
  selector: 'app-item-table',
  templateUrl: './item-table.component.html',
  styleUrls: ['./item-table.component.css']
})
export class ItemTableComponent {

  
  itemRows: any[] = [{ itemName: '', itemSalePrice: '', itemQuantity: '', itemOffer: '', itemTax: '', itemFinalPrice: '' }];
  deleteRow(index: number) {
    this.itemRows.splice(index, 1);
  }
  addRow() {
    this.itemRows.push({ itemName: '', itemSalePrice: '', itemQuantity: '', itemOffer: '', itemTax: '', itemFinalPrice: '' });
  }

  getTableData() {
   return this.itemRows
  }

}
