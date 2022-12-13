import Image from 'next/image'
import robot from '../public/images/AI_1.png'
import lineImage from '../public/images/deco.png'
import walletBtn from '../public/images/wallet_btn.png'


const ConnectWallet = () => {
  return (
    <div className='b-g h-full w-full'>
      <div className='justify-center text-center pt-20'>
        <h1 className='font-fam text-white text-9xl font-medium'>BRIDGENATOR 9000</h1>
        <h4 className='text-green-500 text-4xl mt-4 font-etherean-sans'>HUMAN READY EDITION</h4>
      </div>
      <div className='h-auto w-auto mx-auto flex w-8/12 mt-32'>
        <div className=''>
          <Image src={lineImage}></Image>
        </div>
        <div className='text-white px-14 -mt-8 w-full'>
          <Image src={robot}></Image>
          <div className='mx-auto max-width-[90%] grid justify-center'>
            <h5 className='pt-20 text-center'>Step 1: Identify Yourself</h5>
            <Image src={walletBtn} width={400} height={60}></Image>
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