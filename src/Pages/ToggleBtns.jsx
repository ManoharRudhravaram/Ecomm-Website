import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { AiOutlineMinus } from 'react-icons/ai'

function ToggleBtns({ cartIncHandler, cartDecHandler,stock, cartCount }) {
    return (
        <>
            <button
                className="m-3"
                style={{ backgroundColor: "white", border: "none" }}
                onClick={cartDecHandler}
            >
                <AiOutlineMinus />
            </button>
            <span>{cartCount}</span>
            <button
                className="m-3"
                style={{ backgroundColor: "white", border: "none" }}
                onClick={cartIncHandler}
            >
                <AiOutlinePlus />
            </button>
            <br />
           
        </>
    )
}

export default ToggleBtns