import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsListComponent } from './transactions-list/transactions-list.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { ImportComponent } from './import/import.component';


@NgModule({
  declarations: [
    TransactionsListComponent,
    TransactionDetailComponent,
    ImportComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [TransactionsListComponent, TransactionDetailComponent]
})
export class TransactionsModule { }
