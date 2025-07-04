"use client"
import React, { useState } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import usefetch from '../customHook/useFetch';
import { fetchCategories } from '../handleApi/handleBlog';
export default function AddBlogForm() {

  const { data, loading, error } = usefetch(() => fetchCategories())
  console.log(data)

  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedImage(file)
      setPreviewUrl(URL.createObjectURL(file))
    }
  }

  const handleUpload = async () => {
    if (!selectedImage) return

    const formData = new FormData()
    formData.append('file', selectedImage)

    const res = await fetch('http://localhost:8000/api/upload', {
      method: 'POST',
      body: formData,
    })

    const data = await res.json()
    setUploadedUrl(data.imageUrl)
  }
  const [content, setContent] = useState('')
  return (
    <div >
      <h2 className="text-lg font-semibold mb-4">Add Blog</h2>
      <div className='flex gap-2'>
        <div className='flex flex-col gap-2 w-3/4'>
          <div className='flex flex-col w-full mx-2
        gap-3'>
            <label className='text-lg font-poppins'>
              Title
            </label>
            <input
              type='text'
              required
              placeholder='Enter Blog Title'
              className='p-2 ring-1 ring-[#098A46] outline-0  focus:ring-[#7AC043] rounded-lg'
            />
          </div>
          <div className='flex flex-col w-full mx-2
        gap-2'>
            <label className='text-lg font-poppins'>
              Content
            </label>
            <Editor
              value={content}
              onEditorChange={(newValue) => setContent(newValue)}
              apiKey='10r9rmg7189fsvxw5q5dxjr7mpvzvpyv2beerpair7b0m4fa'
              init={{

                plugins: 'lists anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
                toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
              }}
              initialValue="Blog Content"

            />

          </div>


        </div>
        <div className="flex flex-col  mx-2 w-1/4">
          <div className='flex flex-col'>
            <label className='text-lg font-poppins'>
              Cover Image
            </label>
            <input type="file" accept="image/*" onChange={handleImageChange} id='imageFile' className='hidden' />
            {previewUrl ? (
              <div className='relative'>
                <img src={previewUrl} alt="Preview" className="w-60 rounded border " />
                <span className='absolute top-1 right-0 h-[20px] w-[20px] rounded-full bg-[#098A46] text-white flex justify-center items-center cursor-pointer' onClick={() => setPreviewUrl(null)}>x</span>
              </div>
            ) : (
              <label htmlFor='imageFile' className='mt-3'>
                <div className="flex flex-col items-center justify-center h-48  rounded-lg border-2 border-dashed border-teal-500  bg-gray-100 text-center">
                  <svg className="w-24 h-24" fill="none" stroke="#2ecc71" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  <p className="text-gray-700 mt-2">Click to upload</p>
                </div>
              </label>
            )}
          </div>
          <div className='flex flex-col gap-2 mt-4'>
            <label className='text-lg font-poppins'>
              Category
            </label>
            <select className='border-[#098A46] border rounded-lg p-2'>
            {
              data?.data && data?.data?.map((c: any)=>(<option key={c._id}>{c.name}</option>))
            }
            </select>
          </div>
          <div className='flex flex-col gap-2 mt-4'>
            <label className='text-lg font-poppins'>
              Author
            </label>

            <input
              type='text'
              required
              placeholder='Author Name'
              className='p-2 ring-1 ring-[#098A46] outline-0  focus:ring-[#7AC043] rounded-lg'
            />
          </div>
          <button className='px-4 py-2 rounded-lg hover:bg-[#098A46] text-white text-lg font-poppins font-semibold  bg-[#7AC043] transition mt-4 cursor-pointer' onClick={() => console.log(content)}>Add Blog</button>
        </div>
      </div>
    </div>
  )
}
