"use client"
import BlogDetailLoading from '@/app/components/BlogDetailLoading'
import Navbar from '@/app/components/Navbar'
import usefetch from '@/app/customHook/useFetch'
import { fetchBlogs } from '@/app/handleApi/handleBlog'
import { Blog } from '@/app/interfaces/interfaces'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {
  const { blog } = useParams()
  // @ts-ignore
  const { data, loading } = usefetch(() => fetchBlogs(blog))
  console.log(data);
  const blogData: Blog = data?.data
  return (
    <div className='text-slate-900'>
      <Navbar title='Blog Detail' path='Blogs / Blog Details' />
      {
        loading ? (<BlogDetailLoading/>) : (
          <div className='flex gap-2'>
            <div className='mt-4 border border-[#098a46] border-dashed p-4 w-2/3'>
              <Image src={blogData?.coverImage} width={400} height={500} className='w-full h-[400]' alt='image' />
              <h1 className='text-[#098a46] text-2xl font-bold mt-2.5'>{blogData?.title}</h1>
              <p className='mt-4 text-gray-600 font-sans'>
                {blogData?.content}
              </p>
            </div>
            <div className='mt-4 border border-[#098a46] border-dashed p-4 h-fit w-1/3'>
             <h3 className='text-[#098a46] text-xl font-bold mb-4'>Categories</h3>
             <div className='flex gap-3 items-center mt-3 flex-wrap'>
              {
               blogData?.category && blogData?.category.map((c ) => ( <div key={c?._id} className='bg-[#098a4554] px-4 py-1 shadow rounded-sm text-gray-700 font-sans capitalize'>{c.name}</div>))
              }
             </div>
            </div>
          </div>
        )
      }
    </div>
  )
}
