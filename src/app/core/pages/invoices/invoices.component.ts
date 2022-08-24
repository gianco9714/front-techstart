import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {InvoicesService} from '../../services/invoices.service';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent {

  displayedColumns: string[] = ['Invoice #', 'Invoice Date',	'Distributor Name', 'Distributor Address', 'Customer Name', 'Customer Address', 'Manufacturer Name', 'Manufacturer Address',
    'Product Code', 'Product Description', 'Unit of Measure', 'Purchased Qty', 'Purchased Weight', 'Unit Price', 'Total Price'];
  invoices = [];

  invoiceInput = '';
  distributorInput = '';
  customerLocationInput = '';
  productInput = '';

  constructor(private service: InvoicesService) {this.listInvoices(); }

  // tslint:disable-next-line:typedef
  listInvoices(){
    // tslint:disable-next-line:max-line-length
    this.service.getInvoiceList(this.invoiceInput, this.distributorInput, this.customerLocationInput, this.productInput).subscribe(response => {
      this.invoices = response;
    });
  }



}
