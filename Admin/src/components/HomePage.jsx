import Avatar from '@mui/material/Avatar';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import  { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import ddr4 from '../assets/DDR3 4gb.jpeg';
import { useItemStore } from '../store/item';
//import { set } from 'mongoose';


const HomePage=()=>{

  

    const [products, setProducts] = useState([
        { id: 1, name: 'Gaming Laptop', image:{ddr4},category: 'Laptops', price: 1299.99, stock: 15 },
        { id: 2, name: 'Mechanical Keyboard', category: 'Peripherals', price: 129.99, stock: 30 }
      ]);
    
      const [formData, setFormData] = useState({
        itemid: '',
        title: '',
        img:'',
        discription:'',
        category: '',
        price: '',
        stock: '',
        subcategories: []
      });


      const {fetchItems,items,createItem} = useItemStore();

    useEffect(() => {
          fetchItems();
    },[fetchItems]);
    console.log('Items',items);
      
      const handleSubmit = async(e) => {
      e.preventDefault();
      const { success, message } = await createItem(formData);
      console.log("Success",success);
      console.log("Message",message);
      };

      const deleteProduct = (id) => {
        setProducts(prev => prev.filter(product => product.id !== id));
      
      };

      // const calculateTotalValue = () => {
      //   return products.reduce((sum, product) => sum + (product.price * product.stock), 0);
      // };

    return(
        <>
        <nav className="top-0 fixed left-0 w-full border-b border-gray-300 bg-white z-10 flex justify-end">
          <div className="w-40 h-20 mx-auto ">
                  <img src={logo} alt="logo"  />
          </div>
            <ul >
              <li className="inline-block p-2 m-4">
                <button className="cursor-pointer">
                    <Avatar>C</Avatar>
                </button>
              </li>
            </ul>
        </nav>

      
        <div className="max-w-7xl mx-auto mt-64">
          <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">ID</th>
                    <th className="text-left p-2">Name</th>
                    <th className="text-left p-2">Image</th>
                    <th className="text-left p-2">Category</th>
                    <th className="text-right p-2">Price</th>
                    <th className="text-right p-2">Stock</th>
                    <th className="text-right p-2">Total Value</th>
                    <th className="text-center p-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                {products.map(product => (
                    <tr key={product.id} className="border-b hover:bg-gray-50 ">
                      <td className="p-2">{product.id}</td>
                      <td className="p-2">{product.name}</td>
                      <td className="p-2"><img src={product.image} alt={product.name}/></td>
                      <td className="p-2">{product.category}</td>
                      <td className="p-2 text-right">
                        ${product.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                      </td>
                      <td className="p-2 text-right">{product.stock}</td>
                      <td className="p-2 text-right">
                        ${(product.price * product.stock).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                      </td>
                      <td className="p-2 text-center">
                        <button
                          onClick={() => deleteProduct(product.id)}
                          className="text-red-600 hover:text-red-800 "
                        >
                            <RemoveCircleOutlineIcon />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                    </table>
          </div>
        </div>
        <div className='max-w-4xl mx-auto mt-40 mb-40 '>
              <form  className="grid  grid-flow-col grid-rows-9 gap-4">
              <div>
                      <label className="block text-sm font-medium mb-1">Product Id</label>
                      <input
                        type="number"
                        name="id"
                        value={formData.itemid}
                        onChange={(e)=>setFormData({...formData,itemid:e.target.value})}
                        className="w-full p-2 border rounded"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Product Name</label>
                      <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={(e)=>setFormData({...formData,title:e.target.value})}
                        className="w-full p-2 border rounded"
                        required
                      />
                    </div>
                    {/* =============image ===========*/}
                    <div>
                      <label className="block text-sm font-medium mb-1">Product Image</label>
                      <input
                        type="text"
                        name="img"
                        value={formData.img}
                        onChange={(e)=>setFormData({...formData,img:e.target.value})}
                        className="w-full p-2 border rounded"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">Category</label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={(e)=>setFormData({...formData,category:e.target.value})}
                        className="w-full p-2 border rounded"
                        required
                      >
                       <option value="" disabled selected hidden >Select a Category </option>
                        <option value="DDR4 RAM">DDR4 RAM</option>
                        <option value="DDR3 RAM">DDR3 RAM</option>
                        <option value="Processor 3rd gen">Processor 3rd gen</option>
                        <option value="Processor 4th gen">Processor 4th gen</option>
                        <option value="3rd gen i3">3rd gen i3 </option>
                        <option value="4th gen i3">4th gen i3 </option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Price (Rs)</label>
                      <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={(e)=>setFormData({...formData,price:e.target.value})}
                        step="0.01"
                        min="0"
                        className="w-full p-2 border rounded"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">discription</label>
                      <input
                        type="text"
                        name="discription"
                        value={formData.discription}
                        onChange={(e)=>setFormData({...formData,discription:e.target.value})}
                        className="w-full p-2 border rounded"
                        required
                      />
                    </div>
                    
                    <div >

                        <label className="block text-sm font-medium mb-1">Subcategories</label>
                        <div className='flex flex-row gap-4 justify-evenly '>  
                          <label >
                            <input type="checkbox" name="Ram" value="4gb" onChange={(e)=>setFormData({...formData,subcategories:e.target.value})}  />
                            4GB
                          </label>
                          <label >
                            <input type="checkbox" name="Ram" value="8gb" onChange={(e)=>setFormData({...formData,subcategories:e.target.value})} />
                            8GB
                          </label>
                          <label >
                            <input type="checkbox" name="Ram" value="i3" onChange={(e)=>setFormData({...formData,subcategories:e.target.value})}/>
                            i3
                          </label>
                          <label >
                            <input type="checkbox" name="Ram" value="i4" onChange={(e)=>setFormData({...formData,subcategories:e.target.value})}/>
                            i4
                          </label>
                        </div>
                       
                        
                     
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Stock</label>
                      <input
                        type="number"
                        name="stock"
                        value={formData.stock}
                        onChange={(e)=>setFormData({...formData,stock:e.target.value})}
                        min="0"
                        className="w-full p-2 border rounded"
                        required
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className="block bg-gray-800 text-white rounded hover:bg-gray-900 "
                      onClick={handleSubmit}
                    >Add Product
                    </button>
                  </form>

        </div>
       
        </>
    );
}

export default HomePage;
