import React from 'react'
import Link from 'next/link'
const Sidebar = () => {
    return (
        <div>
            <h1>Sidebar</h1>
            <ul>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/categories">
                        <a>Categories</a>
                    </Link>
                </li>
                <li>
                    <Link href="/products">
                        <a>Products</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
