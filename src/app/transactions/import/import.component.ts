import { Component, OnInit } from '@angular/core';
import { NgxCsvParser, NgxCSVParserError } from 'ngx-csv-parser';
import { TransactionStore } from 'src/app/transactions/transactions.store';
import {TransactionTypes} from '../transactions.types';

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.css']
})
export class ImportComponent implements OnInit {
  csvRecords: any;
  withdrawlTotal: number = 0;
  depositTotal: number = 0;
  constructor(private ngxCsvParser: NgxCsvParser, private transactionStore: TransactionStore) { }

  ngOnInit(): void {
  }

  public fileChanged($event:any): void{
    this.resetStore();
    this.readCSVFile($event.target.files)
  }

  private readCSVFile(files: any):void{
    this.ngxCsvParser.parse(files[0], { header: true, delimiter: ',', encoding: 'utf8' })
    .pipe().subscribe({
      next: (result): void => {
        this.csvRecords = this.sanatizeResults(result);
        this.calculateTotals(this.csvRecords);
        this.transactionStore.update({transactions : this.csvRecords, withdrawalTotal: this.withdrawlTotal, depositTotal: this.depositTotal});
      },
      error: (error: NgxCSVParserError): void => {
        console.error('Error', error);
      }
    });
  }


  private sanatizeResults(results:any): any{
    let sanatizedList:any[] = [];
    results.forEach((obj:any) => {
      Object.keys(obj).forEach((key) => {
        var replacedKey = key.trim().replace(" ", "");
        if (key !== replacedKey) {
          obj[replacedKey] = obj[key];
          delete obj[key];
        }
    });

    sanatizedList.push(obj);
  });
return sanatizedList
}

private resetStore(): void{
  this.transactionStore.reset();
}

private calculateTotals(results: any): void{
  results.forEach((transaction: any) => {
    if(transaction.Type === TransactionTypes.Withdrawal){
      this.withdrawlTotal += +transaction.Amount;
    }else if(transaction.Type === TransactionTypes.Deposit){
      this.depositTotal += +transaction.Amount;
    }
  });

}

}
