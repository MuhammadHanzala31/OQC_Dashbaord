import React from 'react'

export default function BlogCardLoading() {
    return (
        <div className='bg-[#098A46]/5 rounded-md shadow flex-col gap-2 items-center lg:w-[32.5%] md:w-1/2 w-full mt-3 animate-pulse'>

            <div className='w-full h-[230px] bg-[#098A46]/20 rounded-t-md'></div>


            <div className='flex flex-col gap-2 px-3 py-3 w-full'>
                <div className='h-4 bg-[#098A46]/30 rounded w-1/2'></div>
                <div className='h-4 bg-[#098A46]/20 rounded w-3/4'></div>


                <div className='flex items-center gap-2 mt-2'>
                    <div className='h-[32px] w-[32px] rounded-md bg-green-300/50'></div>
                    <div className='h-[32px] w-[32px] rounded-md bg-yellow-300/50'></div>
                    <div className='h-[32px] w-[32px] rounded-md bg-red-300/50'></div>
                </div>
            </div>
        </div>

    )
}
