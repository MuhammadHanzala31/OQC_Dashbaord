"use client"

import Navbar from "./components/Navbar";
import userStore from "./zustandStore/userStore";
import { useEffect, useLayoutEffect, useState } from "react";
import Login from './userAuth/login/page'
import { useRouter } from "next/navigation";


export default function Home() {

  const router = useRouter()

  const {isLoggedIn} = userStore()

  useEffect(()=>{
    if(isLoggedIn === false){
      router.push('/userAuth/login')
    }
    else{
      router.push('/dashboard')
    }
  },[isLoggedIn])
}


