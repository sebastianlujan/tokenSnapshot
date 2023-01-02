import Image from 'next/image'
import Link from 'next/link'
import banner from '../public/images/footer.png'


const Footer = () => {
  return (
    <div className="bg-black w-full h-full p-30 pt-20 grid justify-center">
        <Image src={banner}></Image>
        <div className='bg-img'>
          <div className='flex justify-between pt-10'>
            <div>
              <h3 className='text-white font-anton-regular text-large'>SOCIAL</h3>
              <div className='text-gray-400 grid pl-3 text-xl pt-3 font-source-code-pro font-extralight-700'>
              <Link href='https://twitter.com/theEthereans'><a className='text-hover' target='_blank'>Twitter</a></Link>
              <Link href='https://www.instagram.com/theethereans/'><a className='text-hover' target='_blank'>Instagram</a></Link>
              <Link href='https://medium.com/the-etherean-empire-post'><a className='text-hover' target='_blank'>Medium</a></Link>
              <Link href='https://t.co/h72btgtYJd'><a className='text-hover' target='_blank'>Discord</a></Link>
              </div>
            </div>
            <div>
              <h3 className='text-white font-anton-regular text-large'>COLLECTION</h3>
              <div className='text-gray-400 grid text-right text-xl pt-3 font-source-code-pro font-extralight-700'>
              <Link href='https://opensea.io/collection/ethereans-official'><a className='text-hover' target='_blank'>Opensea</a></Link>
              <Link href='https://looksrare.org/collections/0xfd3fd9b793bAc60e7F0a9b9fB759DB3e250383cB'><a className='text-hover' target='_blank'>Looksrare</a></Link>
              <Link href='https://niftygateway.com/marketplace?artistId=783187&collection=0xfd3fd9b793bac60e7f0a9b9fb759db3e250383cb&niftyType=1'><a className='text-hover' target='_blank'>Nifty Gateway</a></Link>
              <Link href='https://nft.coinbase.com/collection/ethereum/0xfd3fd9b793bac60e7f0a9b9fb759db3e250383cb'><a className='text-hover' target='_blank'>Coinbase</a></Link>
              </div>
            </div>
          </div>
          <div className='flex justify-between text-white pt-32 pb-16'>
            <Link href='https://etherscan.io/address/0xfd3fd9b793bac60e7f0a9b9fb759db3e250383cb'><a className=' underline' target='_blank'>Review the Smart Contract.</a></Link>
            <Link href='https://etherscan.io/address/https://twitter.com/TheChaos_Duo'><a className='underline ' target='_blank'>Created by the Chaos Duo.</a></Link>

          </div>
        </div>
    </div>
  )
}


export default Footer