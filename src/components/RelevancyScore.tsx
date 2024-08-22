import React, { ReactElement } from 'react'

function RelevancyScore({
  score,
  setScore
}: {
  score: number
  setScore: (score: number) => void
}): ReactElement {
  return (
    <div>
      <label
        htmlFor="RelevancyScore"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {' '}
        Relevancy Score{' '}
      </label>

      <input
        type="number"
        id="RelevancyScore"
        placeholder=""
        className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
        value={score}
        onChange={(e) => setScore(Number(e.target.value))}
      />
    </div>
  )
}

export default RelevancyScore
