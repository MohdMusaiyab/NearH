import React from 'react'

const HospitalDetails = ({hospital}) => {
  return (
    <div>
      <h1>Details</h1>
      <h2>{hospital?.name}</h2>
    </div>
  )
}

export default HospitalDetails
