import React from 'react'
const products = () => {
    return (
        <div>
            <h1>Products</h1>
        </div>
    )
}
/*export async function getStaticProps(context) {
    const res = await new Promise((resolve, reject) => 
        pool.query('SELECT * FROM products', (err, results) => (err ? reject(err) : resolve(results)))
    )
    const products = Object.values(JSON.parse(JSON.stringify(res)))
    return {
        props: { products },
    }
}*/
export default products
