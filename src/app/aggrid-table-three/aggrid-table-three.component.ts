import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { BtnCellRenderer } from '../btn-cell-renderer/btn-cell-renderer.component';

@Component({
  selector: 'app-aggrid-table-three',
  template: `
    <h1>Custom Table with button</h1>
    <ag-grid-angular
      #theme3
      style="width: 500px; height: 200px"
      class="jazz-theme__table-three"
      [rowData]="rowData"
      [columnDefs]="columnDefs"
      [frameworkComponents]="frameworkComponents"
      rowSelection="multiple"
    >
    </ag-grid-angular>`,
})
export class AggridTableThreeComponent implements OnInit {
  @ViewChild('theme3') theme3!: AgGridAngular;

  constructor() { }

  ngOnInit(): void {
  }

  frameworkComponents = {
    btnCellRenderer: BtnCellRenderer
  }

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
    { make: 'Honda', model: 'Accord', price: 24000 },
  ];

  columnDefs: ColDef[] = [
    { 
      field: 'make', 
      cellRenderer: 'btnCellRenderer',
      cellRendererParams: {
        clicked: (field: any) => alert(`${field} was clicked`)
      },
      sortable: true, 
      filter: true,
    },
    { 
      field: 'model',
      sortable: true,
      filter: true 
    },
    { 
      field: 'price',
      sortable: true,
      filter: true,
      checkboxSelection: true
    }
  ];

}
