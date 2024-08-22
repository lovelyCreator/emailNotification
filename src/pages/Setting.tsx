import React, { ReactElement, useEffect, useState } from 'react'
import Button from '../components/Button'
import RelevancyScore from '../components/RelevancyScore'
import SearchQuery from '../components/SearchQuery'
import SelectDate from '../components/SelectDate'
import SelectDay from '../components/SelectDay'
import SelectTime from '../components/SelectTime'
import SelectInterval from '../components/SelectInterval'
import EmailList from '../components/EmailList'
import axios, { AxiosResponse } from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { DayType } from '../type/type'
import SelectCount from '../components/SelectCount'
import { DateValueType } from 'react-tailwindcss-datepicker'

function Setting(): ReactElement {
  const [time, setTime] = useState<string>('00:00')
  const [query, setQuery] = useState<string>('')
  const [interval, setInterval] = useState<string>('')
  const [score, setScore] = useState<number>(0)
  const [date, setDate] = useState<DateValueType>(null)
  const [email, setEmail] = useState<string>('')
  const [isweekday, setIsWeekday] = useState<boolean>(false)
  const [count, setCount] = useState<number>(1)
  const [responseMessage, setResponseMessage] = useState<string>('')
  const [isError, setIsError] = useState<boolean>(false)

  const initDays: DayType[] = [
    {
      text: 'Sunday',
      value: false
    },
    {
      text: 'Monday',
      value: false
    },
    {
      text: 'Tuesday',
      value: false
    },
    {
      text: 'Wednesday',
      value: false
    },
    {
      text: 'Thursday',
      value: false
    },
    {
      text: 'Friday',
      value: false
    },
    {
      text: 'Saturday',
      value: false
    }
    // Add more days as needed
  ]
  const [days, setDays] = useState<DayType[]>(initDays)

  useEffect(() => {
    if (email === '' || query === '') setIsError(true)
    else setIsError(false)
  }, [email, query])

  useEffect(() => {
    console.log(isweekday)
    if (isweekday) setDate(null)
    else setDays(initDays)
  }, [isweekday])

  const handleSubmit = async () => {
    if (isError) return
    let [h, m] = time.split(':')
    const hour = Number(h)
    const minute = Number(m)
    let localTime = new Date()
    localTime.setHours(hour)
    localTime.setMinutes(minute)
    console.log('date: ', date)
    localTime.setFullYear(
      date?.startDate?.getFullYear() || localTime.getFullYear()
    )
    localTime.setMonth(date?.startDate?.getMonth() || localTime.getMonth())
    localTime.setDate(date?.startDate?.getDate() || localTime.getDate())
    try {
      const response: AxiosResponse<any> = await axios.post(
        'https://email-notification-backend.onrender.com/api/emailSend',
        {
          interval,
          dateTime: localTime.toUTCString(),
          days,
          query,
          score,
          email,
          isweekday,
          count
        }
      )
      setResponseMessage(`Successfully Set!`)
      toast.success('Successfully Set!')
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        setResponseMessage(`Error: ${error.response.data.error}`)
      } else {
        setResponseMessage('An unknown error occurred')
      }
      toast.error(`Error: An unknown error occurred`)
    }
  }
  const handleUnset = async () => {
    try {
      const response = await axios.get(
        'https://email-notification-backend.onrender.com/api/unset'
      )
      console.log('Data:', response.data)
      toast.success('Successfully Unset!')
    } catch (error) {
      console.error('Error fetching data:', error)
      toast.error('An unknown error occurred')
    }
  }
  return (
    <div>
      <div className="flex flex-col justify-center items-stretch gap-3 pt-[100px] pb-[50px] box-content">
        <h1 className="font-sans text-3xl m-0">Manage Bid Notifications</h1>
        <p>
          Configure your email notification settings for relevant business bids.
        </p>
        <div className="flex flex-col justify-center items-stretch gap-4 mt-4">
          <SelectInterval interval={interval} setInterval={setInterval} />
          <SelectTime time={time} setTime={setTime} />
          <SelectDate
            date={date}
            setDate={setDate}
            setIsWeekDay={setIsWeekday}
          />
          <SelectDay
            days={days}
            setDays={setDays}
            setIsWeekday={setIsWeekday}
          />
          <SelectCount count={count} setCount={setCount} />
          <SearchQuery query={query} setQuery={setQuery} />
          <RelevancyScore score={score} setScore={setScore} />
          <EmailList email={email} setEmail={setEmail} />
          <div className="flex justify-center items-center gap-3">
            <Button text="Set" handleClick={handleSubmit} isError={isError} />
            <Button text="Unset" handleClick={handleUnset} />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Setting
