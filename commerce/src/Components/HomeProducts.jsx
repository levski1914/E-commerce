import React, { useEffect, useState } from 'react'
import { collection,getDocs } from 'firebase/firestore'
import { db } from '../../firebase'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './HomeProducts.css'

const HomeProducts = ({limit=8}) => {
    const [products,setProducts]=useState([]);

    useEffect(()=>{
        const fetchProducts=async()=>{
            const productsCollection=collection(db,"products");
            const productSnapshot=await getDocs(productsCollection);
            const productList=productSnapshot.docs.map(doc=>doc.data());
            setProducts(productList);
        }
        fetchProducts();

    },[])

    const diplayedBooks=limit?products.slice(0,limit):products;

  return (
    <div>
        <div className="homeHeader">
            <div className="search">
                <input type="text" />
            </div>
            <ul>
                <li>
                <FontAwesomeIcon icon="fa-solid fa-bell" />

                </li>
                <li>
                <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
                    
                </li>
            </ul>
        </div>
        <div className="banner">

        </div>
      <div className="filter-buttons">
        <button className="active">Top</button>
        <button>Popular</button>
        <button>New</button>
        <button>Filter</button>
      </div>
      <div className='products'>
        {
            diplayedBooks.map((product)=>(
                
                  <div className='product-card' key={product.id}>
                    <img src={product.image} alt={product.title} />
                    <h2>{product.title}</h2>
                    <p>{product.Description}</p>
                    <p className="price">Price: {product.price} $</p>
                    <button className="add-to-cart-btn">Add to Cart</button>
                  </div>
      
    ))
}
</div>
    </div>
  )
}

export default HomeProducts