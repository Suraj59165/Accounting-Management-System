import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable({
    providedIn: 'root'
})

export class CustomerService {

    constructor(private httpClient: HttpClient) { }

    addCustomer(customerData: any) {
        console.log("")
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        const options = { headers: headers };
        return this.httpClient.post('http://localhost:8080/customer', customerData, options)
    }

    getAllCustomers() {
    
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        const options = { headers: headers };
        return this.httpClient.get('http://localhost:8080/customer')
    }



}