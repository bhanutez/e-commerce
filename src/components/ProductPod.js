import React from 'react';
import { Dropdown } from './Dropdown';

const ProductPod = ({productData}) => {
  const {
    id, 
    name,
    price, 
    currency, 
    imageUrl, 
    productsPerPerson
  } = productData;

	return (
    <div style={styles} className="product-pod" id={id}>
      <img src={imageUrl} alt="Image not found" />
      <h4 style={productNameStyles}>{name}</h4>
      <div style={currencyStyle}>
        <span>{currency}</span>
        <span style={priceStyle}>{price}</span>
      </div>
      <div className="add-to-cart">
        <Dropdown values={productsPerPerson} />
        <button style={buttonStyle}>Add to cart</button>
      </div>
    </div>
  );
}

const styles = {
  "text-align": "left",
  "margin-bottom": "50px"
}

const productNameStyles = {
  margin: "5px",
  "font-size": "20px"
}

const priceStyle = {
  "padding-left": "8px"
}

const currencyStyle = {
  "font-size": "50px",
  "font-family": "PT Sans"
};

const buttonStyle = {
  width: "150px",
  height: "25px",
  "font-weight": "bold"
};

export { ProductPod };