import React from 'react'
import {useParams} from 'react-router-dom'

function User() {
  const {userid} = useParams()  // this hooks is used for generating id 
  return (
    <div className='text-center bg-gray-600 text-white text-3xl p-4'>User: {userid}</div>
  )
}

export default User