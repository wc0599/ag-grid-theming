import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-aggrid-table-two',
  template: `
  <div class="dark-bg">
    <h1>Inverse Table</h1>
    <ag-grid-angular
      #theme2
      style="width: 500px; height: 200px"
      class="jazz-theme__table-two"
      [rowData]="rowData | async"
      [columnDefs]="columnDefs"
      rowSelection="multiple"
    >
    </ag-grid-angular>
  </div>`,
  styles: [ '.dark-bg { margin: 1rem 0; background-color: gray; h1 { color: #fff; } border-radius: 0.5rem; padding: 1rem; }' ]
})
export class AggridTableTwoComponent implements OnInit {
  @ViewChild('theme2') theme2!: AgGridAngular;

  rowData: Observable<any[]>;

  constructor(private http: HttpClient) { 
    this.rowData = this.http.get<any[]>('https://www.ag-grid.com/example-assets/small-row-data.json');
  }

  ngOnInit(): void {
  }

  columnDefs: ColDef[] = [
    { field: 'make' , sortable: true, filter: true, checkboxSelection: true },
    { field: 'model', sortable: true, filter: true },
    { field: 'price', sortable: true, filter: true }
  ];
}
