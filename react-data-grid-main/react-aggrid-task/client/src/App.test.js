import React from 'react';
import App from './App';

import {render,screen} from "@testing-library/react";
import TaskGrid from './TaskGrid';
import Supplier from './Supplier';
import { RowNode } from 'ag-grid-community';



describe('Async test', () => {
    test('all rows fetched', () => {
        window.fetch = jest.fn()
        window.fetch.mockResolvedValueOnce({
            json : async () => [{base_material:'US-steel'},{Dec:36.39}]
        })
        render(<TaskGrid />)
        let textElements =  screen.queryByText('Mar')
          expect(textElements).toBeInTheDocument()
      })
})

describe('Async test', () => {
    test('column fetched', async() => {
        window.fetch = jest.fn()
        window.fetch.mockResolvedValueOnce({
            json : async () => [{field:'supplier_number'},{field:'base_material'}]
        })
        render(<TaskGrid />)
        let colElements =  await screen.queryByText('supplier_name')
          expect(colElements).toBeInTheDocument()
      })
})

describe('Async test', () => {
    test('supplier name  was called', () => {
        Supplier.capitalHelper = jest.fn((s) => Utils.capitalHelper(s))
        const newString = Utils.getCapitalName('john')
        expect(Utils.capitalHelper.mock.calls.length).toBe(1)
    })
})

    



