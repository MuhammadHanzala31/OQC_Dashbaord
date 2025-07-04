"use client"

export default function BlogDetailLoading() {
  return (
    <div className="flex gap-2 px-4">
      {/* Left Side (Image + Title + Content) */}
      <div className="mt-4 border border-[#098a46] border-dotted p-4 w-2/3 animate-pulse">
        {/* Image Skeleton */}
        <div className="w-full h-[400px] bg-[#098a46]/20 rounded"></div>

        {/* Title Skeleton */}
        <div className="h-6 bg-[#098a46]/30 rounded w-3/4 mt-4"></div>

        {/* Content Skeleton */}
        <div className="space-y-2 mt-6">
          <div className="h-4 bg-gray-300/50 rounded w-full"></div>
          <div className="h-4 bg-gray-300/40 rounded w-[90%]"></div>
          <div className="h-4 bg-gray-300/30 rounded w-[85%]"></div>
          <div className="h-4 bg-gray-300/20 rounded w-[60%]"></div>
        </div>
      </div>

      {/* Right Side (Categories) */}
      <div className="mt-4 border border-[#098a46] border-dotted p-4 w-1/3 animate-pulse">
        <div className="h-6 bg-[#098a46]/30 rounded w-1/2 mb-6"></div>

        {/* Category Tags */}
        <div className="flex gap-3 flex-wrap">
          {Array(5).fill(0).map((_, i) => (
            <div key={i} className="h-6 w-20 bg-[#098a46]/20 rounded-sm" />
          ))}
        </div>
      </div>
    </div>
  )
}
