import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
const Layout = ({ children }) => {
    return (
        <>
            <Header/>
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-flow-row md:grid-cols-5">
                    <div className="md:col-span-1">
                        <Sidebar/>
                    </div>
                    <div className="md:col-span-3">
                        <main>{children}</main>
                    </div>
                    <div className="md:col-span-1"></div>
                </div>
            </div>
        </>
    )
}

export default Layout
