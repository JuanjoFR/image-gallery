import { StopIcon } from "@heroicons/react/24/solid"
import React from "react"

export default function Footer() {
  return (
    <React.Fragment>
      <div className="grid grid-cols-1 items-center md:grid-cols-2">
        <div className="my-8 md:mb-0">
          <StopIcon className="mb-2 h-6 w-6 text-gray-300 dark:text-gray-400" />
          <div className="mb-2 mr-4 h-2 w-56 rounded-md bg-gray-300 dark:bg-gray-400" />
          <div className="mb-2 mr-4 h-2 w-52 rounded-md bg-gray-300 dark:bg-gray-400" />
          <div className="mr-4 h-2 w-32 rounded-md bg-gray-300 dark:bg-gray-400" />
        </div>
        <div className="grid grid-cols-3 gap-2 md:mt-8">
          <div>
            <div className="mb-4 mr-4 h-2 w-16 rounded-md bg-gray-400 dark:bg-gray-300" />
            <div className="mb-2 mr-4 h-2 w-24 rounded-md bg-gray-300 dark:bg-gray-400" />
            <div className="mb-2 mr-4 h-2 w-20 rounded-md bg-gray-300 dark:bg-gray-400" />
            <div className="mb-2 mr-4 h-2 w-16 rounded-md bg-gray-300 dark:bg-gray-400" />
            <div className="mr-4 h-2 w-20 rounded-md bg-gray-300 dark:bg-gray-400" />
          </div>
          <div>
            <div className="mb-4 mr-4 h-2 w-16 rounded-md bg-gray-400 dark:bg-gray-300" />
            <div className="mb-2 mr-4 h-2 w-24 rounded-md bg-gray-300 dark:bg-gray-400" />
            <div className="mb-2 mr-4 h-2 w-20 rounded-md bg-gray-300 dark:bg-gray-400" />
            <div className="mb-2 mr-4 h-2 w-16 rounded-md bg-gray-300 dark:bg-gray-400" />
            <div className="mr-4 h-2 w-20 rounded-md bg-gray-300 dark:bg-gray-400" />
          </div>
          <div>
            <div className="mb-4 mr-4 h-2 w-16 rounded-md bg-gray-400 dark:bg-gray-300" />
            <div className="mb-2 mr-4 h-2 w-24 rounded-md bg-gray-300 dark:bg-gray-400" />
            <div className="mb-2 mr-4 h-2 w-20 rounded-md bg-gray-300 dark:bg-gray-400" />
            <div className="mb-2 mr-4 h-2 w-16 rounded-md bg-gray-300 dark:bg-gray-400" />
            <div className="mr-4 h-2 w-20 rounded-md bg-gray-300 dark:bg-gray-400" />
          </div>
        </div>
      </div>
      <hr className="my-8 h-px border-0 bg-gray-300 dark:bg-gray-700" />
      <div className="mb-8 grid grid-cols-2 items-center gap-2">
        <div className="mr-4 h-2 w-24 rounded-md bg-gray-300 dark:bg-gray-400" />
        <div className="flex justify-end">
          <StopIcon className="mr-1 h-5 w-5 text-gray-300 dark:text-gray-400" />
          <StopIcon className="mr-1 h-5 w-5 text-gray-300 dark:text-gray-400" />
          <StopIcon className="mr-1 h-5 w-5 text-gray-300 dark:text-gray-400" />
          <StopIcon className="h-5 w-5 text-gray-300 dark:text-gray-400" />
        </div>
      </div>
    </React.Fragment>
  )
}
