import React from 'react'
import {inventoryData} from "../data/Data"

export const initialState = {
    inventoryData : [...inventoryData],
    filters: {
        department: "All Department",
        isLowStock: false,
        SortBy: "Name"
      }

}
export  const  DataReducer =( state,action) => {
    switch (action.type) {
        case "FILTER_APPLY": {
          localStorage.setItem(
            "filters",
            JSON.stringify({
              ...state.filters,
              [action.payload.type]: action.payload.value
            })
          );
          return {
            ...state,
            filters: {
              ...state.filters,
              [action.payload.type]: action.payload.value
            }
          };
        }

        default:
        return { ...inventoryData };
    }
}
