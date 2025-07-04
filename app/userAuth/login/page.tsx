
"use client";

import Image from "next/image";
import { useState } from "react";
import LoginImage from '../../public/login.png'
import userStore from "@/app/zustandStore/userStore";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";



export default function page() {

    const router = useRouter()
    const { login, isError, setIsLoggedIn } = userStore()

    const [showPassword, setShowPassword] = useState<Boolean | null>(false);
    const [email, setEmail] = useState<String | null>("");
    const [password, setPassword] = useState<String | null>("");


  const handleLogin = async () => {

     try {
      const res = await fetch('http://localhost:8000/api/v1/user/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const userData = await res.json();
      console.log(userData, "user Data")
      setIsLoggedIn(true)
      toast.success('User logged in successfully');
      router.push('/dashboard') // ✅ Only redirect after login completes

    } catch (error : any) {
      console.log(Error(error))
      // toast.error(Error?.message || 'Login error');
    }

  
}

    return (
        <>
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">Login</h2>
            <p className="text-gray-500 mb-6">
                Login to access your travelwise account
            </p>

            {/* Email */}
            <div className="mb-4">
                <label className="text-sm block mb-1">Email</label>
                <input
                    // @ts-ignore
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="john.doe@gmail.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7AC043]"
                />
            </div>

            {/* Password */}
            <div className="mb-4 relative">
                <label className="text-sm block mb-1">Password</label>
                <input
                    // @ts-ignore
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••••"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7AC043]"
                />
                <span
                    className="absolute right-3 top-9 cursor-pointer text-gray-400"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    👁️
                </span>
            </div>

            {/* Remember and Forgot */}

            {/* Login Button */}
            <button className="w-full hover:bg-[#098A46] text-white py-2 rounded-md bg-[#7AC043] transition cursor-pointer" onClick={handleLogin}>
                Login
            </button>
        
        </>

    )
}
