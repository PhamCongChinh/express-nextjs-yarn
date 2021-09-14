import React from 'react'

const categories = () => {
    return (
        <div>
            <h1>Categories</h1>
        </div>
    )
}

/*export async function getStaticProps(context) {
    const res = await new Promise((resolve, reject) => 
        pool.query('SELECT * FROM categories', (err, results) => (err ? reject(err) : resolve(results)))
    )
    const categories = Object.values(JSON.parse(JSON.stringify(res)))
    return {
        props: { categories },
    }
}*/

export default categories
