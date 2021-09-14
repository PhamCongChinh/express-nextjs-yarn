import React from 'react'
import Sidebar from './Sidebar'
const Layout = ({ children }) => {
    return (
        <div style={{display:'flex'}}>
            <div style={{width:'25%'}}><Sidebar/></div>
            <div style={{width:'75%'}}><main>{children}</main></div>
        </div>
    )
}

export default Layout
