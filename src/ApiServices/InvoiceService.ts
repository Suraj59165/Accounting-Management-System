import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable({
    providedIn: 'root'
})
export class InvoiceService{
    constructor(private http:HttpClient){}

    createInvoiceOfCustomer(invoiceData:any)
    {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        const options = { headers: headers };
        return this.http.post('http://localhost:8080/invoice', invoiceData, options)

    }

    createInvoiceItems(invoiceItems:any)
    {
    
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        const options = { headers: headers };
        return this.http.post('http://localhost:8080/items', invoiceItems, options)
    }

    deleteInvoice(invoiceId:any)
    {
        
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        const options = { headers: headers };
        return this.http.delete('http://localhost:8080/invoice/'+invoiceId, options)

    }
}