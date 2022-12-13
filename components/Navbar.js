import Link from 'next/link'
import Image from 'next/image'
import medium from '../public/svg/medium.svg'


const Navbar = () => {
  return (
    <div className="w-full h-6 flex bg-black fixed z-10">
        <div className="">
            <h2 className="text-white font-semibold">ETHEREANS</h2>
        </div>
        <div className="">
            <div className='text-gray-600'>
                <a className='hover:text-cyan-400'><Link href=''>Collection</Link></a>
                <a className='hover:text-cyan-400'><Link href=''>EIFS</Link></a>
                <a className='hover:text-cyan-400'><Link href=''>Metaverse</Link></a>
                <a className='hover:text-cyan-400'><Link href=''>Merch</Link></a>
                <a className='hover:text-cyan-400'><Link href=''>Marketplace</Link></a>
                <a className='hover:text-cyan-400 bg'><Link href=''>Follow us</Link></a>
            </div>
            <div className=''>
                <a className=''><Link href="https://medium.com/the-etherean-empire-post" target="_blank">
                <Image src={medium}></Image></Link></a>
            </div>

        </div>

    </div>
  )
}


export default Navbar
