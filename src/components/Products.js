import React, { useState, useEffect } from 'react';
import { ProductPod } from './ProductPod';

const Products = () => {
	const [hasError, setErrors] = useState(false);
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch("http://localhost:8080/products")
      .then(res => res.json())
      .then(res => setProducts(res))
      .catch(() => setErrors(true))
	}, []);

	return !hasError && (<div style={productsListStyle} className="products-list">
			{products.map(product => {
				return product.isAvailable && <ProductPod productData={product} />;
			})}
	</div>)
}

const productsListStyle = {
	display: "grid",
	"max-width": "1400px",
	margin: "0 500px"
}

export { Products };