import { create } from 'zustand'
import usefetch from '../customHook/useFetch'
import { registerUser, userLogin, userLogout } from '../handleApi/handleUser'
import { RegisterUser } from '../interfaces/interfaces'
import { log } from 'console'
import toast from 'react-hot-toast'
interface User {
  id: number
  name: string
  email: string,
  avatar: string,
  password?: string
}
interface UserState {
  user: User[] | null
  isLoading: boolean
  isLoggedIn: boolean
  isError: string | null,
  token: string | null,
  login?: (password: string, email: string) => void,
  logout?: () => void,
   setIsLoggedIn: (value: boolean) => void
}



const userStore = create<UserState>((set, get) => ({
  user: null,
  token: null,
  isLoggedIn: false,
  isLoading: false,
  isError: null,
  // @ts-ignore
  login: async (password: string, email: string) => {
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
      set({
        isLoggedIn: true,
        token: userData?.data?.accessToken,
        user: userData?.data?.user || null
      });

      toast.success('User logged in successfully');

    } catch (error : any) {
      console.log(Error(error))
      // toast.error(Error?.message || 'Login error');
      set({
        isLoggedIn: false,
        token: null,
        user: null
      });
    }


  },
  logout: () => {
    const res = userLogout()
    set({ token: null })
    set({ isLoggedIn: false })
  },
  setIsLoggedIn: (value) => set({ isLoggedIn: value })
}))


export default userStore