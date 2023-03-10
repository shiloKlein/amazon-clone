import React from 'react'
import { useNavigate } from 'react-router-dom'



export function Preview(props) {
    const navigate = useNavigate()

    const { product } = props

    return (
        
        <section className='product-preview flex column space-between' onClick={()=>navigate(`/product/${product.id}`)}>
            {product.isAmazonChoise && !product.isBestSeller &&
                <span className='amazon-choise'>
                    <span className="">Amazon's </span>
                    <span className="">Choice</span>
                </span>}

            {product.isBestSeller && <span className="best-seller">Best Seller</span>}
            {product.isAmazonChoise && !product.isBestSeller && <div className="amazon-choise"></div>}
            <img className='preview-img' src={product.imgUrl} alt={`${product.category} prdut image`} />
            <p className="description"> {product.description}</p>
            <div>
                {Array(product.rate).fill().map((_, i) =>
                    <span className="material-symbols-outlined star">
                        star
                    </span>
                )}
            </div>
            {/* <img className='stars' src={stars()} alt="" /> */}
            {product.price && <p><span>price:</span> {`$${product.price}`}</p>}
            {/* if homepage */}
            {props.addToCart && <button className='add-to-cart-btn' onClick={(ev) => props.addToCart(ev,product)}>Add to cart</button>}
            {/* if checkout page */}
            {props.removeFromCart && <button className='remove-from-cart-btn' onClick={() => props.removeFromCart(product.id)}>Remove from cart</button>}

        </section>
    )
}
