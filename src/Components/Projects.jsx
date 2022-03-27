import React from 'react'
import crypto from '../Assets/crypto.jpeg'
import Github from '../Assets/github.jpeg'
import food from '../Assets/food.jpeg'

function Projects() {
  return (
    <div className='max-w-4xl mx-auto justify-center py-12' id="tech">
        <p className="text-2xl text-black  md:text-4xl font-bold text-center pt-4">
          Projects 
        </p>
        
        <div className = "flex flex-wrap justify-center pt-2">


        <div class="card w-96 p-10 m-6 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={crypto} alt="Shoes" class="rounded-xl" />
             </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Cryptoowl</h2>
               <p>React Material UI </p>
            <a class="card-actions" href='https://cryptoowl.netlify.app/'>
                <button class="btn btn-primary">Go to Site</button>
            </a>
          </div>
        </div>
     


        <div class="card w-96 p-10 m-6 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={Github} alt="Shoes" class="rounded-xl" />
             </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Github Report</h2>
               <p>React Tailwind CSS</p>
            <a class="card-actions" href='*'>
              <button class="btn btn-primary">Go to Site</button>
            </a>
          </div>
        </div>



        <div class="card w-96  p-10 m-6 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={food} alt="Shoes" class="rounded-xl" />
             </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Restrarant Website</h2>
               <p>HTML</p>
            <a class="card-actions" href='https://myrestraurant.netlify.app/'>
              <button class="btn btn-primary">Go to Site</button>
            </a>
          </div>
        </div>


        </div>
    </div>
  )
}

export default Projects