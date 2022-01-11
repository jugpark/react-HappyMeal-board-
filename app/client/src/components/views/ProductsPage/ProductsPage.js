import React from 'react'
import { Link } from 'react-router-dom'

const ProductsPage = () => {
    return (
        <section>
            <h1>Productions</h1>
            <ul>
            <h1><Link to='/products/p1'>Production1</Link></h1>
            <h1><Link to='/products/p2'>Production2</Link></h1>
            <h1><Link to='/products/p3'>Production3</Link></h1>
            </ul>
        </section>
    )
}

export default ProductsPage
