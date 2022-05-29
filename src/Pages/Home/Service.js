import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { _id, name, price, img, description, quantity, minimum } = service;
    const navigate = useNavigate();
    const purchaseBtn = id =>{
        navigate(`/purchase/${id}`);
        console.log(id);
    }
    return (
        <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl object-cover h-36 w-96" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-primary">{name}</h2>
          <small className='text-yellow-600'>Quantity: {quantity}</small>
          <small>Minimum Order: {minimum}</small>
          <p>Price: {price}TK</p>
          <div className="card-actions w-full">
            <button onClick={() => purchaseBtn(_id)} className="btn btn-primary w-full">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default Service;