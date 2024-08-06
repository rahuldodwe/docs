import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {

  const ref = useRef(null);

  const data = [
    {
      desc: "This is the background color of the card adipisicing.",
      filesize: "4.9mb",
      close: true,
      cardFooter: { isOpen: false, footerTitle: "Download Now", footerColor: "green"},
    },
    {
      desc: "This is the background color of the card adipisicing.",
      filesize: "4.9mb",
      close: false,
      cardFooter: { isOpen: true, footerTitle: "Download Now", footerColor: "blue"},
    },
    {
      desc: "This is the background color of the card adipisicing.",
      filesize: "4.9mb",
      close: true,
      cardFooter: { isOpen: true, footerTitle: "Upload", footerColor: "green"},
    },

  ];
  return (
    <div>
      <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
        {data.map((item, index)=>(
          <Card data={item} reference={ref} />
        ))}
      </div>
    </div>
  )
}

export default Foreground
