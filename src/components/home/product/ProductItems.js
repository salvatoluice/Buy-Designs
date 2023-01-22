import React, { useState } from "react"
import { FiShoppingBag, FiSearch } from "react-icons/fi"
import { AiOutlineHeart, AiOutlineClose } from "react-icons/ai"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { ADD } from "../../../controller/action"

export const ProductItems = ({ cartItems }) => {
  const dispatch = useDispatch()
  const addToCart = (e) => {
    // console.log(e)
    // ADD(e) => single items lai add garko
    dispatch(ADD(e))
  }

  const [openImage, setOpenImage] = useState(false)
  const [img, setImg] = useState("")
  const onOpenImage = (src) => {
    setImg(src)
    setOpenImage(true)
  }

  return (
    <>
      <div className='product_items' style={{
        // width: 'auto',
        // height: '350px',
      }}>
        {cartItems.map((items) => (
          <div className='box' key={items.id}>
            <div className='img'>
              <img src={items.cover} alt='' style={{
                width: '350px',
                height: '450px'
              }}/>
              <div className='overlay'>
                <button className='button'style={{
                  width: '120px',
                  borderRadius: '8px'
                }} onClick={() => addToCart(items)}>
                  {/* <FiShoppingBag /> */}
                  Add to Cart
                </button>
                <button className='button'>
                  <AiOutlineHeart />
                </button>
                <button className='button' onClick={() => onOpenImage(items.cover)}>
                  <FiSearch />
                </button>
              </div>
            </div>
            <div className='details'>
              <h3>{items.title}</h3>
              <p>{items.author}</p>
              <h4>${items.price}</h4>
            </div>
          </div>
        ))}
      </div>

      <div className={openImage ? "modelOpen" : "modelClose"}>
        <div className='onClickImage'>
          <img src={img} alt=''style={{
            width: '100px',
            height: '100px',
          }} />
          <button className='button' onClick={() => setOpenImage(false)}>
            <AiOutlineClose />
          </button>
        </div>
      </div>
    </>
  )
}
