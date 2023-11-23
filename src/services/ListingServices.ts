import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ListingServices{
    constructor(private httpClient:HttpClient){
         
    }
    loadAllInvoices(pageNumber:number,pageSize:number,sortBy:string,sortDirection:string) {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        const params = new HttpParams()
            .set('pageNumber', pageNumber)
            .set('pageSize', pageSize)
            .set('sortBy',sortBy)
            .set('sortDirection',sortDirection)
           
            ;

        return this.httpClient.get<any>('http://localhost:8080/invoice', {  headers,params: params,

        });
    }

    updateInvoice(invoiceNumber:number,invoiceData:any) {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        const options = { headers: headers };
        return this.httpClient.put('http://localhost:8080/invoice/'+invoiceNumber, invoiceData, options)
    }

    deleteInvoiceItems(invoiceItemId:any) {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        const options = { headers: headers };
        return this.httpClient.delete('http://localhost:8080/invoice/invoice-item/'+invoiceItemId,options)
    }

}