export interface Product{
    id:number,
    title:string,
    price:number,
    discription: string,
    category:string,
    img:string,
    subcategories?:string[]
}