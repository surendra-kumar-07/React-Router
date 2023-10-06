import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {userid} = useParams();
  return (
    <div className='text-center bg-gray-600 text-white text-2xl p-2'>User: {userid}</div>
  )
}

export default User