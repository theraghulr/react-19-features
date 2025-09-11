import React, { Suspense } from 'react'
import FetchTodo from './components/FetchTodo'
import Count from './components/Count';

const App = () => {
  return (
    <div>
      <Count />
    </div>
    // <Suspense fallback={<div>Loading todo...</div>}>
    //   <FetchTodo />
    // </Suspense>
  )
}

export default App
