export class InvoiceData {
  public id: any;
  public invoiceNumber: number;
  public createdAt: any;
  public customerName: string;
  public invoiceItems: {
    id: string;
    itemName: string;
    itemSalesPrice: number;
    itemQuantity: number;
    itemOffer: number;
    itemTax: number;
    itemFinalPrice: number;
  }[];
  public customerId: string;

  constructor(
    id: any,
    invoiceNumber: number,
    createdAt: any,
    customerName: string,
    invoiceItems: {
      id: string;
      itemName: string;
      itemSalesPrice: number;
      itemQuantity: number;
      itemOffer: number;
      itemTax: number;
      itemFinalPrice: number;
    }[],
    customerId: string
  ) {
    this.id = id;
    this.invoiceNumber = invoiceNumber;
    this.createdAt = createdAt;
    this.customerName = customerName;
    this.invoiceItems = invoiceItems;
    this.customerId = customerId;
  }
}


