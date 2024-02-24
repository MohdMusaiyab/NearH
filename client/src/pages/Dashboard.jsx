import React from 'react'
import { useParams } from 'react-router-dom'
const Dashboard = () => {
    const { id } = useParams();
    console.log(id);
  return (
    <div>
      This is the page
    </div>
  )
}

export default Dashboard
