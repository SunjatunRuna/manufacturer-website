import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({deleteItem, refetch, setDeleteItem}) => {
    const {name, img, _id} = deleteItem;
    const deleteProduct = id => {
        const url = `https://evening-oasis-35651.herokuapp.com/service/${id}`;
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    toast.success('Delete Successfully');
                    setDeleteItem(null);
                    refetch();
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-error">Are you sure want to delete this item?</h3>
                    <p className="py-4">
                        <img src={img} alt="" className='w-56' />
                        <h3>Product: {name}</h3>
                    </p>
                    <div className="modal-action">
                    <button onClick={() => deleteProduct(_id)} className="btn btn-xs btn-error">Delete</button>
                        <label htmlFor="delete-confirm-modal" className="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteConfirmModal;