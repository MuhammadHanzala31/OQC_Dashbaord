"use client";

import Image from "next/image";
import React, { useState } from "react";
import LoginImage from '../../public/login.png'

export default function layout({children} : {children : React.ReactNode}) {

  return (
     <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-white">
      {/* Left Form Section */}
      <div className="w-full md:w-1/2 p-6 md:p-16">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-6 h-6 rounded-full bg-[#7AC043]" />
          <h1 className="text-xl font-bold">Your Logo</h1>
        </div>

        {/* Login Text */}
        {children}


      </div>

      {/* Right Image Section */}
      <div className="hidden md:flex w-1/2 items-center justify-center p-8">
        <Image
          src={LoginImage}
          alt="Login Image"
          width={400}
          height={400}
          className="rounded-xl"
        />
      </div>
    </div>
  )
}
