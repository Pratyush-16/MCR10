import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext';
import { useNavigate } from 'react-router';

export default function Departments() {

    const{dispatch} = useContext(DataContext)
    const navigate = useNavigate();

  const navigateDepartmentHandler = (e)=> {
    dispatch({
        type: "FILTER_APPLY",
        payload: { type: "department", value: "e.target.textContent" }
      });
      navigate("/products");
  }

    return(
    
    <main className="flex items-center justify-center gap-8 px-8 py-10 ">
    <button  onClick={navigateDepartmentHandler} className="flex h-max flex-col items-center gap-2 rounded-lg bg-slate-100 p-5 ">
      <p className="text-2xl font-bold">Kitchen</p>
    </button>

    <button onClick={navigateDepartmentHandler} className="flex h-max flex-col  items-center gap-2 rounded-lg bg-slate-100 p-5 ">
      <p className="text-2xl font-bold">Clothing</p>
    </button>

    <button  onClick={navigateDepartmentHandler} className="flex h-max flex-col items-center gap-2 rounded-lg bg-slate-100 p-5">
      <p className="text-2xl font-bold ">Toys</p>
    </button>
  </main>
    )
  
}
