import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsListComponent } from './transactions-list/transactions-list.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { ImportComponent } from './import/import.component';
import {TransactionsRoutingModule} from './transactions-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    TransactionsListComponent,
    TransactionDetailComponent,
    ImportComponent
  ],
  imports: [
    CommonModule,
    TransactionsRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [TransactionsListComponent, TransactionDetailComponent]
})
export class TransactionsModule { }
