import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsListComponent } from './transactions-list/transactions-list.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';



@NgModule({
  declarations: [
    TransactionsListComponent,
    TransactionDetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TransactionsModule { }
