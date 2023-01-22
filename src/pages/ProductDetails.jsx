import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { productService } from '../services/productService';
import { useDispatch, useSelector } from 'react-redux'
import { loadProducts, addToCart } from '../store/actions/product.actions';


import { Header } from '../cmps/Header'
import { Subtotal } from '../cmps/Subtotal'
import { prettyDOM } from '@testing-library/react';

export function ProductDetails() {
    const dispatch = useDispatch()
    const Navigate = useNavigate()
    const [product, setProduct] = useState({})
    const { productId } = useParams()
    console.log(productId);

    // const getProd = () => {
    //     setProduct('produc')
    //     console.log(product);
    // }
    const onAddToCart = () => {
        console.log(product.imgUrl);
        dispatch(addToCart(product))
    }
    const onBuyNow = (product) => {
        // onAddToCart(product)
        dispatch(addToCart(product))

        Navigate('/payment')
    }

    useEffect(() => {
        loadProduct()

    }, [])
    async function loadProduct() {
        const product = await productService.getById(productId)
        setProduct(product)
    }

    function deliverytime() {
        const today = new Date();
        const firstOptDate = new Date(today.getTime() + 6 * 24 * 60 * 60 * 1000);
        const secondOptDate = new Date(today.getTime() + 11 * 24 * 60 * 60 * 1000);
        const firstOptDateMonth = `${firstOptDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`
        const secondOptDateMonth = `${secondOptDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`

        return firstOptDate.getMonth() === secondOptDate.getMonth() ?
            `${firstOptDateMonth} - ${secondOptDate.getDate()}` :
            `${firstOptDateMonth} - ${secondOptDateMonth}`
    }

    return (
        <>
            <Header />
            {/* <Subtotal/> */}
            <section className='product-details'>
                <h1>product details</h1>
                {product &&
                    <div className='product-details-container flex'>

                        {/* <div>
                        {product.isAmazonChoise && !product.isBestSeller &&
                            <span className='amazon-choise'>
                                <span className="">Amazon's </span>
                                <span className="">Choice</span>
                            </span>}
                        {product.isBestSeller && <span className="best-seller">Best Seller</span>}
                        {product.isAmazonChoise && !product.isBestSeller && <div className="amazon-choise">amazon-choise</div>}
                    </div> */}
                        <img className='preview-img' src={product.imgUrl} alt={`${product.category} prdut image`} />

                        <div className='descreption-col flex column'>
                            <div>
                                <p className="description "> {product.description}</p>
                                <a className='visit-link' href='#'>visit the store</a>
                                <div>
                                    {Array(product.rate).fill().map((_, i) =>
                                        <span className="material-symbols-outlined star">
                                            star
                                        </span>
                                    )}
                                </div>
                                <div>
                                    {product.isAmazonChoise && !product.isBestSeller &&
                                        <span className='amazon-choise'>
                                            <span className="">Amazon's </span>
                                            <span className="">Choice</span>
                                        </span>}
                                    {product.isBestSeller &&
                                        <span className="best-seller">Best Seller
                                            <span className='bestseller-category'>in {product.category} category</span>
                                        </span>}
                                    {/* {product.isAmazonChoise && !product.isBestSeller &&
                                    <div className="amazon-choise">amazon-choise</div>} */}
                                </div>
                            </div>

                            <div>
                                <p className='price'>${product.price}</p>
                                <p>No Import Fees Deposit & FREE Shipping to Israel
                                    Available at a lower price from other sellers that may not offer free Prime shipping.</p>
                            </div>
                        </div>

                        <div className='add' >
                            <p className='price'>${product.price}</p>
                            <p>No Import Fees Deposit & FREE Shipping to Israel
                                Available at a lower price from other sellers that may not offer free Prime shipping.</p>
                            <p>FREE delivery {deliverytime()} to Israel</p>
                            <div className='btns-container flex column'>
                                {/* {<pre>{JSON.stringify(product)}</pre>} */}
                                <button onClick={() => onAddToCart()}>Add to cart</button>
                                <button onClick={() => onBuyNow()}>Buy now</button>

                            </div>
                        </div>
                    </div>

                }
            </section>
        </>

    )
}
