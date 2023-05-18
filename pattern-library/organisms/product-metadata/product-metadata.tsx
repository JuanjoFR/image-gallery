import { StopIcon } from "@heroicons/react/24/solid"
import React from "react"

export default function ProductMetadata() {
  return (
    <React.Fragment>
      <div className="mb-4 h-3 w-14 rounded-full bg-gray-300 dark:bg-gray-400" />
      <div className="mb-2 h-5 w-24 rounded-full bg-gray-400 dark:bg-gray-300" />
      <div className="mb-4 h-2 w-16 rounded-full bg-gray-300 dark:bg-gray-400" />
      <div className="mb-4 flex items-center">
        <div className="mr-2 h-3 w-14 rounded-full bg-gray-300 dark:bg-gray-400" />
        <div className="mr-2 h-3 w-5 rounded-full bg-gray-300 dark:bg-gray-400" />
        <div className="h-2 w-12 rounded-full bg-red-500 dark:bg-red-700" />
      </div>
      <div className="mb-4 h-2 w-52 rounded-full bg-gray-300 dark:bg-gray-400" />
      <div className="mb-4 flex items-center">
        <div className="mr-2 h-2 w-10 rounded-full bg-gray-400 dark:bg-gray-300" />
        <div className="h-2 w-24 rounded-full bg-gray-300 dark:bg-gray-400" />
      </div>
      <div className="mb-4 flex items-center">
        <StopIcon className="mr-2 h-8 w-8 text-gray-300 dark:text-gray-400" />
        <StopIcon className="h-8 w-8 text-gray-300 dark:text-gray-400" />
      </div>
      <div className="mb-4 flex items-center">
        <div className="mr-4 h-2 w-10 rounded-full bg-gray-400 dark:bg-gray-300" />
        <div className="h-10 w-24 flex-1 rounded-md bg-gray-300 dark:bg-gray-400" />
      </div>
      <div className="mb-4 flex items-center justify-center rounded-md bg-gray-200 px-4 py-4 dark:bg-gray-700">
        <div className="h-2 w-14 rounded-md bg-gray-400 dark:bg-gray-300" />
      </div>
      <div className="mb-4 flex items-center justify-center rounded-md bg-blue-700 px-4 py-4 dark:bg-blue-500">
        <div className="h-2 w-14 rounded-md bg-white dark:bg-gray-300" />
      </div>
      <div className="flex items-center">
        <StopIcon className="mr-2 h-8 w-8 text-gray-300 dark:text-gray-400" />
        <div className="mr-4 h-2 w-14 rounded-full bg-gray-300 dark:bg-gray-400" />
        <StopIcon className="mr-2 h-8 w-8 text-gray-300 dark:text-gray-400" />
        <div className="mr-4 h-2 w-14 rounded-full bg-gray-300 dark:bg-gray-400" />
        <StopIcon className="h-8 w-8 text-gray-300 dark:text-gray-400" />
        <div className="h-2 w-14 rounded-full bg-gray-300 dark:bg-gray-400" />
      </div>
      <hr className="my-8 h-px border-0 bg-gray-300 dark:bg-gray-700" />
      <div className="mb-4 flex items-center">
        <div className="mr-2 h-2 w-20 rounded-full bg-gray-400 dark:bg-gray-300" />
        <div className="h-2 w-24 rounded-full bg-gray-300 dark:bg-gray-400" />
      </div>
      <div className="mb-8 flex items-center">
        <div className="mr-2 h-2 w-36 rounded-full bg-gray-400 dark:bg-gray-300" />
        <div className="h-2 w-24 rounded-full bg-gray-300 dark:bg-gray-400" />
      </div>
      <div className="mb-4 flex items-center justify-center">
        <StopIcon className="mr-2 h-6 w-6 text-gray-300 dark:text-gray-400" />
        <StopIcon className="mr-2 h-6 w-6 text-gray-300 dark:text-gray-400" />
        <StopIcon className="mr-2 h-6 w-6 text-gray-300 dark:text-gray-400" />
        <StopIcon className="mr-2 h-6 w-6 text-gray-300 dark:text-gray-400" />
        <StopIcon className="mr-2 h-6 w-6 text-gray-300 dark:text-gray-400" />
        <StopIcon className="mr-2 h-6 w-6 text-gray-300 dark:text-gray-400" />
        <StopIcon className="h-6 w-6 text-gray-300 dark:text-gray-400" />
      </div>
      <div className="flex justify-center">
        <div className="h-2 w-36 rounded-full bg-gray-300 dark:bg-gray-400" />
      </div>
    </React.Fragment>
  )
}
