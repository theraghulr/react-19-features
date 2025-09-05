import React from 'react'
import { useState,useEffect } from 'react'

interface Todo{
    title:String;
}

const FetchTodo = () => {

    const [todo , setTodo] = useState<Todo | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(()=>{
        const fetchData= async ()=>{
            try{
                const res = await fetch("https://jsonplaceholder.typicode.com/todos/7")

                if(!res.ok){
                    throw new Error("Network response was not okay")
                }

                const data : Todo = await res.json();
                setTodo(data);
            }catch(error){
                console.error(error);
            }finally{
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if(loading) return <h1>Loading...</h1>

  return (
    <div>
        <h1>{todo?.title}</h1>
    </div>
  )
}

export default FetchTodo