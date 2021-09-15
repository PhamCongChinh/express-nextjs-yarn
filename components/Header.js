import React from 'react'
import Image from 'next/image'
const Header = () => {
    return (
        <div id="header">
            <div className="bg-gray-200">
                <div className="max-w-6xl mx-auto flex justify-between">
                    <div>HQ Viet Nam</div>
                    <div>Gio hang</div>
                </div>
            </div>
            <div className="">
                <div className="max-w-6xl mx-auto grid grid-flow-row auto-rows-max justify-items-center md:grid-cols-5">
                    <div className="md:col-span-1">
                        <Image src="/images/vang-anh.jpeg" alt="logo" height={130} width={130} objectFit="cover" className="rounded-full"/>
                    </div>
                    <div className="md:col-span-3">Inputaaaaaaaas</div>
                    <div className="md:col-span-1">Gio hang</div>
                </div>
            </div>
            <div className="bg-blue-500 text-white">
                <div className="max-w-6xl mx-auto">
                    <div>HQ Viet Nam</div>
                    <div>Gio hang</div>
                </div>
            </div>
        </div>
    )
}

export default Header
