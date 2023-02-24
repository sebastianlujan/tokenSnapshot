import Image from "next/image"
import hamburgerMenu from "../public/svg/hamburger.svg"
import discord from "../public/svg/discord.svg"
import medium from "../public/svg/medium.svg"
import Link from "next/link"
import { useState } from "react"


const Hamburger = () => {

    const [isOpen, setIsOpen] = useState(false);
    const handleMenuClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="hamburger-menu">
            <div className="hamburger-icon">
                <Link href="">
                    <a className="" onClick={handleMenuClick}><Image src={hamburgerMenu}></Image></a>
                </Link>
            </div>
            <div className={`grid pt-2 bg-black w-screen h-auto ${isOpen ? 'block' : ''}`}>
                <div className='grid justify-start px-20 text-gray-500 font-source-code-pro font-extralight-700'>
                    <Link href='#'><a className='m-2 text-hover'>Collection</a></Link>
                    <Link href='#'><a className='m-2 text-hover'>EIFS</a></Link>
                    <Link href='#'><a className='m-2 text-hover'>Metaverse</a></Link>
                    <Link href='#'><a className='m-2 text-hover'>Merch</a></Link>
                    <Link href='#'><a className='m-2 text-gray-800 cursor-default pointer-events-none text-hover'>Marketplace</a></Link>
                    <Link href='#'><a className='m-2 text-hover anime'>Follow us</a></Link>
                </div>
                <div className='flex justify-between'>
                    <Link href="https://medium.com/the-etherean-empire-post"><a  className='mx-2 dis-hov' target="_blank">
                    <Image src={medium} ></Image></a></Link>
                    
                    <Link href="https://t.co/h72btgtYJd"><a  className='mx-2 dis-hov' target="_blank">
                    <Image src={discord} ></Image></a></Link>
                </div>
            </div>
        </div>
    )
}

export default Hamburger