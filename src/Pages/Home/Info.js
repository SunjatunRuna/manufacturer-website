import React from 'react';

const Info = () => {
    return (
        <div class="hero h-96" style={{ backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROsdnV42Melv_yu6jF3lielVG5FgNKlkGDug&usqp=CAU)" }}>
            <div class="hero-overlay"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-xl">
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-24'>
                        <div>
                            <div class="avatar placeholder">
                                <div class="outline outline-secondary text-secondary rounded-full rounded-full w-24">
                                    <span class="text-5xl"><i class="fa-solid fa-truck-fast"></i></span>
                                </div>
                            </div>
                            <h4 className='text-xl my-4 text-secondary'>Free Shipping</h4>
                        </div>
                        <div>
                            <div class="avatar placeholder">
                                <div class="outline outline-secondary text-secondary rounded-full rounded-full w-24">
                                    <span class="text-5xl"><i class="fa-solid fa-plane"></i></span>
                                </div>
                            </div>
                            <h4 className='text-xl my-4 text-secondary'>Fast Delivery</h4>
                        </div>
                        <div>
                            <div class="avatar placeholder">
                                <div class="outline outline-secondary text-secondary rounded-full w-24">
                                    <span class="text-5xl"><i class="fa-solid fa-thumbs-up"></i></span>
                                </div>
                            </div>
                            <h4 className='text-xl my-4 text-secondary'>Big Choice</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;