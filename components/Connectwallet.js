import { Button } from '../components/Button'
import Image from 'next/image'
import Link from 'next/link'
import robot from '../public/images/AI_1.png'
import lineImage from '../public/images/deco.png'
import Bridge from './BridgeButton'



const ConnectWallet = () => {
  

  return (
    <div className='w-full h-full b-g'>

      <div className='justify-center text-center pt-36'>
        <h1 className='font-medium text-white font-fam md:text-8xl lg:text-9xl sm:text-7xl'>BRIDGENATOR 9000</h1>
        <h4 className='mt-4 lg:text-[2.65rem] font-etherean-sans bg-green sm:text-[1.5rem] md:text-[2rem]'>HUMAN READY EDITION</h4>
      </div>

      <div className='flex h-auto mx-auto mt-32 lg:w-8/12 pb-28 sm:w-full'>
        
        <div className='sm:hidden lg:block'>
          <Image src={lineImage}></Image>
        </div>
        
        <div className='grid w-full -mt-10 text-white px-14'>
          
          <div className=''>
            <Image src={robot}></Image>
          </div>
          
          <div className='flex flex-col items-center mt-20 '>
            <p className='pb-8 text-xs font-bold font-source-code-pro'>Step 1: Identify Yourself</p>
            <div className='flex flex-col items-center w-auto h-auto border-2 border-teal-500 py-7 scroll rounded-xl'>
              <div className='relative h-auto w-[20rem] bottom-12 left-11'>
                <Button />
              </div>
              <p className='text-xs font-bold font-source-code-pro'>Step 2: Prepare Your Assets</p>
              <p className='pt-1 text-xs font-medium text-gray-300 font-source-code-pro'>Select the NFTS you want to bridge from the old contract.</p>
              
              <div className='flex pt-2 pb-2 text-xs font-medium text-gray-300 font-source-code-pro'>
                <span className='flex items-center mx-4'>
                  <span className='w-3 h-3 bg-transparent border border-red-700 cursor-pointer'></span>
                  <p className='px-2'>Old Contract</p>
                </span>
                <span className='flex items-center mx-2'>
                  <span className='w-3 h-3 bg-transparent border border-[#00ff02] cursor-pointer'></span>
                  <p className='px-2'>New Contract</p>
                </span>
              </div>
              
              <div className='w-full h-auto p-4 border-t-2 border-b-2 border-teal-500'>
                <div className='w-auto h-[15.6rem] grid grid-cols-4 gap-4 pr-4 overflow-y-auto '>

                  {Array(2).fill("").map((el, i) => <div className='p-1.5 rounded-lg w-auto h-auto bg-transparent border border-red-700 '>
                  <div className='md:w-[6.1rem] h-[6.4rem] sm:w-[5.8rem] rounded bg-black border border-white'></div>
                  </div>)}
                  {Array(18).fill("").map((el, i) => <div className='p-1.5 rounded-lg w-auto h-auto bg-transparent border border-red-700 '>
                  <div className='md:w-[6.1rem] h-[6.4rem] sm:w-[5.8rem] rounded bg-black '></div>
                  </div>)}
                </div>
              </div>
              
              <p className='pt-20 text-xs font-bold font-source-code-pro'>Step 3: Bridge NFTS</p>

            </div>
            <div className='relative bottom-6 right-28'>
              <Bridge />
            </div>
            
          </div>
          
        </div>
        
        <div className='sm:hidden lg:block'>
          <Image src={lineImage}></Image>
        </div>
      
      </div>
    </div>
  )
}


export default ConnectWallet