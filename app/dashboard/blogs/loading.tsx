import React from 'react'

export default function loading() {
  return (
 <div className="px-4 py-6">
      {/* Title and Button Skeleton */}
      <div className="flex justify-between items-center mb-6">
        <div className="h-8 w-1/4 bg-[#098A46]/20 rounded animate-pulse" />
        <div className="h-10 w-[120px] bg-[#098A46]/40 rounded-md animate-pulse" />
      </div>

      {/* Blog Cards Skeletons */}
      <div className="flex flex-row flex-wrap gap-4 justify-center">
        {Array(6).fill(0).map((_, i) => (
          <div
            key={i}
            className="bg-[#098A46]/5 rounded-md shadow flex-col gap-2 items-center lg:w-[32.5%] md:w-1/2 w-full animate-pulse"
          >
            {/* Image Placeholder */}
            <div className="w-full h-[230px] bg-[#098A46]/20 rounded-t-md" />

            {/* Content Placeholder */}
            <div className="flex flex-col gap-2 px-3 py-3 w-full">
              <div className="h-4 bg-[#098A46]/30 rounded w-1/2"></div>
              <div className="h-4 bg-[#098A46]/20 rounded w-3/4"></div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 mt-2">
                <div className="h-[32px] w-[32px] rounded-md bg-green-300/50"></div>
                <div className="h-[32px] w-[32px] rounded-md bg-yellow-300/50"></div>
                <div className="h-[32px] w-[32px] rounded-md bg-red-300/50"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
