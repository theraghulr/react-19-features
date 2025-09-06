import React from 'react'
import { use } from 'react'

const fetchData = fetch("https://jsonplaceholder.typicode.com/todos/1").then(res => res.json());

const FetchTodo = () => {
  const data = use(fetchData); 
  return <div>{data.title}</div>;
};

export default FetchTodo;