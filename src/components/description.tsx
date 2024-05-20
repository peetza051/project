import React from 'react'
import Image from 'next/image'

const DescriptionPage = () => {
  return (
    <div className='p-4 pt-20  flex justify-between items-center '>
      <div>
      <h1 className=' text-orange-500 font-bold pb-2'>ABOUT US !!!</h1>
      <p className =' text-blue-950 text-5xl font-bold  '> สิ่งที่ต้องรู้เกี่ยวกับ  เชียงใหม่  </p>
      <p className =' pt-6 '> description </p>
      </div>
      <Image
      src={"/image/viw.png"} 
      width={686}
      height={554}
      alt='viw'
      />
    </div>
  )
}

export default DescriptionPage
