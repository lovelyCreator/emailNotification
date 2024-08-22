import React, { ReactElement, useState } from 'react'
import logo from './logo.svg'
import viteLogo from './vite.svg'
import tailwindLogo from './tailwind.svg'
import { Link, Route, Routes } from 'react-router-dom'
import Setting from './pages/Setting'

function App(): ReactElement {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="*" element={<Setting />} />
    </Routes>
  )
}

export default App
