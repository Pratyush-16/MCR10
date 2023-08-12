import React, { createContext, useReducer } from 'react'
import {DataReducer,     initialState } from '../reducer/DataReducer'

export const  DataContext = createContext()

export const DataContextProvider = ({children}) => {

    const allProducts = JSON.parse(localStorage.getItem("inventory"));

    const [state,dispatch] = useReducer(DataReducer, initialState)

    return (
        <DataContext.Provider value={{state,dispatch}}>{children}</DataContext.Provider>
      )
    }
    




 