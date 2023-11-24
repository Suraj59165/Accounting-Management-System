export class Items
{
    id: string;
    itemName: string;
    itemSalesPrice: number;
    itemQuantity: number;
    itemOffer: number;
    itemTax: number;
    itemFinalPrice: number;

    constructor(id:any,itemName:string,itemSalesPrice:number,itemQuantity:number,itemOffer:number,itemTax:number,itemFinalPrice:number){
        this.id=id;
        this.itemName=itemName;
        this.itemSalesPrice=itemSalesPrice;
        this.itemQuantity=itemQuantity;
        this.itemOffer=itemOffer;
        this.itemTax=itemTax;
        this.itemFinalPrice=itemFinalPrice
    }
}