import { Injectable } from '@angular/core';
import { HttpClient , HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class InvoicesService {

  private api: string = environment.apiUrl;
  constructor(private http: HttpClient) { }
  getInvoiceList(invoiceNumber: string, distributorName: string, customerName: string, product: string): Observable<any> {
    const params = new HttpParams()
      .set('invoiceNumber', invoiceNumber)
      .set('distributorName', distributorName)
      .set('customerName', customerName)
      .set('product', product);
    console.log(`${this.api}/invoices?invoiceNumber=${invoiceNumber}&distributorName=${distributorName}&customerName=${customerName}&product=${product}`);
    return this.http.get<any>( `${this.api}/invoices`, {params} );
  }

}
