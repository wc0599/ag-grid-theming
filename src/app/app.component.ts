import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('theme1') theme1!: AgGridAngular;
  @ViewChild('theme2') theme2!: AgGridAngular;
  // title = 'ag-grid-theming';

  columnDefs: ColDef[] = [
    { field: 'make' , sortable: true, filter: true, checkboxSelection: true },
    { field: 'model', sortable: true, filter: true },
    { field: 'price', sortable: true, filter: true }
  ];

  // rowData = [
  //   { make: 'Toyota', model: 'Celica', price: 35000 },
  //   { make: 'Ford', model: 'Mondeo', price: 32000 },
  //   { make: 'Porsche', model: 'Boxter', price: 72000 },
  //   { make: 'Honda', model: 'Accord', price: 24000 },
  // ];

  rowData: Observable<any[]>;

  constructor(private http: HttpClient) { 
    this.rowData = this.http.get<any[]>('https://www.ag-grid.com/example-assets/small-row-data.json');
  }

  getSelectedRows(): void {
    const selectedNodes = this.theme1.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data);
    const selectedDataStringPresentation = selectedData.map(node => `${node.make} ${node.model}`).join(', ');

    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }
}
