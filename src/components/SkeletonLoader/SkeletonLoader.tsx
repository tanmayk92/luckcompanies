import React from 'react'

const SkeletonLoader: React.FC = () => {
  return (
    <div role="status" className="animate-pulse">
      <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-full mb-2.5"></div>
      <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[540px]"></div>
      <span className="sr-only">Loading...</span>
    </div>
  )
}

export default SkeletonLoader
