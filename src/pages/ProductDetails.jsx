import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { productService } from '../services/productService';
import { loadProducts } from '../store/actions/product.actions';

import {Header} from '../cmps/Header'
import {Subtotal} from '../cmps/Subtotal'

export function ProductDetails() {
    const [product, setProduct] = useState({})
    const { productId } = useParams()
    console.log(productId);

    const getProd = () => {
        setProduct('produc')
        console.log(product);

    }

    useEffect(() => {
        loadProduct()

    }, [])
    async function loadProduct() {
        const product = await productService.getById(productId)
        setProduct(product)
    }

    return (
            <>
            <Header/>
            {/* <Subtotal/> */}
        <section >
            {product &&
                <div className='flex'>

                    <div>
                        {product.isAmazonChoise && !product.isBestSeller &&
                            <span className='amazon-choise'>
                                <span className="">Amazon's </span>
                                <span className="">Choice</span>
                            </span>}
                        {product.isBestSeller && <span className="best-seller">Best Seller</span>}
                        {product.isAmazonChoise && !product.isBestSeller && <div className="amazon-choise">amazon-choise</div>}
                        <img className='preview-img' src={product.imgUrl} alt={`${product.category} prdut image`} />
                    </div>

                    <div className='flex column'>
                        <h1>product details</h1>
                        <p className="description "> {product.description}</p>
                        <div>
                            {Array(product.rate).fill().map((_, i) =>
                                <span className="material-symbols-outlined star">
                                    star
                                </span>
                            )}
                        </div>

                    </div>
                </div>

            }
        </section>
            </>

    )
}
