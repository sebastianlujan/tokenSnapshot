import Link from 'next/link'
import Image from 'next/image'
import medium from '../public/svg/medium.svg'
import discord from '../public/svg/discord.svg'
import hamburgerMenu from '../public/svg/hamburger.svg'
import { useState } from 'react'


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleMenuClick = () => {
        setIsOpen(prevState => !prevState);
    }
    
    
  return (
    <div className="fixed z-10 flex justify-between w-full h-auto py-2 bg-black lg:px-28 sm:px-14">
        <div className="">
            <Link href='#'><a className=''><h2 className="text-4xl text-white font-anton-regular">ETHEREANS</h2></a></Link>
        </div>
        <div className="flex pt-2 ">
            <div className='hidden px-20 text-gray-500 font-source-code-pro font-extralight-700 lg:block'>
                <Link href='#'><a className='m-2 text-hover'>Collection</a></Link>
                <Link href='#'><a className='m-2 text-hover'>EIFS</a></Link>
                <Link href='#'><a className='m-2 text-hover'>Metaverse</a></Link>
                <Link href='#'><a className='m-2 text-hover'>Merch</a></Link>
                <Link href='#'><a className='m-2 text-gray-800 cursor-default pointer-events-none text-hover'>Marketplace</a></Link>
                <Link href='#'><a className='m-2 text-hover anime'>Follow us</a></Link>
            </div>
            <div className="mr-5 cursor-pointer hamburger-icon lg:hidden" onClick={handleMenuClick}>
                    <a className="" ><Image src={hamburgerMenu}></Image></a>

                <div className={`pt-2 bg-black w-screen h-auto ${isOpen ? 'block' : 'hidden'}`}>
                    <div className='grid justify-start text-gray-500 font-source-code-pro font-extralight-700'>
                        <Link href='#'><a className='m-2 text-hover'>Collection</a></Link>
                        <Link href='#'><a className='m-2 text-hover'>EIFS</a></Link>
                        <Link href='#'><a className='m-2 text-hover'>Metaverse</a></Link>
                        <Link href='#'><a className='m-2 text-hover'>Merch</a></Link>
                        <Link href='#'><a className='m-2 text-gray-800 cursor-default pointer-events-none text-hover'>Marketplace</a></Link>
                        <Link href='#'><a className='m-2 text-hover anime'>Follow us</a></Link>
                    </div>
                    <div className='md:grid-cols-2 md:grid sm:hidden '>
                        <Link href="https://medium.com/the-etherean-empire-post"><a  className='mx-2 dis-hov' target="_blank">
                        <Image src={medium} ></Image></a></Link>

                        <Link href="https://t.co/h72btgtYJd"><a  className='mx-2 dis-hov' target="_blank">
                        <Image src={discord} ></Image></a></Link>
                    </div>
                </div>
            </div>
            <div className='hidden md:block'>
                <Link href="https://medium.com/the-etherean-empire-post"><a  className='mx-2 dis-hov' target="_blank">
                <Image src={medium} ></Image></a></Link>
                
                <Link href="https://t.co/h72btgtYJd"><a  className='mx-2 dis-hov' target="_blank">
                <Image src={discord} ></Image></a></Link>
            </div>

        </div>

    </div>
  )
}


export default Navbar
