import React from 'react'
import { useActionState } from 'react'

async function increment (previousState, formData) {
    console.log(formData.get("name"));
    return previousState +1;
}

const Count = () => {

  
    const [state, formAction] = useActionState(increment , 0);
  
  return (
    <form>
        <h1 className='test-3xl'>{state}</h1>
        <button className='bg-blue-300 p-4 ' formAction={formAction}>Increment</button>
        <br></br>

        <input type='text' className='border-5' placeholder='Enter your name' name="name"></input>
    </form>
  )
}

export default Count