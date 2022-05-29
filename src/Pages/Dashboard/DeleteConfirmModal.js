import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({deleteItem, refetch, setDeleteItem}) => {
    const {name, img, _id} = deleteItem;
    const deleteProduct = id => {
        const url = `http://localhost:5000/service/${id}`;
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
            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-error">Are you sure want to delete this item?</h3>
                    <p class="py-4">
                        <img src={img} alt="" className='w-56' />
                        <h3>Product: {name}</h3>
                    </p>
                    <div class="modal-action">
                    <button onClick={() => deleteProduct(_id)} class="btn btn-xs btn-error">Delete</button>
                        <label for="delete-confirm-modal" class="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteConfirmModal;