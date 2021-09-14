import React from 'react'
import pool from '../utils/db'
const products = ({ products }) => {
    return (
        <div>
            <h1>Products</h1>
            {products.map(item => (
                <div key={item.id}>{item.name}</div>
            ))}
        </div>
    )
}
export async function getStaticProps(context) {
    const res = await new Promise((resolve, reject) => 
        pool.query('SELECT * FROM products', (err, results) => (err ? reject(err) : resolve(results)))
    )
    const products = Object.values(JSON.parse(JSON.stringify(res)))
    return {
        props: { products },
    }
}
export default products
