import React from 'react'
import Sidebar from './Sidebar'
const Layout = ({ children }) => {
    return (
        <div style={{display:'flex'}}>
            <div style={{width:'20%'}}><Sidebar/></div>
            <div style={{width:'80%'}}><main>{children}</main></div>
        </div>
    )
}

export default Layout
