import React, { useState, useEffect, forwardRef, useImperativeHandle} from "react";

import { AgGridColumn, AgGridReact } from "ag-grid-react";
import { NumericCellEditor } from "./NumericCellEditor.js";

import "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const Supplier = forwardRef((props, ref) => {
  const [gridApi, setGridApi] = useState(null);
  // const [gridColumnApi, setGridColumnApi] = useState(null);
  const [rowData, setRowData] = useState(null);

  const columnDefs = [
    
   
    {
      headerName: "supplier_name",
      field: "supplier_name",
    //   pinned: "left",
      editable: "false",
    },
    {
        headerName: "supplier_number",
        field: "supplier_number",
        // pinned: "left",
        editable: "false",
      },
      {
        headerName: "base_material",
        field: "base_material",
        // pinned: "left",
        editable: "false",
        filter : 'true'
      },
    
  ];



  const onGridReady = (params) => {
    setGridApi(params.api);
  };

  useEffect(() => {
    fetch(
      "/suppliers",
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

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div className="example-wrapper">
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

export default Supplier;
