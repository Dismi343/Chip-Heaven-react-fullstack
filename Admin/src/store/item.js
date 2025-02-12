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
           }
}))