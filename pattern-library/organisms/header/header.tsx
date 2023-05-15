import { StopIcon } from "@heroicons/react/24/solid"

export default function Header() {
  return (
    <div className="grid w-full grid-cols-2 gap-2 px-2 py-8 sm:px-0">
      <div className="flex items-center">
        <StopIcon className="h-10 w-10 text-gray-300" />
      </div>
      <div className="flex items-center justify-end">
        <div className="hidden sm:flex">
          <div className="mr-4 h-2 w-14 rounded-md bg-gray-300" />
          <div className="mr-4 h-2 w-14 rounded-md bg-gray-300" />
          <div className="mr-4 h-2 w-14 rounded-md bg-gray-300" />
        </div>

        <div className="flex items-center justify-center rounded-md bg-blue-700 px-4 py-2">
          <div className="h-2 w-14 rounded-md bg-white" />
        </div>
      </div>
    </div>
  )
}
