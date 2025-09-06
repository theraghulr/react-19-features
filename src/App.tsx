import React, { Suspense } from 'react'
import FetchTodo from './components/FetchTodo'

const App = () => {
  return (
    <Suspense fallback={<div>Loading todo...</div>}>
      <FetchTodo />
    </Suspense>
  )
}

export default App
