export interface Item{
    
    _id:string;
    itemid:number,
    title:string,
    price:number,
    discription: string,
    category:string,
    img:string,
    subcategories?:string[]
}

