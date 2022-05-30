import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
  const { _id, name, price, img, description, quantity, minimum } = service;
  const navigate = useNavigate();
  const purchaseBtn = id => {
    navigate(`/purchase/${id}`);
    console.log(id);
  }
  return (
    <div class="card">
      <figure><img src={img} alt="Shoes" className='h-56 outline outline-gray-200 outline-1' /></figure>
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <p>{description}</p>
        <div>Price: ${price} <span className='ml-32'><button onClick={() => purchaseBtn(_id)}><i class="fa-solid fa-cart-arrow-down text-primary text-xl"></i></button></span> </div>
      </div>
    </div>
  );
};

export default Service;