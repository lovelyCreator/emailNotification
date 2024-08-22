import React, { ReactElement, useState } from 'react'

function SelectInterval({
  interval,
  setInterval
}: {
  interval: string
  setInterval: (interval: string) => void
}): ReactElement {
  return (
    <div>
      <label
        htmlFor="notificationInterval"
        className="block text-sm font-medium text-gray-900"
      >
        {' '}
        Notification Interval{' '}
      </label>

      <select
        name="notificationInterval"
        id="notificationInterval"
        className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
        value={interval}
        onChange={(e) => setInterval(e.target.value)}
      >
        <option value="">Please select</option>
        <option value="5">5 min</option>
        <option value="10">10 min</option>
        <option value="30">30 min</option>
        <option value="60">1 hour</option>
        <option value="120">2 hours</option>
        <option value="180">3 hours</option>
        <option value="240">4 hours</option>
        <option value="360">6 hours</option>
        <option value="480">8 hours</option>
        <option value="720">12 hours</option>
      </select>
    </div>
  )
}

export default SelectInterval
