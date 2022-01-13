import Image from 'next/image';
import {useMoralis} from "react-moralis";

function Login() {
    const {authenticate} = useMoralis();
    return (
        
        <div className="bg-black relative text-white">
          <h1>I am login screen</h1>
          <div className='flex flex-col absolute z-50 h-1/6 w-full items-center justify-center space-y-4'>
              
           
          
          
          
          <button 
          onClick={authenticate} 
          className='bg-blue-500 rounded-lg font-bold animate-pulse'>Login to METAVERSE</button>
          </div>

          <div className="w-full h-screen">
              <Image
              src="https://jrnlst.ru/sites/default/files/covers/1344x756.jpg"
              layout='fill'
              objectFit='cover'
              />
          </div>  
        </div>
    )
}

export default Login
