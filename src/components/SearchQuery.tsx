import React, { ReactElement, useState } from 'react'

function SearchQuery({
  query,
  setQuery
}: {
  query: string
  setQuery: (query: string) => void
}): ReactElement {
  const [isError, setIsError] = useState<boolean>(false)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsError(event.target.value === '')
    setQuery(event.target.value)
  }
  return (
    <div>
      <label
        htmlFor="SearchQuery"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {' '}
        Search Query{' '}
      </label>

      <input
        type="text"
        id="SearchQuery"
        placeholder=""
        className={`mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm ${
          isError ? 'border-red-300' : 'border-gray-300'
        }`}
        value={query}
        onChange={handleChange}
      />
      {isError && (
        <p className="mt-2 text-sm text-red-600">Search query required</p>
      )}
    </div>
  )
}

export default SearchQuery
