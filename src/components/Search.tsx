import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"
import { ChangeEvent } from "react"

interface ISearch {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  label?: string
}

const Search = ({ onChange, placeholder = "", label = "Search" }: ISearch) => {
  return (
    <div>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        {label}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <MagnifyingGlassIcon className="w-5 h-5 text-slate-400" />
        </div>
        <input
          onChange={onChange}
          type="search"
          id="default-search"
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-slate-300 rounded-lg bg-slate-50"
          placeholder={placeholder}
        />
      </div>
    </div>
  )
}

export { Search }
