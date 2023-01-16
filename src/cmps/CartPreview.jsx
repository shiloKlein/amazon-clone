import React from 'react'


export function CartPreview(props) {
    const { product } = props

    return (
        <section className={`${props.payment?'payment ':''}cart-preview flex column`}>
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
            {props.addToCart && <button className='add-to-cart-btn' onClick={() => props.addToCart(product)}>Add to cart</button>}
            {/* if checkout page */}
            {props.removeFromCart && <button className='remove-from-cart-btn' onClick={() => props.removeFromCart(product.id)}>Remove from cart</button>}

        </section>
    )
}
