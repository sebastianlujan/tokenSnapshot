import Image from 'next/image'
import Link from 'next/link'
import robot from '../public/images/AI_1.png'
import lineImage from '../public/images/deco.png'
import connectWalletBtn from '../public/images/wallet_btn.png'


const ConnectWallet = () => {
  return (
    <div className='b-g h-full w-full'>

      <div className='justify-center text-center pt-20'>
        <h1 className='font-fam text-white text-9xl font-medium'>BRIDGENATOR 9000</h1>
        <h4 className='text-green-500 text-4xl mt-4 font-etherean-sans bg-green'>HUMAN READY EDITION</h4>
      </div>

      <div className='h-auto w-auto mx-auto flex w-8/12 mt-32 pb-28'>
        
        <div className=''>
          <Image src={lineImage}></Image>
        </div>
        
        <div className='text-white px-14 w-full grid'>
          
          <div className=''>
            <Image src={robot}></Image>
          </div>
          
          <div className='flex flex-col items-center'>
            <p className='text-xs font-source-code-pro font-bold'>Step 1: Identify Yourself</p>
            <Image className='' src={connectWalletBtn} height={45} width={250}></Image>
            <div className='w-full h-auto py-10 border-2 border-teal-500 rounded-xl flex flex-col items-center'>
              <p className='text-xs font-source-code-pro font-bold'>Step 2: Prepare Your Assets</p>
              <p className='text-xs font-source-code-pro font-medium text-gray-300'>Select the NFTS you want to bridge from the old contract.</p>
              
              <div className='flex text-xs font-source-code-pro font-medium text-gray-300 pb-2'>
                <span className='flex mx-4 '>
                  <input type='checkbox' name='old' />
                  <p className='px-2'>Old Contract</p>
                </span>
                <span className='flex mx-2'>
                  <input type='checkbox' name='new' />
                  <p className='px-2'>New Contract</p>
                </span>
              </div>
              
              <div className='w-full h-auto flex gap-4 border-t-2 border-b-2 border-teal-500 p-4 overflow-y-auto'>
                <div className='p-1 rounded-lg w-auto h-auto bg-transparent border border-red-700 '>
                  <div className='w-[7rem] h-[7rem] rounded bg-black border border-white'></div>
                </div>

                <div className='p-1 rounded-lg w-auto h-auto bg-transparent border border-red-700'>
                  <div className='w-[7rem] h-[7rem] rounded bg-black border border-white'></div>
                </div>

                <div className='p-1 rounded-lg w-auto h-auto bg-transparent border border-red-700'>
                  <div className='w-[7rem] h-[7rem] rounded bg-black'></div>
                </div>

                <div className='p-1 rounded-lg w-auto h-auto bg-transparent border border-red-700'>
                  <div className='w-[7rem] h-[7rem] rounded bg-black'></div>
                </div>
              </div>

            </div>
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