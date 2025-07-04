"use client"
import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import Link from 'next/link'
import usefetch from '../../customHook/useFetch'
import { fetchBlogs } from '../../handleApi/handleBlog'
import BlogCard from '../../components/BlogCard'
import { Blog } from '../../interfaces/interfaces'
import Modal from '@/app/components/Modal'
import AddBlogForm from '@/app/components/AddBlogForm'
import BlogCardLoading from '@/app/components/BlogCardLoading'

export default function page() {

  const { data, error, reset, loading } = usefetch(() => fetchBlogs())
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className='pb-4'>
      <Navbar title='Blogs' path='Blogs' />
      <div className='mt-4 overflow-y-auto h-[90vh] scrollbar-hide'>
        <div className='flex justify-between items-center'>
          <h2 className='text-2xl font-poppons'>Blogs</h2>
          <button className='bg-[#098a46] text-white px-3 py-2 rounded-md font-poppins' onClick={() => setIsModalOpen(true)}>Add Blog +</button>
        </div>
        <div className='flex flex-col justify-center items-center gap-2 mt-3 '>
          {
            loading ? (
              <div className='flex flex-row items-center justify-center gap-3 flex-wrap w-full'>
                <BlogCardLoading/>
                <BlogCardLoading/>
                <BlogCardLoading/>
              </div>
            ) : <div className='flex flex-row items-center justify-center gap-3 flex-wrap mb-[60px]'>
              {data && data.data.map((blog: Blog) => (
              <BlogCard key={blog._id} id={blog._id} title={blog.title} content={blog.content} image={blog.coverImage} createdAt={blog.createdAt} />
              ))}
            </div>
          }
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <AddBlogForm />
      </Modal>
    </div>
  )
}
