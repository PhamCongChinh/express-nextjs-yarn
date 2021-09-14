import React from 'react'
import pool from '../utils/db'
const categories = ( {categories} ) => {
    return (
        <div>
            <h1>Categories</h1>
            {categories.map(item => (
                <div key={item.id}>{item.name}</div>
            ))}
        </div>
    )
}

export async function getStaticProps(context) {
    const res = await new Promise((resolve, reject) => 
        pool.query('SELECT * FROM categories', (err, results) => (err ? reject(err) : resolve(results)))
    )
    const categories = Object.values(JSON.parse(JSON.stringify(res)))
    return {
        props: { categories },
    }
}

export default categories
