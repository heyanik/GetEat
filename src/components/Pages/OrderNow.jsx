import React from 'react'
import './OrderNow.css'
function OrderNow() {
    return (
        <>
            <div className="order-container">
                <a className='fooddelivery' href='https://www.foodpanda.com.bd/restaurant/bnrw/get-eat' target="_blank">
                    <img src="foodpanda.png" alt="foodpanda" />
                </a>
                <a className="fooddelivery" href='https://pathao.com/food/' target="_blank">
                    <img src="pathaofood.png" alt="pathaofood" />
                </a>
            </div>

        </>
    )
}

export default OrderNow