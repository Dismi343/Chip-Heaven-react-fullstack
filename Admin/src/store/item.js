import {create} from 'zustand';

export const useItemStore = create((set)=>({
        items: [],
        setItems: (items)=>set({items}),
        createItem: async(newItem,file)=>{
            if(!newItem.itemid || !newItem.title || !newItem.price || !newItem.discription  || !newItem.subcategories){
                return{success:false, message:'please fill all the feilds'};
            }


            const formData = new FormData();
            formData.append('itemid', newItem.itemid);
            formData.append('title', newItem.title);
            formData.append('price', newItem.price);
            formData.append('discription', newItem.discription);
            formData.append('category', newItem.category);
            formData.append('stock', newItem.stock);
            formData.append('subcategories', newItem.subcategories);
            console.log(formData);
            console.log(newItem.title);
            
    
            // Ensure the file is included
            if (file) {
                formData.append('img', file);
            }
    
            // Send the data to the backend
           try { const res = await fetch("/api/items", {
                method: "POST",
                body: newItem, 
            });
    
            const data=await res.json();
            set((state)=>({items:[...state.items,data.data]}))
            
            return {success:true,message:'Product added successfully'};}
            catch (error) {
                console.error("Error creating item:", error);
                return {success:false,message:'Error creating item'};
            }
           },
           fetchItems: async()=>{
            const res=  await fetch("/api/items");
            const data= await res.json();
            set({items:data.data});
           },
           deleItem:async(itemid)=>{
            const res=await fetch(`/api/items/${itemid}`,{
                method:"DELETE",
            });
            const data=await res.json();
            if(!data.success){
                return {success:false,message:data.message};
            }
           set((state)=>({items: state.items.filter((item)=>item._id!==itemid)}));
            return {success:true,message:'Product deleted successfully'};
           },
           updateItem:async(itemid,updatedItem)=>{
            const res=  await fetch(`/api/items/${itemid}`,{
                method:"PUT",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(updatedItem)
            });
            const data= await res.json();
            
            if(!data.success){
                return {success:false,message:data.message};
            }
            set(state=>({
                items: state.items.map((stock) => stock._id=== itemid ? data.data : stock)
            }));
           }

}));