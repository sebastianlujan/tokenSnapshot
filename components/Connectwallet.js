import Image from 'next/image'
import Link from 'next/link'
import robot from '../public/images/AI_1.png'
import bridgeBtn from '../public/images/bridge_btn.png'
import lineImage from '../public/images/deco.png'
import connectWalletBtn from '../public/images/wallet_btn.png'


const ConnectWallet = () => {
  return (
    <div className='w-full h-full b-g'>

      <div className='justify-center text-center pt-36'>
        <h1 className='font-medium text-white font-fam text-9xl'>BRIDGENATOR 9000</h1>
        <h4 className='mt-4 text-[2.65rem]  text-green-500 font-etherean-sans bg-green'>HUMAN READY EDITION</h4>
      </div>

      <div className='flex w-auto w-8/12 h-auto mx-auto mt-32 pb-28'>
        
        <div className=''>
          <Image src={lineImage}></Image>
        </div>
        
        <div className='grid w-full -mt-10 text-white px-14'>
          
          <div className=''>
            <Image src={robot}></Image>
          </div>
          
          <div className='flex flex-col items-center mt-20'>
            <p className='text-xs font-bold font-source-code-pro'>Step 1: Identify Yourself</p>
            <Image className='' src={connectWalletBtn} height={45} width={250}></Image>
            <div className='flex flex-col items-center w-full h-auto py-10 border-2 border-teal-500 rounded-xl'>
              <p className='text-xs font-bold font-source-code-pro'>Step 2: Prepare Your Assets</p>
              <p className='text-xs font-medium text-gray-300 font-source-code-pro'>Select the NFTS you want to bridge from the old contract.</p>
              
              <div className='flex pb-2 text-xs font-medium text-gray-300 font-source-code-pro'>
                <span className='flex mx-4 '>
                  <input type='checkbox' name='old' />
                  <p className='px-2'>Old Contract</p>
                </span>
                <span className='flex mx-2'>
                  <input type='checkbox' name='new' />
                  <p className='px-2'>New Contract</p>
                </span>
              </div>
              
              <div className='w-[35rem] h-[17.25rem] flex flex-wrap gap-4 border-t-2 border-b-2 border-teal-500 p-4 overflow-y-auto'>

                  {Array(20).fill("").map((el, i) => <div className='p-1.5 rounded-lg w-auto h-[auto] bg-transparent border border-red-700 '>
                  <div className='w-[6.3rem] h-[6.2rem] rounded bg-black border border-white'></div>
                </div>)}
              </div>
              
              <p className='pt-20 text-xs font-bold font-source-code-pro'>Step 3: Bridge NFTS</p>

            </div>
            <Image className='' src={bridgeBtn} height={45} width={250}></Image>
            
          </div>
          
        </div>
        
        <div className=''>
          <Image src={lineImage}></Image>
        </div>
      
      </div>
    </div>
  )
}


export default ConnectWallet