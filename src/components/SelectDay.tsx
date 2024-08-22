import React, { ReactElement, useState } from 'react'
import { Link } from 'react-router-dom'
import { DayType } from '../type/type'

function SelectDay({
  days,
  setDays,
  setIsWeekday
}: {
  days: DayType[]
  setDays: (days: DayType[]) => void
  setIsWeekday: (isWeekday: boolean) => void
}): ReactElement {
  return (
    <div className="space-y-2">
      <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition">
          <span className="text-sm font-medium"> Weekly Notification Day </span>

          <span className="transition group-open:-rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </summary>

        <div className="border-t border-gray-200 bg-white">
          <ul className="space-y-1 border-t border-gray-200 p-4">
            {days.map((day) => (
              <li key={day.text} value={day.text}>
                <label
                  htmlFor={day.text}
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id={day.text}
                    className="size-5 rounded border-gray-300"
                    checked={day.value}
                    onChange={(e) => {
                      setDays(
                        days.map((item) =>
                          item.text === day.text
                            ? { ...item, value: !item.value }
                            : item
                        )
                      )
                      setIsWeekday(true)
                    }}
                  />

                  <span className="text-sm font-medium text-gray-700">
                    {' '}
                    {day.text}{' '}
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </details>
    </div>
  )
}

export default SelectDay
