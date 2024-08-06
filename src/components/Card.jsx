import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { BsDownload } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"




function Card({ data, reference }) {
  return (
    <>
      <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.2}} className='relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/50 text-white px-8 py-10 overflow-hidden'>
        <FaRegFileAlt />
        <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
        <div className="card-footer absolute bottom-0 w-full left-0">
          <div className='flex items-center justify-between px-8 py-3  mb-3'>
            <h1>{data.filesize}</h1>
            <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
              {data.close ? <IoClose /> : <BsDownload size=".7em" color="#fff" />}
            </span>
          </div>
          {
            data.cardFooter.isOpen ? (
              <div className={`tag w-full py-4 ${data.cardFooter.footerColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
                <h1 className='text-sm font-semibold'>{data.cardFooter.footerTitle}</h1>
              </div>
            ) : null
          }
        </div>
      </motion.div>
      </>
  )
}

export default Card
