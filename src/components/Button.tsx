import React, { ReactElement } from 'react'

function Button({
  text,
  handleClick,
  isError = false
}: {
  text: string
  handleClick: () => void
  isError?: boolean
}): ReactElement {
  return (
    <a
      className={`inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 text-center ${
        isError ? 'bg-indigo-400' : 'bg-indigo-600'
      }`}
      onClick={handleClick}
    >
      {text}
    </a>
  )
}

export default Button
