import Link from 'next/link'
import Image from 'next/image'
import medium from '../public/svg/medium.svg'
import discord from '../public/svg/discord.svg'


const Navbar = () => {
  return (
    <div className="w-full h-auto flex bg-black fixed z-10 justify-between px-28 py-2">
        <div className="">
            <Link href=''><a className=''><h2 className="text-white font-anton-regular text-4xl">ETHEREANS</h2></a></Link>
        </div>
        <div className="flex">
            <div className='text-gray-500 px-20'>
                <Link href='#'><a className='hover:text-cyan-400 m-2'>Collection</a></Link>
                <Link href='#'><a className='hover:text-cyan-400 m-2'>EIFS</a></Link>
                <Link href='#'><a className='hover:text-cyan-400 m-2'>Metaverse</a></Link>
                <Link href='#'><a className='hover:text-cyan-400 m-2'>Merch</a></Link>
                <Link href='#'><a className='hover:text-cyan-400 m-2'>Marketplace</a></Link>
                <Link href='#'><a className='hover:text-cyan-400 m-2'>Follow us</a></Link>
            </div>
            <div className='flex'>
                <Link href="https://medium.com/the-etherean-empire-post"><a  className='mx-2' target="_blank">
                <Image src={medium}></Image></a></Link>
                <Link href="https://t.co/h72btgtYJd"><a  className='mx-2' target="_blank">
                <Image src={discord}></Image></a></Link>
            </div>

        </div>

    </div>
  )
}


export default Navbar
