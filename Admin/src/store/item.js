import {create} from 'zustand';

export const useItemStore = create((set)=>({
        items: [],
        setItems: (items)=>set({items}),
        createItem: async(newItem)=>{
            if(!newItem.itemid || !newItem.title || !newItem.price || !newItem.discription || !newItem.img || !newItem.subcategories){
                return{success:false, message:'please fill all the feilds'};
            }
            const res= await fetch("/api/items",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(newItem)
            })
            const data=await res.json();
            set((state)=>({items:[...state.items,data.data]}))
            
            return {success:true,message:'Product added successfully'};
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