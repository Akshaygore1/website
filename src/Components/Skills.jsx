import React from 'react'
import { FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { FiFigma } from 'react-icons/fi';
import {FaNodeJs} from 'react-icons/fa'
import {DiMongodb} from 'react-icons/di'
 
function Skills() {
  return (

    <div className='max-w-4xl mx-auto justify-center py-12' id="tech">
        <p className="text-2xl text-black  md:text-4xl font-bold text-center pt-4">
          Tech I Use 
        </p>
    

    <div className = "flex flex-wrap justify-center pt-2">
        
        <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
            <SiJavascript color="#ffdf00" className="mx-auto text-4xl" />
            <p className="mt-6 text-xl font-semibold text-center">
            JavaScript
            </p>
        </div>

        <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <FaReact color="#2196f3" className="mx-auto text-4xl " />
          <p className="mt-6 text-xl font-semibold text-center">
            React
          </p>
        </div>

        <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <FiFigma color="orange" className="mx-auto text-4xl" />
          <p className="mt-6 text-xl font-semibold text-center">
            Figma
          </p>
        </div>

        <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiTailwindcss color="#00C0A3" className="mx-auto text-4xl" />
          <p className="mt-6 text-base font-semibold text-center">
            TailwindCSS
          </p>
        </div>

        <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <FaNodeJs color="#86DC3D" className="mx-auto text-4xl" />
          <p className="mt-6 text-base font-semibold text-center">
            NodeJS
          </p>
        </div>

        <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <DiMongodb color="#00FF00" className="mx-auto text-4xl" />
          <p className="mt-6 text-base font-semibold text-center">
            MongoDB
          </p>
        </div>
        

    </div>
  </div>
  )
}

export default Skills