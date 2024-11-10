import React from 'react'
import Product from './Common/Product'
import SortComp from './SortComp'
import FilterComp from './FilterComp'
import { useFilter } from '../Context/FilterContext'

function ProductList() {
    let { sorted } = useFilter();
    return (
        <div className="container mt-1">
            <div className="row -flex justify-content-evenly">
                <div className="col-md-4">
                    <FilterComp />
                </div>
                <div className="col-md-8">
                    <div className="row">
                        <div className="col">
                            <SortComp />
                        </div>
                        <div className="row">
                            {
                                sorted.length > 0 && sorted.map((item, i) => {
                                    return <Product item={item} key={i}/>
                                })
                            }
                            <div className="col d-flex justify-content-evenly align-items-center">

                                {
                                    sorted.length === 0 && <h1>No Products</h1>
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProductList