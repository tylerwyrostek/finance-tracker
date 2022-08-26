import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImportComponent } from './import/import.component';



@NgModule({
  declarations: [
    ImportComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ImportComponent]
})
export class ImportModule { }
