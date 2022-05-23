import React from 'react';

const Modal = ({data, setData}) => {
    const handleOrder = event =>{
        event.preventDefault();
        const phone = event.target.phone.value;
        console.log(phone);
        setData();
    }
    return (
        <div>
            <input type="checkbox" id="order-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="order-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-lg font-bold">Product Name: {data.name}</h3>
                    <form onSubmit={handleOrder} className='py-4 grid grid-cols-1 gap-4 justify-items-center'>
                        <input type="text" name='name' className="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email'  className="input input-bordered w-full max-w-xs" />
                        <input type="number" name='phone' placeholder="Cell Phone" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value='submit' className="btn btn-secondary text-white w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;