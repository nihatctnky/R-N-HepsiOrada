
import { ImageSourcePropType } from "react-native"
import { Category } from "./categoriesState"


interface Product {
    id:number,
    title:string,
    slug:string,
    price:number,
    description:string,
    category:Category,
    creationAt:string,
    updatedAt:string,
    images:ImageSourcePropType[],
    count:number,
    isFavorite:boolean
    

}

interface ProductState {
    products:Product[],
    pending:boolean,
    productsFilterCategory:Product[],
    productDetailData?:Product | object
    pendingDetail:boolean

}

export type {ProductState,Product}