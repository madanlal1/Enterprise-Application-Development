import React from 'react';
import { useParams,Link } from "react-router-dom";
import Products from './Products';

const Product = () => {

    const {id} = useParams();

    return (
        <>

            {Products.map(i => <li><Link to={`/product/${i.id}`}>Product-Detail: {i.id}</Link></li>)}

            {Products.filter(item => item.id == id).map(itm => <><h1>{itm.id}</h1><h1>{itm.name}</h1><h1>{itm.Price}</h1></>)}

        </>
    );
}
export default Product;