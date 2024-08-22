import React, { ReactElement } from 'react'

function SelectCount({
  count,
  setCount
}: {
  count: number
  setCount: (count: number) => void
}): ReactElement {
  return (
    <div>
      <label
        htmlFor="SelectCount"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {' '}
        Notification Count{' '}
      </label>

      <input
        type="number"
        id="SelectCount"
        placeholder=""
        min={1}
        className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
      />
    </div>
  )
}

export default SelectCount
