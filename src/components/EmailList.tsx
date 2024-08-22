import React, { useState } from 'react'

const EmailList: React.FC<{
  email: string
  setEmail: (email: string) => void
}> = ({ email, setEmail }) => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setIsError(event.target.value === '')
    setEmail(event.target.value)
  }
  const [isError, setIsError] = useState<boolean>(false)

  return (
    <div className="w-full max-w-md">
      <label
        htmlFor="message"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Email List
      </label>
      <textarea
        id="message"
        rows={4}
        value={email}
        onChange={handleChange}
        className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
          isError ? 'border-red-300' : 'border-gray-300'
        }`}
        placeholder="Write email addresses here..."
      />
      {isError && (
        <p className="mt-2 text-sm text-red-600">Email addresses required</p>
      )}
    </div>
  )
}

export default EmailList
