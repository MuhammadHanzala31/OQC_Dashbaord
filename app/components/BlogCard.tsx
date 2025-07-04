import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function BlogCard({
    title,
    id,
    image,
    content,
    createdAt
}: {
    title: string,
    id: string,
    image: string,
    content: string,
    createdAt : string
}) {
    return (
        <div className=' bg-[#098A46]/5 rounded-md shadow flex-col gap-2 items-center lg:w-[32.5%] md:w-1/2 w-full mt-3'>
            <Image src={image} alt='image' height={150} width='400' className='w-full h-[200] object-bottom'/>
            <div className='flex flex-col gap-2 px-3 py-3'>
                <h3 className='font-poppins text-[#098A46] text-xl font-semibold font-sans'>{title}</h3>
                <p className='line-clamp-2 w-[90%]'>
                    {content}
                </p>
                <div className='flex  items-center gap-2'>
                    <Link href={`/dashboard/blogs/${id}`} className='flex h-[32px] w-[32px] rounded-md justify-center items-center text-white bg-green-700 cursor-pointer'>
                        <i className="ri-eye-line"></i>
                    </Link>
                    <div className='flex h-[32px] w-[32px] rounded-md justify-center items-center text-white bg-yellow-700 cursor-pointer'>
                        <i className="ri-edit-fill"></i>
                    </div>
                    <div className='flex h-[32px] w-[32px] rounded-md justify-center items-center text-white bg-red-700 cursor-pointer'>
                        <i className="ri-delete-bin-6-line"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
