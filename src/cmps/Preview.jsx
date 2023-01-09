import React from 'react'


export function Preview(props) {
    const { product } = props

    return (
        <section className='product-preview'>
            {product.isAmazonChoise && !product.isBestSeller &&
                <span className='amazon-choise'>
                    <span class="">Amazon's </span>
                    <span class="">Choice</span>
                </span>}

            {product.isBestSeller && <span class="best-seller">Best Seller</span>}
            {product.isAmazonChoise && !product.isBestSeller && <div className="amazon-choise"></div>}
            <img className='preview-img' src={product.imgUrl} alt={`${product.category} prdut image`} />
            <p className="description"> {product.description}</p>
            {Array(product.rate).fill().map((_, i) =>
                <span class="material-symbols-outlined star">
                    star
                </span>
            )}
            {/* <img className='stars' src={stars()} alt="" /> */}
            {product.price && <p><span>price:</span> {`$ ${product.price}`}</p>}

        </section>
    )
}
