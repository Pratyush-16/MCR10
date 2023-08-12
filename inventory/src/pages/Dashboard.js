import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'

export default function Dashboard() {

    const {state : {inventoryData}} = useContext(DataContext)
    console.log(inventoryData)

    const { TotalStock, ItemDelivered, lowStockItem } = inventoryData.reduce(
        (acc, curr) => {
          return {
            ...acc,
            TotalStock: acc.TotalStock + curr.stock,
            ItemDelivered: acc.ItemDelivered + curr.delivered,
            lowStockItem: curr.stock >= 10 ? acc.lowStockItem + 1 : acc.lowStockItem
          };
        },
        {
          TotalStock: 0,
          ItemDelivered: 0,
          lowStockItem: 0
        }
      );




  return (
    <main className="flex items-center justify-center gap-6 px-8 py-12">
      <div className="flex h-max flex-col items-center gap-2 rounded-lg bg-slate-200 p-4">
        <p className="text-2xl font-bold text-green-600">
          {TotalStock}
        </p>
        <p className="font-bold">Total Stock</p>
      </div>

      <div className="flex h-max flex-col items-center gap-2 rounded-lg bg-slate-200 p-4">
        <p className="text-2xl font-bold text-orange-400">
          {ItemDelivered}
        </p>
        <p className="font-bold">Total Delivered</p>
      </div>

      <div className="flex h-max flex-col items-center gap-2 rounded-lg bg-slate-200 p-4">
        <p className="text-2xl font-bold text-red-600">
          {lowStockItem}
        </p>
        <p className="font-bold">Low Stock Items</p>
      </div>
    </main>
  )
}
