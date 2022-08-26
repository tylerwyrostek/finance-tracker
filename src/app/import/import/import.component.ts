import { Component, OnInit } from '@angular/core';
import { NgxCsvParser, NgxCSVParserError } from 'ngx-csv-parser';
import { TransactionStore } from 'src/app/transactions/transactions.store';

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.css']
})
export class ImportComponent implements OnInit {
  csvRecords: any;
  constructor(private ngxCsvParser: NgxCsvParser, private transactionStore: TransactionStore) { }

  ngOnInit(): void {
  }

  public fileChanged($event:any): void{
    console.log($event)
    this.readCSVFile($event.target.files)
  }

  private readCSVFile(files: any):void{
    this.ngxCsvParser.parse(files[0], { header: true, delimiter: ',', encoding: 'utf8' })
    .pipe().subscribe({
      next: (result): void => {
        console.log('Result', result);
        this.csvRecords = result;
        this.transactionStore.update({transactions : this.csvRecords});
        console.log(this.transactionStore.getValue())
      },
      error: (error: NgxCSVParserError): void => {
        console.log('Error', error);
      }
    });
  }

}
