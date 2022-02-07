import React, { useState, useEffect, forwardRef, useImperativeHandle} from "react";

import { AgGridColumn, AgGridReact } from "ag-grid-react";
import { NumericCellEditor } from "./NumericCellEditor.js";

import "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const TaskGrid = forwardRef((props, ref) => {
  const [gridApi, setGridApi] = useState(null);
  // const [gridColumnApi, setGridColumnApi] = useState(null);
  const [rowData, setRowData] = useState(null);

  const columnDefs = [
    {
      headerName: "2021 forecasted pricing(USD/CWT)",
      children: [
        { field: "Dec", editable: true, cellEditor: "numericCellEditor" },
      ],
    },
    {
      headerName: "2022 forecasted pricing(USD/CWT)",
      children: [
        { field: "Jan", editable: true, cellEditor: "numericCellEditor" },
        { field: "Feb", editable: true, cellEditor: "numericCellEditor" },
        { field: "Mar", editable: true, cellEditor: "numericCellEditor" },
        { field: "Apr", editable: true, cellEditor: "numericCellEditor" },
        { field: "May", editable: true, cellEditor: "numericCellEditor" },
        { field: "Jun", editable: true, cellEditor: "numericCellEditor" },
        { field: "Jan", editable: true, cellEditor: "numericCellEditor" },
        { field: "Aug", editable: true, cellEditor: "numericCellEditor" },
        { field: "Sep", editable: true, cellEditor: "numericCellEditor" },
        { field: "Oct", editable: true, cellEditor: "numericCellEditor" },
        { field: "Nov", editable: true, cellEditor: "numericCellEditor" },
        { field: "Dec", editable: true, cellEditor: "numericCellEditor" },
      ],
    },
    {
      headerName: "supplier_name",
      field: "supplier_name",
      pinned: "left",
      editable: "false",
    },
    {
      headerName: "supplier_number",
      field: "supplier_number",
      pinned: "left",
      editable: "false",
    },
    {
      headerName: "base_material",
      field: "base_material",
      pinned: "left",
      editable: "false",
    },
  ];

  const searchStyle={width:"30%",padding:"2px 4px",borderRadius:5,outline:0,
border:"1px #68bf40 solid",fontSize:"100%"}


  const onGridReady = (params) => {
    setGridApi(params.api);
  };

  useEffect(() => {
    fetch(
      "/forecast",
      {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then((response) =>  
      response.json() )
      .then((data) => {
        console.log(data);
        setRowData(data);
      });
  }, []);

  useImperativeHandle(ref, () => {
    return {
      getApi() {
        return gridApi;
      },
    };
  });

  const onFilterTextChange=(e)=>{
    gridApi.setQuickFilter(e.target.value)
  }

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div className="example-wrapper">

      <div>
      <input type="search" style={searchStyle} onChange={onFilterTextChange} placeholder="search..."/>
      </div>

      <div>
        <p></p>
      </div>

        <div className="ag-theme-alpine" style={{ height: 400, width: 1250 }}>
          <AgGridReact
            enableRangeSelection={true}
            //suppressMultiRangeSelection={true}
            rowData={rowData}
            columnDefs={columnDefs}
            onGridReady={onGridReady}
            frameworkComponents={{
              // numberFormatter: NumberFormatter,
              numericCellEditor: NumericCellEditor,
              // rangeFilter: RangeFilter
            }}
          />
        </div>
      </div>
    </div>
  );
});

export default TaskGrid;
