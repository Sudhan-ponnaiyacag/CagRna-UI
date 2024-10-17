import React from 'react'
import Navbar from '../../components/navbar'

const Dashboard = () => {

  //API URL 
  const response = fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))


  return (

    <div>
      <Navbar /><div className='text-black'>Cumulative sums, or running totals, are used to display the
        total sum of data as it grows with time (or any other series or progression).
        This lets you view the total contribution so far of a given measure against time.
        An example of a cumulative sum is</div>

    </div>
  )
}

export default Dashboard