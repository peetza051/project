"use client";
import React from 'react'
import { Input } from '@/components/ui/input';
import Link from 'next/link';

const LoginP = () => {
  return (
<div className=" max-w-[5000px] max-h-[1200px]" id="LOGIN">
    <div className="flex justify-center items-center bg-[url('/image/image35.png')] w-full h-[100dvh] bg-center bg-no-repeat bg-cover ">
     <div className='bg-green-50 border-2 border-gray-400 w-[500px] h-[500px] rounded-[50px] flex flex-col justify-around items-center '>
        <p>Login</p>
        <p>enjoy to travel</p>
        <label><Input type="text" name="myRadio" placeholder="User Name" className='w-80 text-gray-400 ' /> </label>
        <label><Input type="text" name="myRadio" placeholder="Password" className='w-80 text-gray-400 ' /> </label>
        <Link href={'/pageEdit'}> <button className='bg-green-300 w-80 h-10 rounded-3xl text-white'>Login</button></Link>
        <span>don`t have account?<Link href='/signup'  className=' underline ml-1 cursor-pointer'>Create Account</Link></span>
     </div>
    </div>
    </div>
  )
}

export default LoginP
// body, html {
//   height: 100%;
// }

// .bg {
//   /* The image used */
//   background-image: url("img_girl.jpg");

//   /* Full height */
//   height: 100%;

//   /* Center and scale the image nicely */
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: cover;
// }