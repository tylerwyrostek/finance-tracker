import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsListComponent } from './transactions-list/transactions-list.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { TransactionsComponent } from './transactions/transactions.component';



@NgModule({
  declarations: [
    TransactionsListComponent,
    TransactionDetailComponent,
    TransactionsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [TransactionsListComponent, TransactionDetailComponent]
})
export class TransactionsModule { }
