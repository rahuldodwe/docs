import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { BsDownload } from "react-icons/bs";



function Card() {
  return (
    <div>
      <div className='relative w-60 h-72 rounded-[50px] bg-zinc-900/50 text-white px-8 py-10 overflow-hidden'>
        <FaRegFileAlt />
        <p className='text-sm leading-tight mt-5 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <div className="card-footer absolute bottom-0 w-full px-8 left-0">
          <div className='flex items-center justify-between py-3  mb-5'>
            <h1>.4mb</h1>
            <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
              <BsDownload size=".7em" color="#fff" />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
