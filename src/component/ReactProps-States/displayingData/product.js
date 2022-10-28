import React, {useState} from "react";
import DisplayProduct from "./displayProduct";
const Product = ()=>{
    const productJson = [
        { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
        { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
        { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
        { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
        { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
        { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
    ]
    const [products, setProducts] = useState(productJson)
    return (
        <>
            {products.map(product =>
                product.stocked  &&
                    <DisplayProduct productName={product.name} productPrice={product.price}/>
            )}
        </>
    )
}
export default Product;