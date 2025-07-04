"use client"

import { useState } from "react";
import userStore from "@/app/zustandStore/userStore";
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function page() {
    const router = useRouter()
    const { login, isError } = userStore()

    const [showPassword, setShowPassword] = useState<Boolean | null>(false);
    const [email, setEmail] = useState<String | null>("");
    const [username, setUsername] = useState<String | null>("");
    const [password, setPassword] = useState<String | null>("");

    return (
        <>
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">SignUp</h2>
            <p className="text-gray-500 mb-6">
                Sign-up to access your travelwise account
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
            <div className="mb-4">
                <label className="text-sm block mb-1">Username</label>
                <input
                    // @ts-ignore
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    placeholder="john90"
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
            <button className="w-full hover:bg-[#098A46] text-white py-2 rounded-md bg-[#7AC043] transition cursor-pointer">
                Signup
            </button>

            {/* Sign Up */}
            <p className="text-xl font-poppins mt-4 text-center">
                Already have account?{" "}
                <Link href="/userAuth/login" className="text-[#7AC043] hover:underline">
                    login
                </Link>
            </p>

            {/* Divider */}
        
        </>

    )
}
