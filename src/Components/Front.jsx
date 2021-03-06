import React from 'react'
import photo from '../Assets/123.jpg'
import {FaRegEnvelope} from 'react-icons/fa'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {FiTwitter,FiGithub} from 'react-icons/fi'

function Front() {
  return (
    <div className="w-full">
        <div className='flex flex-col justify-center max-w-xs mx-auto bg-white shadow-2xl rounded-xl p-5'>
            <div className = "">
                 <img className="w-32 mx-auto shadow-xl rounded-full drop-shadow-sm" src={photo} alt="profile face" />
            </div>
        <div className="text-center mt-5">
                <p className='text-xl sm:text-2xl font-semibold text-gray-900'>
                    Akshay Gore
                </p>
                <p className='text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2'>
                     Full Stack Developer
                </p>
        <div className="flex align-center justify-center mt-4">


                <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300" href="https://github.com/Akshaygore1">
                    <FiGithub />
                    <span class="sr-only">Github</span>
                </a>


                <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300" href="https://twitter.com/Akshaygore2301">
                    <FiTwitter />
                    <span class="sr-only">Twitter</span>  
                </a>


                <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-black rounded-full hover:text-white transition-colors duration-300" href="mailto:akshaygore2301@gmail.com">
                    <FaRegEnvelope />
                    <span class="sr-only">Email</span>  
                </a>

                <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-black rounded-full hover:text-white transition-colors duration-300" href="https://mailto:backslash.flutter@gmail.com">
                    <AiOutlineLinkedin />
                    <span class="sr-only">Email</span>  
                </a>

            </div>
            </div>
            </div>
        </div>
  )
}

export default Front
