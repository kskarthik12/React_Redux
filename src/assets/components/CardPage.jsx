import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseQuantity, decreaseQuantity } from '../redux/actions';

const CardPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const totalQuantity = products.reduce((total, product) => total + product.quantity, 0);
  const totalAmount = products.reduce((total, product) => total + product.quantity * product.price, 0);

  const handleIncrease = (itemId) => {
    dispatch(increaseQuantity(itemId));
  };

  const handleDecrease = (itemId) => {
    dispatch(decreaseQuantity(itemId));
  };

  return (
    <div className="card-page">
      {products.map((product) => (
        <div key={product.id} className="card">
         <div key={product.id} className="card">
          <img src={product.thumbnail} alt={product.title} />
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Discount: {product.discountPercentage}%</p>
          <p>Rating: {product.rating}</p>
          <p>Stock: {product.stock}</p>
          <p>Brand: {product.brand}</p>
          <p>Category: {product.category}</p>
          <p>Quantity: {product.quantity}</p>
          
        </div>
          <button onClick={() => handleIncrease(product.id)}>Increase Quantity</button>
          <button onClick={() => handleDecrease(product.id)}>Decrease Quantity</button>
        </div>
      ))}
      <div className="totals">
        <p>Total Quantity: {totalQuantity}</p>
        <p>Total Amount: ${totalAmount}</p>
      </div>
    </div>
  );
};

export default CardPage;
