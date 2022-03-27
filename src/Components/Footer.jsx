import React from 'react'
import {FaGithub, FaTwitter,FaRegEnvelope,} from 'react-icons/fa'
import {AiOutlineLinkedin} from 'react-icons/ai'


function Footer() {
  return (
    <div className='py-5 border-t-3/2'>
        <div className="flex justify-center mt-4">
            <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300" href="https://github.com/Akshaygore1">
                <FaGithub />
                <span class="sr-only">Github</span>
            </a>

            <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300" href="https://twitter.com/Akshaygore2301">
                <FaTwitter />
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
        <div className="flex justify-center mt-4">
            Made in 💖 with Javascript 
        </div>
    </div>
  )
}

export default Footer