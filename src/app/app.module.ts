import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AggridTableThreeComponent } from './aggrid-table-three/aggrid-table-three.component';
import { BtnCellRenderer } from './btn-cell-renderer/btn-cell-renderer.component';
import { AggridTableTwoComponent } from './aggrid-table-two/aggrid-table-two.component';

@NgModule({
  declarations: [
    AppComponent,
    AggridTableThreeComponent,
    BtnCellRenderer,
    AggridTableTwoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgGridModule.withComponents([BtnCellRenderer])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
