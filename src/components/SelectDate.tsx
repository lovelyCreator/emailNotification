import React, { useState } from 'react'
import Datepicker from 'react-tailwindcss-datepicker'
import { DateValueType } from 'react-tailwindcss-datepicker'
const SelectDate: React.FC<{
  date: DateValueType
  setDate: (date: DateValueType) => void
  setIsWeekDay: (isWeekday: boolean) => void
}> = ({ date, setDate, setIsWeekDay }) => {
  // const [value, setValue] = useState<Date | null>(null)

  const handleDateChange = (newValue: DateValueType) => {
    setDate(newValue)
    setIsWeekDay(false)
    console.log('Selected Dates:', newValue)
  }

  return (
    <div className="px-0">
      <label
        htmlFor=""
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {' '}
        Notification Date{' '}
      </label>
      <Datepicker
        value={date}
        onChange={handleDateChange}
        displayFormat="DD/MM/YYYY"
        // className="border rounded-md px-0 py-2"
        asSingle
        useRange={false}
      />
    </div>
  )
}

export default SelectDate
