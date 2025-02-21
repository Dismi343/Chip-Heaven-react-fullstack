export interface Item{
    //_id: Key | null | undefined;
    itemid:number,
    title:string,
    price:number,
    discription: string,
    category:string,
    img:string,
    subcategories?:string[]
}