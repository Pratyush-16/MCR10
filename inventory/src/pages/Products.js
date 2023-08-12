import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'

export default function Products() {
    const {state: {inventoryData}} = useContext(DataContext)
    console.log(inventoryData)
    
    return (
        <main className="px-4 py-8">
          <div className="mr-2 flex items-center justify-between p-2">
            <h2 className="text-3xl font-bold">Products</h2>
    
            <select
              name="department"
              id="department"
              className="rounded border-2 border-gray-700 px-[5px]"
            >
              <option value="All">All Departments</option>
              <option value="Kitchen">Kitchen</option>
              <option value="Clothing">Clothing</option>
              <option value="Toys">Toys</option>
            </select>
    
            <div className="flex items-center gap-2">
              <input type="checkbox" name="stock" id="low-stock" />
              <label htmlFor="low-stock" className="text-lg">
                Low Stock Item
              </label>
            </div>
    
            <select
              name="sort"
              id="sort"
              className="rounded border-2 border-gray-700 px-[5px]"
            >
              <option value="name">Name</option>
              <option value="price">Price</option>
              <option value="stock">Stock</option>
            </select>
    
            
          </div>
    
          <div>
            <table className="min-w-full">
              <thead>
                <tr className="border-b bg-gray-300">
                  <th className="px-4 py-2 text-center">Image</th>
                  <th className="px-4 py-2 text-center">Name</th>
                  <th className="px-4 py-2 text-center">Description</th>
                  <th className="px-4 py-2 text-center">Price</th>
                  <th className="px-4 py-2 text-center">Stock</th>
                  <th className="px-4 py-2 text-center">Supplier</th>
                </tr>
              </thead>
              <tbody>
                {inventoryData.map((item) => (
                  <tr key={item.id} className="border-b text-center">
                    <td className="px-4 py-2">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="h-16"
                      />
                    </td>
                    <td className="px-4 py-2">{item.name}</td>
                    <td className="px-4 py-2">{item.description}</td>
                    <td className="px-4 py-2">${item.price}</td>
                    <td className="px-4 py-2">{item.stock}</td>
                    <td className="px-4 py-2">{item.supplier}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      );
    }
    
