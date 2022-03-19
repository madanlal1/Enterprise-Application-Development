import React from 'react';
import { useParams } from "react-router-dom";

const Product = () => {

    const {id} = useParams();
    const list =  [1,2,3,4,5];

    return (
        <>
            {/* list.forEach(itm => {<h1>Product Detail+{itm}</h1>})  */}
        </>
    );
}
export default Product;